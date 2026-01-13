import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Github, Linkedin, Palette, Mail, Phone, MapPin, Download, MessageCircle, GraduationCap, Code, Gamepad2, Music, Dumbbell, ChefHat, Pencil, User } from 'lucide-react';

// Earth Component
function Earth({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      const targetX = (mousePosition.y * 0.3);
      const targetZ = (mousePosition.x * 0.3);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.05);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, -targetZ, 0.05);
    }
  });

  return (
    <group>
      {/* Earth */}
      <Sphere ref={meshRef} args={[2, 64, 64]} position={[2, 0, 0]}>
        <meshStandardMaterial
          color="#1a5f7a"
          emissive="#0d3b4d"
          emissiveIntensity={0.2}
          roughness={0.8}
          metalness={0.2}
        />
      </Sphere>
      {/* Glow effect */}
      <Sphere args={[2.1, 32, 32]} position={[2, 0, 0]}>
        <meshBasicMaterial color="#4fd1c5" transparent opacity={0.1} side={THREE.BackSide} />
      </Sphere>
      {/* Atmosphere */}
      <Sphere args={[2.3, 32, 32]} position={[2, 0, 0]}>
        <meshBasicMaterial color="#38b2ac" transparent opacity={0.05} side={THREE.BackSide} />
      </Sphere>
      {/* Continents simulation with smaller spheres */}
      {[...Array(30)].map((_, i) => {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = 2 + 2 * Math.sin(phi) * Math.cos(theta);
        const y = 2 * Math.sin(phi) * Math.sin(theta);
        const z = 2 * Math.cos(phi);
        return (
          <Sphere key={i} args={[0.05 + Math.random() * 0.1, 8, 8]} position={[x, y, z]}>
            <meshStandardMaterial color="#2d8f7a" emissive="#1a5f4a" emissiveIntensity={0.3} />
          </Sphere>
        );
      })}
    </group>
  );
}

// Scene Component
function Scene({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[-10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[10, -10, -10]} intensity={0.5} color="#4fd1c5" />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <Earth mousePosition={mousePosition} />
    </>
  );
}

// Floating particles
function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-teal-soft/30 rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

// Glass Card Component
function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
}

// Section wrapper with scroll animation
function Section({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen py-20 px-4 md:px-8 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}
    >
      {children}
    </section>
  );
}

// Project Card
function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <GlassCard className="group hover:bg-white/10 hover:border-teal-soft/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="h-40 bg-gradient-to-br from-space-navy to-teal-dark/30 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <Code className="w-12 h-12 text-teal-soft/50 group-hover:text-teal-soft transition-colors group-hover:scale-110 duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-teal-soft/10 text-teal-soft rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

// Skills data
const skills = [
  { name: 'Programming', icon: Code },
  { name: 'Problem Solving', icon: Gamepad2 },
  { name: 'Goal-oriented', icon: GraduationCap },
];

const interests = [
  { name: 'Gaming', icon: Gamepad2 },
  { name: 'K-Pop & Music', icon: Music },
  { name: 'Sports', icon: Dumbbell },
  { name: 'Baking', icon: ChefHat },
  { name: 'Drawing', icon: Pencil },
];

