"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Code, Database, Globe, Server, GitBranch, Cpu, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const skills = [
    { name: "JavaScript", icon: Code, color: "text-yellow-400" },
    { name: "React / Next.js", icon: Globe, color: "text-blue-400" },
    { name: "HTML / CSS / Tailwind", icon: Code, color: "text-orange-400" },
    { name: "Java / Spring Boot", icon: Server, color: "text-red-400" },
    { name: "MySQL", icon: Database, color: "text-blue-300" },
    { name: "Git / GitHub", icon: GitBranch, color: "text-purple-400" },
  ]

  const projects = [
    {
      name: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com painel administrativo",
      technologies: ["React", "Next.js", "Tailwind", "MySQL"],
      github: "#",
    },
    {
      name: "Task Manager App",
      description: "Aplicativo de gerenciamento de tarefas com sistema de notificações",
      technologies: ["Java", "Spring Boot", "React", "MySQL"],
      github: "#",
    },
    {
      name: "Portfolio Website",
      description: "Site portfólio responsivo com design moderno e animações",
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      github: "#",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aqui você implementaria o envio do formulário
    alert("Mensagem enviada com sucesso!")
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Paulo André
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("inicio")} className="hover:text-green-400 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection("sobre")} className="hover:text-green-400 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection("habilidades")} className="hover:text-green-400 transition-colors">
                Habilidades
              </button>
              <button onClick={() => scrollToSection("projetos")} className="hover:text-green-400 transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollToSection("contato")} className="hover:text-green-400 transition-colors">
                Contato
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block hover:text-green-400 transition-colors"
              >
                Início
              </button>
              <button onClick={() => scrollToSection("sobre")} className="block hover:text-green-400 transition-colors">
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="block hover:text-green-400 transition-colors"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="block hover:text-green-400 transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block hover:text-green-400 transition-colors"
              >
                Contato
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Cpu className="w-16 h-16 mx-auto mb-6 text-green-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
            Paulo André
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            Desenvolvedor com DNA gamer, focado em criar soluções criativas e funcionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Button
              onClick={() => scrollToSection("projetos")}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3"
            >
              Ver Projetos
            </Button>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-3"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Sou apaixonado por tecnologia e sempre em busca de novos desafios. Como desenvolvedor, acredito que cada
                linha de código é uma oportunidade de criar algo incrível e funcional.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Ao longo da minha jornada, já realizei diversos freelas e projetos próprios, sempre focando na qualidade
                e na evolução constante. Estou sempre aprendendo novas ferramentas e tecnologias para me manter
                atualizado no mercado.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Meu objetivo é construir uma carreira sólida, entregando soluções que fazem a diferença e contribuindo
                para projetos que impactem positivamente a vida das pessoas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color}`} />
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className="bg-gray-800 border-gray-700 hover:border-green-400 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-t-lg flex items-center justify-center">
                  <Code className="w-16 h-16 text-green-400" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.name}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-700 text-green-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Ver no GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Contato
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Vamos conversar!</h3>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-600 hover:border-green-400 hover:bg-green-400/10 bg-transparent"
                  onClick={() => window.open("https://github.com", "_blank")}
                >
                  <Github className="w-5 h-5 mr-3" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 bg-transparent"
                  onClick={() => window.open("https://linkedin.com", "_blank")}
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-600 hover:border-purple-400 hover:bg-purple-400/10 bg-transparent"
                  onClick={() => window.open("mailto:paulo@email.com", "_blank")}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  paulo@email.com
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>Preencha o formulário abaixo e entrarei em contato em breve.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Sua mensagem"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 Paulo André. Desenvolvido com ❤️ e muito ☕</p>
        </div>
      </footer>
    </div>
  )
}
