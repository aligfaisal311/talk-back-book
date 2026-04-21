import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/config';

export interface StudentProgress {
  completedLessons: string[];
  currentLevel: 'easy' | 'medium' | 'hard';
  lastAccessed: number;
}

export const saveProgress = async (userId: string, progress: StudentProgress) => {
  const progressRef = doc(db, 'users', userId, 'data', 'progress');
  await setDoc(progressRef, {
    ...progress,
    lastAccessed: Date.now()
  }, { merge: true });
};

export const getProgress = async (userId: string): Promise<StudentProgress | null> => {
  const progressRef = doc(db, 'users', userId, 'data', 'progress');
  const docSnap = await getDoc(progressRef);
  if (docSnap.exists()) {
    return docSnap.data() as StudentProgress;
  }
  return null;
};

export const subscribeToProgress = (userId: string, callback: (progress: StudentProgress) => void) => {
  const progressRef = doc(db, 'users', userId, 'data', 'progress');
  return onSnapshot(progressRef, (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data() as StudentProgress);
    }
  });
};
