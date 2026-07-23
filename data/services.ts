export type ServiceItem = {
  title: string;
  slug: string;
  category: string;
  summary: string;
};

const serviceRows: [string, string, string][] = [
  ["Emergency Garage Door Repair", "emergency-garage-door-repair", "Emergency Repair"],
  ["24/7 Garage Door Repair", "24-7-garage-door-repair", "Emergency Repair"],
  ["Same-Day Garage Door Repair", "same-day-garage-door-repair", "Emergency Repair"],
  ["Garage Door Won't Open Repair", "garage-door-wont-open-repair", "Emergency Repair"],
  ["Garage Door Won't Close Repair", "garage-door-wont-close-repair", "Emergency Repair"],
  ["Stuck Garage Door Repair", "stuck-garage-door-repair", "Emergency Repair"],
  ["Off-Track Garage Door Repair", "off-track-garage-door-repair", "Emergency Repair"],
  ["Bent Garage Door Track Repair", "bent-garage-door-track-repair", "Tracks and Rollers"],
  ["Garage Door Track Replacement", "garage-door-track-replacement", "Tracks and Rollers"],
  ["Garage Door Roller Repair", "garage-door-roller-repair", "Tracks and Rollers"],
  ["Garage Door Roller Replacement", "garage-door-roller-replacement", "Tracks and Rollers"],
  ["Garage Door Cable Repair", "garage-door-cable-repair", "Cables and Hardware"],
  ["Garage Door Cable Replacement", "garage-door-cable-replacement", "Cables and Hardware"],
  ["Garage Door Drum Replacement", "garage-door-drum-replacement", "Cables and Hardware"],
  ["Garage Door Hinge Repair", "garage-door-hinge-repair", "Cables and Hardware"],
  ["Garage Door Hinge Replacement", "garage-door-hinge-replacement", "Cables and Hardware"],
  ["Garage Door Bracket Repair", "garage-door-bracket-repair", "Cables and Hardware"],
  ["Broken Garage Door Spring Repair", "broken-garage-door-spring-repair", "Springs"],
  ["Torsion Spring Replacement", "torsion-spring-replacement", "Springs"],
  ["Extension Spring Replacement", "extension-spring-replacement", "Springs"],
  ["Garage Door Spring Adjustment", "garage-door-spring-adjustment", "Springs"],
  ["Garage Door Spring Conversion", "garage-door-spring-conversion", "Springs"],
  ["Garage Door Opener Repair", "garage-door-opener-repair", "Openers and Controls"],
  ["Garage Door Opener Installation", "garage-door-opener-installation", "Openers and Controls"],
  ["Garage Door Opener Replacement", "garage-door-opener-replacement", "Openers and Controls"],
  ["Chain-Drive Opener Repair", "chain-drive-opener-repair", "Openers and Controls"],
  ["Belt-Drive Opener Repair", "belt-drive-opener-repair", "Openers and Controls"],
  ["Screw-Drive Opener Repair", "screw-drive-opener-repair", "Openers and Controls"],
  ["Wall-Mount Opener Installation", "wall-mount-opener-installation", "Openers and Controls"],
  ["Smart Garage Door Opener Installation", "smart-garage-door-opener-installation", "Openers and Controls"],
  ["Garage Door Remote Programming", "garage-door-remote-programming", "Openers and Controls"],
  ["Garage Door Remote Replacement", "garage-door-remote-replacement", "Openers and Controls"],
  ["Garage Door Keypad Repair", "garage-door-keypad-repair", "Openers and Controls"],
  ["Garage Door Keypad Installation", "garage-door-keypad-installation", "Openers and Controls"],
  ["Garage Door Sensor Repair", "garage-door-sensor-repair", "Safety and Controls"],
  ["Garage Door Sensor Alignment", "garage-door-sensor-alignment", "Safety and Controls"],
  ["Garage Door Sensor Replacement", "garage-door-sensor-replacement", "Safety and Controls"],
  ["Garage Door Safety Inspection", "garage-door-safety-inspection", "Safety and Controls"],
  ["Garage Door Balance Test", "garage-door-balance-test", "Safety and Controls"],
  ["Garage Door Maintenance", "garage-door-maintenance", "Maintenance"],
  ["Garage Door Tune-Up", "garage-door-tune-up", "Maintenance"],
  ["Garage Door Lubrication Service", "garage-door-lubrication-service", "Maintenance"],
  ["Garage Door Noise Reduction", "garage-door-noise-reduction", "Maintenance"],
  ["Garage Door Weatherstripping Replacement", "garage-door-weatherstripping-replacement", "Weatherproofing"],
  ["Garage Door Bottom Seal Replacement", "garage-door-bottom-seal-replacement", "Weatherproofing"],
  ["Garage Door Threshold Installation", "garage-door-threshold-installation", "Weatherproofing"],
  ["Garage Door Insulation", "garage-door-insulation", "Weatherproofing"],
  ["Garage Door Panel Repair", "garage-door-panel-repair", "Doors and Panels"],
  ["Garage Door Panel Replacement", "garage-door-panel-replacement", "Doors and Panels"],
  ["Garage Door Dent Repair", "garage-door-dent-repair", "Doors and Panels"],
  ["Garage Door Replacement", "garage-door-replacement", "Doors and Panels"],
  ["New Garage Door Installation", "new-garage-door-installation", "Doors and Panels"],
  ["Single Garage Door Installation", "single-garage-door-installation", "Doors and Panels"],
  ["Double Garage Door Installation", "double-garage-door-installation", "Doors and Panels"],
  ["Custom Garage Door Installation", "custom-garage-door-installation", "Doors and Panels"],
  ["Wood Garage Door Repair", "wood-garage-door-repair", "Door Materials"],
  ["Steel Garage Door Repair", "steel-garage-door-repair", "Door Materials"],
  ["Aluminum Garage Door Repair", "aluminum-garage-door-repair", "Door Materials"],
  ["Glass Garage Door Repair", "glass-garage-door-repair", "Door Materials"],
  ["Carriage House Garage Door Repair", "carriage-house-garage-door-repair", "Door Styles"],
  ["Sectional Garage Door Repair", "sectional-garage-door-repair", "Door Styles"],
  ["Roll-Up Garage Door Repair", "roll-up-garage-door-repair", "Commercial Services"],
  ["Commercial Garage Door Repair", "commercial-garage-door-repair", "Commercial Services"],
  ["Commercial Garage Door Installation", "commercial-garage-door-installation", "Commercial Services"],
  ["Commercial Overhead Door Repair", "commercial-overhead-door-repair", "Commercial Services"],
  ["Warehouse Garage Door Repair", "warehouse-garage-door-repair", "Commercial Services"],
  ["Loading Dock Door Repair", "loading-dock-door-repair", "Commercial Services"],
  ["Fire-Rated Garage Door Service", "fire-rated-garage-door-service", "Commercial Services"],
  ["Garage Door Lock Repair", "garage-door-lock-repair", "Security"],
  ["Garage Door Lock Installation", "garage-door-lock-installation", "Security"],
  ["Garage Door Reinforcement", "garage-door-reinforcement", "Security"],
  ["Garage Door Opener Battery Backup", "garage-door-opener-battery-backup", "Openers and Controls"]
];

export const services: ServiceItem[] = serviceRows.map(([title, slug, category]) => ({
  title,
  slug,
  category,
  summary: `Learn about ${title.toLowerCase()}, common warning signs, service options and how to find available local help.`,
}));

export function getService(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceCategories = [...new Set(services.map((service) => service.category))];
