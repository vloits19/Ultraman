import type { Ultraman } from '@/types/ultraman';

// Special filename overrides for characters whose image names don't follow standard convention
const FILE_NAME_OVERRIDES: Record<string, string> = {
  'Ultra Father': 'FatherOfUltra.png',
  'Ultra Mother': 'UltraOfMother.png',
  'Ultraseven': 'UltraSeven.png',
  'Ultraseven 21': 'UltramanSeven21.png',
  'Ultraseven X': 'UltramanSevenX.png',
};

export const getImageUrl = (ultra: Ultraman): string => {
  // Handle special cases and hidden ultra
  if (ultra.id === 99) {
    return '/src/assets/img/heisei/UltramanNoa.png'; // Assuming Noa is in heisei
  }

  // Formatting Era to match folder names (e.g., 'New Generation' -> 'new gen')
  let folderName = ultra.era.toLowerCase();
  if (folderName === 'new generation') {
    folderName = 'new gen';
  }
  
  // Override for secondary ultras
  if (ultra.isSecondary) {
    folderName = 'secondary';
  }

  // Override for tertiary ultras
  if (ultra.isTertiary) {
    folderName = 'tertiary';
  }

  // Check for special filename overrides, otherwise use standard naming
  const fileName = FILE_NAME_OVERRIDES[ultra.name] || ultra.name.replace(/\s+/g, '') + '.png';

  return `/src/assets/img/${folderName}/${fileName}`;
};
