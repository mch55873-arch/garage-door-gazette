export type ArticleItem = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  directAnswer: string;
  warningSigns: string[];
  commonCauses: string[];
  professionalChecks: string[];
  prevention: string[];
  serviceSlugs: string[];
};

export const articles: ArticleItem[] = [
  {
    title: "How to Tell If a Garage Door Spring Is Broken",
    slug: "how-to-tell-if-garage-door-spring-is-broken",
    category: "Springs",
    summary: "Learn the clearest signs of a broken torsion or extension spring, why the door becomes heavy, and when operation should stop.",
    directAnswer: "A broken garage door spring often causes a loud snap, a visible gap in a torsion spring, loose extension-spring sections, a door that feels extremely heavy, or an opener that strains without lifting the door. Stop operating the system and avoid touching loaded cables, drums, or brackets until the door is inspected.",
    warningSigns: ["A visible separation appears in the torsion spring above the door", "The door lifts only a few inches and then stops", "The opener motor runs while the door remains unusually heavy", "Cables appear loose after the spring loses tension", "The door rises unevenly or drops faster than normal"],
    commonCauses: ["Normal metal fatigue after thousands of operating cycles", "Corrosion, moisture, or poor maintenance", "Incorrect spring sizing or previous installation", "A door that is poorly balanced or heavier than the spring system was designed to support", "Sudden temperature changes that aggravate an already fatigued spring"],
    professionalChecks: ["Confirm whether the system uses torsion, extension, or another counterbalance design", "Identify the correct spring dimensions, wire size, length, wind, and cycle rating", "Inspect cables, drums, bearings, center support, bottom brackets, and track alignment", "Replace or adjust components using controlled tensioning procedures", "Balance-test the door and verify opener and safety operation after service"],
    prevention: ["Schedule periodic balance and hardware inspections", "Keep appropriate moving parts lubricated according to manufacturer guidance", "Address a heavy, binding, or uneven door before the spring is overloaded", "Ask about higher-cycle spring options when usage is frequent"],
    serviceSlugs: ["broken-garage-door-spring-repair", "torsion-spring-replacement", "extension-spring-replacement", "garage-door-balance-test"]
  },
  {
    title: "Garage Door Won't Open: Common Causes and Safe Next Steps",
    slug: "garage-door-wont-open-causes",
    category: "Troubleshooting",
    summary: "A practical guide to power, controls, springs, cables, locks, tracks, and opener problems that can prevent a garage door from opening.",
    directAnswer: "A garage door may not open because of lost power, a disengaged trolley, a locked door, remote or keypad problems, a broken spring, a damaged cable, track binding, or an opener failure. Do not force the door when it is heavy, crooked, off track, or affected by damaged counterbalance hardware.",
    warningSigns: ["The opener clicks or hums but the door does not move", "The door begins to lift and immediately stops", "One side rises while the other remains low", "The manual release is pulled but the door is still extremely heavy", "The opener has power but controls do not respond"],
    commonCauses: ["Power outage, tripped breaker, unplugged opener, or damaged outlet", "Remote, keypad, wall-control, or receiver fault", "Broken torsion or extension spring", "Loose, frayed, or off-drum cable", "Locked door, bent track, seized roller, or damaged panel", "Stripped gear, trolley, chain, belt, rail, or motor-control failure"],
    professionalChecks: ["Test power, controls, travel settings, rail, trolley, and drive system", "Inspect spring condition and manually assess door balance when safe", "Check cables, drums, rollers, tracks, hinges, and brackets", "Confirm locks and emergency-release components are functioning correctly", "Separate a door problem from an opener problem before recommending replacement"],
    prevention: ["Test manual balance periodically", "Replace weak batteries and maintain remote and keypad controls", "Do not continue operating a door that binds or rises unevenly", "Arrange maintenance before small hardware issues damage the opener"],
    serviceSlugs: ["garage-door-wont-open-repair", "garage-door-opener-repair", "broken-garage-door-spring-repair", "garage-door-cable-repair"]
  },
  {
    title: "Garage Door Won't Close: Sensors, Tracks, Controls and Other Causes",
    slug: "garage-door-wont-close-causes",
    category: "Troubleshooting",
    summary: "Understand why a garage door stays open, reverses, or requires the wall button to be held down during closing.",
    directAnswer: "A garage door that will not close often has blocked or misaligned safety sensors, damaged wiring, incorrect travel or force settings, track resistance, an obstruction, or an opener-control fault. Never bypass safety devices as a permanent solution.",
    warningSigns: ["Sensor lights blink, remain off, or do not match", "The door reverses immediately after closing begins", "The door closes only while the wall button is held", "The door reaches the floor and then reopens", "One side binds or the rollers scrape during downward travel"],
    commonCauses: ["Obstruction, dirt, sunlight interference, or sensor misalignment", "Loose, damaged, corroded, or incorrectly connected sensor wiring", "Incorrect close-limit or force setting", "Bent track, worn roller, loose hinge, or panel misalignment", "Control-board, wall-station, or opener logic fault"],
    professionalChecks: ["Clean, align, and electrically test the safety sensors", "Inspect sensor brackets, wiring, terminals, and opener diagnostics", "Check the full door path for physical resistance", "Verify travel limits and force settings without masking an underlying door problem", "Test required reversal and entrapment-protection functions"],
    prevention: ["Keep the sensor path clear and lenses clean", "Protect low-voltage wiring from storage, tools, pests, and moisture", "Address scraping, binding, or uneven movement promptly", "Include safety reversal in routine maintenance"],
    serviceSlugs: ["garage-door-wont-close-repair", "garage-door-sensor-alignment", "garage-door-sensor-repair", "garage-door-opener-repair"]
  },
  {
    title: "Garage Door Off Track: What to Do and What Not to Do",
    slug: "garage-door-off-track-what-to-do",
    category: "Emergency Repair",
    summary: "Learn why doors leave their tracks, how to secure the area, and why forcing or lifting the door can make damage worse.",
    directAnswer: "Stop operating an off-track garage door, keep people and vehicles away, and do not attempt to force it open or closed. The door may be unstable, cables may be under uneven tension, and panels or rollers can fall or bend further.",
    warningSigns: ["One or more rollers have left the track", "The door hangs crooked or twists in the opening", "A cable is loose, tangled, or off the drum", "Track sections are bent, separated, or pulled from the wall", "The door makes a sudden scraping or impact sound"],
    commonCauses: ["Vehicle or object impact", "Broken or displaced cable", "Bent, loose, or misaligned track", "Worn roller, hinge, bracket, or bearing", "Spring failure or severe imbalance", "Continuing to operate the door after an earlier warning sign"],
    professionalChecks: ["Stabilize and support the door before releasing tension or repositioning components", "Inspect both tracks, rollers, cables, drums, springs, hinges, panels, and mounting points", "Identify whether the track can be safely repaired or must be replaced", "Correct the root cause rather than simply placing rollers back in the track", "Balance and safety-test the complete system"],
    prevention: ["Do not drive through the opening until the door is fully open", "Stop operation when the door begins rubbing, shaking, or rising unevenly", "Maintain rollers, hinges, tracks, fasteners, and cables", "Keep stored items clear of tracks and sensor areas"],
    serviceSlugs: ["off-track-garage-door-repair", "bent-garage-door-track-repair", "garage-door-cable-repair", "garage-door-roller-replacement"]
  },
  {
    title: "Broken Garage Door Cable: Signs, Risks and Repair Process",
    slug: "broken-garage-door-cable-signs",
    category: "Cables and Hardware",
    summary: "Recognize frayed, loose, off-drum, or broken garage door cables and understand why cable work is tied to spring tension.",
    directAnswer: "A damaged cable may appear frayed, slack, tangled, off the drum, or completely separated. The door may hang crooked or jam. Because cables interact with high-tension springs and bottom brackets, cable repair should not begin until the door is secured and the counterbalance load is controlled.",
    warningSigns: ["A cable has visible broken strands or rust", "One side of the door is lower than the other", "A cable is loose beside the track or wrapped incorrectly around the drum", "The door jerks, binds, or stops during travel", "A bottom bracket or drum appears damaged"],
    commonCauses: ["Metal fatigue, corrosion, abrasion, or poor winding", "Spring failure that suddenly unloads or displaces the cable", "Damaged drum, bottom bracket, bearing, or track", "Incorrect cable length or previous installation", "Door impact or operation while off track"],
    professionalChecks: ["Secure the door and control spring tension", "Inspect both cables even when only one appears damaged", "Check drums, bottom brackets, springs, bearings, tracks, rollers, and balance", "Install correctly rated and matched cables", "Relevel, balance, and test the door after repair"],
    prevention: ["Inspect visible cable condition without touching loaded components", "Address rust, rubbing, or uneven movement early", "Keep tracks aligned and hardware tight", "Do not operate a door with a loose cable"],
    serviceSlugs: ["garage-door-cable-repair", "garage-door-cable-replacement", "garage-door-drum-replacement", "garage-door-bracket-repair"]
  },
  {
    title: "Garage Door Opener Hums but the Door Does Not Move",
    slug: "garage-door-opener-hums-door-does-not-move",
    category: "Openers",
    summary: "Troubleshoot humming, clicking, stalled, or running openers without assuming the motor is the only problem.",
    directAnswer: "A humming opener may have a jammed door, broken spring, stripped drive gear, failed capacitor, seized motor, damaged trolley, or travel obstruction. First determine whether the door itself moves freely and is properly balanced; otherwise a new opener can be damaged by the same underlying problem.",
    warningSigns: ["The motor hums while the chain, belt, or screw does not move", "The drive moves but the trolley does not pull the door", "The opener stops after a brief attempt", "A burning smell, heat, or repeated clicking appears", "The door is too heavy to lift manually after safe disengagement"],
    commonCauses: ["Broken spring or binding door", "Stripped internal gear, damaged sprocket, belt, chain, screw, or trolley", "Failed capacitor, relay, motor, or control board", "Incorrect limits or a physical obstruction", "Frozen, corroded, or damaged hardware"],
    professionalChecks: ["Assess the door independently from the opener", "Inspect rail, trolley, drive system, motor, capacitor, gears, and control board", "Test power, wiring, wall station, remotes, and safety devices", "Compare repair cost with opener age, parts availability, and current safety features", "Set travel and force correctly after the mechanical door is operating smoothly"],
    prevention: ["Maintain door balance so the opener is not lifting excessive weight", "Stop repeated activation when the opener stalls", "Keep the rail and manufacturer-approved components maintained", "Schedule service when noise or movement changes"],
    serviceSlugs: ["garage-door-opener-repair", "garage-door-opener-replacement", "garage-door-balance-test", "broken-garage-door-spring-repair"]
  },
  {
    title: "Why a Garage Door Opens and Then Closes by Itself",
    slug: "garage-door-opens-then-closes",
    category: "Openers",
    summary: "Review remote interference, stuck controls, smart-home settings, wiring faults, and opener logic issues that can cause unexpected movement.",
    directAnswer: "Unexpected opening or closing can result from a stuck remote button, failing wall control, damaged low-voltage wiring, programmed schedules, smart-home automation, shared or compromised access, or an opener-control fault. Treat unexplained movement as a security and safety issue until the cause is identified.",
    warningSigns: ["The door moves without anyone intentionally operating it", "Movement happens at a similar time each day", "A remote or wall button feels stuck", "The opener light or diagnostic code appears without a command", "The problem began after adding a smart-home device or new remote"],
    commonCauses: ["Stuck, damaged, or moisture-affected remote or wall control", "Shorted, pinched, or deteriorated control wiring", "Smart-home routines, schedules, shared-user permissions, or geofencing", "Remote programming or radio-frequency interference", "Failing receiver or logic board"],
    professionalChecks: ["Remove batteries from remotes and isolate controls systematically", "Inspect wall-control and sensor wiring", "Review smart-home accounts, schedules, users, and logs", "Erase and reprogram remotes and access codes when appropriate", "Test the receiver and logic board for intermittent faults"],
    prevention: ["Protect controls from moisture and physical damage", "Review smart-home users and schedules regularly", "Use rolling-code equipment and update access after moving or losing a remote", "Do not leave unexplained activation unresolved"],
    serviceSlugs: ["garage-door-opener-repair", "garage-door-remote-programming", "garage-door-keypad-repair", "smart-garage-door-opener-installation"]
  },
  {
    title: "Why a Garage Door Reverses Before Reaching the Floor",
    slug: "garage-door-reverses-before-floor",
    category: "Safety and Controls",
    summary: "Understand sensor, travel-limit, force, track, seal, and floor conditions that can make a closing door reverse.",
    directAnswer: "A door that reverses before reaching the floor may be detecting sensor interruption, excessive resistance, an incorrect close limit, an uneven floor, a stiff bottom seal, track binding, or a door-balance problem. The reversal system should be diagnosed, not disabled.",
    warningSigns: ["The door reverses at the same height each time", "Sensor lights blink or change during travel", "The door touches the floor and reopens", "The bottom section or seal catches on one side", "The door shakes or slows before reversing"],
    commonCauses: ["Misaligned, blocked, dirty, or damaged safety sensors", "Close-limit or force settings that no longer match the door", "Track, roller, hinge, or panel resistance", "Uneven slab, swollen seal, ice, debris, or threshold interference", "Weak spring or poor balance increasing opener load"],
    professionalChecks: ["Test sensors, brackets, wiring, and diagnostics", "Observe manual door travel and balance", "Inspect floor contact, seals, tracks, rollers, hinges, and panels", "Adjust travel and force only after physical resistance is corrected", "Verify the required safety-reversal response"],
    prevention: ["Keep sensor lenses and the doorway clear", "Inspect seals and threshold condition seasonally", "Address noisy or binding movement early", "Include reversal testing in routine maintenance"],
    serviceSlugs: ["garage-door-sensor-alignment", "garage-door-sensor-repair", "garage-door-opener-repair", "garage-door-bottom-seal-replacement"]
  },
  {
    title: "Why Is My Garage Door So Noisy?",
    slug: "why-garage-door-is-noisy",
    category: "Maintenance",
    summary: "Match grinding, squeaking, rattling, popping, scraping, and banging sounds with likely garage door components.",
    directAnswer: "Garage door noise can come from dry hinges or rollers, loose fasteners, worn bearings, track contact, opener drive components, spring coils, damaged panels, or poor balance. The sound pattern and the point in the travel cycle help narrow the cause.",
    warningSigns: ["Grinding or scraping that changes with door position", "Popping from a spring or structural connection", "Rattling from loose hinges, brackets, or track fasteners", "Squealing rollers or bearings", "Banging when the door starts, stops, or reaches the floor"],
    commonCauses: ["Dry or worn rollers, hinges, bearings, and springs", "Loose hardware or track mounting", "Metal rollers without suitable bearings", "Misalignment, bent track, damaged panel, or cable contact", "Chain, belt, screw, sprocket, rail, or opener vibration", "Poor balance that makes every component work harder"],
    professionalChecks: ["Operate the door while listening at safe observation points", "Inspect fasteners, rollers, hinges, tracks, bearings, springs, cables, and opener drive", "Check manual balance and alignment", "Use manufacturer-appropriate lubrication rather than coating tracks with heavy grease", "Replace worn components instead of masking structural noise"],
    prevention: ["Follow a regular inspection and lubrication schedule", "Tighten only appropriate non-loaded fasteners", "Replace worn rollers and bearings before they seize", "Investigate a new loud noise promptly"],
    serviceSlugs: ["garage-door-noise-reduction", "garage-door-lubrication-service", "garage-door-tune-up", "garage-door-roller-replacement"]
  },
  {
    title: "Garage Door Maintenance Checklist for Homeowners",
    slug: "garage-door-maintenance-checklist",
    category: "Maintenance",
    summary: "A safety-first inspection and maintenance checklist covering balance, reversal, sensors, hardware, seals, tracks, and opener operation.",
    directAnswer: "A useful maintenance routine includes visual inspection, listening for changes, testing balance and safety reversal, cleaning sensor lenses, checking seals, and arranging qualified service for springs, cables, drums, loaded brackets, or significant adjustment. Maintenance should reduce risk without encouraging unsafe contact with tensioned parts.",
    warningSigns: ["Movement becomes jerky, slow, crooked, or unusually loud", "Cables show fraying, rust, slack, or displacement", "A spring has a gap, corrosion, or visible damage", "The door fails a balance or reversal test", "Seals, panels, hinges, rollers, or tracks show deterioration"],
    commonCauses: ["Normal wear from repeated cycles", "Moisture, salt, dust, heat, cold, and poor ventilation", "Loose hardware and gradual misalignment", "Inadequate lubrication or incorrect products", "Delayed repair of small problems"],
    professionalChecks: ["Inspect and test the complete counterbalance and travel system", "Confirm fastener, hinge, roller, bearing, track, cable, and spring condition", "Test opener limits, force, sensors, remotes, keypad, wall control, and battery backup", "Evaluate weather seals, reinforcement, panels, and structural attachment", "Document recommended repairs separately from routine maintenance"],
    prevention: ["Perform a monthly visual and listening check", "Test reversal and sensors according to opener instructions", "Keep tracks and sensor areas free of stored items", "Schedule periodic professional inspection based on usage and condition"],
    serviceSlugs: ["garage-door-maintenance", "garage-door-tune-up", "garage-door-safety-inspection", "garage-door-balance-test"]
  },
  {
    title: "How Often Should a Garage Door Be Serviced?",
    slug: "how-often-service-garage-door",
    category: "Maintenance",
    summary: "Service frequency depends on usage, environment, door weight, equipment age, and changes in operation rather than one universal calendar rule.",
    directAnswer: "Many residential doors benefit from a professional inspection about once a year, while high-use, heavy, coastal, dusty, commercial, or older systems may require more frequent attention. Any new safety, balance, noise, tracking, spring, cable, or control issue should be evaluated without waiting for the next scheduled visit.",
    warningSigns: ["The door operates many cycles each day", "The property is exposed to salt, humidity, dust, heat, or freezing conditions", "Hardware repeatedly loosens or corrodes", "Noise, speed, balance, sealing, or control response changes", "The system has unknown maintenance history"],
    commonCauses: ["Cycle-related wear", "Environmental corrosion and contamination", "Age-related fatigue and obsolete parts", "High door weight or poor balance", "Commercial or multi-user operation"],
    professionalChecks: ["Record door type, age, usage, environment, and prior repairs", "Inspect springs, cables, drums, rollers, hinges, bearings, tracks, panels, seals, and opener", "Test balance, reversal, sensors, controls, limits, and force", "Prioritize safety-critical work separately from optional upgrades", "Recommend a future interval based on actual condition"],
    prevention: ["Keep a maintenance and repair record", "Do brief visual checks between professional visits", "Increase service frequency when usage or exposure is severe", "Do not delay service after a safety test fails"],
    serviceSlugs: ["garage-door-maintenance", "garage-door-tune-up", "garage-door-safety-inspection", "commercial-garage-door-repair"]
  },
  {
    title: "Garage Door Repair vs Replacement: How to Decide",
    slug: "garage-door-repair-vs-replacement",
    category: "Buying Guides",
    summary: "Compare isolated repair, panel replacement, opener replacement, and complete door replacement using condition, safety, cost, availability, and performance.",
    directAnswer: "Repair is usually more practical when damage is isolated, compatible parts are available, and the door remains structurally sound. Replacement becomes more reasonable when damage is widespread, panels or hardware are obsolete, failures recur, energy or wind performance is inadequate, or repair cost approaches the value of a complete system.",
    warningSigns: ["Multiple sections, tracks, hardware, and opener components are failing", "Matching panels or proprietary parts are unavailable", "The door is severely rusted, rotted, cracked, bowed, or impact-damaged", "Repeated repairs do not restore reliable operation", "The door no longer meets security, insulation, appearance, or wind needs"],
    commonCauses: ["Age and cumulative cycle wear", "Vehicle impact, weather, moisture, corrosion, or structural movement", "Poor previous installation or incompatible modifications", "Obsolete product design", "Changed property use or performance requirements"],
    professionalChecks: ["Inspect structural panels, stiles, reinforcement, tracks, counterbalance, hardware, opener, and opening dimensions", "Confirm parts availability and compatibility", "Compare itemized repair and replacement scopes", "Review insulation, wind-load, glazing, security, headroom, and opener requirements", "Include removal, disposal, permits, finishes, and warranty in comparisons"],
    prevention: ["Maintain the door before damage spreads", "Protect panels and tracks from impact", "Address water and corrosion exposure", "Keep documentation for model, size, finish, and prior repairs"],
    serviceSlugs: ["garage-door-replacement", "garage-door-panel-repair", "garage-door-panel-replacement", "new-garage-door-installation"]
  },
  {
    title: "Garage Door Panel Repair vs Panel Replacement",
    slug: "garage-door-panel-repair-vs-replacement",
    category: "Doors and Panels",
    summary: "Decide whether a dented, cracked, rusted, bowed, or impact-damaged garage door section can be repaired or should be replaced.",
    directAnswer: "Minor cosmetic damage may be repairable, but a panel should often be replaced when structural stiles, hinge attachment points, insulation, section joints, or door alignment are compromised. Availability of an exact compatible panel is a major factor.",
    warningSigns: ["The panel is bowed, cracked, split, rusted through, or separating", "Hinges or reinforcement pull away from the section", "The damaged section causes binding or gaps", "Insulation or glazing is exposed", "Impact also damaged tracks, rollers, cables, or adjacent panels"],
    commonCauses: ["Vehicle or object impact", "Corrosion, moisture, rot, or material fatigue", "Wind or structural loading", "Incorrect reinforcement for opener attachment", "Repeated binding or track misalignment"],
    professionalChecks: ["Inspect the panel skin, stiles, joints, hinges, reinforcement, and adjacent sections", "Confirm model, dimensions, profile, insulation, finish, and panel availability", "Check tracks, rollers, cables, springs, and opener after impact", "Compare cosmetic repair, section replacement, and complete-door replacement", "Adjust balance when replacement changes door weight"],
    prevention: ["Use parking guides and keep stored items away from the door", "Repair water intrusion and finish damage", "Maintain track alignment and hardware", "Use correct opener reinforcement"],
    serviceSlugs: ["garage-door-panel-repair", "garage-door-panel-replacement", "garage-door-dent-repair", "garage-door-replacement"]
  },
  {
    title: "Garage Door Opener Repair vs Replacement",
    slug: "garage-door-opener-repair-vs-replacement",
    category: "Openers",
    summary: "Compare opener repair and replacement based on age, parts, safety features, door balance, reliability, and smart-home needs.",
    directAnswer: "Repair can make sense when the opener is relatively current, the failure is limited, parts are available, and required safety functions operate correctly. Replacement is often better when the unit is old, unreliable, incompatible with current controls, missing desired safety or battery features, or costly to repair.",
    warningSigns: ["The opener fails repeatedly or behaves unpredictably", "Parts or compatible remotes are difficult to obtain", "The unit lacks functioning modern entrapment protection", "Motor, rail, drive, and control components have multiple issues", "The property needs battery backup, smart access, quieter operation, or stronger security"],
    commonCauses: ["Worn gears, sprockets, belts, chains, trolleys, capacitors, motors, or boards", "Power surges, moisture, heat, or wiring problems", "A heavy or unbalanced door overloading the opener", "Obsolete radio and control technology", "Incorrect original sizing or installation"],
    professionalChecks: ["Inspect the mechanical door before evaluating the opener", "Test power, controls, safety sensors, reversal, rail, trolley, drive, motor, and board", "Confirm opener size and compatibility with the door", "Compare parts, labor, warranty, and expected remaining life", "Review smart-home, security, lighting, camera, and battery options"],
    prevention: ["Maintain door balance", "Use surge protection where appropriate", "Do not repeatedly run a stalled opener", "Test safety functions and battery backup regularly"],
    serviceSlugs: ["garage-door-opener-repair", "garage-door-opener-replacement", "garage-door-opener-installation", "garage-door-opener-battery-backup"]
  },
  {
    title: "Torsion Springs vs Extension Springs",
    slug: "torsion-vs-extension-garage-door-springs",
    category: "Springs",
    summary: "Compare where torsion and extension springs are installed, how they move, common wear points, and service considerations.",
    directAnswer: "Torsion springs usually mount on a shaft above the door and apply torque through drums and cables. Extension springs stretch along the horizontal tracks and typically require safety containment. Each system must be correctly sized for the door, and neither should be adjusted casually because both can store substantial energy.",
    warningSigns: ["A torsion spring has a visible gap or distorted coil", "An extension spring is stretched unevenly, rusted, or lacks proper containment", "The door is heavy, uneven, or difficult to balance", "Cables, pulleys, drums, or bearings show wear", "The spring system has been modified with mismatched parts"],
    commonCauses: ["Cycle fatigue", "Corrosion and environmental exposure", "Incorrect spring size or door weight changes", "Worn pulleys, cables, drums, bearings, or mounting hardware", "Poor installation or lack of paired replacement when appropriate"],
    professionalChecks: ["Identify the exact spring system and door weight requirements", "Measure and select correctly rated components", "Inspect the full counterbalance assembly", "Install containment and hardware required for the system", "Balance-test the door through its full travel"],
    prevention: ["Inspect springs and related hardware periodically", "Avoid adding door weight without recalculating spring requirements", "Keep suitable components maintained", "Ask about cycle rating and system-conversion implications"],
    serviceSlugs: ["torsion-spring-replacement", "extension-spring-replacement", "garage-door-spring-conversion", "garage-door-balance-test"]
  },
  {
    title: "Garage Door Insulation Guide",
    slug: "garage-door-insulation-guide",
    category: "Weatherproofing",
    summary: "Understand insulation types, R-value limitations, air leakage, door weight, climate, and when replacement is better than a retrofit kit.",
    directAnswer: "Garage door insulation can reduce heat transfer and improve comfort, but performance also depends on air sealing, door construction, glazing, wall insulation, and climate. Adding insulation changes door weight and may require a balance and opener-capacity check.",
    warningSigns: ["The garage experiences large temperature swings", "Rooms beside or above the garage are uncomfortable", "Panels are uninsulated or damaged", "Air and daylight enter around the perimeter", "A retrofit makes the door heavy or difficult to balance"],
    commonCauses: ["Single-layer door construction", "Worn bottom, side, or top seals", "Uninsulated glazing or panel gaps", "Thermal bridging through metal sections", "Incorrectly installed retrofit material"],
    professionalChecks: ["Identify door construction, dimensions, condition, and available insulation options", "Inspect seals, retainers, perimeter gaps, and ventilation", "Estimate added weight and verify spring and opener suitability", "Compare retrofit cost with an insulated replacement door", "Review moisture, fire, and product-installation requirements"],
    prevention: ["Maintain perimeter seals", "Avoid moisture-trapping materials", "Use products compatible with the door", "Rebalance the system after meaningful weight changes"],
    serviceSlugs: ["garage-door-insulation", "garage-door-weatherstripping-replacement", "garage-door-bottom-seal-replacement", "garage-door-replacement"]
  },
  {
    title: "Garage Door Weatherstripping and Bottom Seal Guide",
    slug: "garage-door-weatherstripping-bottom-seal-guide",
    category: "Weatherproofing",
    summary: "Learn how bottom seals, side and top weatherstripping, retainers, thresholds, floor slope, and drainage work together.",
    directAnswer: "A complete garage-door seal depends on the correct bottom profile and retainer, properly positioned side and top weatherstripping, a reasonably even floor, and drainage that does not force water toward the opening. A threshold can help some gaps but should not trap water inside.",
    warningSigns: ["Daylight appears around the closed door", "Water, pests, leaves, dust, or drafts enter the garage", "The bottom seal is cracked, flattened, torn, or missing", "The seal pulls out of the retainer", "The door closes unevenly against the floor"],
    commonCauses: ["UV, heat, cold, compression, and age", "Incorrect seal profile or retainer size", "Uneven slab, door, or track alignment", "Damaged perimeter trim", "Poor drainage or threshold placement"],
    professionalChecks: ["Measure the bottom, side, and top gaps", "Identify the existing retainer and compatible seal profile", "Inspect floor slope, drainage, door level, track position, and panel condition", "Compare seal replacement with retainer or threshold work", "Confirm the door closes without excessive force"],
    prevention: ["Clean seals and contact surfaces", "Replace deteriorated material before the retainer is damaged", "Keep drainage paths clear", "Avoid forcing the opener to compress an oversized seal"],
    serviceSlugs: ["garage-door-weatherstripping-replacement", "garage-door-bottom-seal-replacement", "garage-door-threshold-installation", "garage-door-maintenance"]
  },
  {
    title: "Smart Garage Door Opener Guide",
    slug: "smart-garage-door-opener-guide",
    category: "Openers",
    summary: "Compare integrated smart openers, add-on controllers, compatibility, Wi-Fi, security, alerts, shared access, and backup operation.",
    directAnswer: "A smart garage door system can provide remote status, alerts, schedules, shared access, and integrations, but it must be compatible with the opener and safety system. Account security, Wi-Fi reliability, manual access, and battery backup are as important as app features.",
    warningSigns: ["The existing opener is incompatible with common smart controllers", "Remote status is unreliable or shows the wrong door position", "Shared users or old access permissions remain active", "Wi-Fi coverage is weak in the garage", "Automation rules trigger unwanted movement"],
    commonCauses: ["Incompatible control terminals or encrypted wall-control systems", "Weak network signal or router changes", "Incorrect sensor placement", "Outdated app, firmware, account, or integration permissions", "Power loss without battery backup"],
    professionalChecks: ["Confirm opener model, control wiring, safety sensor, and controller compatibility", "Review Wi-Fi signal and power availability", "Install and calibrate door-position sensing", "Test alerts, users, schedules, manual controls, and reversal", "Explain account security, updates, and backup access"],
    prevention: ["Use unique passwords and multi-factor authentication when available", "Remove former users and lost devices", "Review schedules and automations", "Test manual release and battery backup"],
    serviceSlugs: ["smart-garage-door-opener-installation", "garage-door-opener-installation", "garage-door-keypad-installation", "garage-door-opener-battery-backup"]
  },
  {
    title: "Garage Door Opener Battery Backup Guide",
    slug: "garage-door-opener-battery-backup-guide",
    category: "Openers",
    summary: "Understand built-in and retrofit battery backup, testing, replacement intervals, outage operation, and manual-release planning.",
    directAnswer: "Battery backup allows a compatible opener to operate during a power outage for a limited number of cycles. Capacity declines with age, temperature, storage, and use, so the battery should be tested and replaced according to equipment guidance rather than assumed to work indefinitely.",
    warningSigns: ["The opener beeps or displays a battery warning", "The door will not operate during an outage", "Backup movement is slow or stops early", "The battery is swollen, leaking, hot, or beyond its service interval", "The property lacks a safe manual-access plan"],
    commonCauses: ["Aged or depleted battery", "Incompatible replacement battery", "Charging-circuit or power-supply problem", "Extreme heat or cold", "A heavy or poorly balanced door consuming excessive backup power"],
    professionalChecks: ["Confirm opener and battery compatibility", "Inspect battery condition, charging, connections, and diagnostics", "Test outage operation safely", "Check door balance and mechanical resistance", "Explain replacement, recycling, and manual-release procedures"],
    prevention: ["Test backup operation periodically", "Replace the battery when indicated", "Maintain door balance", "Keep exterior manual-access arrangements secure and functional where appropriate"],
    serviceSlugs: ["garage-door-opener-battery-backup", "garage-door-opener-repair", "garage-door-opener-replacement", "garage-door-balance-test"]
  },
  {
    title: "Commercial Garage Door Maintenance Guide",
    slug: "commercial-garage-door-maintenance-guide",
    category: "Commercial",
    summary: "Plan maintenance for high-cycle sectional, rolling, warehouse, loading-dock, motorized, and fire-rated doors while reducing downtime.",
    directAnswer: "Commercial door maintenance should be based on door type, cycle count, environment, safety devices, operational criticality, and manufacturer requirements. High-use and life-safety doors usually require more structured inspection, documentation, and testing than a typical residential door.",
    warningSigns: ["Door speed, noise, alignment, or controls change", "Guides, tracks, curtains, sections, cables, springs, chains, or operators show wear", "Safety edges, photo eyes, interlocks, or controls fail", "The door disrupts loading, security, access, or production", "Inspection or fire-door documentation is incomplete"],
    commonCauses: ["High cycle volume and impact exposure", "Dust, moisture, chemicals, corrosion, or temperature extremes", "Forklift or vehicle damage", "Delayed adjustment and lubrication", "Incompatible repairs or undocumented modifications"],
    professionalChecks: ["Document door type, dimensions, cycle use, operator, controls, and safety devices", "Inspect structural attachment, guides, tracks, curtain or sections, counterbalance, hardware, and operator", "Test required safety, interlock, emergency, and fire functions", "Coordinate access control, loading, and downtime", "Provide prioritized repairs and a maintenance record"],
    prevention: ["Use a written inspection schedule", "Train staff to report changes and stop unsafe operation", "Protect openings from impact", "Maintain service and compliance records"],
    serviceSlugs: ["commercial-garage-door-repair", "commercial-garage-door-installation", "warehouse-garage-door-repair", "fire-rated-garage-door-service"]
  },
  {
    title: "Garage Door Safety Inspection Checklist",
    slug: "garage-door-safety-inspection-checklist",
    category: "Safety",
    summary: "A structured checklist for visual condition, balance, reversal, sensors, emergency release, hardware, controls, and safe clearances.",
    directAnswer: "A safety inspection should evaluate the door as a complete system: structure, panels, tracks, rollers, hinges, springs, cables, drums, brackets, opener, controls, sensors, reversal, balance, and manual release. Any unstable movement or damaged loaded component requires immediate caution.",
    warningSigns: ["The door drops, rises, or hangs unevenly", "Safety reversal or sensors do not work correctly", "Springs, cables, brackets, tracks, or panels are damaged", "The opener strains, stalls, or moves unpredictably", "The manual release or emergency access cannot be used safely"],
    commonCauses: ["Normal wear and fatigue", "Poor balance or adjustment", "Impact, corrosion, loose mounting, or structural movement", "Control, wiring, sensor, or opener failure", "Unsafe modification or neglected maintenance"],
    professionalChecks: ["Document visual damage and unsafe conditions", "Test manual balance and full travel", "Inspect counterbalance and structural hardware", "Test sensors, reversal, controls, limits, force, and emergency release", "Explain which conditions require immediate repair versus monitoring"],
    prevention: ["Perform regular visual checks", "Keep the doorway and sensor path clear", "Do not bypass safety features", "Arrange professional service after any failed test or impact"],
    serviceSlugs: ["garage-door-safety-inspection", "garage-door-balance-test", "garage-door-sensor-repair", "garage-door-maintenance"]
  },
  {
    title: "How Much Does Garage Door Repair Cost?",
    slug: "garage-door-repair-cost-factors",
    category: "Costs",
    summary: "Understand the variables behind service-call, labor, parts, urgency, door type, access, taxes, permits, and related damage.",
    directAnswer: "Garage door repair cost cannot be determined accurately from the symptom alone. Price depends on the failed component, door size and weight, parts, labor, access, location, urgency, related damage, taxes, service-call charges, permits, and warranty terms. A written diagnosis and itemized estimate are more useful than a generic online range.",
    warningSigns: ["A quote is given without identifying the door or failed component", "The price excludes service-call charges, labor, taxes, or required parts", "The provider pressures immediate authorization without a written scope", "Multiple unrelated upgrades are added without explanation", "Warranty and payment terms are unclear"],
    commonCauses: ["Different door designs and component ratings", "Local labor and travel costs", "Emergency or after-hours scheduling", "Special-order, obsolete, custom, or commercial parts", "Additional damage discovered during inspection"],
    professionalChecks: ["Identify the root cause and all affected components", "Provide an itemized scope with parts and labor", "Explain repair and replacement alternatives", "State service-call, disposal, tax, permit, and after-hours charges", "Document parts and workmanship warranties"],
    prevention: ["Maintain the door to reduce secondary damage", "Keep model and repair records", "Request written estimates", "Compare scope and credentials rather than price alone"],
    serviceSlugs: ["garage-door-safety-inspection", "garage-door-maintenance", "emergency-garage-door-repair", "garage-door-replacement"]
  },
  {
    title: "How to Choose a Garage Door Repair Company",
    slug: "how-to-choose-garage-door-repair-company",
    category: "Hiring Guides",
    summary: "A practical checklist for identity, credentials, insurance, diagnosis, written estimates, warranties, payment terms, and red flags.",
    directAnswer: "Choose a provider that clearly identifies its legal business, confirms service coverage, explains the diagnosis, supplies a written scope and total price, and documents applicable credentials, insurance, parts, labor, exclusions, and warranties. Avoid deciding solely on the lowest phone quote or fastest promise.",
    warningSigns: ["The business identity or address is unclear", "The provider refuses to provide a written estimate", "Large payment is demanded before scope or parts are confirmed", "Licensing or insurance questions are avoided", "The diagnosis changes without evidence or unnecessary work is pressured"],
    commonCauses: ["Confusing lead-routing pages with the actual service provider", "Comparing prices without comparing scope", "Hiring before checking credentials and reviews", "Emergency pressure reducing normal verification", "Unclear warranty and subcontractor arrangements"],
    professionalChecks: ["Confirm legal name, contact information, service area, and responsible provider", "Verify licensing or registration where required", "Request proof of insurance appropriate to the work", "Obtain diagnosis, options, itemized price, timeline, payment terms, and warranty in writing", "Keep records and inspect completed operation before final payment"],
    prevention: ["Research before an emergency occurs", "Keep maintenance records and provider documents", "Use written agreements", "Do not authorize unexplained work"],
    serviceSlugs: ["garage-door-safety-inspection", "garage-door-maintenance", "emergency-garage-door-repair", "provider-disclosure"]
  },
  {
    title: "Emergency Garage Door Repair: When Is It Truly Urgent?",
    slug: "when-emergency-garage-door-repair-is-urgent",
    category: "Emergency Repair",
    summary: "Distinguish immediate safety or security problems from repairs that can be scheduled after the opening is stabilized.",
    directAnswer: "Garage door service is most urgent when the door is unstable, off track, hanging, affected by a broken spring or cable, unable to secure the property, blocking essential access, or creating a risk of falling or crushing. Fire, injury, crime, electrical danger, and life-safety emergencies require the appropriate public emergency service first.",
    warningSigns: ["The door is hanging, twisted, or partly out of the track", "A spring, cable, bottom bracket, track, or structural connection has failed", "The opening cannot be secured against entry or weather", "The door traps a vehicle needed for essential use", "There is smoke, arcing, fire, injury, or another immediate hazard"],
    commonCauses: ["Spring or cable failure", "Vehicle impact", "Track separation or roller failure", "Opener or control failure", "Storm, wind, water, corrosion, or structural damage"],
    professionalChecks: ["Identify and isolate immediate hazards", "Stabilize the door and secure the opening where possible", "Inspect the full system before restoring operation", "Explain temporary and permanent options", "Provide emergency charges, parts limitations, and follow-up scope in writing"],
    prevention: ["Maintain springs, cables, rollers, tracks, controls, and seals", "Stop operation after an impact or new severe symptom", "Keep emergency contacts and manual-access information available", "Do not stand beneath or force an unstable door"],
    serviceSlugs: ["emergency-garage-door-repair", "24-7-garage-door-repair", "off-track-garage-door-repair", "broken-garage-door-spring-repair"]
  }
];

export function getArticle(slug: string): ArticleItem | undefined {
  return articles.find((article) => article.slug === slug);
}

export const articleCategories = [...new Set(articles.map((article) => article.category))];
