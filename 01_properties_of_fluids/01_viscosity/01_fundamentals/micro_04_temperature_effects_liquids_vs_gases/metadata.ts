
import { LessonContent } from '../../../../types';

export const MICRO_04_DATA: LessonContent = {
  metadata: {
    id: "micro_04",
    title: "Temperature Effects",
    chapter: "01_properties_of_fluids",
    subchapter: "01_viscosity",
    topic: "01_fundamentals",
    outcomes: [
      "Explain why viscosity decreases with temperature in liquids.",
      "Explain why viscosity increases with temperature in gases.",
      "Identify the dominant physical mechanism for each phase."
    ]
  },
  hook: {
    type: "paradox_hook",
    visual: "honey_vs_air_heating",
    prompt: "Heating honey makes it runny, but heating air makes it 'thicker' (more viscous). Why the opposite behavior?",
    commitment_question: "If you heat up a gas inside a pipe, will it be easier or harder for the gas to flow through?",
    imageDescription: "A split graphic showing a jar of honey being heated and becoming liquid, contrasted with a molecular view of gas particles colliding more violently as temperature rises."
  },
  interaction: {
    type: "molecular_dynamics_sim",
    visual: "molecular_vibration",
    instruction: "Use the temperature slider. Observe the 'cohesive bonds' in the liquid vs the 'collision frequency' in the gas.",
    probing_question: "In which state does heat break 'sticky' bonds, and in which does it create more 'traffic jams'?",
    controls: {
      temp_slider: { label: "Temperature", min: 20, max: 500, unit: "°C" }
    }
  },
  socratic: [
    {
      question: "In liquids, molecules are held together by cohesive forces. What happens to these 'sticky' forces as molecules vibrate faster with heat?",
      expected_concept: "cohesive_forces_weaken"
    },
    {
      question: "In gases, molecules are far apart. Viscosity comes from molecules colliding and exchanging momentum. What happens to collision frequency as they move faster?",
      expected_concept: "collision_frequency_increases"
    },
    {
      question: "So, if viscosity is 'resistance to motion', why does more collisions lead to higher viscosity in gases?",
      expected_concept: "increased_momentum_transfer"
    }
  ],
  theory: {
    title: "Temperature & Viscosity",
    content: "Viscosity is governed by two competing mechanisms: Cohesive Forces (dominant in liquids) and Molecular Momentum Transfer (dominant in gases).",
    analogy: "Liquids are like a group of people holding hands; heat makes them let go. Gases are like a busy airport; heat makes everyone run faster, causing more accidental bumps and delays.",
    definitions: [
      { term: "Liquids", desc: "T ↑ , μ ↓ (Cohesion decreases)" },
      { term: "Gases", desc: "T ↑ , μ ↑ (Momentum transfer increases)" }
    ]
  },
  transfer: {
    prompt: "Why do we use 'multi-grade' engine oils (like 5W-30) instead of simple oils that might become too thin in a hot engine?",
    real_world: "In high-speed aerodynamics (like re-entry vehicles), the air gets extremely hot. Engineers must account for the *increased* viscosity of air, which creates massive skin friction drag on the spacecraft."
  },
  challenges: [
    {
      level: "conceptual",
      question: "If you were designing a cooling system using a liquid, would it be more efficient (less pumping power) at the start or after the system has warmed up?",
      hints: ["Pumping power depends on viscosity.", "How does liquid viscosity change as it warms up?"]
    }
  ]
};