const projects = [
  { title: 'E-Commerce Platform', description: 'Full-stack web application with React and Node.js', tags: ['React', 'Node.js', 'MongoDB'] },
  { title: 'Mobile Game App', description: 'Casual puzzle game built with Unity', tags: ['Unity', 'C#', 'Mobile'] },
  { title: 'AI Chatbot', description: 'Conversational AI using machine learning', tags: ['Python', 'TensorFlow', 'NLP'] },
  { title: 'Portfolio Website', description: 'Personal portfolio with 3D animations', tags: ['React', 'Three.js', 'TailwindCSS'] },
];

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-space-dark text-white overflow-x-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene mousePosition={mousePosition} />
          </Suspense>
        </Canvas>
      </div>

      <Particles />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-space-dark/50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-teal-soft">PM</span>
          <div className="hidden md:flex gap-6">
            {['About', 'Resume', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-gray-400 hover:text-teal-soft transition-colors text-sm"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-soft transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-soft transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-soft transition-colors">
              <Palette className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-teal-soft text-sm tracking-widest mb-4 animate-fade-in-up">HELLO, I'M</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Pornpanwalee<br />
              <span className="text-teal-soft">Mayour</span>
            </h1>
            <p className="text-xl text-gray-400 mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Computer Science Student / Developer
            </p>
            <p className="text-gray-500 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Crafting digital experiences with passion and precision.
              Currently pursuing Computer Science at Rajamangala University of Technology Thanyaburi.
            </p>
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button className="px-6 py-3 bg-teal-soft text-space-dark font-semibold rounded-full hover:bg-teal-muted transition-all hover:scale-105">
                <Download className="w-4 h-4 inline mr-2" />
                Download CV
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 border border-teal-soft text-teal-soft rounded-full hover:bg-teal-soft/10 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 inline mr-2" />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-teal-soft">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <GlassCard className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-soft to-teal-dark flex items-center justify-center">
                <User className="w-16 h-16 text-space-dark" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Pornpanwalee Mayour</h3>
              <p className="text-teal-soft mb-4">Computer Science Student</p>
              <div className="flex justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Thailand</span>
              </div>
            </GlassCard>
            <div className="space-y-6">
              <GlassCard>
                <h4 className="text-lg font-semibold mb-4 text-teal-soft">Core Traits</h4>
                <div className="flex flex-wrap gap-2">
                  {['Goal-oriented', 'Optimistic', 'Honest', 'Risk-taker', 'Challenge-seeker', 'Responsible', 'Action-oriented', 'Results-focused'].map((trait) => (
                    <span key={trait} className="px-3 py-1 bg-teal-soft/10 text-teal-soft text-sm rounded-full">
                      {trait}
                    </span>
                  ))}
                </div>
              </GlassCard>
              <GlassCard>
                <h4 className="text-lg font-semibold mb-4 text-teal-soft">Interests</h4>
                <div className="flex flex-wrap gap-4">
                  {interests.map(({ name, icon: Icon }) => (
                    <div key={name} className="flex items-center gap-2 text-gray-400">
                      <Icon className="w-4 h-4 text-teal-soft" />
                      <span className="text-sm">{name}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </Section>

      {/* Resume Section */}
      <Section id="resume" className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-teal-soft">Resume</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-teal-soft" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="border-l-2 border-teal-soft/30 pl-6 space-y-6">
                <div>
                  <span className="text-teal-soft text-sm">2023 - 2027 (Expected)</span>
                  <h4 className="text-lg font-semibold mt-1">Bachelor's Degree in Computer Science</h4>
                  <p className="text-gray-400">Rajamangala University of Technology Thanyaburi</p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-teal-soft" />
                <h3 className="text-xl font-semibold">Skills</h3>
              </div>
              <div className="space-y-4">
                {skills.map(({ name, icon: Icon }) => (
                  <div key={name} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-teal-soft" />
                    <span>{name}</span>
                    <div className="flex-1 h-2 bg-space-navy rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-soft to-teal-muted rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-teal-soft">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, mobile apps, and more.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="text-teal-soft">Touch</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <GlassCard className="text-center hover:border-teal-soft/30 transition-all">
              <Mail className="w-8 h-8 text-teal-soft mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <a href="mailto:pornphunwaree@gmail.com" className="text-gray-400 text-sm hover:text-teal-soft transition-colors">
                pornphunwaree@gmail.com
              </a>
            </GlassCard>
            <GlassCard className="text-center hover:border-teal-soft/30 transition-all">
              <Phone className="w-8 h-8 text-teal-soft mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <a href="tel:0637588539" className="text-gray-400 text-sm hover:text-teal-soft transition-colors">
                063-758-8539
              </a>
            </GlassCard>
            <GlassCard className="text-center hover:border-teal-soft/30 transition-all">
              <MapPin className="w-8 h-8 text-teal-soft mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-gray-400 text-sm">Khlong Luang, Pathum Thani, Thailand</p>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com" className="text-gray-400 hover:text-teal-soft transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-teal-soft transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://behance.net" className="text-gray-400 hover:text-teal-soft transition-colors"><Palette className="w-5 h-5" /></a>
          </div>
          <p className="text-gray-500 text-sm">2026 Pornpanwalee Mayour. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
