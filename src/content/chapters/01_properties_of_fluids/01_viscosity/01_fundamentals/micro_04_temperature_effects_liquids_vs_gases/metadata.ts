
import { LessonContent } from '../../../../../../utils/types';

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
  theory: {
    title: "Temperature & Viscosity",
    content: "Viscosity is governed by two competing mechanisms: Cohesive Forces (dominant in liquids) and Molecular Momentum Transfer (dominant in gases).",
    definitions: [
      { term: "Liquids", desc: "T ↑ , μ ↓ (Cohesion decreases)" },
      { term: "Gases", desc: "T ↑ , μ ↑ (Momentum transfer increases)" }
    ]
  },
  levels: {
    easy: {
      hook_prompt: "Why does honey get runny when you heat it up in the microwave?",
      hook_commitment: "If you heat up air, does it also get 'runnier'?",
      socratic: [
        { question: "When you heat something up, do the molecules move faster or slower?", expected_concept: "faster_motion" },
        { question: "If molecules in honey are holding hands, does moving faster help them break free?", expected_concept: "breaking_bonds" }
      ],
      theory_analogy: "Liquids are like people holding hands; heat makes them let go. Gases are like a busy playground where heat makes everyone run and bump into each other more.",
      transfer_prompt: "If you want oil to flow through a small pipe easily, should you heat the pipe or cool it?",
      transfer_real_world: "Cold maple syrup is hard to pour, but warm syrup flows easily over your waffles.",
      challenges: [
        { question: "True or False: Heating a gas makes it easier for it to flow through a pipe.", hints: ["Think about the 'busy playground' analogy."], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "Heating honey makes it runny, but heating air makes it 'thicker' (more viscous). Why the opposite behavior?",
      hook_commitment: "If you heat up a gas inside a pipe, will it be easier or harder for the gas to flow through?",
      socratic: [
        { question: "In liquids, molecules are held together by cohesive forces. What happens to these 'sticky' forces as molecules vibrate faster with heat?", expected_concept: "cohesive_forces_weaken" },
        { question: "In gases, molecules are far apart. Viscosity comes from molecules colliding and exchanging momentum. What happens to collision frequency as they move faster?", expected_concept: "collision_frequency_increases" }
      ],
      theory_analogy: "Liquids are like a group of people holding hands; heat makes them let go. Gases are like a busy airport; heat makes everyone run faster, causing more accidental bumps and delays.",
      transfer_prompt: "Why do we use 'multi-grade' engine oils (like 5W-30) instead of simple oils that might become too thin in a hot engine?",
      transfer_real_world: "In high-speed aerodynamics, air gets extremely hot. Engineers must account for the increased viscosity of air, which creates massive skin friction drag.",
      challenges: [
        { question: "If you were designing a cooling system using a liquid, would it be more efficient at the start or after the system has warmed up?", hints: ["Pumping power depends on viscosity."], level: 'conceptual' }
      ]
    },
    hard: {
      hook_prompt: "Contrast the Sutherland's law for gases with the Andrade equation for liquids. Why do they have such different functional forms?",
      hook_commitment: "Explain the molecular basis for the temperature dependence of viscosity in terms of the mean free path in gases vs. the hole theory in liquids.",
      socratic: [
        { question: "For a gas, $\mu \propto \sqrt{T}$. Derive this using the kinetic theory of gases and the concept of momentum transfer.", expected_concept: "kinetic_theory_derivation" },
        { question: "In liquids, the viscosity follows an exponential decay $\mu = A e^{B/T}$. What does the constant $B$ represent physically?", expected_concept: "activation_energy" }
      ],
      theory_analogy: "In gases, viscosity is a transport property linked to the thermal velocity of molecules. In liquids, it's a structural property linked to the energy barriers of molecular rearrangement.",
      transfer_prompt: "Calculate the percentage change in the viscosity of air if the temperature rises from 300K to 600K using Sutherland's law.",
      transfer_real_world: "The viscosity of magma is highly temperature-dependent. A small drop in temperature can cause a lava flow to stall or change its flow regime entirely.",
      challenges: [
        { question: "Using Sutherland's formula $\mu = \mu_0 (T/T_0)^{3/2} (T_0+S)/(T+S)$, find the viscosity of air at 500K given $\mu_0 = 1.789 \times 10^{-5}$ Pa·s at $T_0=273K$ and $S=110K$.", hints: ["Plug in the values carefully."], level: 'standard' }
      ]
    }
  }
};
