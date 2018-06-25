export async function loadAudio(src)
{
    //For Android, audio must be stored in android/app/src/main/res/raw
    //For iOS you must add audio files through XCode
  const initialStatus = {
      shouldPlay: true,
      rate: 1.0, 
      shouldCorrectPitch: true,
      volume: 1.0,
      isMuted: false,
      isLooping: false,
    };
    /*
    try{
    
	
    const { sound, status } = await Audio.Sound.create(
        src,
        initialStatus
    );
    }
    catch (error)
    {
	console.log(error);
	return null;
    }*/

    return sound;
}
