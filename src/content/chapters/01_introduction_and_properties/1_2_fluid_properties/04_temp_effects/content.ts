import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "1_2_4",
    title: "Temperature Effects",
    chapter: "01_introduction_and_properties",
    subchapter: "1_2_fluid_properties",
    topic: "microlearning",
    outcomes: [
      "Predict how temperature changes affect the viscosity of liquids and gases.",
      "Explain the molecular basis for these differences."
    ]
  },
  hook: {
    imageDescription: "A split screen. On the left, a bottle of cold syrup being poured very slowly. On the right, a hot air balloon rising as the air inside is heated."
  },
  interaction: {
    type: "temp_viscosity_graph",
    instruction: "Heat or cool the fluid and watch the viscosity change on the graph. Compare a liquid (oil) and a gas (air).",
    probing_question: "Wait! When we heat the oil, it gets 'runnier' (less viscous). But when we heat the air, it gets 'thicker' (more viscous)! Why do they go in opposite directions?"
  },
  theory: {
    title: "Temperature vs Viscosity",
    content: "In **liquids**, viscosity is dominated by cohesive forces between molecules. Heating provides energy to break these bonds, so **viscosity decreases**. In **gases**, viscosity is dominated by molecular collisions. Heating increases molecular speed and collision frequency, so **viscosity increases**.",
  },
  levels: {
    easy: {
      hook_prompt: "Why is it easier to pour syrup if you microwave it first?",
      hook_commitment: "Does heat always make things flow better?",
      socratic: [
        { question: "When you heat a liquid, do the molecules move further apart and 'let go' of each other?", expected_concept: "cohesion_reduction" },
        { question: "Imagine a crowded room. If everyone starts running faster, do they bump into each other more often?", expected_concept: "collision_increase" }
      ],
      theory_analogy: "Heating a liquid is like melting a glue stick. Heating a gas is like turning up the speed on a bumper car ride.",
      transfer_prompt: "If you are designing a car engine for the Arctic, do you need a different oil than in the Sahara?",
      transfer_real_world: "Honey in the fridge is almost solid, but honey on hot toast flows like water.",
      challenges: [
        { question: "For a gas, as temperature increases, viscosity ________.", hints: ["Think about the bumper cars."], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "Consider the Sutherland's Law for gases and the Andrade's Equation for liquids. Why do we need different mathematical models for these two phases?",
      hook_commitment: "Is the 'stickiness' of a gas the same kind of 'stickiness' as a liquid?",
      socratic: [
        { question: "In a liquid, molecules are always touching. In a gas, they are mostly flying through empty space. Which one depends more on 'momentum exchange' during collisions?", expected_concept: "molecular_momentum_transfer" },
        { question: "If you increase the pressure of a gas at constant temperature, does its viscosity change much? Why?", expected_concept: "pressure_independence" }
      ],
      theory_analogy: "Liquid viscosity is about 'holding hands'; gas viscosity is about 'bumping shoulders'.",
      transfer_prompt: "Why does a hot air balloon pilot need to know that hot air is more viscous than cold air?",
      transfer_real_world: "In high-temperature industrial furnaces, the increased viscosity of hot gases can significantly increase the power needed for ventilation fans.",
      challenges: [
        { question: "Which fluid's viscosity is more sensitive to temperature: Water or Air?", hints: ["Think about which one changes more when you go from 0°C to 100°C."], level: 'standard' }
      ]
    },
    hard: {
      hook_prompt: "Derive the temperature dependence of gas viscosity using the Kinetic Theory of Gases. Why is μ proportional to √T?",
      hook_commitment: "Can we reach a temperature where a liquid starts acting like a gas in terms of its viscosity behavior?",
      socratic: [
        { question: "Discuss the 'Critical Point'. As we approach the critical temperature and pressure, how do the viscous mechanisms of the liquid and gas phases merge?", expected_concept: "critical_point_rheology" },
        { question: "How does the activation energy in the Arrhenius-type viscosity equation for liquids relate to the latent heat of vaporization?", expected_concept: "intermolecular_bond_energy" }
      ],
      theory_analogy: "Viscosity is the macroscopic 'echo' of the microscopic battle between thermal kinetic energy and intermolecular potential energy.",
      transfer_prompt: "Explain why the viscosity of water actually *decreases* slightly if you apply extreme pressure at low temperatures (near 0°C).",
      transfer_real_world: "Cryogenic engineering requires precise viscosity models for liquid helium and nitrogen, where quantum effects can sometimes take over.",
      challenges: [
        { question: "Using Sutherland's Law, calculate the ratio of air viscosity at 500K to its viscosity at 300K.", hints: ["μ ∝ T^(3/2) / (T + S)"], level: 'advanced' }
      ]
    }
  }
};
