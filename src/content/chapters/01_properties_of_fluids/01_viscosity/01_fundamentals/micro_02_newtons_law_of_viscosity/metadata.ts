
import { LessonContent } from '../../../../../../utils/types';

export const MICRO_02_DATA: LessonContent = {
  metadata: {
    id: "micro_02",
    title: "Newton's Law of Viscosity",
    chapter: "01_properties_of_fluids",
    subchapter: "01_viscosity",
    topic: "01_fundamentals",
    outcomes: [
      "Define shear stress and velocity gradient in the context of fluid flow.",
      "Apply Newton's Law of Viscosity to calculate shear stress."
    ]
  },
  hook: {
    imageDescription: "Technical illustration of two parallel plates with a blue fluid between them. Arrows indicate both plates moving in the same direction at identical speeds, showing zero relative motion between layers."
  },
  interaction: {
    type: "slider_simulation",
    visual: "parallel_plates_fluid_layers",
    controls: {
      slider: { label: "Top Plate Velocity", min: 0, max: 2, unit: "m/s" }
    },
    instruction: "Move the slider slowly. Observe when resistance (the 'stretching' of fluid) appears and when it disappears."
  },
  theory: {
    title: "Newton’s Law of Viscosity",
    content: "Your observations show that resistance develops only when velocity changes between adjacent fluid layers. Newton’s law expresses this as: τ = μ (du/dy)",
    formula: "\\tau = \\mu \\frac{du}{dy}",
    definitions: [
      { term: "τ", desc: "Shear stress (resistance per unit area)" },
      { term: "du/dy", desc: "Velocity gradient (rate of change between layers)" },
      { term: "μ", desc: "Dynamic viscosity (fluid property)" }
    ]
  },
  levels: {
    easy: {
      hook_prompt: "If you slide two books over each other with a layer of jelly in between, when do you feel the most resistance?",
      hook_commitment: "Does the jelly push back more if you slide the top book faster?",
      socratic: [
        { question: "If both books move at the same speed, does the jelly get squished or stretched?", expected_concept: "no_relative_motion" },
        { question: "If you hold the bottom book still and move the top one, is it harder than moving both together?", expected_concept: "relative_velocity" }
      ],
      theory_analogy: "It's like sliding a deck of cards. The cards at the top move fast, while the ones at the bottom stay still.",
      transfer_prompt: "If the layer of jelly is thinner, is it harder or easier to slide the books?",
      transfer_real_world: "Thin layers of oil in your car engine protect the metal parts from rubbing together.",
      challenges: [
        { question: "If you double the speed of the top book, what happens to the force you need to pull it?", hints: ["Think about if it's a direct relationship."], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "If both plates move at the same speed, why does the fluid suddenly offer no resistance?",
      hook_commitment: "Before you move the plates, predict: If top and bottom plates move at 1 m/s in the same direction, will there be internal friction?",
      socratic: [
        { question: "When both plates move together at the same speed, what do you observe about the relative motion between layers?", expected_concept: "no_relative_motion" },
        { question: "As you increase the top plate speed relative to the bottom, what changes inside the fluid layers?", expected_concept: "relative_motion_between_layers" }
      ],
      theory_analogy: "Imagine layers of fluid as people running at different speeds. The fast ones have to pull the slow ones along.",
      transfer_prompt: "If the fluid gap is reduced while velocities remain the same, will resistance increase or decrease? Explain without calculation.",
      transfer_real_world: "In engine lubrication, thin oil films must withstand high shear rates. If the gap becomes too small, the resistance (heat) can melt the bearings!",
      challenges: [
        { question: "If velocity difference doubles while fluid thickness remains constant, how does shear stress change?", hints: ["Look at the formula: is τ directly or inversely proportional to du?"], level: 'conceptual' }
      ]
    },
    hard: {
      hook_prompt: "Analyze the velocity profile of a Couette flow. Why is the shear stress constant across the entire gap for a Newtonian fluid?",
      hook_commitment: "Mathematically, if $u(y)$ is linear, what can you conclude about the distribution of shear stress $\tau$?",
      socratic: [
        { question: "Derive the velocity gradient $du/dy$ for a flow between two plates separated by distance $L$ with relative velocity $V$.", expected_concept: "V_over_L" },
        { question: "If the fluid is non-Newtonian, how would the relationship between $\tau$ and $du/dy$ deviate from Newton's Law?", expected_concept: "non_linear_rheology" }
      ],
      theory_analogy: "Newton's Law of Viscosity is the fluid mechanical equivalent of Hooke's Law for solids, relating stress to the rate of strain.",
      transfer_prompt: "In a pipe flow (Poiseuille flow), the velocity profile is parabolic. Where is the shear stress maximum, and why?",
      transfer_real_world: "Calculating the wall shear stress in blood vessels is vital for understanding plaque formation and vascular health.",
      challenges: [
        { question: "A plate moves at 2 m/s over a 1mm oil film ($\mu = 0.1$ Pa·s). Calculate the shear stress. If the area is 0.5 $m^2$, find the required force.", hints: ["$\tau = \mu (V/L)$", "$F = \tau A$"], level: 'standard' }
      ]
    }
  }
};
