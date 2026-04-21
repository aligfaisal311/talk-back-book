import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "1_1_2",
    title: "Shear Stress Response",
    chapter: "01_introduction_and_properties",
    subchapter: "1_1_what_is_a_fluid",
    topic: "microlearning",
    outcomes: [
      "Define shear stress in the context of fluid layers.",
      "Understand the relationship between shear stress and velocity gradient."
    ]
  },
  hook: {
    imageDescription: "A diagram showing a fluid between two parallel plates. The top plate is moving, causing the fluid layers to slide. Arrows show the velocity profile."
  },
  interaction: {
    type: "plate_slider",
    instruction: "Drag the top plate to see how the fluid layers respond. Change the fluid 'stickiness' to see the difference.",
    probing_question: "Notice how the fluid layer touching the moving plate moves at the same speed as the plate, while the bottom layer stays still. Why doesn't the whole block of fluid just move together?"
  },
  theory: {
    title: "Shear Stress and the No-Slip Condition",
    content: "When a fluid is in contact with a solid boundary, it 'sticks' to it—this is the **No-Slip Condition**. As one layer moves faster than the one below it, it exerts a tangential force called **Shear Stress** (τ). This stress is proportional to the rate at which the velocity changes with distance (the velocity gradient).",
  },
  levels: {
    easy: {
      hook_prompt: "If you slide your hand over a bowl of water, does the water at the bottom move as fast as the water at the top?",
      hook_commitment: "Does the water 'stick' to your hand?",
      socratic: [
        { question: "Imagine a deck of cards. You slide the top card. Do the middle cards move a little bit too?", expected_concept: "layer_sliding" },
        { question: "If the cards were covered in glue, would it be harder to slide the top one?", expected_concept: "internal_friction" }
      ],
      theory_analogy: "It's like a line of people holding onto each other's shirts. If the person at the front runs, everyone gets pulled along, but those further back feel less pull.",
      transfer_prompt: "Why is it easier to swim in water than in a pool of syrup?",
      transfer_real_world: "Dust sticks to fan blades even when they are spinning fast because of the no-slip condition—the air right at the surface isn't moving relative to the blade!",
      challenges: [
        { question: "Shear stress is a force that acts ________ to the surface.", hints: ["Parallel or Perpendicular?"], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "Consider two parallel plates with a fluid in between. You pull the top plate at a constant velocity. Why does a linear velocity profile develop in a simple fluid? What is the physical meaning of the slope of this profile?",
      hook_commitment: "Is the force you apply to the plate fighting gravity, or something else?",
      socratic: [
        { question: "If you double the distance between the plates but keep the speed the same, is it easier or harder to pull the plate?", expected_concept: "velocity_gradient" },
        { question: "The ratio of Force to Area is Stress. If the fluid is twice as 'sticky', do you need twice the Force?", expected_concept: "viscosity_proportionality" }
      ],
      theory_analogy: "Think of a row of skaters on ice. If the first skater is pulled, they have to pull the next person, who pulls the next. The 'pull' is the shear stress.",
      transfer_prompt: "In a pipe, where is the fluid moving the fastest? At the walls or in the center?",
      transfer_real_world: "Blood flow in our arteries has a velocity profile. The shear stress at the artery walls is a key factor in cardiovascular health.",
      challenges: [
        { question: "If the velocity profile is u(y) = 5y, what is the velocity gradient du/dy?", hints: ["Take the derivative."], level: 'standard' }
      ]
    },
    hard: {
      hook_prompt: "Derive the expression for shear stress in a Newtonian fluid. How does the molecular momentum exchange between layers moving at different velocities result in a macroscopic shear stress?",
      hook_commitment: "Is the no-slip condition a fundamental law of physics or a convenient macroscopic approximation?",
      socratic: [
        { question: "Relate the shear stress to the transport of momentum. Is shear stress essentially the flux of x-momentum in the y-direction?", expected_concept: "momentum_flux" },
        { question: "Under what conditions (e.g., Knudsen number) might the no-slip condition fail?", expected_concept: "rarefied_gas_dynamics" }
      ],
      theory_analogy: "Shear stress is the macroscopic manifestation of billions of molecular collisions transferring momentum from high-velocity regions to low-velocity regions.",
      transfer_prompt: "How would the shear stress distribution look in a non-Newtonian fluid where the viscosity depends on the shear rate?",
      transfer_real_world: "In microfluidics, the surface-to-volume ratio is so high that shear stress and the no-slip condition dominate almost all other forces.",
      challenges: [
        { question: "For a fluid with velocity u = y^2, calculate the shear stress at y=2 if μ=0.1.", hints: ["τ = μ * (du/dy)"], level: 'advanced' }
      ]
    }
  }
};
