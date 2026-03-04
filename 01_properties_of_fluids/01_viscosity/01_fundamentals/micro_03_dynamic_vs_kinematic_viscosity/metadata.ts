
import { LessonContent } from '../../../../types';

export const MICRO_03_DATA: LessonContent = {
  metadata: {
    id: "micro_03",
    title: "Dynamic vs Kinematic Viscosity",
    chapter: "01_properties_of_fluids",
    subchapter: "01_viscosity",
    topic: "01_fundamentals",
    outcomes: [
      "Distinguish between dynamic (absolute) and kinematic viscosity.",
      "Understand the role of density in kinematic viscosity.",
      "Identify the SI units for both types of viscosity."
    ]
  },
  hook: {
    type: "comparison_hook",
    visual: "oil_vs_water_pour",
    prompt: "Why does heavy oil pour slower than water, even though water is more dense?",
    commitment_question: "If you have two fluids with the same dynamic viscosity but different densities, which one will spread faster when poured on a flat surface?",
    imageDescription: "A side-by-side comparison of motor oil and water being poured. The oil is thick and slow, while water is thin and fast. A scale shows that water is actually slightly heavier per unit volume."
  },
  interaction: {
    type: "fluid_drop_simulation",
    visual: "gravity_drain",
    instruction: "Toggle between 'Dynamic' and 'Kinematic' views. Observe how the fluid drains through a small hole under its own weight.",
    probing_question: "Does the fluid's weight (density) help it overcome its own internal friction (viscosity) during drainage?",
    controls: {
      density_slider: { label: "Fluid Density", min: 500, max: 1500, unit: "kg/m³" },
      viscosity_slider: { label: "Dynamic Viscosity", min: 0.001, max: 0.5, unit: "Pa·s" }
    }
  },
  socratic: [
    {
      question: "In the simulation, if you keep viscosity constant but increase density, what happens to the drainage speed?",
      expected_concept: "higher_density_increases_drainage_speed"
    },
    {
      question: "Dynamic viscosity (μ) measures internal friction. What property measures the 'force' driving the flow under gravity?",
      expected_concept: "weight_or_density"
    },
    {
      question: "If kinematic viscosity (ν) is the ratio of internal friction to driving force (density), how would you mathematically relate μ, ρ, and ν?",
      expected_concept: "nu_equals_mu_over_rho"
    }
  ],
  theory: {
    title: "Dynamic vs. Kinematic Viscosity",
    content: "Dynamic Viscosity (μ) is the 'absolute' measure of internal resistance. Kinematic Viscosity (ν) is the measure of this resistance relative to the fluid's density (ρ). It represents how easily a fluid flows under the influence of gravity.",
    formula: "\\nu = \\frac{\\mu}{\\rho}",
    definitions: [
      { term: "μ", desc: "Dynamic Viscosity (Pa·s or kg/m·s)" },
      { term: "ρ", desc: "Density (kg/m³)" },
      { term: "ν", desc: "Kinematic Viscosity (m²/s)" }
    ],
    analogy: "Dynamic viscosity is like the 'stickiness' of a crowd, while kinematic viscosity is like how hard it is for that crowd to move through a narrow hallway when being pushed from behind."
  },
  transfer: {
    prompt: "In a car engine, we care about how oil flows through small gaps. Why might an engineer prefer to look at kinematic viscosity rather than dynamic viscosity for gravity-fed lubrication systems?",
    real_world: "The 'Stokes' (St) is a common CGS unit for kinematic viscosity. In the industry, 'Centistokes' (cSt) is the standard unit used to grade motor oils (e.g., SAE 30 oil has a specific cSt range at 100°C)."
  },
  challenges: [
    {
      level: "conceptual",
      question: "If two fluids have the same dynamic viscosity, but Fluid A is twice as dense as Fluid B, which one has a higher kinematic viscosity?",
      hints: ["Look at the formula: ν = μ / ρ", "If ρ (denominator) increases, what happens to the result?"]
    }
  ]
};
