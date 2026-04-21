
import { LessonContent } from '../../../../../../utils/types';

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
  theory: {
    title: "Dynamic vs. Kinematic Viscosity",
    content: "Dynamic Viscosity (μ) is the 'absolute' measure of internal resistance. Kinematic Viscosity (ν) is the measure of this resistance relative to the fluid's density (ρ). It represents how easily a fluid flows under the influence of gravity.",
    formula: "\\nu = \\frac{\\mu}{\\rho}",
    definitions: [
      { term: "μ", desc: "Dynamic Viscosity (Pa·s or kg/m·s)" },
      { term: "ρ", desc: "Density (kg/m³)" },
      { term: "ν", desc: "Kinematic Viscosity (m²/s)" }
    ]
  },
  levels: {
    easy: {
      hook_prompt: "If you have two bottles, one with water and one with thick oil, which one pours out faster?",
      hook_commitment: "Does the weight of the liquid help it pour out faster?",
      socratic: [
        { question: "If you push a heavy toy car and a light toy car with the same force, which one is easier to stop? Is viscosity like that force?", expected_concept: "momentum_vs_friction" },
        { question: "If a liquid is heavy, does gravity pull it down harder?", expected_concept: "gravity_pull" }
      ],
      theory_analogy: "Dynamic viscosity is how sticky the liquid is. Kinematic viscosity is how much that stickiness matters when the liquid is trying to fall.",
      transfer_prompt: "If you have two liquids that are equally sticky, but one is much heavier, which one will win a race down a slide?",
      transfer_real_world: "Cooking oil is thick but light, so it behaves differently than water when you pour it.",
      challenges: [
        { question: "If you increase the density of a fluid, does its kinematic viscosity go up or down?", hints: ["Think about the formula: ν = μ / ρ"], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "Why does heavy oil pour slower than water, even though water is more dense?",
      hook_commitment: "If you have two fluids with the same dynamic viscosity but different densities, which one will spread faster when poured on a flat surface?",
      socratic: [
        { question: "In the simulation, if you keep viscosity constant but increase density, what happens to the drainage speed?", expected_concept: "higher_density_increases_drainage_speed" },
        { question: "Dynamic viscosity (μ) measures internal friction. What property measures the 'force' driving the flow under gravity?", expected_concept: "weight_or_density" }
      ],
      theory_analogy: "Dynamic viscosity is like the 'stickiness' of a crowd, while kinematic viscosity is like how hard it is for that crowd to move through a narrow hallway when being pushed from behind.",
      transfer_prompt: "In a car engine, we care about how oil flows through small gaps. Why might an engineer prefer to look at kinematic viscosity rather than dynamic viscosity for gravity-fed lubrication systems?",
      transfer_real_world: "The 'Stokes' (St) is a common CGS unit for kinematic viscosity. In the industry, 'Centistokes' (cSt) is the standard unit used to grade motor oils.",
      challenges: [
        { question: "If two fluids have the same dynamic viscosity, but Fluid A is twice as dense as Fluid B, which one has a higher kinematic viscosity?", hints: ["Look at the formula: ν = μ / ρ"], level: 'conceptual' }
      ]
    },
    hard: {
      hook_prompt: "Analyze the Navier-Stokes equations in their kinematic form. Why is the kinematic viscosity $\nu$ often called the 'momentum diffusivity'?",
      hook_commitment: "Compare the units of kinematic viscosity ($m^2/s$) with the thermal diffusivity and mass diffusivity. What does this suggest about the nature of $\nu$?",
      socratic: [
        { question: "If a fluid is subjected to a gravitational field, how does the ratio $\mu/\rho$ determine the terminal velocity of a falling sphere (Stokes' Law)?", expected_concept: "kinematic_resistance" },
        { question: "In turbulent flow, the Reynolds number $Re = VL/\nu$ is used. Why is $\nu$ more relevant here than $\mu$?", expected_concept: "inertial_vs_viscous_forces" }
      ],
      theory_analogy: "Kinematic viscosity represents the diffusion of momentum through a fluid, analogous to how thermal diffusivity represents the diffusion of heat.",
      transfer_prompt: "A fluid has a dynamic viscosity of 0.05 Pa·s and a density of 900 $kg/m^3$. Calculate its kinematic viscosity in $m^2/s$ and in Centistokes.",
      transfer_real_world: "Viscometers often measure the time it takes for a fixed volume of fluid to flow through a capillary under gravity, directly yielding the kinematic viscosity.",
      challenges: [
        { question: "Convert 50 cSt to SI units ($m^2/s$). If the density is 850 $kg/m^3$, find the dynamic viscosity in Pa·s.", hints: ["1 cSt = $10^{-6} m^2/s$", "$\mu = \nu \rho$"], level: 'standard' }
      ]
    }
  }
};
