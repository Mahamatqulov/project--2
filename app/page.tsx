"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  Trophy,
  Users,
  Zap,
  Globe,
  Target,
  Star,
  TrendingUp,
  Recycle,
  Droplets,
  Wind,
  Sun,
  ChevronRight,
  Play,
  Award,
  BarChart3,
  Smartphone,
  Brain,
  Heart,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function EcoQuestLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [carbonSaved, setCarbonSaved] = useState(0)
  const [userLevel, setUserLevel] = useState(1)
  const [xp, setXp] = useState(0)

  const challenges = [
    { title: "Plastic-Free Week", icon: Recycle, progress: 75, points: 250 },
    { title: "Water Conservation", icon: Droplets, progress: 60, points: 180 },
    { title: "Green Commute", icon: Wind, progress: 90, points: 320 },
    { title: "Solar Sunday", icon: Sun, progress: 45, points: 150 },
  ]

  const achievements = [
    { title: "Eco Warrior", description: "Completed 10 challenges", icon: Trophy, unlocked: true },
    { title: "Carbon Crusher", description: "Saved 100kg CO2", icon: Target, unlocked: true },
    { title: "Community Leader", description: "Led 5 team challenges", icon: Users, unlocked: false },
    { title: "Green Innovator", description: "Created viral eco-tip", icon: Star, unlocked: false },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCarbonSaved((prev) => prev + Math.random() * 0.1)
      setCurrentChallenge((prev) => (prev + 1) % challenges.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [challenges.length])

  useEffect(() => {
    const xpInterval = setInterval(() => {
      setXp((prev) => {
        const newXp = prev + 1
        if (newXp >= 100) {
          setUserLevel((level) => level + 1)
          return 0
        }
        return newXp
      })
    }, 100)

    return () => clearInterval(xpInterval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-emerald-200 dark:border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                EcoQuest
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#challenges"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors"
              >
                Challenges
              </Link>
              <Link
                href="#community"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors"
              >
                Community
              </Link>
              <Link
                href="#impact"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors"
              >
                Impact
              </Link>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                Start Quest
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-emerald-200 dark:border-emerald-800">
            <div className="px-4 py-2 space-y-2">
              <Link href="#features" className="block py-2 text-gray-700 dark:text-gray-300">
                Features
              </Link>
              <Link href="#challenges" className="block py-2 text-gray-700 dark:text-gray-300">
                Challenges
              </Link>
              <Link href="#community" className="block py-2 text-gray-700 dark:text-gray-300">
                Community
              </Link>
              <Link href="#impact" className="block py-2 text-gray-700 dark:text-gray-300">
                Impact
              </Link>
              <Button className="w-full mt-2 bg-gradient-to-r from-emerald-500 to-teal-600">Start Quest</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                  🌱 Join 50K+ Eco Warriors
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Turn{" "}
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Sustainability
                  </span>{" "}
                  Into an Epic Quest
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transform your environmental impact through gamified challenges, AI-powered insights, and a thriving
                  community of changemakers. Every action counts, every point matters.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8 py-3"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Your Quest
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-3 bg-transparent"
                >
                  Watch Demo
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Live Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-emerald-200 dark:border-emerald-800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">{carbonSaved.toFixed(1)}kg</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">CO2 Saved Today</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">Level {userLevel}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Your Eco Level</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">{xp}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Next Level</div>
                </div>
              </div>
            </div>

            {/* Interactive Dashboard Preview */}
            <div className="relative">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Your EcoQuest Dashboard</h3>
                  <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    Live Preview
                  </Badge>
                </div>

                {/* Current Challenge */}
                <Card className="mb-4 border-emerald-200 dark:border-emerald-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base flex items-center">
                        {React.createElement(challenges[currentChallenge].icon, {
                          className: "w-5 h-5 mr-2 text-emerald-600",
                        })}
                        {challenges[currentChallenge].title}
                      </CardTitle>
                      <Badge variant="secondary">{challenges[currentChallenge].points} pts</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={challenges[currentChallenge].progress} className="mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {challenges[currentChallenge].progress}% complete
                    </p>
                  </CardContent>
                </Card>

                {/* Achievements Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {achievements.slice(0, 4).map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        achievement.unlocked
                          ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800"
                          : "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        {React.createElement(achievement.icon, {
                          className: `w-4 h-4 mr-2 ${achievement.unlocked ? "text-emerald-600" : "text-gray-400"}`,
                        })}
                        <span
                          className={`text-sm font-medium ${
                            achievement.unlocked ? "text-emerald-800 dark:text-emerald-200" : "text-gray-500"
                          }`}
                        >
                          {achievement.title}
                        </span>
                      </div>
                      <p
                        className={`text-xs ${
                          achievement.unlocked ? "text-emerald-600 dark:text-emerald-400" : "text-gray-400"
                        }`}
                      >
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 mb-4">
              🚀 Cutting-Edge Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why EcoQuest is{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience sustainability like never before with AI-powered personalization, real-time impact tracking,
              and gamified challenges that make saving the planet addictive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Personalization",
                description:
                  "Get custom challenges based on your lifestyle, location, and impact goals. Our AI learns your preferences to maximize engagement.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Globe,
                title: "Real-Time Impact Visualization",
                description:
                  "See your environmental impact in stunning 3D visualizations. Watch your carbon footprint shrink in real-time.",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: Users,
                title: "Community Challenges",
                description:
                  "Join teams, compete in leagues, and participate in global environmental challenges with millions of users.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Smartphone,
                title: "Progressive Web App",
                description:
                  "Install EcoQuest on any device. Works offline, sends push notifications, and feels like a native app.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description:
                  "Track your progress with detailed analytics, predictive insights, and personalized recommendations.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Heart,
                title: "Wellness Integration",
                description:
                  "Connect environmental action with personal wellness. Sustainable living for a healthier you and planet.",
                color: "from-pink-500 to-rose-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section
        id="challenges"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 mb-4">
              🎯 Gamified Challenges
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Level Up Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Environmental Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose from hundreds of challenges across different categories. Earn points, unlock achievements, and
              compete with friends.
            </p>
          </div>

          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
            </TabsList>

            <TabsContent value="daily" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Zero Waste Lunch",
                    description: "Pack a completely waste-free lunch today",
                    points: 50,
                    difficulty: "Easy",
                    icon: Recycle,
                    participants: 1247,
                    timeLeft: "6h 23m",
                  },
                  {
                    title: "5-Minute Shower",
                    description: "Keep your shower under 5 minutes",
                    points: 75,
                    difficulty: "Medium",
                    icon: Droplets,
                    participants: 892,
                    timeLeft: "18h 45m",
                  },
                  {
                    title: "Walk or Bike Commute",
                    description: "Use sustainable transport for your commute",
                    points: 100,
                    difficulty: "Medium",
                    icon: Wind,
                    participants: 2156,
                    timeLeft: "12h 15m",
                  },
                ].map((challenge, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 border-emerald-200 dark:border-emerald-800"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {React.createElement(challenge.icon, { className: "w-5 h-5 mr-2 text-emerald-600" })}
                          <Badge variant={challenge.difficulty === "Easy" ? "secondary" : "default"}>
                            {challenge.difficulty}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-emerald-600">{challenge.points}</div>
                          <div className="text-xs text-gray-500">points</div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      <CardDescription>{challenge.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span>{challenge.participants.toLocaleString()} participants</span>
                        <span>{challenge.timeLeft} left</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                        Accept Challenge
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="weekly" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Plastic-Free Week",
                    description: "Eliminate single-use plastics for 7 days",
                    points: 500,
                    difficulty: "Hard",
                    icon: Recycle,
                    participants: 15420,
                    progress: 65,
                  },
                  {
                    title: "Energy Saver Challenge",
                    description: "Reduce energy consumption by 20%",
                    points: 350,
                    difficulty: "Medium",
                    icon: Zap,
                    participants: 8934,
                    progress: 42,
                  },
                ].map((challenge, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {React.createElement(challenge.icon, { className: "w-5 h-5 mr-2 text-emerald-600" })}
                          <Badge variant={challenge.difficulty === "Hard" ? "destructive" : "default"}>
                            {challenge.difficulty}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-emerald-600">{challenge.points}</div>
                          <div className="text-xs text-gray-500">points</div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      <CardDescription>{challenge.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{challenge.progress}%</span>
                          </div>
                          <Progress value={challenge.progress} />
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>{challenge.participants.toLocaleString()} participants</span>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                          Join Challenge
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monthly">
              <div className="text-center py-12">
                <Globe className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
                <h3 className="text-2xl font-bold mb-2">Monthly Global Challenges</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Join millions of users in planet-wide sustainability challenges
                </p>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                  View Monthly Challenges
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="seasonal">
              <div className="text-center py-12">
                <Sun className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
                <h3 className="text-2xl font-bold mb-2">Seasonal Campaigns</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Special challenges that align with seasonal environmental themes
                </p>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                  Explore Seasonal Challenges
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 mb-4">
              🌍 Global Community
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Eco Revolution
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with like-minded individuals, share your achievements, and be part of a movement that's changing
              the world one action at a time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50K+</div>
                  <div className="text-gray-600 dark:text-gray-400">Active Users</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 rounded-xl">
                  <div className="text-3xl font-bold text-teal-600 mb-2">1M+</div>
                  <div className="text-gray-600 dark:text-gray-400">Challenges Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">500T</div>
                  <div className="text-gray-600 dark:text-gray-400">CO2 Saved (kg)</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600 dark:text-gray-400">Countries</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Community Features</h3>
                <div className="space-y-3">
                  {[
                    "Team challenges and competitions",
                    "Share achievements and tips",
                    "Local environmental groups",
                    "Expert-led workshops and webinars",
                    "Real-time leaderboards",
                    "Mentorship programs",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-emerald-200 dark:border-emerald-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-emerald-600" />
                    Top Eco Warriors This Week
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Sarah Chen", points: 2450, level: 15, avatar: "🌱" },
                      { name: "Marcus Johnson", points: 2380, level: 14, avatar: "🌿" },
                      { name: "Elena Rodriguez", points: 2290, level: 13, avatar: "🍃" },
                      { name: "David Kim", points: 2150, level: 12, avatar: "🌳" },
                    ].map((user, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mr-3">
                            <span className="text-lg">{user.avatar}</span>
                          </div>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Level {user.level}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-emerald-600">{user.points.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">points</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-200 dark:border-teal-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-teal-600" />
                    Recent Community Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { action: "completed Plastic-Free Week", user: "Alex M.", time: "2 min ago" },
                      { action: "shared a green tip", user: "Jamie L.", time: "5 min ago" },
                      { action: "joined Solar Sunday challenge", user: "Taylor R.", time: "8 min ago" },
                      { action: "reached Level 10", user: "Morgan K.", time: "12 min ago" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          <span className="font-medium">{activity.user}</span> {activity.action}
                        </span>
                        <span className="text-gray-500 ml-auto">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        id="impact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 mb-4">
              📊 Real Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Environmental Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Track your progress with detailed analytics, visualizations, and insights that show exactly how your
              actions are making a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="h-full border-emerald-200 dark:border-emerald-800">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-emerald-600" />
                    Your Environmental Impact Over Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
                      <p className="text-gray-600 dark:text-gray-400">
                        Interactive charts showing your carbon footprint reduction, water savings, waste reduction, and
                        more over time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-emerald-200 dark:border-emerald-800">
                <CardHeader>
                  <CardTitle className="text-lg">This Month's Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mr-3">
                        <Globe className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-sm">CO2 Reduced</span>
                    </div>
                    <span className="font-bold text-emerald-600">45.2 kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                        <Droplets className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm">Water Saved</span>
                    </div>
                    <span className="font-bold text-blue-600">1,250 L</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                        <Recycle className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm">Waste Diverted</span>
                    </div>
                    <span className="font-bold text-purple-600">12.8 kg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-3">
                        <Zap className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-sm">Energy Saved</span>
                    </div>
                    <span className="font-bold text-orange-600">89 kWh</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-200 dark:border-teal-800">
                <CardHeader>
                  <CardTitle className="text-lg">Achievements Unlocked</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Award, title: "Eco Warrior", color: "text-emerald-600" },
                      { icon: Target, title: "Carbon Crusher", color: "text-blue-600" },
                      { icon: Star, title: "Water Saver", color: "text-cyan-600" },
                      { icon: Trophy, title: "Green Leader", color: "text-teal-600" },
                    ].map((achievement, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        {React.createElement(achievement.icon, {
                          className: `w-6 h-6 mx-auto mb-2 ${achievement.color}`,
                        })}
                        <div className="text-xs font-medium">{achievement.title}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Eco Journey?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of eco warriors making a real difference. Start your sustainability quest today and help save
            our planet, one challenge at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3">
              <Play className="w-5 h-5 mr-2" />
              Start Your Quest Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3 bg-transparent"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <p className="text-emerald-100 text-sm mt-6">
            Free to start • No credit card required • Join 50,000+ eco warriors
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EcoQuest</span>
              </div>
              <p className="text-gray-400">Gamifying sustainability to create a better world for everyone.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer">Features</div>
                <div className="hover:text-white cursor-pointer">Challenges</div>
                <div className="hover:text-white cursor-pointer">Community</div>
                <div className="hover:text-white cursor-pointer">Analytics</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer">Blog</div>
                <div className="hover:text-white cursor-pointer">Help Center</div>
                <div className="hover:text-white cursor-pointer">API Docs</div>
                <div className="hover:text-white cursor-pointer">Sustainability Guide</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer">About</div>
                <div className="hover:text-white cursor-pointer">Careers</div>
                <div className="hover:text-white cursor-pointer">Press</div>
                <div className="hover:text-white cursor-pointer">Contact</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 EcoQuest. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <div className="hover:text-white cursor-pointer">Privacy Policy</div>
              <div className="hover:text-white cursor-pointer">Terms of Service</div>
              <div className="hover:text-white cursor-pointer">Cookie Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
