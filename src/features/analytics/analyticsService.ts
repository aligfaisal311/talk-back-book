import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const trackEvent = async (userId: string, eventName: string, eventData: any) => {
  try {
    const eventsRef = collection(db, 'users', userId, 'events');
    await addDoc(eventsRef, {
      eventName,
      eventData,
      timestamp: serverTimestamp()
    });
  } catch (error) {
    console.error('Failed to track event:', error);
  }
};
