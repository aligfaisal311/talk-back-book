
import { LessonContent } from '../../../../types';

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
    type: "question_hook",
    visual: "parallel_plates_fluid_layers",
    prompt: "If both plates move at the same speed, why does the fluid suddenly offer no resistance?",
    commitment_question: "Before you move the plates, predict: If top and bottom plates move at 1 m/s in the same direction, will there be internal friction?",
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
  socratic: [
    {
      question: "When both plates move together at the same speed, what do you observe about the relative motion between layers?",
      expected_concept: "no_relative_motion"
    },
    {
      question: "As you increase the top plate speed relative to the bottom, what changes inside the fluid layers?",
      expected_concept: "relative_motion_between_layers"
    },
    {
      question: "Is resistance appearing because of the absolute speed, or because layers move differently?",
      expected_concept: "velocity_difference"
    }
  ],
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
  transfer: {
    prompt: "If the fluid gap is reduced while velocities remain the same, will resistance increase or decrease? Explain without calculation.",
    real_world: "In engine lubrication, thin oil films must withstand high shear rates. If the gap becomes too small, the resistance (heat) can melt the bearings!"
  },
  challenges: [
    {
      level: "conceptual",
      question: "If velocity difference doubles while fluid thickness remains constant, how does shear stress change?",
      hints: ["Focus on proportionality, not numbers.", "Look at the formula: is τ directly or inversely proportional to du?"]
    }
  ]
};
