import { LessonContent } from '../../../../../utils/types';

export const CONTENT: LessonContent = {
  metadata: {
    id: "1_1_3",
    title: "Continuum Hypothesis",
    chapter: "01_introduction_and_properties",
    subchapter: "1_1_what_is_a_fluid",
    topic: "microlearning",
    outcomes: [
      "Understand the assumption of fluids as continuous media.",
      "Identify the limits of the continuum hypothesis."
    ]
  },
  hook: {
    imageDescription: "A magnifying glass zooming into a drop of water. The first zoom shows a smooth blue surface. The second zoom shows a chaotic swarm of molecules with large gaps."
  },
  interaction: {
    type: "zoom_slider",
    instruction: "Zoom in from a macroscopic drop to the molecular level. Observe how the 'density' changes as you change the sample size.",
    probing_question: "At the molecular level, most of the space is empty! If we tried to calculate the density of a single atom, it would be huge, but the space next to it would be zero. How can we talk about a single 'density' for a whole bucket of water?"
  },
  theory: {
    title: "The Continuum Assumption",
    content: "The **Continuum Hypothesis** assumes that a fluid is a continuous substance with no gaps, even though we know it's made of molecules. We define properties like density at a point by averaging over a small volume that is still large enough to contain millions of molecules. This allows us to use calculus and treat properties as continuous functions of space and time.",
  },
  levels: {
    easy: {
      hook_prompt: "If you look at a digital photo, it looks smooth. But if you zoom in enough, you see squares (pixels). Is water like that?",
      hook_commitment: "Can we treat water as one big smooth thing even if it's made of tiny bits?",
      socratic: [
        { question: "If you have a jar of jellybeans, can you say the jar has a 'color' if some beans are red and some are green?", expected_concept: "averaging" },
        { question: "If you stand very far away from a crowd, does it look like one big moving shape or a thousand individuals?", expected_concept: "scale_of_observation" }
      ],
      theory_analogy: "It's like looking at a forest from a plane. You see a green carpet, not individual leaves.",
      transfer_prompt: "Would the continuum hypothesis work for a single atom in a vacuum?",
      transfer_real_world: "When we check the weather, we talk about 'air pressure' as a single number for a city, ignoring the fact that air is made of billions of separate molecules.",
      challenges: [
        { question: "The continuum hypothesis allows us to use ________ to solve fluid problems.", hints: ["Math involving smooth changes..."], level: 'conceptual' }
      ]
    },
    medium: {
      hook_prompt: "Consider a volume ΔV. As ΔV decreases, the density ρ = Δm/ΔV initially stabilizes. But as ΔV approaches molecular scales, ρ starts to fluctuate wildly. Why? What is the 'mathematical point' in fluid mechanics?",
      hook_commitment: "Is a 'point' in fluid mechanics the same as a 'point' in geometry?",
      socratic: [
        { question: "If our sample volume is too small, we might catch 5 molecules one microsecond and 2 the next. What does this do to our property measurements?", expected_concept: "statistical_fluctuations" },
        { question: "Is there a 'sweet spot' volume that is small enough to be a 'point' but large enough to be a 'continuum'?", expected_concept: "representative_elementary_volume" }
      ],
      theory_analogy: "It's like calculating the average height of a country. You don't need to measure every person, but you need a large enough sample for the average to be meaningful.",
      transfer_prompt: "In the upper atmosphere where air is very thin, does the continuum hypothesis still hold?",
      transfer_real_world: "Vacuum systems in labs often deal with 'rarefied gases' where the continuum hypothesis breaks down because the molecules are too far apart.",
      challenges: [
        { question: "The continuum hypothesis is valid when the characteristic length of the system is much ________ than the mean free path of molecules.", hints: ["Larger or Smaller?"], level: 'standard' }
      ]
    },
    hard: {
      hook_prompt: "Define the Knudsen Number (Kn = λ/L). At what threshold of Kn does the Navier-Stokes equations lose their validity? How does the transition from continuum flow to slip flow and eventually free-molecular flow occur?",
      hook_commitment: "Is the continuum hypothesis a physical reality or a mathematical convenience that simplifies the Boltzmann equation?",
      socratic: [
        { question: "How does the concept of a 'fluid particle' or 'material element' bridge the gap between molecular dynamics and continuum mechanics?", expected_concept: "macroscopic_averaging" },
        { question: "In a shock wave, properties change over a distance comparable to the mean free path. Can we use continuum mechanics inside a shock front?", expected_concept: "shock_thickness_limits" }
      ],
      theory_analogy: "The continuum hypothesis is a low-pass filter applied to the chaotic, high-frequency signals of molecular motion.",
      transfer_prompt: "Discuss the application of the continuum hypothesis in Nanofluidics. Does the small scale of the channels (L) force us back into molecular modeling?",
      transfer_real_world: "Re-entry vehicles at the edge of space must use DSMC (Direct Simulation Monte Carlo) instead of CFD because the air is too thin for the continuum assumption.",
      challenges: [
        { question: "If Kn = 0.001, is the continuum hypothesis valid?", hints: ["Kn < 0.01 is usually the limit."], level: 'advanced' }
      ]
    }
  }
};
