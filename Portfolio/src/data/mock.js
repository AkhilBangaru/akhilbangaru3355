// Mock data for Akhil Bangaru's Cybersecurity Portfolio

export const personalInfo = {
  name: "Akhil Bangaru",
  fullName: "BANGARU CHAITANYA VENKATA SAI AKHIL",
  title: "Cybersecurity Specialist",
  tagline:
    "Red Team | Offensive Security | Penetration Testing | PJPT Certified",
  avatar: "https://avatars.githubusercontent.com/u/199794877?v=4",
  bio: "Cybersecurity enthusiast exploring offensive security & red teaming. I love building security tools, honeypots, and automation systems. Always learning vulnerabilities, threat analysis, and exploit techniques.",
  location: "India",
  email: "akhilbangaru3355@gmail.com",
  currentFocus: "CPTS Certification",
  socials: {
    github: "https://github.com/AkhilBangaru",
    linkedin: "https://www.linkedin.com/in/akhil-bangaru-3a030935b/",
    instagram: "https://instagram.com/akhil_bangaru_2101",
    tryhackme: "https://tryhackme.com/p/akhilbangaru3355",
    email: "mailto:akhilbangaru3355@gmail.com",
  },
};

export const tryhackmeStats = {
  username: "akhilbangaru3355",
  rank: 132749,
  percentile: "top 6%",
  badges: 3,
  completedRooms: 51,
  streak: 0,
  url: "https://tryhackme.com/p/akhilbangaru3355",
};

export const heroTypingTexts = [
  "Cybersecurity Student with a passion for Red Teaming",
  "Exploring ethical hacking, automation, and system security",
  "Driven to master offensive security and real-world cyber threats",
];

export const projects = [
  {
    id: 1,
    name: "Nexus_Web_Honeypot",
    description:
      "A deceptive admin login honeypot for monitoring brute-force attacks and analyzing attacker behavior. Features detailed logging, Hydra attack simulation.",
    tech: ["HTML", "Flask", "Python", "Logging"],
    stars: 2,
    category: "Honeypot",
    url: "https://github.com/AkhilBangaru/Nexus_Web_Honeypot",
    icon: "Shield",
  },
  {
    id: 2,
    name: "Nexus_Web_HoneyPot_Docker",
    description:
      "A deceptive admin login honeypot built with Flask, featuring detailed brute-force attempt logging, Hydra support, and complete Docker environment.",
    tech: ["Docker", "Flask", "Python", "HTML"],
    stars: 2,
    category: "Containerized Security",
    url: "https://github.com/AkhilBangaru/Nexus_Web_HoneyPot_Docker_Version",
    icon: "Container",
  },
  {
    id: 3,
    name: "Custom_Linpeas",
    description:
      "A retro-styled, interactive TUI wrapper for Linux Privilege Escalation, inspired by LinPEAS. Selectively toggle system checks, estimate scan times.",
    tech: ["Shell", "Bash", "Linux", "TUI"],
    stars: 1,
    category: "Privilege Escalation",
    url: "https://github.com/AkhilBangaru/Custom_Linpeas",
    icon: "Terminal",
  },
  {
    id: 4,
    name: "AD_ENUM_TOOL_KIT",
    description:
      "An interactive, all-in-one Active Directory enumeration and attack framework. Unifies Responder, NTLM relay, IPv6 attacks, password spraying, and Impacket.",
    tech: ["Python", "Active Directory", "Impacket", "NTLM"],
    stars: 1,
    category: "Active Directory",
    url: "https://github.com/AkhilBangaru/AD_ENUM_TOOL_KIT",
    icon: "Network",
  },
  {
    id: 5,
    name: "Kali-Trace",
    description:
      "A terminal activity logging and analysis tool for cybersecurity practitioners. Captures command execution with timestamps and provides visual interface for auditing.",
    tech: ["HTML", "JavaScript", "Logging", "Analytics"],
    stars: 0,
    category: "Forensics",
    url: "https://github.com/AkhilBangaru/Kali-Trace",
    icon: "FileSearch",
  },
  {
    id: 6,
    name: "Audio_Steganography",
    description:
      "A secure WAV-only audio steganography tool that hides encrypted text or files inside audio using LSB techniques. Built with Flask and modern cryptography.",
    tech: ["Python", "Flask", "Cryptography", "Steganography"],
    stars: 1,
    category: "Cryptography",
    url: "https://github.com/AkhilBangaru/Audio_Steganography",
    icon: "Lock",
  },
];

export const skills = {
  securityExpertise: [
    { name: "Penetration Testing", icon: "Crosshair" },
    { name: "Red Teaming", icon: "Target" },
    { name: "Vulnerability Analysis", icon: "Bug" },
    { name: "Threat Hunting", icon: "Search" },
    { name: "Network Security", icon: "Network" },
    { name: "Active Directory", icon: "Server" },
    { name: "Honeypots", icon: "Shield" },
    { name: "Forensics", icon: "FileSearch" },
  ],
  languages: [
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Bash",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    },
    {
      name: "PowerShell",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
    },
  ],
  tools: [
    {
      name: "Vim",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "VSCode",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "PyCharm",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
    },
    {
      name: "CLion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clion/clion-original.svg",
    },
  ],
  platforms: [
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    { name: "Kali", icon: "https://www.kali.org/images/kali-dragon-icon.svg" },
    {
      name: "Ubuntu",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg",
    },
    {
      name: "Debian",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg",
    },
    {
      name: "Arch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg",
    },
    {
      name: "RedHat",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg",
    },
    {
      name: "Windows",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
};

export const certifications = [
  {
    name: "PJPT",
    fullName: "Practical Junior Penetration Tester",
    status: "Completed",
    provider: "TCM Security",
    icon: "Award",
  },
  {
    name: "CPTS",
    fullName: "Certified Penetration Testing Specialist",
    status: "In Progress",
    provider: "Hack The Box",
    icon: "Target",
  },
  {
    name: "OSCP",
    fullName: "Offensive Security Certified Professional",
    status: "Planned",
    provider: "OffSec",
    icon: "Shield",
  },
];

export const stats = [
  { label: "Projects Built", value: "6+" },
  { label: "GitHub Stars", value: "7+" },
  { label: "Technologies", value: "20+" },
  { label: "Repositories", value: "22" },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
