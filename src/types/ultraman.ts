export interface UltramanStats {
  strength: number;
  speed: number;
  energy: number;
  defense: number;
  technique: number;
}

export interface UltramanForm {
  name: string;
  motif: string;
  transformation_item: string;
  color_accent: string;
  icon?: string;
  description?: string;
  stats?: UltramanStats;
}

export interface Ultraman {
  id: number;
  name: string;
  era: 'Showa' | 'Heisei' | 'New Generation' | 'Reiwa' | 'Dark';
  year: string;
  motif: string;
  transformation_item: string;
  color_accent: string;
  icon: string;
  isSecondary?: boolean;
  isTertiary?: boolean;
  description: string;
  forms?: UltramanForm[];
  stats?: UltramanStats;
}

export type EraFilter = 'All' | 'Showa' | 'Heisei' | 'New Generation' | 'Reiwa' | 'Secondary' | 'Tertiary' | 'Dark';

export const ULTRAMAN_DATA: Ultraman[] = [
  // 1966
  {
    id: 1,
    name: "Ultraman",
    era: "Showa",
    year: "1966",
    motif: "Silver Giant",
    transformation_item: "Beta Capsule",
    color_accent: "#EF4444",
    icon: "Star",
    description: "The pioneer from Nebula M78 who first came to Earth. Known for his iconic Specium Ray and fighting alongside the SSSP."
  ,
    stats: {
      strength: 71,
      speed: 84,
      energy: 64,
      defense: 55,
      technique: 84
    }},
  // 1967
  {
    id: 2,
    name: "Zoffy",
    era: "Showa",
    year: "1967",
    motif: "Captain / Leader",
    transformation_item: "N/A",
    color_accent: "#DC2626",
    icon: "Award",
    description: "The captain of the Space Garrison's Inter-Galactic Defense Force. A noble and powerful leader who oversees the Ultra Brothers."
  ,
    stats: {
      strength: 83,
      speed: 71,
      energy: 75,
      defense: 58,
      technique: 60
    }},
  {
    id: 3,
    name: "Ultraseven",
    era: "Showa",
    year: "1967",
    motif: "Red Warrior",
    transformation_item: "Ultra Eye",
    color_accent: "#DC2626",
    icon: "Eye",
    description: "Originally a cartographer, he stayed on Earth out of love for humanity. Uses the deadly Eye Slugger and immense psychic powers."
  ,
    stats: {
      strength: 63,
      speed: 62,
      energy: 63,
      defense: 73,
      technique: 55
    }},
  // 1971
  {
    id: 4,
    name: "Ultraman Jack",
    era: "Showa",
    year: "1971",
    motif: "Returning Giant",
    transformation_item: "Willpower / Ultra Bracelet",
    color_accent: "#EAB308",
    icon: "Shield",
    description: "The Returning Ultraman who bonded with Hideki Goh. Fights courageously using the versatile Ultra Bracelet."
  ,
    stats: {
      strength: 61,
      speed: 58,
      energy: 64,
      defense: 71,
      technique: 81
    }},
  // 1972
  {
    id: 5,
    name: "Ultraman Ace",
    era: "Showa",
    year: "1972",
    motif: "Androgynous / Choju Hunter",
    transformation_item: "Ultra Rings",
    color_accent: "#F97316",
    icon: "Sword",
    description: "The ultimate weapon against Terrible-Monsters (Choju). Known throughout the galaxy as the 'Master of Beam Attacks'."
  ,
    stats: {
      strength: 71,
      speed: 61,
      energy: 75,
      defense: 57,
      technique: 73
    }},
  {
    id: 6,
    name: "Ultra Father",
    era: "Showa",
    year: "1972",
    motif: "Commander / Father",
    transformation_item: "N/A",
    color_accent: "#B91C1C",
    icon: "Shield",
    description: "The Supreme Commander of the Space Garrison and father of Ultraman Taro. A powerful leader whose strength rivals even the mightiest Ultra warriors."
  ,
    stats: {
      strength: 65,
      speed: 70,
      energy: 83,
      defense: 76,
      technique: 75
    }},
  // 1973
  {
    id: 7,
    name: "Ultraman Taro",
    era: "Showa",
    year: "1973",
    motif: "Prince of Light",
    transformation_item: "Ultra Badge",
    color_accent: "#EF4444",
    icon: "Sun",
    description: "The heroic son of Father and Mother of Ultra. Boasts unmatched vitality, physical strength, and fiery combat techniques."
  ,
    stats: {
      strength: 73,
      speed: 65,
      energy: 72,
      defense: 76,
      technique: 77
    }},
  {
    id: 8,
    name: "Ultra Mother",
    era: "Showa",
    year: "1973",
    motif: "Healer / Mother",
    transformation_item: "N/A",
    color_accent: "#EC4899",
    icon: "Heart",
    description: "The benevolent leader of the Silver Cross Aid and mother of Ultraman Taro. Known for her immense healing abilities and compassionate heart."
  ,
    stats: {
      strength: 61,
      speed: 62,
      energy: 55,
      defense: 84,
      technique: 65
    }},
  // 1974
  {
    id: 9,
    name: "Ultraman Leo",
    era: "Showa",
    year: "1974",
    motif: "Martial Artist / Lion",
    transformation_item: "Leo Ring",
    color_accent: "#B91C1C",
    icon: "Flame",
    description: "A martial arts master from the ruined Planet L77. Overcame immense tragedy under Seven's harsh training to become a legendary hero."
  ,
    stats: {
      strength: 69,
      speed: 83,
      energy: 79,
      defense: 84,
      technique: 81
    }},
  {
    id: 10,
    name: "Astra",
    era: "Showa",
    year: "1974",
    motif: "Tiger / Captive Prince",
    transformation_item: "Willpower",
    color_accent: "#DC2626",
    icon: "Link",
    isSecondary: true,
    description: "Leo's resilient younger brother. Freed from long captivity by Ultraman King, he fights fiercely alongside his brother."
  ,
    stats: {
      strength: 76,
      speed: 64,
      energy: 83,
      defense: 74,
      technique: 70
    }},
  {
    id: 11,
    name: "Ultraman King",
    era: "Showa",
    year: "1974",
    motif: "God / Royal",
    transformation_item: "N/A",
    color_accent: "#FACC15",
    icon: "Crown",
    description: "The legendary, god-like elder of the Ultra race. An omnipotent figure who only intervenes during universe-threatening crises."
  ,
    stats: {
      strength: 81,
      speed: 72,
      energy: 56,
      defense: 65,
      technique: 59
    }},
  // 1979
  {
    id: 12,
    name: "Ultraman Jonias",
    era: "Showa",
    year: "1979",
    motif: "Animated Hero / U40",
    transformation_item: "Beam Flasher",
    color_accent: "#22C55E",
    icon: "Zap",
    description: "The greatest warrior from Planet U40. Famous for his star-shaped chest emblem and incredible physical prowess."
  ,
    stats: {
      strength: 70,
      speed: 58,
      energy: 65,
      defense: 68,
      technique: 83
    }},
  // 1980
  {
    id: 13,
    name: "Ultraman 80",
    era: "Showa",
    year: "1980",
    motif: "Teacher",
    transformation_item: "Bright Stick",
    color_accent: "#EAB308",
    icon: "BookOpen",
    description: "A dedicated teacher on Earth and a fierce warrior. He fought to stop monsters born from human negative energy (Minus Energy)."
  ,
    stats: {
      strength: 59,
      speed: 61,
      energy: 84,
      defense: 78,
      technique: 62
    }},
  {
    id: 14,
    name: "Yullian",
    era: "Showa",
    year: "1980",
    motif: "Princess of Light",
    transformation_item: "Yullian Bracelet",
    color_accent: "#F43F5E",
    icon: "Heart",
    description: "The noble Princess of the Land of Light. A brave warrior who traveled to Earth to assist her childhood friend, Ultraman 80."
  ,
    stats: {
      strength: 55,
      speed: 80,
      energy: 67,
      defense: 69,
      technique: 71
    }},
  // 1990
  {
    id: 15,
    name: "Ultraman Great",
    era: "Heisei",
    year: "1990",
    motif: "Nature / Australia",
    transformation_item: "Delta Plasma",
    color_accent: "#94A3B8",
    icon: "Mountain",
    description: "An Ultra who bonded with Jack Shindo in Australia. He fought the malefic Gudis virus and the mutant monsters it created."
  ,
    stats: {
      strength: 71,
      speed: 72,
      energy: 75,
      defense: 61,
      technique: 81
    }},
  // 1993
  {
    id: 16,
    name: "Ultraman Powered",
    era: "Heisei",
    year: "1993",
    motif: "Blue Eyes / USA",
    transformation_item: "Flash Prism",
    color_accent: "#60A5FA",
    icon: "BatteryCharging",
    description: "The fierce blue-eyed giant sent to defend America from the terrifying Baltan alien menace alongside the WINR team."
  ,
    stats: {
      strength: 63,
      speed: 63,
      energy: 78,
      defense: 71,
      technique: 64
    }},
  // 1995
  {
    id: 17,
    name: "Ultraman Neos",
    era: "Heisei",
    year: "1995",
    motif: "Space Sheriff",
    transformation_item: "Estraller",
    color_accent: "#EF4444",
    icon: "Rocket",
    description: "An elite warrior of the Space Garrison. Fought against the Dark Matter phenomena to save Earth alongside Ultraseven 21."
  ,
    stats: {
      strength: 73,
      speed: 60,
      energy: 55,
      defense: 80,
      technique: 56
    }},
  // 1996
  {
    id: 18,
    name: "Ultraman Zearth",
    era: "Heisei",
    year: "1996",
    motif: "Hygiene / Red Face",
    transformation_item: "Pikari Brusher",
    color_accent: "#F87171",
    icon: "Droplets",
    description: "An unorthodox, hygiene-obsessed hero from Nebula Z95. Uses a toothbrush to transform and clean up evil across the universe."
  ,
    stats: {
      strength: 56,
      speed: 59,
      energy: 63,
      defense: 67,
      technique: 81
    }},
  {
    id: 19,
    name: "Ultraman Tiga",
    era: "Heisei",
    year: "1996",
    motif: "Ancient Giant / Type Change",
    transformation_item: "Sparklence",
    color_accent: "#8B5CF6",
    icon: "Triangle",
    description: "A legendary giant of light from human antiquity. The first to change forms mid-battle to adapt his speed, strength, and abilities.",
    stats: {
      strength: 75,
      speed: 75,
      energy: 80,
      defense: 70,
      technique: 85
    },
    forms: [
      {
        name: "Ultraman Tiga Multi Type",
        motif: "Balance",
        transformation_item: "Sparklence",
        color_accent: "#8B5CF6",
        icon: "Triangle",
        description: "Tiga's default form, balancing strength, speed, and energy attacks. It uses the Zeperion Ray as its finishing move.",
        stats: {
          strength: 75,
          speed: 75,
          energy: 80,
          defense: 70,
          technique: 85
        }
      },
      {
        name: "Ultraman Tiga Sky Type",
        motif: "Speed / Aerial",
        transformation_item: "Sparklence",
        color_accent: "#3B82F6",
        icon: "Wind",
        description: "A form specialized for high-speed aerial combat and rapid attacks, sacrificing some physical strength for immense agility.",
        stats: {
          strength: 55,
          speed: 95,
          energy: 75,
          defense: 50,
          technique: 90
        }
      },
      {
        name: "Ultraman Tiga Power Type",
        motif: "Strength / Melee",
        transformation_item: "Sparklence",
        color_accent: "#EF4444",
        icon: "Flame",
        description: "A heavily muscled red form maximizing physical attack power and defense. Uses the Deracium Light Stream.",
        stats: {
          strength: 95,
          speed: 50,
          energy: 85,
          defense: 90,
          technique: 65
        }
      }
    ]
  },
  // 1997
  {
    id: 20,
    name: "Ultraman Dyna",
    era: "Heisei",
    year: "1997",
    motif: "Space / Future",
    transformation_item: "Lieflasher",
    color_accent: "#3B82F6",
    icon: "Globe",
    description: "The dynamic protector of the Neo Frontier era. Known for his hot-blooded fighting style and endless journey across the universe."
  ,
    stats: {
      strength: 74,
      speed: 69,
      energy: 71,
      defense: 58,
      technique: 72
    }},
  {
    id: 21,
    name: "Evil Tiga",
    era: "Dark",
    year: "1997",
    motif: "Corrupted Giant",
    transformation_item: "Dark Sparklence",
    color_accent: "#374151",
    icon: "Triangle",
    description: "An ancient giant of light corrupted by the wrong heart of Keigo Masaki. Possesses immense power but lacks true heroic spirit."
  ,
    stats: {
      strength: 58,
      speed: 59,
      energy: 55,
      defense: 63,
      technique: 80
    }},
  // 1998
  {
    id: 22,
    name: "Ultraman Gaia",
    era: "Heisei",
    year: "1998",
    motif: "Earth / Ground",
    transformation_item: "Esplender",
    color_accent: "#DC2626",
    icon: "Earth",
    description: "The manifestation of the Earth's will. A powerful red giant who protects the planet from radical destructive space entities."
  ,
    stats: {
      strength: 67,
      speed: 74,
      energy: 80,
      defense: 60,
      technique: 63
    }},
  {
    id: 23,
    name: "Ultraman Agul",
    era: "Heisei",
    year: "1998",
    motif: "Ocean / Sea",
    transformation_item: "Agulater",
    color_accent: "#2563EB",
    icon: "Waves",
    isSecondary: true,
    description: "The physical form of the Earth's oceans. Initially clashed with Gaia due to their radically different ideals before uniting."
  ,
    stats: {
      strength: 84,
      speed: 58,
      energy: 59,
      defense: 56,
      technique: 68
    }},
  // 1999
  {
    id: 24,
    name: "Ultraseven 21",
    era: "Heisei",
    year: "1999",
    motif: "Guardian / Seven's Successor",
    transformation_item: "N/A",
    color_accent: "#3B82F6",
    icon: "Shield",
    description: "A warrior from the Land of Light who fought alongside Ultraman Neos. Carries on the legacy of Ultraseven with unwavering loyalty."
  ,
    stats: {
      strength: 55,
      speed: 60,
      energy: 77,
      defense: 78,
      technique: 67
    }},
  {
    name: "Ultraman Nice",
    era: "Heisei",
    year: "1999",
    motif: "Dream / Chocolate",
    transformation_item: "Nice Dreamer",
    color_accent: "#EF4444",
    icon: "Star",
    description: "A humorous and courageous warrior from Planet TOY-1. Transforms by eating secret chocolate.",
    id: 25
  ,
    stats: {
      strength: 88,
      speed: 72,
      energy: 68,
      defense: 86,
      technique: 62
    }},
  // 2001
  {
    id: 26,
    name: "Ultraman Cosmos",
    era: "Heisei",
    year: "2001",
    motif: "Peace / Moon & Sun",
    transformation_item: "Cosmo Pluck",
    color_accent: "#60A5FA",
    icon: "Moon",
    description: "A gentle giant who believes in pacifying monsters rather than killing them, seeking universal harmony above all."
  ,
    stats: {
      strength: 77,
      speed: 61,
      energy: 80,
      defense: 75,
      technique: 81
    }},
  // 2002
  {
    id: 27,
    name: "Ultraman Legend",
    era: "Heisei",
    year: "2002",
    motif: "Will of the Universe",
    transformation_item: "Legend Spark",
    color_accent: "#A855F7",
    icon: "Sparkles",
    description: "The legendary warrior formed by the fusion of Cosmos and Justice. Believed to be the physical embodiment of the universe's will."
  ,
    stats: {
      strength: 72,
      speed: 83,
      energy: 74,
      defense: 82,
      technique: 62
    }},
  {
    id: 28,
    name: "Ultraman Justice",
    era: "Heisei",
    year: "2002",
    motif: "Universal Justice",
    transformation_item: "Justicer",
    color_accent: "#B91C1C",
    icon: "Scale",
    isSecondary: true,
    description: "A strict enforcer of universal law. Initially judged humanity as a threat before witnessing their true potential and allying with Cosmos."
  ,
    stats: {
      strength: 66,
      speed: 60,
      energy: 76,
      defense: 76,
      technique: 62
    }},
  // 2004
  {
    id: 29,
    name: "Ultraman Nexus",
    era: "Heisei",
    year: "2004",
    motif: "Bonds / Evolution",
    transformation_item: "Evoltruster",
    color_accent: "#94A3B8",
    icon: "Network",
    description: "The inherited light of bonds. Fights the horrific Space Beasts in secrecy, passing his power to chosen hosts dubbed 'Dunamists'."
  ,
    stats: {
      strength: 84,
      speed: 65,
      energy: 78,
      defense: 72,
      technique: 57
    }},
  {
    id: 30,
    name: "Ultraman Noa",
    era: "Heisei",
    year: "2004",
    motif: "Legend / The First Ultraman",
    transformation_item: "Noa Spark",
    color_accent: "#FACC15",
    icon: "Gem",
    description: "The legendary god of the Ultra universe from ancient times. possesses unimaginable divine power and the ability to cross dimensions."
  ,
    stats: {
      strength: 71,
      speed: 65,
      energy: 71,
      defense: 81,
      technique: 55
    }},
  {
    name: "Ultraman The Next",
    era: "Heisei",
    year: "2004",
    motif: "First Dunamist",
    transformation_item: "N/A",
    color_accent: "#94A3B8",
    icon: "Network",
    description: "The earliest known form of Ultraman Nexus on Earth. Fought the destructive space beast The One.",
    id: 31
  ,
    stats: {
      strength: 86,
      speed: 72,
      energy: 81,
      defense: 84,
      technique: 86
    }},
  {
    id: 32,
    name: "Dark Zagi",
    era: "Dark",
    year: "2004",
    motif: "Clone of Noa / Destruction",
    transformation_item: "N/A",
    color_accent: "#991B1B",
    icon: "Network",
    description: "An evil clone of Ultraman Noa created by the Visitors. Purely driven by the instinct to destroy and exact his revenge on Noa."
  ,
    stats: {
      strength: 63,
      speed: 66,
      energy: 71,
      defense: 82,
      technique: 84
    }},
  {
    name: "Dark Faust",
    era: "Dark",
    year: "2004",
    motif: "Shadow / Illusion",
    transformation_item: "Dark Evoltruster",
    color_accent: "#991B1B",
    icon: "Ghost",
    description: "A dark giant born from the shadows to oppose Ultraman Nexus. Wields the power of darkness and darkness-based illusions.",
    id: 33
  ,
    stats: {
      strength: 88,
      speed: 63,
      energy: 82,
      defense: 89,
      technique: 89
    }},
  {
    name: "Dark Mephisto",
    era: "Dark",
    year: "2004",
    motif: "Demon / Puppeteer",
    transformation_item: "Dark Mephisto Spark",
    color_accent: "#4B5563",
    icon: "Swords",
    description: "A formidable dark giant who manipulated Faust and commanded Space Beasts to continuously torment Nexus.",
    id: 34
  ,
    stats: {
      strength: 68,
      speed: 62,
      energy: 68,
      defense: 63,
      technique: 67
    }},
  // 2005
  {
    id: 35,
    name: "Ultraman Max",
    era: "Heisei",
    year: "2005",
    motif: "Fastest and Strongest",
    transformation_item: "Max Spark",
    color_accent: "#F59E0B",
    icon: "FastForward",
    description: "Renowned as the galaxy's fastest and strongest warrior. Relied on overwhelming power and speed to defeat fierce returning monsters."
  ,
    stats: {
      strength: 55,
      speed: 58,
      energy: 60,
      defense: 73,
      technique: 71
    }},
  {
    id: 36,
    name: "Ultraman Xenon",
    era: "Heisei",
    year: "2005",
    motif: "Gold / Max's Partner",
    transformation_item: "Max Spark",
    color_accent: "#FACC15",
    icon: "Sparkles",
    isSecondary: true,
    description: "A reliable and powerful warrior from the Land of Light who serves as Ultraman Max's trusted partner and ally in defending the universe."
  ,
    stats: {
      strength: 72,
      speed: 73,
      energy: 82,
      defense: 63,
      technique: 60
    }},
  // 2006
  {
    id: 37,
    name: "Ultraman Mebius",
    era: "Heisei",
    year: "2006",
    motif: "Infinity / Rookie",
    transformation_item: "Mebius Brace",
    color_accent: "#F97316",
    icon: "Infinity",
    description: "A rookie warrior sent to Earth by Father of Ultra. Forged an irreplaceable bond with humanity as part of the defense team GUYS."
  ,
    stats: {
      strength: 56,
      speed: 68,
      energy: 68,
      defense: 78,
      technique: 69
    }},
  {
    id: 38,
    name: "Ultraman Hikari",
    era: "Heisei",
    year: "2006",
    motif: "Knight / Scientist",
    transformation_item: "Knight Brace",
    color_accent: "#3B82F6",
    icon: "FlaskConical",
    isSecondary: true,
    description: "A brilliant scientist-turned-warrior from the Land of Light. Often invents new devices and weapons to aid the younger generations."
  ,
    stats: {
      strength: 75,
      speed: 72,
      energy: 74,
      defense: 67,
      technique: 70
    }},
  // 2007
  {
    id: 39,
    name: "Ultraseven X",
    era: "Heisei",
    year: "2007",
    motif: "Dark Agent / Alternate Seven",
    transformation_item: "Ultra Eye",
    color_accent: "#6B7280",
    icon: "Eye",
    description: "A mysterious alternate version of Ultraseven operating in a dystopian parallel world. Fights shadowy alien threats in secrecy."
  ,
    stats: {
      strength: 66,
      speed: 68,
      energy: 70,
      defense: 76,
      technique: 71
    }},
  // 2009
  {
    id: 40,
    name: "Ultraman Zero",
    era: "Heisei",
    year: "2009",
    motif: "Rebel / Multiverse",
    transformation_item: "Ultra Zero Eye",
    color_accent: "#2563EB",
    icon: "Swords",
    description: "The rebellious and immensely powerful son of Ultraseven. Has journeyed to save the multiverse countless times."
  ,
    stats: {
      strength: 82,
      speed: 83,
      energy: 68,
      defense: 79,
      technique: 63
    }},
  {
    id: 41,
    name: "Belial",
    era: "Dark",
    year: "2009",
    motif: "Fallen Ultra",
    transformation_item: "Giga Battle Nizer",
    color_accent: "#991B1B",
    icon: "Swords",
    description: "A fallen warrior who succumbed to the dark power of Reiblood. Wields the Giga Battle Nizer and seeks universal domination."
  ,
    stats: {
      strength: 76,
      speed: 74,
      energy: 78,
      defense: 64,
      technique: 61
    }},
  // 2012
  {
    id: 42,
    name: "Ultraman Saga",
    era: "Heisei",
    year: "2012",
    motif: "Miracle / Hope",
    transformation_item: "Saga Brace",
    color_accent: "#06B6D4",
    icon: "Rainbow",
    description: "A miraculous warrior born from the hopes of humanity and the fusion of Zero, Dyna, and Cosmos to defeat Hyper Zetton."
  ,
    stats: {
      strength: 65,
      speed: 67,
      energy: 59,
      defense: 58,
      technique: 70
    }},
  // 2013
  {
    id: 43,
    name: "Ultraman Ginga",
    era: "New Generation",
    year: "2013",
    motif: "Galaxy / Crystals",
    transformation_item: "Ginga Spark",
    color_accent: "#06B6D4",
    icon: "Sparkles",
    description: "A hero from the future connected to the sealed Spark Dolls. Fights with a body embedded with glowing light crystals."
  ,
    stats: {
      strength: 59,
      speed: 72,
      energy: 63,
      defense: 62,
      technique: 73
    }},
  // 2014
  {
    name: "Ultraman Ribut",
    era: "New Generation",
    year: "2014",
    motif: "Silat / Rescue",
    transformation_item: "Ribut Blocker",
    color_accent: "#22C55E",
    icon: "Shield",
    description: "A highly skilled rescue force member from the Galaxy Rescue Force. Excels in Silat martial arts and uses the Ribut Blocker for defense and offense.",
    id: 44
  ,
    stats: {
      strength: 68,
      speed: 60,
      energy: 70,
      defense: 72,
      technique: 87
    }},
  {
    id: 45,
    name: "Ultraman Victory",
    era: "New Generation",
    year: "2014",
    motif: "Earth Core / V-shaped",
    transformation_item: "Victory Lancer",
    color_accent: "#EAB308",
    icon: "ArrowDownToLine",
    isSecondary: true,
    description: "The fierce protector of the subterranean Victorians. Uses 'Ultrans' to literally wield defeated monster body parts as weapons."
  ,
    stats: {
      strength: 59,
      speed: 62,
      energy: 76,
      defense: 69,
      technique: 60
    }},
  // 2015
  {
    id: 46,
    name: "Ultraman X",
    era: "New Generation",
    year: "2015",
    motif: "Data / Cyber Armor",
    transformation_item: "X Devizer",
    color_accent: "#EAB308",
    icon: "Cpu",
    description: "Formed from digital data, he 'Unites' with Earth defense forces and equips cybernetic monster armors to adapt his combat style."
  ,
    stats: {
      strength: 79,
      speed: 76,
      energy: 59,
      defense: 72,
      technique: 82
    }},
  // 2016
  {
    id: 47,
    name: "Ultraman Orb",
    era: "New Generation",
    year: "2016",
    motif: "Fusion / Wanderer",
    transformation_item: "Orb Ring",
    color_accent: "#A855F7",
    icon: "Circle",
    description: "A wandering warrior who uses Fusion Up to combine the powers of past Ultra Heroes to defeat the dreaded Lord Monsters."
  ,
    stats: {
      strength: 58,
      speed: 73,
      energy: 57,
      defense: 67,
      technique: 71
    }},
  // 2017
  {
    id: 48,
    name: "Ultraman Geed",
    era: "New Generation",
    year: "2017",
    motif: "Son of Belial / DNA",
    transformation_item: "Geed Riser",
    color_accent: "#EF4444",
    icon: "Dna",
    description: "The clone of the evil Ultraman Belial who chose to be a hero, defying his dark destiny through the power of his own bonds."
  ,
    stats: {
      strength: 82,
      speed: 68,
      energy: 78,
      defense: 66,
      technique: 84
    }},
  // 2018
  {
    id: 49,
    name: "Ultraman Rosso",
    era: "New Generation",
    year: "2018",
    motif: "Fire / Older Brother",
    transformation_item: "R/B Gyro",
    color_accent: "#DC2626",
    icon: "Flame",
    description: "The fiery older and protective brother of the Minato family. Unpredictable, he uses the element of fire to overwhelm foes."
  ,
    stats: {
      strength: 82,
      speed: 84,
      energy: 61,
      defense: 59,
      technique: 57
    }},
  {
    id: 50,
    name: "Ultraman Blu",
    era: "New Generation",
    year: "2018",
    motif: "Water / Younger Brother",
    transformation_item: "R/B Gyro",
    color_accent: "#2563EB",
    icon: "Waves",
    isSecondary: true,
    description: "The calm and intelligent younger Minato brother. Wields the flowing power of water to gracefully yet decisively defeat enemies."
  ,
    stats: {
      strength: 84,
      speed: 62,
      energy: 77,
      defense: 59,
      technique: 82
    }},
  {
    id: 51,
    name: "Ultrawoman Grigio",
    era: "New Generation",
    year: "2018",
    motif: "Joy / Younger Sister",
    transformation_item: "R/B Gyro",
    color_accent: "#F97316",
    icon: "Smile",
    isTertiary: true,
    description: "The cheerful youngest sibling of the Minato family. Primarily supports her battling brothers with powerful healing and defensive barriers."
  ,
    stats: {
      strength: 65,
      speed: 78,
      energy: 68,
      defense: 61,
      technique: 67
    }},
  {
    id: 52,
    name: "Ultraman Tregear",
    era: "Dark",
    year: "2018",
    motif: "Chaos / Madness",
    transformation_item: "Tregear Eye",
    color_accent: "#1E3A8A",
    icon: "Eye",
    description: "Once Taro's closest friend, he fell into darkness and chaos. Uses psychological manipulation and dark magic to torment his foes."
  ,
    stats: {
      strength: 78,
      speed: 84,
      energy: 83,
      defense: 63,
      technique: 84
    }},
  // 2019
  {
    id: 53,
    name: "Ultraman Taiga",
    era: "Reiwa",
    year: "2019",
    motif: "Sun / Taro's Son",
    transformation_item: "Taiga Spark",
    color_accent: "#EF4444",
    icon: "Sun",
    description: "The confident and fiery son of Ultraman Taro. Leads the Tri-Squad on Earth to prove himself as a legendary hero in his own right."
  ,
    stats: {
      strength: 73,
      speed: 83,
      energy: 60,
      defense: 60,
      technique: 56
    }},
  {
    id: 54,
    name: "Ultraman Titas",
    era: "Reiwa",
    year: "2019",
    motif: "Muscle / Sage of U40",
    transformation_item: "Taiga Spark",
    color_accent: "#22C55E",
    icon: "Dumbbell",
    isSecondary: true,
    description: "The 'Sage of Power' from Planet U40. Relies on his immense muscular strength, defensive combat, and bodybuilding flex poses."
  ,
    stats: {
      strength: 69,
      speed: 60,
      energy: 63,
      defense: 80,
      technique: 55
    }},
  {
    id: 55,
    name: "Ultraman Fuma",
    era: "Reiwa",
    year: "2019",
    motif: "Ninja / Wind",
    transformation_item: "Taiga Spark",
    color_accent: "#0EA5E9",
    icon: "Wind",
    isTertiary: true,
    description: "The quick and agile ninja warrior from Planet O-50. Overwhelms opponents with his immense speed and deadly wind-based attacks."
  ,
    stats: {
      strength: 67,
      speed: 77,
      energy: 61,
      defense: 70,
      technique: 67
    }},
  // 2020
  {
    id: 56,
    name: "Ultraman Z",
    era: "Reiwa",
    year: "2020",
    motif: "Zeta / Zero's Disciple",
    transformation_item: "Z Riser",
    color_accent: "#3B82F6",
    icon: "LetterText",
    description: "The passionate, bumbling, self-proclaimed disciple of Ultraman Zero. Combines Ultra Medals to unlock potent new combat forms."
  ,
    stats: {
      strength: 60,
      speed: 63,
      energy: 76,
      defense: 83,
      technique: 62
    }},
  // 2021
  {
    id: 57,
    name: "Ultraman Trigger",
    era: "Reiwa",
    year: "2021",
    motif: "New Generation Tiga / Plants",
    transformation_item: "GUTS Sparklence",
    color_accent: "#A855F7",
    icon: "Leaf",
    description: "A new generation giant of light. Awoke from a 30 million-year deep slumber to bring smiles to the universe and fight the Dark Giants."
  ,
    stats: {
      strength: 65,
      speed: 58,
      energy: 73,
      defense: 81,
      technique: 56
    }},
  // 2022
  {
    id: 58,
    name: "Ultraman Decker",
    era: "Reiwa",
    year: "2022",
    motif: "New Generation Dyna / Cosmos",
    transformation_item: "Ultra D Flasher",
    color_accent: "#3B82F6",
    icon: "Orbit",
    description: "A dynamic warrior fighting the mysterious Sphere invasion, inheriting a cosmic power to continue the legacy of light into the future."
  ,
    stats: {
      strength: 60,
      speed: 75,
      energy: 81,
      defense: 70,
      technique: 77
    }},
  {
    name: "Ultraman Regulos",
    era: "Reiwa",
    year: "2022",
    motif: "Cosmo Beast Style",
    transformation_item: "Regulos Bracelet",
    color_accent: "#B91C1C",
    icon: "Flame",
    description: "A master of the Cosmo Beast Style martial arts from Planet D60. Wields fiery and lightning-based martial arts techniques to defeat evil.",
    id: 59
  ,
    stats: {
      strength: 81,
      speed: 78,
      energy: 61,
      defense: 88,
      technique: 68
    }},
  // 2023
  {
    id: 60,
    name: "Ultraman Blazar",
    era: "Reiwa",
    year: "2023",
    motif: "Savage / Hunter",
    transformation_item: "Blazar Brace",
    color_accent: "#DC2626",
    icon: "Tent",
    description: "A primitive, largely mute, and savage hunter from the M421 galaxy. Known for his wild combat style and deadly energy spear attacks."
  ,
    stats: {
      strength: 72,
      speed: 77,
      energy: 68,
      defense: 66,
      technique: 74
    }},
  // 2024
  {
    id: 61,
    name: "Ultraman Arc",
    era: "Reiwa",
    year: "2024",
    motif: "Imagination / Rainbow",
    transformation_item: "Arc Alyzer",
    color_accent: "#F59E0B",
    icon: "Rainbow",
    description: "A hero born from the power of boundless imagination. Creates defensive shields and constructs to creatively outsmart and defeat foes."
  ,
    stats: {
      strength: 58,
      speed: 80,
      energy: 80,
      defense: 64,
      technique: 66
    }}
];

export const HIDDEN_ULTRA: Ultraman = {
  id: 99,
  name: "Ultraman King",
  era: "Showa",
  year: "1974",
  motif: "God / Royal",
  transformation_item: "N/A",
  color_accent: "#FACC15",
  icon: "Crown",
  description: "The legendary, god-like elder of the Ultra race. An omnipotent figure who only intervenes during universe-threatening crises."
,
    stats: {
      strength: 81,
      speed: 72,
      energy: 56,
      defense: 65,
      technique: 59
    }};
