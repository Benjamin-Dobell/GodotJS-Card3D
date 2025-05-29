// AUTO-GENERATED
declare module "godot" {
    /** MP3 audio stream driver.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreammp3.html  
     */
    class AudioStreamMP3 extends AudioStream {
        constructor(identifier?: any)
        /** Creates a new [AudioStreamMP3] instance from the given buffer. The buffer must contain MP3 data. */
        static loadFromBuffer(streamData: PackedByteArray | byte[] | ArrayBuffer): null | AudioStreamMP3
        
        /** Creates a new [AudioStreamMP3] instance from the given file path. The file must be in MP3 format. */
        static loadFromFile(path: string): null | AudioStreamMP3
        
        /** Contains the audio data in bytes.  
         *  You can load a file without having to import it beforehand using the code snippet below. Keep in mind that this snippet loads the whole file into memory and may not be ideal for huge files (hundreds of megabytes or more).  
         *    
         */
        get data(): PackedByteArray
        set data(value: PackedByteArray | byte[] | ArrayBuffer)
        get bpm(): float64
        set bpm(value: float64)
        get beatCount(): int64
        set beatCount(value: int64)
        get barBeats(): int64
        set barBeats(value: int64)
        
        /** If `true`, the stream will automatically loop when it reaches the end. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** Time in seconds at which the stream starts after being looped. */
        get loopOffset(): float64
        set loopOffset(value: float64)
    }
    /** Plays real-time audio input data.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreammicrophone.html  
     */
    class AudioStreamMicrophone extends AudioStream {
        constructor(identifier?: any)
    }
    /** A class representing an Ogg Vorbis audio stream.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamoggvorbis.html  
     */
    class AudioStreamOggVorbis extends AudioStream {
        constructor(identifier?: any)
        /** Creates a new [AudioStreamOggVorbis] instance from the given buffer. The buffer must contain Ogg Vorbis data. */
        static loadFromBuffer(streamData: PackedByteArray | byte[] | ArrayBuffer): null | AudioStreamOggVorbis
        
        /** Creates a new [AudioStreamOggVorbis] instance from the given file path. The file must be in Ogg Vorbis format. */
        static loadFromFile(path: string): null | AudioStreamOggVorbis
        
        /** Contains the raw Ogg data for this stream. */
        get packetSequence(): null | GObject
        set packetSequence(value: null | GObject)
        get bpm(): float64
        set bpm(value: float64)
        get beatCount(): int64
        set beatCount(value: int64)
        get barBeats(): int64
        set barBeats(value: int64)
        
        /** If `true`, the audio will play again from the specified [member loop_offset] once it is done playing. Useful for ambient sounds and background music. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** Time in seconds at which the stream starts after being looped. */
        get loopOffset(): float64
        set loopOffset(value: float64)
    }
    /** Meta class for playing back audio.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplayback.html  
     */
    class AudioStreamPlayback extends RefCounted {
        constructor(identifier?: any)
        /** Override this method to customize what happens when the playback starts at the given position, such as by calling [method AudioStreamPlayer.play]. */
        /* gdvirtual */ _start(fromPos: float64): void
        
        /** Override this method to customize what happens when the playback is stopped, such as by calling [method AudioStreamPlayer.stop]. */
        /* gdvirtual */ _stop(): void
        
        /** Overridable method. Should return `true` if this playback is active and playing its audio stream. */
        /* gdvirtual */ _isPlaying(): boolean
        
        /** Overridable method. Should return how many times this audio stream has looped. Most built-in playbacks always return `0`. */
        /* gdvirtual */ _getLoopCount(): int64
        
        /** Overridable method. Should return the current progress along the audio stream, in seconds. */
        /* gdvirtual */ _getPlaybackPosition(): float64
        
        /** Override this method to customize what happens when seeking this audio stream at the given [param position], such as by calling [method AudioStreamPlayer.seek]. */
        /* gdvirtual */ _seek(position: float64): void
        
        /** Override this method to customize how the audio stream is mixed. This method is called even if the playback is not active.  
         *      
         *  **Note:** It is not useful to override this method in GDScript or C#. Only GDExtension can take advantage of it.  
         */
        /* gdvirtual */ _mix(buffer: int64, rateScale: float64, frames: int64): int64
        
        /** Overridable method. Called whenever the audio stream is mixed if the playback is active and [method AudioServer.set_enable_tagging_used_audio_streams] has been set to `true`. Editor plugins may use this method to "tag" the current position along the audio stream and display it in a preview. */
        /* gdvirtual */ _tagUsedStreams(): void
        
        /** Set the current value of a playback parameter by name (see [method AudioStream._get_parameter_list]). */
        /* gdvirtual */ _setParameter(name: StringName, value: any): void
        
        /** Return the current value of a playback parameter by name (see [method AudioStream._get_parameter_list]). */
        /* gdvirtual */ _getParameter(name: StringName): any
        
        /** Associates [AudioSamplePlayback] to this [AudioStreamPlayback] for playing back the audio sample of this stream. */
        setSamplePlayback(playbackSample: AudioSamplePlayback): void
        
        /** Returns the [AudioSamplePlayback] associated with this [AudioStreamPlayback] for playing back the audio sample of this stream. */
        getSamplePlayback(): null | AudioSamplePlayback
        
        /** Mixes up to [param frames] of audio from the stream from the current position, at a rate of [param rate_scale], advancing the stream.  
         *  Returns a [PackedVector2Array] where each element holds the left and right channel volume levels of each frame.  
         *      
         *  **Note:** Can return fewer frames than requested, make sure to use the size of the return value.  
         */
        mixAudio(rateScale: float64, frames: int64): PackedVector2Array
        
        /** Starts the stream from the given [param from_pos], in seconds. */
        start(fromPos?: float64 /* = 0 */): void
        
        /** Seeks the stream at the given [param time], in seconds. */
        seek(time?: float64 /* = 0 */): void
        
        /** Stops the stream. */
        stop(): void
        
        /** Returns the number of times the stream has looped. */
        getLoopCount(): int64
        
        /** Returns the current position in the stream, in seconds. */
        getPlaybackPosition(): float64
        
        /** Returns `true` if the stream is playing. */
        isPlaying(): boolean
    }
    /** Playback component of [AudioStreamInteractive].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybackinteractive.html  
     */
    class AudioStreamPlaybackInteractive extends AudioStreamPlayback {
        constructor(identifier?: any)
        /** Switch to a clip (by name). */
        switchToClipByName(clipName: StringName): void
        
        /** Switch to a clip (by index). */
        switchToClip(clipIndex: int64): void
        
        /** Return the index of the currently playing clip. You can use this to get the name of the currently playing clip with [method AudioStreamInteractive.get_clip_name].  
         *  **Example:** Get the currently playing clip name from inside an [AudioStreamPlayer] node.  
         *    
         */
        getCurrentClipIndex(): int64
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybackoggvorbis.html */
    class AudioStreamPlaybackOggVorbis extends AudioStreamPlaybackResampled {
        constructor(identifier?: any)
    }
    /** Playback class used for [AudioStreamPlaylist].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybackplaylist.html  
     */
    class AudioStreamPlaybackPlaylist extends AudioStreamPlayback {
        constructor(identifier?: any)
    }
    /** Playback instance for [AudioStreamPolyphonic].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybackpolyphonic.html  
     */
    class AudioStreamPlaybackPolyphonic extends AudioStreamPlayback {
        /** Returned by [method play_stream] in case it could not allocate a stream for playback. */
        static readonly INVALID_ID = -1
        constructor(identifier?: any)
        
        /** Play an [AudioStream] at a given offset, volume, pitch scale, playback type, and bus. Playback starts immediately.  
         *  The return value is a unique integer ID that is associated to this playback stream and which can be used to control it.  
         *  This ID becomes invalid when the stream ends (if it does not loop), when the [AudioStreamPlaybackPolyphonic] is stopped, or when [method stop_stream] is called.  
         *  This function returns [constant INVALID_ID] if the amount of streams currently playing equals [member AudioStreamPolyphonic.polyphony]. If you need a higher amount of maximum polyphony, raise this value.  
         */
        playStream(stream: AudioStream, fromOffset?: float64 /* = 0 */, volumeDb?: float64 /* = 0 */, pitchScale?: float64 /* = 1 */, playbackType?: AudioServer.PlaybackType /* = 0 */, bus?: StringName /* = 'Master' */): int64
        
        /** Change the stream volume (in db). The [param stream] argument is an integer ID returned by [method play_stream]. */
        setStreamVolume(stream: int64, volumeDb: float64): void
        
        /** Change the stream pitch scale. The [param stream] argument is an integer ID returned by [method play_stream]. */
        setStreamPitchScale(stream: int64, pitchScale: float64): void
        
        /** Returns `true` if the stream associated with the given integer ID is still playing. Check [method play_stream] for information on when this ID becomes invalid. */
        isStreamPlaying(stream: int64): boolean
        
        /** Stop a stream. The [param stream] argument is an integer ID returned by [method play_stream], which becomes invalid after calling this function. */
        stopStream(stream: int64): void
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybackresampled.html */
    class AudioStreamPlaybackResampled extends AudioStreamPlayback {
        constructor(identifier?: any)
        /* gdvirtual */ _mixResampled(dstBuffer: int64, frameCount: int64): int64
        /* gdvirtual */ _getStreamSamplingRate(): float64
        beginResample(): void
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybacksynchronized.html */
    class AudioStreamPlaybackSynchronized extends AudioStreamPlayback {
        constructor(identifier?: any)
    }
    namespace AudioStreamPlayer {
        enum MixTarget {
            MixTargetStereo = 0,
            MixTargetSurround = 1,
            MixTargetCenter = 2,
        }
    }
    /** A node for audio playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplayer.html  
     */
    class AudioStreamPlayer<Map extends NodePathMap = any> extends Node<Map> {
        /** The audio will be played only on the first channel. This is the default. */
        static readonly MIX_TARGET_STEREO = 0
        
        /** The audio will be played on all surround channels. */
        static readonly MIX_TARGET_SURROUND = 1
        
        /** The audio will be played on the second channel, which is usually the center. */
        static readonly MIX_TARGET_CENTER = 2
        constructor(identifier?: any)
        
        /** Plays a sound from the beginning, or the given [param from_position] in seconds. */
        play(fromPosition?: float64 /* = 0 */): void
        
        /** Restarts all sounds to be played from the given [param to_position], in seconds. Does nothing if no sounds are playing. */
        seek(toPosition: float64): void
        
        /** Stops all sounds from this node. */
        stop(): void
        
        /** Returns the position in the [AudioStream] of the latest sound, in seconds. Returns `0.0` if no sounds are playing.  
         *      
         *  **Note:** The position is not always accurate, as the [AudioServer] does not mix audio every processed frame. To get more accurate results, add [method AudioServer.get_time_since_last_mix] to the returned position.  
         *      
         *  **Note:** This method always returns `0.0` if the [member stream] is an [AudioStreamInteractive], since it can have multiple clips playing at once.  
         */
        getPlaybackPosition(): float64
        
        /** Returns `true` if any sound is active, even if [member stream_paused] is set to `true`. See also [member playing] and [method get_stream_playback]. */
        hasStreamPlayback(): boolean
        
        /** Returns the latest [AudioStreamPlayback] of this node, usually the most recently created by [method play]. If no sounds are playing, this method fails and returns an empty playback. */
        getStreamPlayback(): null | AudioStreamPlayback
        
        /** The [AudioStream] resource to be played. Setting this property stops all currently playing sounds. If left empty, the [AudioStreamPlayer] does not work. */
        get stream(): null | AudioStream
        set stream(value: null | AudioStream)
        
        /** Volume of sound, in decibels. This is an offset of the [member stream]'s volume.  
         *      
         *  **Note:** To convert between decibel and linear energy (like most volume sliders do), use [member volume_linear], or [method @GlobalScope.db_to_linear] and [method @GlobalScope.linear_to_db].  
         */
        get volumeDb(): float64
        set volumeDb(value: float64)
        
        /** Volume of sound, as a linear value.  
         *      
         *  **Note:** This member modifies [member volume_db] for convenience. The returned value is equivalent to the result of [method @GlobalScope.db_to_linear] on [member volume_db]. Setting this member is equivalent to setting [member volume_db] to the result of [method @GlobalScope.linear_to_db] on a value.  
         */
        get volumeLinear(): float64
        set volumeLinear(value: float64)
        
        /** The audio's pitch and tempo, as a multiplier of the [member stream]'s sample rate. A value of `2.0` doubles the audio's pitch, while a value of `0.5` halves the pitch. */
        get pitchScale(): float64
        set pitchScale(value: float64)
        
        /** If `true`, this node is playing sounds. Setting this property has the same effect as [method play] and [method stop]. */
        get playing(): boolean
        set playing(value: boolean)
        
        /** If `true`, this node calls [method play] when entering the tree. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        
        /** If `true`, the sounds are paused. Setting [member stream_paused] to `false` resumes all sounds.  
         *      
         *  **Note:** This property is automatically changed when exiting or entering the tree, or this node is paused (see [member Node.process_mode]).  
         */
        get streamPaused(): boolean
        set streamPaused(value: boolean)
        
        /** The mix target channels, as one of the [enum MixTarget] constants. Has no effect when two speakers or less are detected (see [enum AudioServer.SpeakerMode]). */
        get mixTarget(): int64
        set mixTarget(value: int64)
        
        /** The maximum number of sounds this node can play at the same time. Calling [method play] after this value is reached will cut off the oldest sounds. */
        get maxPolyphony(): int64
        set maxPolyphony(value: int64)
        
        /** The target bus name. All sounds from this node will be playing on this bus.  
         *      
         *  **Note:** At runtime, if no bus with the given name exists, all sounds will fall back on `"Master"`. See also [method AudioServer.get_bus_name].  
         */
        get bus(): StringName
        set bus(value: StringName)
        
        /** The playback type of the stream player. If set other than to the default value, it will force that playback type. */
        get playbackType(): int64
        set playbackType(value: int64)
        
        /** Emitted when a sound finishes playing without interruptions. This signal is  *not*  emitted when calling [method stop], or when exiting the tree while sounds are playing. */
        readonly finished: Signal<() => void>
    }
    /** Plays positional sound in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplayer2d.html  
     */
    class AudioStreamPlayer2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Queues the audio to play on the next physics frame, from the given position [param from_position], in seconds. */
        play(fromPosition?: float64 /* = 0 */): void
        
        /** Sets the position from which audio will be played, in seconds. */
        seek(toPosition: float64): void
        
        /** Stops the audio. */
        stop(): void
        
        /** Returns the position in the [AudioStream]. */
        getPlaybackPosition(): float64
        
        /** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
        hasStreamPlayback(): boolean
        
        /** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer2D]. */
        getStreamPlayback(): null | AudioStreamPlayback
        
        /** The [AudioStream] object to be played. */
        get stream(): null | AudioStream
        set stream(value: null | AudioStream)
        
        /** Base volume before attenuation, in decibels. */
        get volumeDb(): float64
        set volumeDb(value: float64)
        
        /** Base volume before attenuation, as a linear value.  
         *      
         *  **Note:** This member modifies [member volume_db] for convenience. The returned value is equivalent to the result of [method @GlobalScope.db_to_linear] on [member volume_db]. Setting this member is equivalent to setting [member volume_db] to the result of [method @GlobalScope.linear_to_db] on a value.  
         */
        get volumeLinear(): float64
        set volumeLinear(value: float64)
        
        /** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
        get pitchScale(): float64
        set pitchScale(value: float64)
        
        /** If `true`, audio is playing or is queued to be played (see [method play]). */
        get playing(): boolean
        set playing(value: boolean)
        
        /** If `true`, audio plays when added to scene tree. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        
        /** If `true`, the playback is paused. You can resume it by setting [member stream_paused] to `false`. */
        get streamPaused(): boolean
        set streamPaused(value: boolean)
        
        /** Maximum distance from which audio is still hearable. */
        get maxDistance(): float64
        set maxDistance(value: float64)
        
        /** The volume is attenuated over distance with this as an exponent. */
        get attenuation(): float64
        set attenuation(value: float64)
        
        /** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
        get maxPolyphony(): int64
        set maxPolyphony(value: int64)
        
        /** Scales the panning strength for this node by multiplying the base [member ProjectSettings.audio/general/2d_panning_strength] with this factor. Higher values will pan audio from left to right more dramatically than lower values. */
        get panningStrength(): float64
        set panningStrength(value: float64)
        
        /** Bus on which this audio is playing.  
         *      
         *  **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.  
         */
        get bus(): StringName
        set bus(value: StringName)
        
        /** Determines which [Area2D] layers affect the sound for reverb and audio bus effects. Areas can be used to redirect [AudioStream]s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater. */
        get areaMask(): int64
        set areaMask(value: int64)
        
        /** The playback type of the stream player. If set other than to the default value, it will force that playback type. */
        get playbackType(): int64
        set playbackType(value: int64)
        
        /** Emitted when the audio stops playing. */
        readonly finished: Signal<() => void>
    }
    namespace AudioStreamPlayer3D {
        enum AttenuationModel {
            AttenuationInverseDistance = 0,
            AttenuationInverseSquareDistance = 1,
            AttenuationLogarithmic = 2,
            AttenuationDisabled = 3,
        }
        enum DopplerTracking {
            DopplerTrackingDisabled = 0,
            DopplerTrackingIdleStep = 1,
            DopplerTrackingPhysicsStep = 2,
        }
    }
    /** Plays positional sound in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplayer3d.html  
     */
    class AudioStreamPlayer3D<Map extends NodePathMap = any> extends Node3D<Map> {
        /** Attenuation of loudness according to linear distance. */
        static readonly ATTENUATION_INVERSE_DISTANCE = 0
        
        /** Attenuation of loudness according to squared distance. */
        static readonly ATTENUATION_INVERSE_SQUARE_DISTANCE = 1
        
        /** Attenuation of loudness according to logarithmic distance. */
        static readonly ATTENUATION_LOGARITHMIC = 2
        
        /** No attenuation of loudness according to distance. The sound will still be heard positionally, unlike an [AudioStreamPlayer]. [constant ATTENUATION_DISABLED] can be combined with a [member max_distance] value greater than `0.0` to achieve linear attenuation clamped to a sphere of a defined size. */
        static readonly ATTENUATION_DISABLED = 3
        
        /** Disables doppler tracking. */
        static readonly DOPPLER_TRACKING_DISABLED = 0
        
        /** Executes doppler tracking during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly DOPPLER_TRACKING_IDLE_STEP = 1
        
        /** Executes doppler tracking during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
        static readonly DOPPLER_TRACKING_PHYSICS_STEP = 2
        constructor(identifier?: any)
        
        /** Queues the audio to play on the next physics frame, from the given position [param from_position], in seconds. */
        play(fromPosition?: float64 /* = 0 */): void
        
        /** Sets the position from which audio will be played, in seconds. */
        seek(toPosition: float64): void
        
        /** Stops the audio. */
        stop(): void
        
        /** Returns the position in the [AudioStream]. */
        getPlaybackPosition(): float64
        
        /** Returns whether the [AudioStreamPlayer] can return the [AudioStreamPlayback] object or not. */
        hasStreamPlayback(): boolean
        
        /** Returns the [AudioStreamPlayback] object associated with this [AudioStreamPlayer3D]. */
        getStreamPlayback(): null | AudioStreamPlayback
        
        /** The [AudioStream] resource to be played. */
        get stream(): null | AudioStream
        set stream(value: null | AudioStream)
        
        /** Decides if audio should get quieter with distance linearly, quadratically, logarithmically, or not be affected by distance, effectively disabling attenuation. */
        get attenuationModel(): int64
        set attenuationModel(value: int64)
        
        /** The base sound level before attenuation, in decibels. */
        get volumeDb(): float64
        set volumeDb(value: float64)
        
        /** The base sound level before attenuation, as a linear value.  
         *      
         *  **Note:** This member modifies [member volume_db] for convenience. The returned value is equivalent to the result of [method @GlobalScope.db_to_linear] on [member volume_db]. Setting this member is equivalent to setting [member volume_db] to the result of [method @GlobalScope.linear_to_db] on a value.  
         */
        get volumeLinear(): float64
        set volumeLinear(value: float64)
        
        /** The factor for the attenuation effect. Higher values make the sound audible over a larger distance. */
        get unitSize(): float64
        set unitSize(value: float64)
        
        /** Sets the absolute maximum of the sound level, in decibels. */
        get maxDb(): float64
        set maxDb(value: float64)
        
        /** The pitch and the tempo of the audio, as a multiplier of the audio sample's sample rate. */
        get pitchScale(): float64
        set pitchScale(value: float64)
        
        /** If `true`, audio is playing or is queued to be played (see [method play]). */
        get playing(): boolean
        set playing(value: boolean)
        
        /** If `true`, audio plays when the AudioStreamPlayer3D node is added to scene tree. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        
        /** If `true`, the playback is paused. You can resume it by setting [member stream_paused] to `false`. */
        get streamPaused(): boolean
        set streamPaused(value: boolean)
        
        /** The distance past which the sound can no longer be heard at all. Only has an effect if set to a value greater than `0.0`. [member max_distance] works in tandem with [member unit_size]. However, unlike [member unit_size] whose behavior depends on the [member attenuation_model], [member max_distance] always works in a linear fashion. This can be used to prevent the [AudioStreamPlayer3D] from requiring audio mixing when the listener is far away, which saves CPU resources. */
        get maxDistance(): float64
        set maxDistance(value: float64)
        
        /** The maximum number of sounds this node can play at the same time. Playing additional sounds after this value is reached will cut off the oldest sounds. */
        get maxPolyphony(): int64
        set maxPolyphony(value: int64)
        
        /** Scales the panning strength for this node by multiplying the base [member ProjectSettings.audio/general/3d_panning_strength] by this factor. If the product is `0.0` then stereo panning is disabled and the volume is the same for all channels. If the product is `1.0` then one of the channels will be muted when the sound is located exactly to the left (or right) of the listener.  
         *  Two speaker stereo arrangements implement the [url=https://webaudio.github.io/web-audio-api/#stereopanner-algorithm]WebAudio standard for StereoPannerNode Panning[/url] where the volume is cosine of half the azimuth angle to the ear.  
         *  For other speaker arrangements such as the 5.1 and 7.1 the SPCAP (Speaker-Placement Correction Amplitude) algorithm is implemented.  
         */
        get panningStrength(): float64
        set panningStrength(value: float64)
        
        /** The bus on which this audio is playing.  
         *      
         *  **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.  
         */
        get bus(): StringName
        set bus(value: StringName)
        
        /** Determines which [Area3D] layers affect the sound for reverb and audio bus effects. Areas can be used to redirect [AudioStream]s so that they play in a certain audio bus. An example of how you might use this is making a "water" area so that sounds played in the water are redirected through an audio bus to make them sound like they are being played underwater. */
        get areaMask(): int64
        set areaMask(value: int64)
        
        /** The playback type of the stream player. If set other than to the default value, it will force that playback type. */
        get playbackType(): int64
        set playbackType(value: int64)
        
        /** If `true`, the audio should be attenuated according to the direction of the sound. */
        get emissionAngleEnabled(): boolean
        set emissionAngleEnabled(value: boolean)
        
        /** The angle in which the audio reaches a listener unattenuated. */
        get emissionAngleDegrees(): float64
        set emissionAngleDegrees(value: float64)
        
        /** Attenuation factor used if listener is outside of [member emission_angle_degrees] and [member emission_angle_enabled] is set, in decibels. */
        get emissionAngleFilterAttenuationDb(): float64
        set emissionAngleFilterAttenuationDb(value: float64)
        
        /** The cutoff frequency of the attenuation low-pass filter, in Hz. A sound above this frequency is attenuated more than a sound below this frequency. To disable this effect, set this to `20500` as this frequency is above the human hearing limit. */
        get attenuationFilterCutoffHz(): float64
        set attenuationFilterCutoffHz(value: float64)
        
        /** Amount how much the filter affects the loudness, in decibels. */
        get attenuationFilterDb(): float64
        set attenuationFilterDb(value: float64)
        
        /** Decides in which step the Doppler effect should be calculated. */
        get dopplerTracking(): int64
        set dopplerTracking(value: int64)
        
        /** Emitted when the audio stops playing. */
        readonly finished: Signal<() => void>
    }
    /** [AudioStream] that includes sub-streams and plays them back like a playlist.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaylist.html  
     */
    class AudioStreamPlaylist extends AudioStream {
        /** Maximum amount of streams supported in the playlist. */
        static readonly MAX_STREAMS = 64
        constructor(identifier?: any)
        
        /** Returns the BPM of the playlist, which can vary depending on the clip being played. */
        getBpm(): float64
        
        /** Sets the stream at playback position index. */
        setListStream(streamIndex: int64, audioStream: AudioStream): void
        
        /** Returns the stream at playback position index. */
        getListStream(streamIndex: int64): null | AudioStream
        
        /** If `true`, the playlist will shuffle each time playback starts and each time it loops. */
        get shuffle(): boolean
        set shuffle(value: boolean)
        
        /** If `true`, the playlist will loop, otherwise the playlist will end when the last stream is finished. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** Fade time used when a stream ends, when going to the next one. Streams are expected to have an extra bit of audio after the end to help with fading. */
        get fadeTime(): float64
        set fadeTime(value: float64)
        
        /** Amount of streams in the playlist. */
        get streamCount(): any /*Streams,stream_,unfoldable,page_size=999,add_button_text=Add Stream*/
        set streamCount(value: any /*Streams,stream_,unfoldable,page_size=999,add_button_text=Add Stream*/)
        get stream0(): null | AudioStream
        set stream0(value: null | AudioStream)
        get stream1(): null | AudioStream
        set stream1(value: null | AudioStream)
        get stream2(): null | AudioStream
        set stream2(value: null | AudioStream)
        get stream3(): null | AudioStream
        set stream3(value: null | AudioStream)
        get stream4(): null | AudioStream
        set stream4(value: null | AudioStream)
        get stream5(): null | AudioStream
        set stream5(value: null | AudioStream)
        get stream6(): null | AudioStream
        set stream6(value: null | AudioStream)
        get stream7(): null | AudioStream
        set stream7(value: null | AudioStream)
        get stream8(): null | AudioStream
        set stream8(value: null | AudioStream)
        get stream9(): null | AudioStream
        set stream9(value: null | AudioStream)
        get stream10(): null | AudioStream
        set stream10(value: null | AudioStream)
        get stream11(): null | AudioStream
        set stream11(value: null | AudioStream)
        get stream12(): null | AudioStream
        set stream12(value: null | AudioStream)
        get stream13(): null | AudioStream
        set stream13(value: null | AudioStream)
        get stream14(): null | AudioStream
        set stream14(value: null | AudioStream)
        get stream15(): null | AudioStream
        set stream15(value: null | AudioStream)
        get stream16(): null | AudioStream
        set stream16(value: null | AudioStream)
        get stream17(): null | AudioStream
        set stream17(value: null | AudioStream)
        get stream18(): null | AudioStream
        set stream18(value: null | AudioStream)
        get stream19(): null | AudioStream
        set stream19(value: null | AudioStream)
        get stream20(): null | AudioStream
        set stream20(value: null | AudioStream)
        get stream21(): null | AudioStream
        set stream21(value: null | AudioStream)
        get stream22(): null | AudioStream
        set stream22(value: null | AudioStream)
        get stream23(): null | AudioStream
        set stream23(value: null | AudioStream)
        get stream24(): null | AudioStream
        set stream24(value: null | AudioStream)
        get stream25(): null | AudioStream
        set stream25(value: null | AudioStream)
        get stream26(): null | AudioStream
        set stream26(value: null | AudioStream)
        get stream27(): null | AudioStream
        set stream27(value: null | AudioStream)
        get stream28(): null | AudioStream
        set stream28(value: null | AudioStream)
        get stream29(): null | AudioStream
        set stream29(value: null | AudioStream)
        get stream30(): null | AudioStream
        set stream30(value: null | AudioStream)
        get stream31(): null | AudioStream
        set stream31(value: null | AudioStream)
        get stream32(): null | AudioStream
        set stream32(value: null | AudioStream)
        get stream33(): null | AudioStream
        set stream33(value: null | AudioStream)
        get stream34(): null | AudioStream
        set stream34(value: null | AudioStream)
        get stream35(): null | AudioStream
        set stream35(value: null | AudioStream)
        get stream36(): null | AudioStream
        set stream36(value: null | AudioStream)
        get stream37(): null | AudioStream
        set stream37(value: null | AudioStream)
        get stream38(): null | AudioStream
        set stream38(value: null | AudioStream)
        get stream39(): null | AudioStream
        set stream39(value: null | AudioStream)
        get stream40(): null | AudioStream
        set stream40(value: null | AudioStream)
        get stream41(): null | AudioStream
        set stream41(value: null | AudioStream)
        get stream42(): null | AudioStream
        set stream42(value: null | AudioStream)
        get stream43(): null | AudioStream
        set stream43(value: null | AudioStream)
        get stream44(): null | AudioStream
        set stream44(value: null | AudioStream)
        get stream45(): null | AudioStream
        set stream45(value: null | AudioStream)
        get stream46(): null | AudioStream
        set stream46(value: null | AudioStream)
        get stream47(): null | AudioStream
        set stream47(value: null | AudioStream)
        get stream48(): null | AudioStream
        set stream48(value: null | AudioStream)
        get stream49(): null | AudioStream
        set stream49(value: null | AudioStream)
        get stream50(): null | AudioStream
        set stream50(value: null | AudioStream)
        get stream51(): null | AudioStream
        set stream51(value: null | AudioStream)
        get stream52(): null | AudioStream
        set stream52(value: null | AudioStream)
        get stream53(): null | AudioStream
        set stream53(value: null | AudioStream)
        get stream54(): null | AudioStream
        set stream54(value: null | AudioStream)
        get stream55(): null | AudioStream
        set stream55(value: null | AudioStream)
        get stream56(): null | AudioStream
        set stream56(value: null | AudioStream)
        get stream57(): null | AudioStream
        set stream57(value: null | AudioStream)
        get stream58(): null | AudioStream
        set stream58(value: null | AudioStream)
        get stream59(): null | AudioStream
        set stream59(value: null | AudioStream)
        get stream60(): null | AudioStream
        set stream60(value: null | AudioStream)
        get stream61(): null | AudioStream
        set stream61(value: null | AudioStream)
        get stream62(): null | AudioStream
        set stream62(value: null | AudioStream)
        get stream63(): null | AudioStream
        set stream63(value: null | AudioStream)
    }
    /** AudioStream that lets the user play custom streams at any time from code, simultaneously using a single player.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreampolyphonic.html  
     */
    class AudioStreamPolyphonic extends AudioStream {
        constructor(identifier?: any)
        /** Maximum amount of simultaneous streams that can be played. */
        get polyphony(): int64
        set polyphony(value: int64)
    }
    namespace AudioStreamRandomizer {
        enum PlaybackMode {
            PlaybackRandomNoRepeats = 0,
            PlaybackRandom = 1,
            PlaybackSequential = 2,
        }
    }
    /** Wraps a pool of audio streams with pitch and volume shifting.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamrandomizer.html  
     */
    class AudioStreamRandomizer extends AudioStream {
        /** Pick a stream at random according to the probability weights chosen for each stream, but avoid playing the same stream twice in a row whenever possible. If only 1 sound is present in the pool, the same sound will always play, effectively allowing repeats to occur. */
        static readonly PLAYBACK_RANDOM_NO_REPEATS = 0
        
        /** Pick a stream at random according to the probability weights chosen for each stream. If only 1 sound is present in the pool, the same sound will always play. */
        static readonly PLAYBACK_RANDOM = 1
        
        /** Play streams in the order they appear in the stream pool. If only 1 sound is present in the pool, the same sound will always play. */
        static readonly PLAYBACK_SEQUENTIAL = 2
        constructor(identifier?: any)
        
        /** Insert a stream at the specified index. If the index is less than zero, the insertion occurs at the end of the underlying pool. */
        addStream(index: int64, stream: AudioStream, weight?: float64 /* = 1 */): void
        
        /** Move a stream from one index to another. */
        moveStream(indexFrom: int64, indexTo: int64): void
        
        /** Remove the stream at the specified index. */
        removeStream(index: int64): void
        
        /** Set the AudioStream at the specified index. */
        setStream(index: int64, stream: AudioStream): void
        
        /** Returns the stream at the specified index. */
        getStream(index: int64): null | AudioStream
        
        /** Set the probability weight of the stream at the specified index. The higher this value, the more likely that the randomizer will choose this stream during random playback modes. */
        setStreamProbabilityWeight(index: int64, weight: float64): void
        
        /** Returns the probability weight associated with the stream at the given index. */
        getStreamProbabilityWeight(index: int64): float64
        
        /** Controls how this AudioStreamRandomizer picks which AudioStream to play next. */
        get playbackMode(): int64
        set playbackMode(value: int64)
        
        /** The intensity of random pitch variation. A value of 1 means no variation. */
        get randomPitch(): float64
        set randomPitch(value: float64)
        
        /** The intensity of random volume variation. A value of 0 means no variation. */
        get randomVolumeOffsetDb(): float64
        set randomVolumeOffsetDb(value: float64)
        
        /** The number of streams in the stream pool. */
        get streamsCount(): int64
        set streamsCount(value: int64)
    }
    /** Stream that can be fitted with sub-streams, which will be played in-sync.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamsynchronized.html  
     */
    class AudioStreamSynchronized extends AudioStream {
        /** Maximum amount of streams that can be synchronized. */
        static readonly MAX_STREAMS = 32
        constructor(identifier?: any)
        
        /** Set one of the synchronized streams, by index. */
        setSyncStream(streamIndex: int64, audioStream: AudioStream): void
        
        /** Get one of the synchronized streams, by index. */
        getSyncStream(streamIndex: int64): null | AudioStream
        
        /** Set the volume of one of the synchronized streams, by index. */
        setSyncStreamVolume(streamIndex: int64, volumeDb: float64): void
        
        /** Get the volume of one of the synchronized streams, by index. */
        getSyncStreamVolume(streamIndex: int64): float64
        
        /** Set the total amount of streams that will be played back synchronized. */
        get streamCount(): any /*Streams,stream_,unfoldable,page_size=999,add_button_text=Add Stream*/
        set streamCount(value: any /*Streams,stream_,unfoldable,page_size=999,add_button_text=Add Stream*/)
        get "stream0/stream"(): null | AudioStream
        set "stream0/stream"(value: null | AudioStream)
        get "stream0/volume"(): float64
        set "stream0/volume"(value: float64)
        get "stream1/stream"(): null | AudioStream
        set "stream1/stream"(value: null | AudioStream)
        get "stream1/volume"(): float64
        set "stream1/volume"(value: float64)
        get "stream2/stream"(): null | AudioStream
        set "stream2/stream"(value: null | AudioStream)
        get "stream2/volume"(): float64
        set "stream2/volume"(value: float64)
        get "stream3/stream"(): null | AudioStream
        set "stream3/stream"(value: null | AudioStream)
        get "stream3/volume"(): float64
        set "stream3/volume"(value: float64)
        get "stream4/stream"(): null | AudioStream
        set "stream4/stream"(value: null | AudioStream)
        get "stream4/volume"(): float64
        set "stream4/volume"(value: float64)
        get "stream5/stream"(): null | AudioStream
        set "stream5/stream"(value: null | AudioStream)
        get "stream5/volume"(): float64
        set "stream5/volume"(value: float64)
        get "stream6/stream"(): null | AudioStream
        set "stream6/stream"(value: null | AudioStream)
        get "stream6/volume"(): float64
        set "stream6/volume"(value: float64)
        get "stream7/stream"(): null | AudioStream
        set "stream7/stream"(value: null | AudioStream)
        get "stream7/volume"(): float64
        set "stream7/volume"(value: float64)
        get "stream8/stream"(): null | AudioStream
        set "stream8/stream"(value: null | AudioStream)
        get "stream8/volume"(): float64
        set "stream8/volume"(value: float64)
        get "stream9/stream"(): null | AudioStream
        set "stream9/stream"(value: null | AudioStream)
        get "stream9/volume"(): float64
        set "stream9/volume"(value: float64)
        get "stream10/stream"(): null | AudioStream
        set "stream10/stream"(value: null | AudioStream)
        get "stream10/volume"(): float64
        set "stream10/volume"(value: float64)
        get "stream11/stream"(): null | AudioStream
        set "stream11/stream"(value: null | AudioStream)
        get "stream11/volume"(): float64
        set "stream11/volume"(value: float64)
        get "stream12/stream"(): null | AudioStream
        set "stream12/stream"(value: null | AudioStream)
        get "stream12/volume"(): float64
        set "stream12/volume"(value: float64)
        get "stream13/stream"(): null | AudioStream
        set "stream13/stream"(value: null | AudioStream)
        get "stream13/volume"(): float64
        set "stream13/volume"(value: float64)
        get "stream14/stream"(): null | AudioStream
        set "stream14/stream"(value: null | AudioStream)
        get "stream14/volume"(): float64
        set "stream14/volume"(value: float64)
        get "stream15/stream"(): null | AudioStream
        set "stream15/stream"(value: null | AudioStream)
        get "stream15/volume"(): float64
        set "stream15/volume"(value: float64)
        get "stream16/stream"(): null | AudioStream
        set "stream16/stream"(value: null | AudioStream)
        get "stream16/volume"(): float64
        set "stream16/volume"(value: float64)
        get "stream17/stream"(): null | AudioStream
        set "stream17/stream"(value: null | AudioStream)
        get "stream17/volume"(): float64
        set "stream17/volume"(value: float64)
        get "stream18/stream"(): null | AudioStream
        set "stream18/stream"(value: null | AudioStream)
        get "stream18/volume"(): float64
        set "stream18/volume"(value: float64)
        get "stream19/stream"(): null | AudioStream
        set "stream19/stream"(value: null | AudioStream)
        get "stream19/volume"(): float64
        set "stream19/volume"(value: float64)
        get "stream20/stream"(): null | AudioStream
        set "stream20/stream"(value: null | AudioStream)
        get "stream20/volume"(): float64
        set "stream20/volume"(value: float64)
        get "stream21/stream"(): null | AudioStream
        set "stream21/stream"(value: null | AudioStream)
        get "stream21/volume"(): float64
        set "stream21/volume"(value: float64)
        get "stream22/stream"(): null | AudioStream
        set "stream22/stream"(value: null | AudioStream)
        get "stream22/volume"(): float64
        set "stream22/volume"(value: float64)
        get "stream23/stream"(): null | AudioStream
        set "stream23/stream"(value: null | AudioStream)
        get "stream23/volume"(): float64
        set "stream23/volume"(value: float64)
        get "stream24/stream"(): null | AudioStream
        set "stream24/stream"(value: null | AudioStream)
        get "stream24/volume"(): float64
        set "stream24/volume"(value: float64)
        get "stream25/stream"(): null | AudioStream
        set "stream25/stream"(value: null | AudioStream)
        get "stream25/volume"(): float64
        set "stream25/volume"(value: float64)
        get "stream26/stream"(): null | AudioStream
        set "stream26/stream"(value: null | AudioStream)
        get "stream26/volume"(): float64
        set "stream26/volume"(value: float64)
        get "stream27/stream"(): null | AudioStream
        set "stream27/stream"(value: null | AudioStream)
        get "stream27/volume"(): float64
        set "stream27/volume"(value: float64)
        get "stream28/stream"(): null | AudioStream
        set "stream28/stream"(value: null | AudioStream)
        get "stream28/volume"(): float64
        set "stream28/volume"(value: float64)
        get "stream29/stream"(): null | AudioStream
        set "stream29/stream"(value: null | AudioStream)
        get "stream29/volume"(): float64
        set "stream29/volume"(value: float64)
        get "stream30/stream"(): null | AudioStream
        set "stream30/stream"(value: null | AudioStream)
        get "stream30/volume"(): float64
        set "stream30/volume"(value: float64)
        get "stream31/stream"(): null | AudioStream
        set "stream31/stream"(value: null | AudioStream)
        get "stream31/volume"(): float64
        set "stream31/volume"(value: float64)
    }
    namespace AudioStreamWav {
        enum Format {
            Format8Bits = 0,
            Format16Bits = 1,
            FormatImaAdpcm = 2,
            FormatQoa = 3,
        }
        enum LoopMode {
            LoopDisabled = 0,
            LoopForward = 1,
            LoopPingpong = 2,
            LoopBackward = 3,
        }
    }
    class AudioStreamWav extends AudioStream {
        static readonly FORMAT_8_BITS = 0
        static readonly FORMAT_16_BITS = 1
        static readonly FORMAT_IMA_ADPCM = 2
        static readonly FORMAT_QOA = 3
        static readonly LOOP_DISABLED = 0
        static readonly LOOP_FORWARD = 1
        static readonly LOOP_PINGPONG = 2
        static readonly LOOP_BACKWARD = 3
        constructor(identifier?: any)
        static loadFromBuffer(streamData: PackedByteArray | byte[] | ArrayBuffer, options?: GDictionary /* = new GDictionary() */): null | AudioStreamWav
        static loadFromFile(path: string, options?: GDictionary /* = new GDictionary() */): null | AudioStreamWav
        saveToWav(path: string): GError
        get data(): PackedByteArray
        set data(value: PackedByteArray | byte[] | ArrayBuffer)
        get format(): int64
        set format(value: int64)
        get loopMode(): int64
        set loopMode(value: int64)
        get loopBegin(): int64
        set loopBegin(value: int64)
        get loopEnd(): int64
        set loopEnd(value: int64)
        get mixRate(): int64
        set mixRate(value: int64)
        get stereo(): boolean
        set stereo(value: boolean)
    }
    namespace BackBufferCopy {
        enum CopyMode {
            CopyModeDisabled = 0,
            CopyModeRect = 1,
            CopyModeViewport = 2,
        }
    }
    /** A node that copies a region of the screen to a buffer for access in shader code.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_backbuffercopy.html  
     */
    class BackBufferCopy<Map extends NodePathMap = any> extends Node2D<Map> {
        /** Disables the buffering mode. This means the [BackBufferCopy] node will directly use the portion of screen it covers. */
        static readonly COPY_MODE_DISABLED = 0
        
        /** [BackBufferCopy] buffers a rectangular region. */
        static readonly COPY_MODE_RECT = 1
        
        /** [BackBufferCopy] buffers the entire screen. */
        static readonly COPY_MODE_VIEWPORT = 2
        constructor(identifier?: any)
        
        /** Buffer mode. See [enum CopyMode] constants. */
        get copyMode(): int64
        set copyMode(value: int64)
        
        /** The area covered by the [BackBufferCopy]. Only used if [member copy_mode] is [constant COPY_MODE_RECT]. */
        get rect(): Rect2
        set rect(value: Rect2)
    }
    namespace BaseButton {
        enum DrawMode {
            DrawNormal = 0,
            DrawPressed = 1,
            DrawHover = 2,
            DrawDisabled = 3,
            DrawHoverPressed = 4,
        }
        enum ActionMode {
            ActionModeButtonPress = 0,
            ActionModeButtonRelease = 1,
        }
    }
    /** Abstract base class for GUI buttons.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_basebutton.html  
     */
    class BaseButton<Map extends NodePathMap = any> extends Control<Map> {
        /** The normal state (i.e. not pressed, not hovered, not toggled and enabled) of buttons. */
        static readonly DRAW_NORMAL = 0
        
        /** The state of buttons are pressed. */
        static readonly DRAW_PRESSED = 1
        
        /** The state of buttons are hovered. */
        static readonly DRAW_HOVER = 2
        
        /** The state of buttons are disabled. */
        static readonly DRAW_DISABLED = 3
        
        /** The state of buttons are both hovered and pressed. */
        static readonly DRAW_HOVER_PRESSED = 4
        
        /** Require just a press to consider the button clicked. */
        static readonly ACTION_MODE_BUTTON_PRESS = 0
        
        /** Require a press and a subsequent release before considering the button clicked. */
        static readonly ACTION_MODE_BUTTON_RELEASE = 1
        constructor(identifier?: any)
        
        /** Called when the button is pressed. If you need to know the button's pressed state (and [member toggle_mode] is active), use [method _toggled] instead. */
        /* gdvirtual */ _pressed(): void
        
        /** Called when the button is toggled (only if [member toggle_mode] is active). */
        /* gdvirtual */ _toggled(toggledOn: boolean): void
        
        /** Changes the [member button_pressed] state of the button, without emitting [signal toggled]. Use when you just want to change the state of the button without sending the pressed event (e.g. when initializing scene). Only works if [member toggle_mode] is `true`.  
         *      
         *  **Note:** This method doesn't unpress other buttons in [member button_group].  
         */
        setPressedNoSignal(pressed: boolean): void
        
        /** Returns `true` if the mouse has entered the button and has not left it yet. */
        isHovered(): boolean
        
        /** Returns the visual state used to draw the button. This is useful mainly when implementing your own draw code by either overriding _draw() or connecting to "draw" signal. The visual state of the button is defined by the [enum DrawMode] enum. */
        getDrawMode(): BaseButton.DrawMode
        
        /** If `true`, the button is in disabled state and can't be clicked or toggled. */
        get disabled(): boolean
        set disabled(value: boolean)
        
        /** If `true`, the button is in toggle mode. Makes the button flip state between pressed and unpressed each time its area is clicked. */
        get toggleMode(): boolean
        set toggleMode(value: boolean)
        
        /** If `true`, the button's state is pressed. Means the button is pressed down or toggled (if [member toggle_mode] is active). Only works if [member toggle_mode] is `true`.  
         *      
         *  **Note:** Changing the value of [member button_pressed] will result in [signal toggled] to be emitted. If you want to change the pressed state without emitting that signal, use [method set_pressed_no_signal].  
         */
        get buttonPressed(): boolean
        set buttonPressed(value: boolean)
        
        /** Determines when the button is considered clicked, one of the [enum ActionMode] constants. */
        get actionMode(): int64
        set actionMode(value: int64)
        
        /** Binary mask to choose which mouse buttons this button will respond to.  
         *  To allow both left-click and right-click, use `MOUSE_BUTTON_MASK_LEFT | MOUSE_BUTTON_MASK_RIGHT`.  
         */
        get buttonMask(): int64
        set buttonMask(value: int64)
        
        /** If `true`, the button stays pressed when moving the cursor outside the button while pressing it.  
         *      
         *  **Note:** This property only affects the button's visual appearance. Signals will be emitted at the same moment regardless of this property's value.  
         */
        get keepPressedOutside(): boolean
        set keepPressedOutside(value: boolean)
        
        /** The [ButtonGroup] associated with the button. Not to be confused with node groups.  
         *      
         *  **Note:** The button will be configured as a radio button if a [ButtonGroup] is assigned to it.  
         */
        get buttonGroup(): null | ButtonGroup
        set buttonGroup(value: null | ButtonGroup)
        
        /** [Shortcut] associated to the button. */
        get shortcut(): null | Shortcut
        set shortcut(value: null | Shortcut)
        
        /** If `true`, the button will highlight for a short amount of time when its shortcut is activated. If `false` and [member toggle_mode] is `false`, the shortcut will activate without any visual feedback. */
        get shortcutFeedback(): boolean
        set shortcutFeedback(value: boolean)
        
        /** If `true`, the button will add information about its shortcut in the tooltip.  
         *      
         *  **Note:** This property does nothing when the tooltip control is customized using [method Control._make_custom_tooltip].  
         */
        get shortcutInTooltip(): boolean
        set shortcutInTooltip(value: boolean)
        
        /** Emitted when the button is toggled or pressed. This is on [signal button_down] if [member action_mode] is [constant ACTION_MODE_BUTTON_PRESS] and on [signal button_up] otherwise.  
         *  If you need to know the button's pressed state (and [member toggle_mode] is active), use [signal toggled] instead.  
         */
        readonly pressed: Signal<() => void>
        
        /** Emitted when the button stops being held down. */
        readonly buttonUp: Signal<() => void>
        
        /** Emitted when the button starts being held down. */
        readonly buttonDown: Signal<() => void>
        
        /** Emitted when the button was just toggled between pressed and normal states (only if [member toggle_mode] is active). The new state is contained in the [param toggled_on] argument. */
        readonly toggled: Signal<(toggledOn: boolean) => void>
    }
    namespace BaseMaterial3D {
        enum TextureParam {
            TextureAlbedo = 0,
            TextureMetallic = 1,
            TextureRoughness = 2,
            TextureEmission = 3,
            TextureNormal = 4,
            TextureBentNormal = 18,
            TextureRim = 5,
            TextureClearcoat = 6,
            TextureFlowmap = 7,
            TextureAmbientOcclusion = 8,
            TextureHeightmap = 9,
            TextureSubsurfaceScattering = 10,
            TextureSubsurfaceTransmittance = 11,
            TextureBacklight = 12,
            TextureRefraction = 13,
            TextureDetailMask = 14,
            TextureDetailAlbedo = 15,
            TextureDetailNormal = 16,
            TextureOrm = 17,
            TextureMax = 19,
        }
        enum TextureFilter {
            TextureFilterNearest = 0,
            TextureFilterLinear = 1,
            TextureFilterNearestWithMipmaps = 2,
            TextureFilterLinearWithMipmaps = 3,
            TextureFilterNearestWithMipmapsAnisotropic = 4,
            TextureFilterLinearWithMipmapsAnisotropic = 5,
            TextureFilterMax = 6,
        }
        enum DetailUV {
            DetailUV1 = 0,
            DetailUV2 = 1,
        }
        enum Transparency {
            TransparencyDisabled = 0,
            TransparencyAlpha = 1,
            TransparencyAlphaScissor = 2,
            TransparencyAlphaHash = 3,
            TransparencyAlphaDepthPrePass = 4,
            TransparencyMax = 5,
        }
        enum ShadingMode {
            ShadingModeUnshaded = 0,
            ShadingModePerPixel = 1,
            ShadingModePerVertex = 2,
            ShadingModeMax = 3,
        }
        enum Feature {
            FeatureEmission = 0,
            FeatureNormalMapping = 1,
            FeatureRim = 2,
            FeatureClearcoat = 3,
            FeatureAnisotropy = 4,
            FeatureAmbientOcclusion = 5,
            FeatureHeightMapping = 6,
            FeatureSubsurfaceScattering = 7,
            FeatureSubsurfaceTransmittance = 8,
            FeatureBacklight = 9,
            FeatureRefraction = 10,
            FeatureDetail = 11,
            FeatureBentNormalMapping = 12,
            FeatureMax = 13,
        }
        enum BlendMode {
            BlendModeMix = 0,
            BlendModeAdd = 1,
            BlendModeSub = 2,
            BlendModeMul = 3,
            BlendModePremultAlpha = 4,
        }
        enum AlphaAntiAliasing {
            AlphaAntialiasingOff = 0,
            AlphaAntialiasingAlphaToCoverage = 1,
            AlphaAntialiasingAlphaToCoverageAndToOne = 2,
        }
        enum DepthDrawMode {
            DepthDrawOpaqueOnly = 0,
            DepthDrawAlways = 1,
            DepthDrawDisabled = 2,
        }
        enum CullMode {
            CullBack = 0,
            CullFront = 1,
            CullDisabled = 2,
        }
        enum Flags {
            FlagDisableDepthTest = 0,
            FlagAlbedoFromVertexColor = 1,
            FlagSrgbVertexColor = 2,
            FlagUsePointSize = 3,
            FlagFixedSize = 4,
            FlagBillboardKeepScale = 5,
            FlagUv1UseTriplanar = 6,
            FlagUV2UseTriplanar = 7,
            FlagUv1UseWorldTriplanar = 8,
            FlagUV2UseWorldTriplanar = 9,
            FlagAOOnUV2 = 10,
            FlagEmissionOnUV2 = 11,
            FlagAlbedoTextureForceSrgb = 12,
            FlagDontReceiveShadows = 13,
            FlagDisableAmbientLight = 14,
            FlagUseShadowToOpacity = 15,
            FlagUseTextureRepeat = 16,
            FlagInvertHeightmap = 17,
            FlagSubsurfaceModeSkin = 18,
            FlagParticleTrailsMode = 19,
            FlagAlbedoTextureMsdf = 20,
            FlagDisableFog = 21,
            FlagDisableSpecularOcclusion = 22,
            FlagUseZClipScale = 23,
            FlagUseFovOverride = 24,
            FlagMax = 25,
        }
        enum DiffuseMode {
            DiffuseBurley = 0,
            DiffuseLambert = 1,
            DiffuseLambertWrap = 2,
            DiffuseToon = 3,
        }
        enum SpecularMode {
            SpecularSchlickGgx = 0,
            SpecularToon = 1,
            SpecularDisabled = 2,
        }
        enum BillboardMode {
            BillboardDisabled = 0,
            BillboardEnabled = 1,
            BillboardFixedY = 2,
            BillboardParticles = 3,
        }
        enum TextureChannel {
            TextureChannelRed = 0,
            TextureChannelGreen = 1,
            TextureChannelBlue = 2,
            TextureChannelAlpha = 3,
            TextureChannelGrayscale = 4,
        }
        enum EmissionOperator {
            EmissionOpAdd = 0,
            EmissionOpMultiply = 1,
        }
        enum DistanceFadeMode {
            DistanceFadeDisabled = 0,
            DistanceFadePixelAlpha = 1,
            DistanceFadePixelDither = 2,
            DistanceFadeObjectDither = 3,
        }
    }
    /** Abstract base class for defining the 3D rendering properties of meshes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_basematerial3d.html  
     */
    class BaseMaterial3D extends Material {
        /** Texture specifying per-pixel color. */
        static readonly TEXTURE_ALBEDO = 0
        
        /** Texture specifying per-pixel metallic value. */
        static readonly TEXTURE_METALLIC = 1
        
        /** Texture specifying per-pixel roughness value. */
        static readonly TEXTURE_ROUGHNESS = 2
        
        /** Texture specifying per-pixel emission color. */
        static readonly TEXTURE_EMISSION = 3
        
        /** Texture specifying per-pixel normal vector. */
        static readonly TEXTURE_NORMAL = 4
        
        /** Texture specifying per-pixel bent normal vector. */
        static readonly TEXTURE_BENT_NORMAL = 18
        
        /** Texture specifying per-pixel rim value. */
        static readonly TEXTURE_RIM = 5
        
        /** Texture specifying per-pixel clearcoat value. */
        static readonly TEXTURE_CLEARCOAT = 6
        
        /** Texture specifying per-pixel flowmap direction for use with [member anisotropy]. */
        static readonly TEXTURE_FLOWMAP = 7
        
        /** Texture specifying per-pixel ambient occlusion value. */
        static readonly TEXTURE_AMBIENT_OCCLUSION = 8
        
        /** Texture specifying per-pixel height. */
        static readonly TEXTURE_HEIGHTMAP = 9
        
        /** Texture specifying per-pixel subsurface scattering. */
        static readonly TEXTURE_SUBSURFACE_SCATTERING = 10
        
        /** Texture specifying per-pixel transmittance for subsurface scattering. */
        static readonly TEXTURE_SUBSURFACE_TRANSMITTANCE = 11
        
        /** Texture specifying per-pixel backlight color. */
        static readonly TEXTURE_BACKLIGHT = 12
        
        /** Texture specifying per-pixel refraction strength. */
        static readonly TEXTURE_REFRACTION = 13
        
        /** Texture specifying per-pixel detail mask blending value. */
        static readonly TEXTURE_DETAIL_MASK = 14
        
        /** Texture specifying per-pixel detail color. */
        static readonly TEXTURE_DETAIL_ALBEDO = 15
        
        /** Texture specifying per-pixel detail normal. */
        static readonly TEXTURE_DETAIL_NORMAL = 16
        
        /** Texture holding ambient occlusion, roughness, and metallic. */
        static readonly TEXTURE_ORM = 17
        
        /** Represents the size of the [enum TextureParam] enum. */
        static readonly TEXTURE_MAX = 19
        
        /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly TEXTURE_FILTER_NEAREST = 0
        
        /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly TEXTURE_FILTER_LINEAR = 1
        
        /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance. */
        static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 2
        
        /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance. */
        static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 3
        
        /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
        static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 4
        
        /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
        static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 5
        
        /** Represents the size of the [enum TextureFilter] enum. */
        static readonly TEXTURE_FILTER_MAX = 6
        
        /** Use `UV` with the detail texture. */
        static readonly DETAIL_UV_1 = 0
        
        /** Use `UV2` with the detail texture. */
        static readonly DETAIL_UV_2 = 1
        
        /** The material will not use transparency. This is the fastest to render. */
        static readonly TRANSPARENCY_DISABLED = 0
        
        /** The material will use the texture's alpha values for transparency. This is the slowest to render, and disables shadow casting. */
        static readonly TRANSPARENCY_ALPHA = 1
        
        /** The material will cut off all values below a threshold, the rest will remain opaque. The opaque portions will be rendered in the depth prepass. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows. */
        static readonly TRANSPARENCY_ALPHA_SCISSOR = 2
        
        /** The material will cut off all values below a spatially-deterministic threshold, the rest will remain opaque. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows. Alpha hashing is suited for hair rendering. */
        static readonly TRANSPARENCY_ALPHA_HASH = 3
        
        /** The material will use the texture's alpha value for transparency, but will discard fragments with an alpha of less than 0.99 during the depth prepass and fragments with an alpha less than 0.1 during the shadow pass. This also supports casting shadows. */
        static readonly TRANSPARENCY_ALPHA_DEPTH_PRE_PASS = 4
        
        /** Represents the size of the [enum Transparency] enum. */
        static readonly TRANSPARENCY_MAX = 5
        
        /** The object will not receive shadows. This is the fastest to render, but it disables all interactions with lights. */
        static readonly SHADING_MODE_UNSHADED = 0
        
        /** The object will be shaded per pixel. Useful for realistic shading effects. */
        static readonly SHADING_MODE_PER_PIXEL = 1
        
        /** The object will be shaded per vertex. Useful when you want cheaper shaders and do not care about visual quality. */
        static readonly SHADING_MODE_PER_VERTEX = 2
        
        /** Represents the size of the [enum ShadingMode] enum. */
        static readonly SHADING_MODE_MAX = 3
        
        /** Constant for setting [member emission_enabled]. */
        static readonly FEATURE_EMISSION = 0
        
        /** Constant for setting [member normal_enabled]. */
        static readonly FEATURE_NORMAL_MAPPING = 1
        
        /** Constant for setting [member rim_enabled]. */
        static readonly FEATURE_RIM = 2
        
        /** Constant for setting [member clearcoat_enabled]. */
        static readonly FEATURE_CLEARCOAT = 3
        
        /** Constant for setting [member anisotropy_enabled]. */
        static readonly FEATURE_ANISOTROPY = 4
        
        /** Constant for setting [member ao_enabled]. */
        static readonly FEATURE_AMBIENT_OCCLUSION = 5
        
        /** Constant for setting [member heightmap_enabled]. */
        static readonly FEATURE_HEIGHT_MAPPING = 6
        
        /** Constant for setting [member subsurf_scatter_enabled]. */
        static readonly FEATURE_SUBSURFACE_SCATTERING = 7
        
        /** Constant for setting [member subsurf_scatter_transmittance_enabled]. */
        static readonly FEATURE_SUBSURFACE_TRANSMITTANCE = 8
        
        /** Constant for setting [member backlight_enabled]. */
        static readonly FEATURE_BACKLIGHT = 9
        
        /** Constant for setting [member refraction_enabled]. */
        static readonly FEATURE_REFRACTION = 10
        
        /** Constant for setting [member detail_enabled]. */
        static readonly FEATURE_DETAIL = 11
        
        /** Constant for setting [member bent_normal_enabled]. */
        static readonly FEATURE_BENT_NORMAL_MAPPING = 12
        
        /** Represents the size of the [enum Feature] enum. */
        static readonly FEATURE_MAX = 13
        
        /** Default blend mode. The color of the object is blended over the background based on the object's alpha value. */
        static readonly BLEND_MODE_MIX = 0
        
        /** The color of the object is added to the background. */
        static readonly BLEND_MODE_ADD = 1
        
        /** The color of the object is subtracted from the background. */
        static readonly BLEND_MODE_SUB = 2
        
        /** The color of the object is multiplied by the background. */
        static readonly BLEND_MODE_MUL = 3
        
        /** The color of the object is added to the background and the alpha channel is used to mask out the background. This is effectively a hybrid of the blend mix and add modes, useful for effects like fire where you want the flame to add but the smoke to mix. By default, this works with unshaded materials using premultiplied textures. For shaded materials, use the `PREMUL_ALPHA_FACTOR` built-in so that lighting can be modulated as well. */
        static readonly BLEND_MODE_PREMULT_ALPHA = 4
        
        /** Disables Alpha AntiAliasing for the material. */
        static readonly ALPHA_ANTIALIASING_OFF = 0
        
        /** Enables AlphaToCoverage. Alpha values in the material are passed to the AntiAliasing sample mask. */
        static readonly ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE = 1
        
        /** Enables AlphaToCoverage and forces all non-zero alpha values to `1`. Alpha values in the material are passed to the AntiAliasing sample mask. */
        static readonly ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE = 2
        
        /** Default depth draw mode. Depth is drawn only for opaque objects during the opaque prepass (if any) and during the opaque pass. */
        static readonly DEPTH_DRAW_OPAQUE_ONLY = 0
        
        /** Objects will write to depth during the opaque and the transparent passes. Transparent objects that are close to the camera may obscure other transparent objects behind them.  
         *      
         *  **Note:** This does not influence whether transparent objects are included in the depth prepass or not. For that, see [enum Transparency].  
         */
        static readonly DEPTH_DRAW_ALWAYS = 1
        
        /** Objects will not write their depth to the depth buffer, even during the depth prepass (if enabled). */
        static readonly DEPTH_DRAW_DISABLED = 2
        
        /** Default cull mode. The back of the object is culled when not visible. Back face triangles will be culled when facing the camera. This results in only the front side of triangles being drawn. For closed-surface meshes, this means that only the exterior of the mesh will be visible. */
        static readonly CULL_BACK = 0
        
        /** Front face triangles will be culled when facing the camera. This results in only the back side of triangles being drawn. For closed-surface meshes, this means that the interior of the mesh will be drawn instead of the exterior. */
        static readonly CULL_FRONT = 1
        
        /** No face culling is performed; both the front face and back face will be visible. */
        static readonly CULL_DISABLED = 2
        
        /** Disables the depth test, so this object is drawn on top of all others drawn before it. This puts the object in the transparent draw pass where it is sorted based on distance to camera. Objects drawn after it in the draw order may cover it. This also disables writing to depth. */
        static readonly FLAG_DISABLE_DEPTH_TEST = 0
        
        /** Set `ALBEDO` to the per-vertex color specified in the mesh. */
        static readonly FLAG_ALBEDO_FROM_VERTEX_COLOR = 1
        
        /** Vertex colors are considered to be stored in sRGB color space and are converted to linear color space during rendering. See also [member vertex_color_is_srgb].  
         *      
         *  **Note:** Only effective when using the Forward+ and Mobile rendering methods.  
         */
        static readonly FLAG_SRGB_VERTEX_COLOR = 2
        
        /** Uses point size to alter the size of primitive points. Also changes the albedo texture lookup to use `POINT_COORD` instead of `UV`. */
        static readonly FLAG_USE_POINT_SIZE = 3
        
        /** Object is scaled by depth so that it always appears the same size on screen. */
        static readonly FLAG_FIXED_SIZE = 4
        
        /** Shader will keep the scale set for the mesh. Otherwise the scale is lost when billboarding. Only applies when [member billboard_mode] is [constant BILLBOARD_ENABLED]. */
        static readonly FLAG_BILLBOARD_KEEP_SCALE = 5
        
        /** Use triplanar texture lookup for all texture lookups that would normally use `UV`. */
        static readonly FLAG_UV1_USE_TRIPLANAR = 6
        
        /** Use triplanar texture lookup for all texture lookups that would normally use `UV2`. */
        static readonly FLAG_UV2_USE_TRIPLANAR = 7
        
        /** Use triplanar texture lookup for all texture lookups that would normally use `UV`. */
        static readonly FLAG_UV1_USE_WORLD_TRIPLANAR = 8
        
        /** Use triplanar texture lookup for all texture lookups that would normally use `UV2`. */
        static readonly FLAG_UV2_USE_WORLD_TRIPLANAR = 9
        
        /** Use `UV2` coordinates to look up from the [member ao_texture]. */
        static readonly FLAG_AO_ON_UV2 = 10
        
        /** Use `UV2` coordinates to look up from the [member emission_texture]. */
        static readonly FLAG_EMISSION_ON_UV2 = 11
        
        /** Forces the shader to convert albedo from sRGB space to linear space. See also [member albedo_texture_force_srgb]. */
        static readonly FLAG_ALBEDO_TEXTURE_FORCE_SRGB = 12
        
        /** Disables receiving shadows from other objects. */
        static readonly FLAG_DONT_RECEIVE_SHADOWS = 13
        
        /** Disables receiving ambient light. */
        static readonly FLAG_DISABLE_AMBIENT_LIGHT = 14
        
        /** Enables the shadow to opacity feature. */
        static readonly FLAG_USE_SHADOW_TO_OPACITY = 15
        
        /** Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture. */
        static readonly FLAG_USE_TEXTURE_REPEAT = 16
        
        /** Invert values read from a depth texture to convert them to height values (heightmap). */
        static readonly FLAG_INVERT_HEIGHTMAP = 17
        
        /** Enables the skin mode for subsurface scattering which is used to improve the look of subsurface scattering when used for human skin. */
        static readonly FLAG_SUBSURFACE_MODE_SKIN = 18
        
        /** Enables parts of the shader required for [GPUParticles3D] trails to function. This also requires using a mesh with appropriate skinning, such as [RibbonTrailMesh] or [TubeTrailMesh]. Enabling this feature outside of materials used in [GPUParticles3D] meshes will break material rendering. */
        static readonly FLAG_PARTICLE_TRAILS_MODE = 19
        
        /** Enables multichannel signed distance field rendering shader. */
        static readonly FLAG_ALBEDO_TEXTURE_MSDF = 20
        
        /** Disables receiving depth-based or volumetric fog. */
        static readonly FLAG_DISABLE_FOG = 21
        
        /** Disables specular occlusion. */
        static readonly FLAG_DISABLE_SPECULAR_OCCLUSION = 22
        
        /** Enables using [member z_clip_scale]. */
        static readonly FLAG_USE_Z_CLIP_SCALE = 23
        
        /** Enables using [member fov_override]. */
        static readonly FLAG_USE_FOV_OVERRIDE = 24
        
        /** Represents the size of the [enum Flags] enum. */
        static readonly FLAG_MAX = 25
        
        /** Default diffuse scattering algorithm. */
        static readonly DIFFUSE_BURLEY = 0
        
        /** Diffuse scattering ignores roughness. */
        static readonly DIFFUSE_LAMBERT = 1
        
        /** Extends Lambert to cover more than 90 degrees when roughness increases. */
        static readonly DIFFUSE_LAMBERT_WRAP = 2
        
        /** Uses a hard cut for lighting, with smoothing affected by roughness. */
        static readonly DIFFUSE_TOON = 3
        
        /** Default specular blob.  
         *      
         *  **Note:** Forward+ uses multiscattering for more accurate reflections, although the impact of multiscattering is more noticeable on rough metallic surfaces than on smooth, non-metallic surfaces.  
         *      
         *  **Note:** Mobile and Compatibility don't perform multiscattering for performance reasons. Instead, they perform single scattering, which means rough metallic surfaces may look slightly darker than intended.  
         */
        static readonly SPECULAR_SCHLICK_GGX = 0
        
        /** Toon blob which changes size based on roughness. */
        static readonly SPECULAR_TOON = 1
        
        /** No specular blob. This is slightly faster to render than other specular modes. */
        static readonly SPECULAR_DISABLED = 2
        
        /** Billboard mode is disabled. */
        static readonly BILLBOARD_DISABLED = 0
        
        /** The object's Z axis will always face the camera. */
        static readonly BILLBOARD_ENABLED = 1
        
        /** The object's X axis will always face the camera. */
        static readonly BILLBOARD_FIXED_Y = 2
        
        /** Used for particle systems when assigned to [GPUParticles3D] and [CPUParticles3D] nodes (flipbook animation). Enables `particles_anim_*` properties.  
         *  The [member ParticleProcessMaterial.anim_speed_min] or [member CPUParticles3D.anim_speed_min] should also be set to a value bigger than zero for the animation to play.  
         */
        static readonly BILLBOARD_PARTICLES = 3
        
        /** Used to read from the red channel of a texture. */
        static readonly TEXTURE_CHANNEL_RED = 0
        
        /** Used to read from the green channel of a texture. */
        static readonly TEXTURE_CHANNEL_GREEN = 1
        
        /** Used to read from the blue channel of a texture. */
        static readonly TEXTURE_CHANNEL_BLUE = 2
        
        /** Used to read from the alpha channel of a texture. */
        static readonly TEXTURE_CHANNEL_ALPHA = 3
        
        /** Used to read from the linear (non-perceptual) average of the red, green and blue channels of a texture. */
        static readonly TEXTURE_CHANNEL_GRAYSCALE = 4
        
        /** Adds the emission color to the color from the emission texture. */
        static readonly EMISSION_OP_ADD = 0
        
        /** Multiplies the emission color by the color from the emission texture. */
        static readonly EMISSION_OP_MULTIPLY = 1
        
        /** Do not use distance fade. */
        static readonly DISTANCE_FADE_DISABLED = 0
        
        /** Smoothly fades the object out based on each pixel's distance from the camera using the alpha channel. */
        static readonly DISTANCE_FADE_PIXEL_ALPHA = 1
        
        /** Smoothly fades the object out based on each pixel's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than [constant DISTANCE_FADE_PIXEL_ALPHA]. */
        static readonly DISTANCE_FADE_PIXEL_DITHER = 2
        
        /** Smoothly fades the object out based on the object's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than [constant DISTANCE_FADE_PIXEL_ALPHA] and [constant DISTANCE_FADE_PIXEL_DITHER]. */
        static readonly DISTANCE_FADE_OBJECT_DITHER = 3
        constructor(identifier?: any)
        
        /** If `true`, enables the specified flag. Flags are optional behavior that can be turned on and off. Only one flag can be enabled at a time with this function, the flag enumerators cannot be bit-masked together to enable or disable multiple flags at once. Flags can also be enabled by setting the corresponding member to `true`. See [enum Flags] enumerator for options. */
        setFlag(flag: BaseMaterial3D.Flags, enable: boolean): void
        
        /** Returns `true`, if the specified flag is enabled. See [enum Flags] enumerator for options. */
        getFlag(flag: BaseMaterial3D.Flags): boolean
        
        /** If `true`, enables the specified [enum Feature]. Many features that are available in [BaseMaterial3D]s need to be enabled before use. This way the cost for using the feature is only incurred when specified. Features can also be enabled by setting the corresponding member to `true`. */
        setFeature(feature: BaseMaterial3D.Feature, enable: boolean): void
        
        /** Returns `true`, if the specified [enum Feature] is enabled. */
        getFeature(feature: BaseMaterial3D.Feature): boolean
        
        /** Sets the texture for the slot specified by [param param]. See [enum TextureParam] for available slots. */
        setTexture(param: BaseMaterial3D.TextureParam, texture: Texture2D): void
        
        /** Returns the [Texture2D] associated with the specified [enum TextureParam]. */
        getTexture(param: BaseMaterial3D.TextureParam): null | Texture2D
        
        /** The material's transparency mode. Some transparency modes will disable shadow casting. Any transparency mode other than [constant TRANSPARENCY_DISABLED] has a greater performance impact compared to opaque rendering. See also [member blend_mode]. */
        get transparency(): int64
        set transparency(value: int64)
        
        /** Threshold at which the alpha scissor will discard values. Higher values will result in more pixels being discarded. If the material becomes too opaque at a distance, try increasing [member alpha_scissor_threshold]. If the material disappears at a distance, try decreasing [member alpha_scissor_threshold]. */
        get alphaScissorThreshold(): float64
        set alphaScissorThreshold(value: float64)
        
        /** The hashing scale for Alpha Hash. Recommended values between `0` and `2`. */
        get alphaHashScale(): float64
        set alphaHashScale(value: float64)
        
        /** The type of alpha antialiasing to apply. See [enum AlphaAntiAliasing]. */
        get alphaAntialiasingMode(): int64
        set alphaAntialiasingMode(value: int64)
        
        /** Threshold at which antialiasing will be applied on the alpha channel. */
        get alphaAntialiasingEdge(): float64
        set alphaAntialiasingEdge(value: float64)
        
        /** The material's blend mode.  
         *      
         *  **Note:** Values other than `Mix` force the object into the transparent pipeline. See [enum BlendMode].  
         */
        get blendMode(): int64
        set blendMode(value: int64)
        
        /** Determines which side of the triangle to cull depending on whether the triangle faces towards or away from the camera. See [enum CullMode]. */
        get cullMode(): int64
        set cullMode(value: int64)
        
        /** Determines when depth rendering takes place. See [enum DepthDrawMode]. See also [member transparency]. */
        get depthDrawMode(): int64
        set depthDrawMode(value: int64)
        
        /** If `true`, depth testing is disabled and the object will be drawn in render order. */
        get noDepthTest(): boolean
        set noDepthTest(value: boolean)
        
        /** Sets whether the shading takes place, per-pixel, per-vertex or unshaded. Per-vertex lighting is faster, making it the best choice for mobile applications, however it looks considerably worse than per-pixel. Unshaded rendering is the fastest, but disables all interactions with lights. */
        get shadingMode(): int64
        set shadingMode(value: int64)
        
        /** The algorithm used for diffuse light scattering. See [enum DiffuseMode]. */
        get diffuseMode(): int64
        set diffuseMode(value: int64)
        
        /** The method for rendering the specular blob. See [enum SpecularMode].  
         *      
         *  **Note:** [member specular_mode] only applies to the specular blob. It does not affect specular reflections from the sky, screen-space reflections, [VoxelGI], SDFGI or [ReflectionProbe]s. To disable reflections from these sources as well, set [member metallic_specular] to `0.0` instead.  
         */
        get specularMode(): int64
        set specularMode(value: int64)
        
        /** If `true`, the object receives no ambient light. */
        get disableAmbientLight(): boolean
        set disableAmbientLight(value: boolean)
        
        /** If `true`, the object will not be affected by fog (neither volumetric nor depth fog). This is useful for unshaded or transparent materials (e.g. particles), which without this setting will be affected even if fully transparent. */
        get disableFog(): boolean
        set disableFog(value: boolean)
        
        /** If `true`, disables specular occlusion even if [member ProjectSettings.rendering/reflections/specular_occlusion/enabled] is `false`. */
        get disableSpecularOcclusion(): boolean
        set disableSpecularOcclusion(value: boolean)
        
        /** If `true`, the vertex color is used as albedo color. */
        get vertexColorUseAsAlbedo(): boolean
        set vertexColorUseAsAlbedo(value: boolean)
        
        /** If `true`, vertex colors are considered to be stored in sRGB color space and are converted to linear color space during rendering. If `false`, vertex colors are considered to be stored in linear color space and are rendered as-is. See also [member albedo_texture_force_srgb].  
         *      
         *  **Note:** Only effective when using the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        get vertexColorIsSrgb(): boolean
        set vertexColorIsSrgb(value: boolean)
        
        /** The material's base color.  
         *      
         *  **Note:** If [member detail_enabled] is `true` and a [member detail_albedo] texture is specified, [member albedo_color] will  *not*  modulate the detail texture. This can be used to color partial areas of a material by not specifying an albedo texture and using a transparent [member detail_albedo] texture instead.  
         */
        get albedoColor(): Color
        set albedoColor(value: Color)
        
        /** Texture to multiply by [member albedo_color]. Used for basic texturing of objects.  
         *  If the texture appears unexpectedly too dark or too bright, check [member albedo_texture_force_srgb].  
         */
        get albedoTexture(): null | Texture2D
        set albedoTexture(value: null | Texture2D)
        
        /** If `true`, forces a conversion of the [member albedo_texture] from sRGB color space to linear color space. See also [member vertex_color_is_srgb].  
         *  This should only be enabled when needed (typically when using a [ViewportTexture] as [member albedo_texture]). If [member albedo_texture_force_srgb] is `true` when it shouldn't be, the texture will appear to be too dark. If [member albedo_texture_force_srgb] is `false` when it shouldn't be, the texture will appear to be too bright.  
         */
        get albedoTextureForceSrgb(): boolean
        set albedoTextureForceSrgb(value: boolean)
        
        /** Enables multichannel signed distance field rendering shader. Use [member msdf_pixel_range] and [member msdf_outline_size] to configure MSDF parameters. */
        get albedoTextureMsdf(): boolean
        set albedoTextureMsdf(value: boolean)
        
        /** The Occlusion/Roughness/Metallic texture to use. This is a more efficient replacement of [member ao_texture], [member roughness_texture] and [member metallic_texture] in [ORMMaterial3D]. Ambient occlusion is stored in the red channel. Roughness map is stored in the green channel. Metallic map is stored in the blue channel. The alpha channel is ignored. */
        get ormTexture(): null | Texture2D
        set ormTexture(value: null | Texture2D)
        
        /** A high value makes the material appear more like a metal. Non-metals use their albedo as the diffuse color and add diffuse to the specular reflection. With non-metals, the reflection appears on top of the albedo color. Metals use their albedo as a multiplier to the specular reflection and set the diffuse color to black resulting in a tinted reflection. Materials work better when fully metal or fully non-metal, values between `0` and `1` should only be used for blending between metal and non-metal sections. To alter the amount of reflection use [member roughness]. */
        get metallic(): float64
        set metallic(value: float64)
        
        /** Adjusts the strength of specular reflections. Specular reflections are composed of scene reflections and the specular lobe which is the bright spot that is reflected from light sources. When set to `0.0`, no specular reflections will be visible. This differs from the [constant SPECULAR_DISABLED] [enum SpecularMode] as [constant SPECULAR_DISABLED] only applies to the specular lobe from the light source.  
         *      
         *  **Note:** Unlike [member metallic], this is not energy-conserving, so it should be left at `0.5` in most cases. See also [member roughness].  
         */
        get metallicSpecular(): float64
        set metallicSpecular(value: float64)
        
        /** Texture used to specify metallic for an object. This is multiplied by [member metallic]. */
        get metallicTexture(): null | Texture2D
        set metallicTexture(value: null | Texture2D)
        
        /** Specifies the channel of the [member metallic_texture] in which the metallic information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        get metallicTextureChannel(): int64
        set metallicTextureChannel(value: int64)
        
        /** Surface reflection. A value of `0` represents a perfect mirror while a value of `1` completely blurs the reflection. See also [member metallic]. */
        get roughness(): float64
        set roughness(value: float64)
        
        /** Texture used to control the roughness per-pixel. Multiplied by [member roughness]. */
        get roughnessTexture(): null | Texture2D
        set roughnessTexture(value: null | Texture2D)
        
        /** Specifies the channel of the [member roughness_texture] in which the roughness information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        get roughnessTextureChannel(): int64
        set roughnessTextureChannel(value: int64)
        
        /** If `true`, the body emits light. Emitting light makes the object appear brighter. The object can also cast light on other objects if a [VoxelGI], SDFGI, or [LightmapGI] is used and this object is used in baked lighting. */
        get emissionEnabled(): boolean
        set emissionEnabled(value: boolean)
        
        /** The emitted light's color. See [member emission_enabled]. */
        get emission(): Color
        set emission(value: Color)
        
        /** Multiplier for emitted light. See [member emission_enabled]. */
        get emissionEnergyMultiplier(): float64
        set emissionEnergyMultiplier(value: float64)
        
        /** Luminance of emitted light, measured in nits (candela per square meter). Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled. The default is roughly equivalent to an indoor lightbulb. */
        get emissionIntensity(): float64
        set emissionIntensity(value: float64)
        
        /** Sets how [member emission] interacts with [member emission_texture]. Can either add or multiply. See [enum EmissionOperator] for options. */
        get emissionOperator(): int64
        set emissionOperator(value: int64)
        
        /** Use `UV2` to read from the [member emission_texture]. */
        get emissionOnUV2(): boolean
        set emissionOnUV2(value: boolean)
        
        /** Texture that specifies how much surface emits light at a given point. */
        get emissionTexture(): null | Texture2D
        set emissionTexture(value: null | Texture2D)
        
        /** If `true`, normal mapping is enabled. This has a slight performance cost, especially on mobile GPUs. */
        get normalEnabled(): boolean
        set normalEnabled(value: boolean)
        
        /** The strength of the normal map's effect. */
        get normalScale(): float64
        set normalScale(value: float64)
        
        /** Texture used to specify the normal at a given pixel. The [member normal_texture] only uses the red and green channels; the blue and alpha channels are ignored. The normal read from [member normal_texture] is oriented around the surface normal provided by the [Mesh].  
         *      
         *  **Note:** The mesh must have both normals and tangents defined in its vertex data. Otherwise, the normal map won't render correctly and will only appear to darken the whole surface. If creating geometry with [SurfaceTool], you can use [method SurfaceTool.generate_normals] and [method SurfaceTool.generate_tangents] to automatically generate normals and tangents respectively.  
         *      
         *  **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [url=http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates]this page[/url] for a comparison of normal map coordinates expected by popular engines.  
         *      
         *  **Note:** If [member detail_enabled] is `true`, the [member detail_albedo] texture is drawn  *below*  the [member normal_texture]. To display a normal map  *above*  the [member detail_albedo] texture, use [member detail_normal] instead.  
         */
        get normalTexture(): null | Texture2D
        set normalTexture(value: null | Texture2D)
        
        /** If `true`, the bent normal map is enabled. This allows for more accurate indirect lighting and specular occlusion. */
        get bentNormalEnabled(): boolean
        set bentNormalEnabled(value: boolean)
        
        /** Texture that specifies the average direction of incoming ambient light at a given pixel. The [member bent_normal_texture] only uses the red and green channels; the blue and alpha channels are ignored. The normal read from [member bent_normal_texture] is oriented around the surface normal provided by the [Mesh].  
         *      
         *  **Note:** A bent normal map is different from a regular normal map. When baking a bent normal map make sure to use **a cosine distribution** for the bent normal map to work correctly.  
         *      
         *  **Note:** The mesh must have both normals and tangents defined in its vertex data. Otherwise, the shading produced by the bent normal map will not look correct. If creating geometry with [SurfaceTool], you can use [method SurfaceTool.generate_normals] and [method SurfaceTool.generate_tangents] to automatically generate normals and tangents respectively.  
         *      
         *  **Note:** Godot expects the bent normal map to use X+, Y+, and Z+ coordinates. See [url=http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates]this page[/url] for a comparison of normal map coordinates expected by popular engines.  
         */
        get bentNormalTexture(): null | Texture2D
        set bentNormalTexture(value: null | Texture2D)
        
        /** If `true`, rim effect is enabled. Rim lighting increases the brightness at glancing angles on an object.  
         *      
         *  **Note:** Rim lighting is not visible if the material's [member shading_mode] is [constant SHADING_MODE_UNSHADED].  
         */
        get rimEnabled(): boolean
        set rimEnabled(value: boolean)
        
        /** Sets the strength of the rim lighting effect. */
        get rim(): float64
        set rim(value: float64)
        
        /** The amount of to blend light and albedo color when rendering rim effect. If `0` the light color is used, while `1` means albedo color is used. An intermediate value generally works best. */
        get rimTint(): float64
        set rimTint(value: float64)
        
        /** Texture used to set the strength of the rim lighting effect per-pixel. Multiplied by [member rim]. */
        get rimTexture(): null | Texture2D
        set rimTexture(value: null | Texture2D)
        
        /** If `true`, clearcoat rendering is enabled. Adds a secondary transparent pass to the lighting calculation resulting in an added specular blob. This makes materials appear as if they have a clear layer on them that can be either glossy or rough.  
         *      
         *  **Note:** Clearcoat rendering is not visible if the material's [member shading_mode] is [constant SHADING_MODE_UNSHADED].  
         */
        get clearcoatEnabled(): boolean
        set clearcoatEnabled(value: boolean)
        
        /** Sets the strength of the clearcoat effect. Setting to `0` looks the same as disabling the clearcoat effect. */
        get clearcoat(): float64
        set clearcoat(value: float64)
        
        /** Sets the roughness of the clearcoat pass. A higher value results in a rougher clearcoat while a lower value results in a smoother clearcoat. */
        get clearcoatRoughness(): float64
        set clearcoatRoughness(value: float64)
        
        /** Texture that defines the strength of the clearcoat effect and the glossiness of the clearcoat. Strength is specified in the red channel while glossiness is specified in the green channel. */
        get clearcoatTexture(): null | Texture2D
        set clearcoatTexture(value: null | Texture2D)
        
        /** If `true`, anisotropy is enabled. Anisotropy changes the shape of the specular blob and aligns it to tangent space. This is useful for brushed aluminum and hair reflections.  
         *      
         *  **Note:** Mesh tangents are needed for anisotropy to work. If the mesh does not contain tangents, the anisotropy effect will appear broken.  
         *      
         *  **Note:** Material anisotropy should not to be confused with anisotropic texture filtering, which can be enabled by setting [member texture_filter] to [constant TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC].  
         */
        get anisotropyEnabled(): boolean
        set anisotropyEnabled(value: boolean)
        
        /** The strength of the anisotropy effect. This is multiplied by [member anisotropy_flowmap]'s alpha channel if a texture is defined there and the texture contains an alpha channel. */
        get anisotropy(): float64
        set anisotropy(value: float64)
        
        /** Texture that offsets the tangent map for anisotropy calculations and optionally controls the anisotropy effect (if an alpha channel is present). The flowmap texture is expected to be a derivative map, with the red channel representing distortion on the X axis and green channel representing distortion on the Y axis. Values below 0.5 will result in negative distortion, whereas values above 0.5 will result in positive distortion.  
         *  If present, the texture's alpha channel will be used to multiply the strength of the [member anisotropy] effect. Fully opaque pixels will keep the anisotropy effect's original strength while fully transparent pixels will disable the anisotropy effect entirely. The flowmap texture's blue channel is ignored.  
         */
        get anisotropyFlowmap(): null | Texture2D
        set anisotropyFlowmap(value: null | Texture2D)
        
        /** If `true`, ambient occlusion is enabled. Ambient occlusion darkens areas based on the [member ao_texture]. */
        get aOEnabled(): boolean
        set aOEnabled(value: boolean)
        
        /** Amount that ambient occlusion affects lighting from lights. If `0`, ambient occlusion only affects ambient light. If `1`, ambient occlusion affects lights just as much as it affects ambient light. This can be used to impact the strength of the ambient occlusion effect, but typically looks unrealistic. */
        get aOLightAffect(): float64
        set aOLightAffect(value: float64)
        
        /** Texture that defines the amount of ambient occlusion for a given point on the object. */
        get aOTexture(): null | Texture2D
        set aOTexture(value: null | Texture2D)
        
        /** If `true`, use `UV2` coordinates to look up from the [member ao_texture]. */
        get aOOnUV2(): boolean
        set aOOnUV2(value: boolean)
        
        /** Specifies the channel of the [member ao_texture] in which the ambient occlusion information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored metallic in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        get aOTextureChannel(): int64
        set aOTextureChannel(value: int64)
        
        /** If `true`, height mapping is enabled (also called "parallax mapping" or "depth mapping"). See also [member normal_enabled]. Height mapping is a demanding feature on the GPU, so it should only be used on materials where it makes a significant visual difference.  
         *      
         *  **Note:** Height mapping is not supported if triplanar mapping is used on the same material. The value of [member heightmap_enabled] will be ignored if [member uv1_triplanar] is enabled.  
         */
        get heightmapEnabled(): boolean
        set heightmapEnabled(value: boolean)
        
        /** The heightmap scale to use for the parallax effect (see [member heightmap_enabled]). The default value is tuned so that the highest point (value = 255) appears to be 5 cm higher than the lowest point (value = 0). Higher values result in a deeper appearance, but may result in artifacts appearing when looking at the material from oblique angles, especially when the camera moves. Negative values can be used to invert the parallax effect, but this is different from inverting the texture using [member heightmap_flip_texture] as the material will also appear to be "closer" to the camera. In most cases, [member heightmap_scale] should be kept to a positive value.  
         *      
         *  **Note:** If the height map effect looks strange regardless of this value, try adjusting [member heightmap_flip_binormal] and [member heightmap_flip_tangent]. See also [member heightmap_texture] for recommendations on authoring heightmap textures, as the way the heightmap texture is authored affects how [member heightmap_scale] behaves.  
         */
        get heightmapScale(): float64
        set heightmapScale(value: float64)
        
        /** If `true`, uses parallax occlusion mapping to represent depth in the material instead of simple offset mapping (see [member heightmap_enabled]). This results in a more convincing depth effect, but is much more expensive on the GPU. Only enable this on materials where it makes a significant visual difference. */
        get heightmapDeepParallax(): boolean
        set heightmapDeepParallax(value: boolean)
        
        /** The number of layers to use for parallax occlusion mapping when the camera is far away from the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.  
         *      
         *  **Note:** Only effective if [member heightmap_deep_parallax] is `true`.  
         */
        get heightmapMinLayers(): int64
        set heightmapMinLayers(value: int64)
        
        /** The number of layers to use for parallax occlusion mapping when the camera is up close to the material. Higher values result in a more convincing depth effect, especially in materials that have steep height changes. Higher values have a significant cost on the GPU, so it should only be increased on materials where it makes a significant visual difference.  
         *      
         *  **Note:** Only effective if [member heightmap_deep_parallax] is `true`.  
         */
        get heightmapMaxLayers(): int64
        set heightmapMaxLayers(value: int64)
        
        /** If `true`, flips the mesh's tangent vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable [member heightmap_scale]), try setting this to `true`. */
        get heightmapFlipTangent(): boolean
        set heightmapFlipTangent(value: boolean)
        
        /** If `true`, flips the mesh's binormal vectors when interpreting the height map. If the heightmap effect looks strange when the camera moves (even with a reasonable [member heightmap_scale]), try setting this to `true`. */
        get heightmapFlipBinormal(): boolean
        set heightmapFlipBinormal(value: boolean)
        
        /** The texture to use as a height map. See also [member heightmap_enabled].  
         *  For best results, the texture should be normalized (with [member heightmap_scale] reduced to compensate). In [url=https://gimp.org]GIMP[/url], this can be done using **Colors > Auto > Equalize**. If the texture only uses a small part of its available range, the parallax effect may look strange, especially when the camera moves.  
         *      
         *  **Note:** To reduce memory usage and improve loading times, you may be able to use a lower-resolution heightmap texture as most heightmaps are only comprised of low-frequency data.  
         */
        get heightmapTexture(): null | Texture2D
        set heightmapTexture(value: null | Texture2D)
        
        /** If `true`, interprets the height map texture as a depth map, with brighter values appearing to be "lower" in altitude compared to darker values.  
         *  This can be enabled for compatibility with some materials authored for Godot 3.x. This is not necessary if the Invert import option was used to invert the depth map in Godot 3.x, in which case [member heightmap_flip_texture] should remain `false`.  
         */
        get heightmapFlipTexture(): boolean
        set heightmapFlipTexture(value: boolean)
        
        /** If `true`, subsurface scattering is enabled. Emulates light that penetrates an object's surface, is scattered, and then emerges. Subsurface scattering quality is controlled by [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_quality]. */
        get subsurfScatterEnabled(): boolean
        set subsurfScatterEnabled(value: boolean)
        
        /** The strength of the subsurface scattering effect. The depth of the effect is also controlled by [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale], which is set globally. */
        get subsurfScatterStrength(): float64
        set subsurfScatterStrength(value: float64)
        
        /** If `true`, subsurface scattering will use a special mode optimized for the color and density of human skin, such as boosting the intensity of the red channel in subsurface scattering. */
        get subsurfScatterSkinMode(): boolean
        set subsurfScatterSkinMode(value: boolean)
        
        /** Texture used to control the subsurface scattering strength. Stored in the red texture channel. Multiplied by [member subsurf_scatter_strength]. */
        get subsurfScatterTexture(): null | Texture2D
        set subsurfScatterTexture(value: null | Texture2D)
        
        /** If `true`, enables subsurface scattering transmittance. Only effective if [member subsurf_scatter_enabled] is `true`. See also [member backlight_enabled]. */
        get subsurfScatterTransmittanceEnabled(): boolean
        set subsurfScatterTransmittanceEnabled(value: boolean)
        
        /** The color to multiply the subsurface scattering transmittance effect with. Ignored if [member subsurf_scatter_skin_mode] is `true`. */
        get subsurfScatterTransmittanceColor(): Color
        set subsurfScatterTransmittanceColor(value: Color)
        
        /** The texture to use for multiplying the intensity of the subsurface scattering transmittance intensity. See also [member subsurf_scatter_texture]. Ignored if [member subsurf_scatter_skin_mode] is `true`. */
        get subsurfScatterTransmittanceTexture(): null | Texture2D
        set subsurfScatterTransmittanceTexture(value: null | Texture2D)
        
        /** The depth of the subsurface scattering transmittance effect. */
        get subsurfScatterTransmittanceDepth(): float64
        set subsurfScatterTransmittanceDepth(value: float64)
        
        /** The intensity of the subsurface scattering transmittance effect. */
        get subsurfScatterTransmittanceBoost(): float64
        set subsurfScatterTransmittanceBoost(value: float64)
        
        /** If `true`, the backlight effect is enabled. See also [member subsurf_scatter_transmittance_enabled]. */
        get backlightEnabled(): boolean
        set backlightEnabled(value: boolean)
        
        /** The color used by the backlight effect. Represents the light passing through an object. */
        get backlight(): Color
        set backlight(value: Color)
        
        /** Texture used to control the backlight effect per-pixel. Added to [member backlight]. */
        get backlightTexture(): null | Texture2D
        set backlightTexture(value: null | Texture2D)
        
        /** If `true`, the refraction effect is enabled. Distorts transparency based on light from behind the object.  
         *      
         *  **Note:** Refraction is implemented using the screen texture. Only opaque materials will appear in the refraction, since transparent materials do not appear in the screen texture.  
         */
        get refractionEnabled(): boolean
        set refractionEnabled(value: boolean)
        
        /** The strength of the refraction effect. */
        get refractionScale(): float64
        set refractionScale(value: float64)
        
        /** Texture that controls the strength of the refraction per-pixel. Multiplied by [member refraction_scale]. */
        get refractionTexture(): null | Texture2D
        set refractionTexture(value: null | Texture2D)
        
        /** Specifies the channel of the [member refraction_texture] in which the refraction information is stored. This is useful when you store the information for multiple effects in a single texture. For example if you stored refraction in the red channel, roughness in the blue, and ambient occlusion in the green you could reduce the number of textures you use. */
        get refractionTextureChannel(): int64
        set refractionTextureChannel(value: int64)
        
        /** If `true`, enables the detail overlay. Detail is a second texture that gets mixed over the surface of the object based on [member detail_mask] and [member detail_albedo]'s alpha channel. This can be used to add variation to objects, or to blend between two different albedo/normal textures. */
        get detailEnabled(): boolean
        set detailEnabled(value: boolean)
        
        /** Texture used to specify how the detail textures get blended with the base textures. [member detail_mask] can be used together with [member detail_albedo]'s alpha channel (if any). */
        get detailMask(): null | Texture2D
        set detailMask(value: null | Texture2D)
        
        /** Specifies how the [member detail_albedo] should blend with the current `ALBEDO`. See [enum BlendMode] for options. */
        get detailBlendMode(): int64
        set detailBlendMode(value: int64)
        
        /** Specifies whether to use `UV` or `UV2` for the detail layer. See [enum DetailUV] for options. */
        get detailUVLayer(): int64
        set detailUVLayer(value: int64)
        
        /** Texture that specifies the color of the detail overlay. [member detail_albedo]'s alpha channel is used as a mask, even when the material is opaque. To use a dedicated texture as a mask, see [member detail_mask].  
         *      
         *  **Note:** [member detail_albedo] is  *not*  modulated by [member albedo_color].  
         */
        get detailAlbedo(): null | Texture2D
        set detailAlbedo(value: null | Texture2D)
        
        /** Texture that specifies the per-pixel normal of the detail overlay. The [member detail_normal] texture only uses the red and green channels; the blue and alpha channels are ignored. The normal read from [member detail_normal] is oriented around the surface normal provided by the [Mesh].  
         *      
         *  **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [url=http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates]this page[/url] for a comparison of normal map coordinates expected by popular engines.  
         */
        get detailNormal(): null | Texture2D
        set detailNormal(value: null | Texture2D)
        
        /** How much to scale the `UV` coordinates. This is multiplied by `UV` in the vertex function. The Z component is used when [member uv1_triplanar] is enabled, but it is not used anywhere else. */
        get uv1Scale(): Vector3
        set uv1Scale(value: Vector3)
        
        /** How much to offset the `UV` coordinates. This amount will be added to `UV` in the vertex function. This can be used to offset a texture. The Z component is used when [member uv1_triplanar] is enabled, but it is not used anywhere else. */
        get uv1Offset(): Vector3
        set uv1Offset(value: Vector3)
        
        /** If `true`, instead of using `UV` textures will use a triplanar texture lookup to determine how to apply textures. Triplanar uses the orientation of the object's surface to blend between texture coordinates. It reads from the source texture 3 times, once for each axis and then blends between the results based on how closely the pixel aligns with each axis. This is often used for natural features to get a realistic blend of materials. Because triplanar texturing requires many more texture reads per-pixel it is much slower than normal UV texturing. Additionally, because it is blending the texture between the three axes, it is unsuitable when you are trying to achieve crisp texturing. */
        get uv1Triplanar(): boolean
        set uv1Triplanar(value: boolean)
        
        /** A lower number blends the texture more softly while a higher number blends the texture more sharply.  
         *      
         *  **Note:** [member uv1_triplanar_sharpness] is clamped between `0.0` and `150.0` (inclusive) as values outside that range can look broken depending on the mesh.  
         */
        get uv1TriplanarSharpness(): float64
        set uv1TriplanarSharpness(value: float64)
        
        /** If `true`, triplanar mapping for `UV` is calculated in world space rather than object local space. See also [member uv1_triplanar]. */
        get uv1WorldTriplanar(): boolean
        set uv1WorldTriplanar(value: boolean)
        
        /** How much to scale the `UV2` coordinates. This is multiplied by `UV2` in the vertex function. The Z component is used when [member uv2_triplanar] is enabled, but it is not used anywhere else. */
        get uV2Scale(): Vector3
        set uV2Scale(value: Vector3)
        
        /** How much to offset the `UV2` coordinates. This amount will be added to `UV2` in the vertex function. This can be used to offset a texture. The Z component is used when [member uv2_triplanar] is enabled, but it is not used anywhere else. */
        get uV2Offset(): Vector3
        set uV2Offset(value: Vector3)
        
        /** If `true`, instead of using `UV2` textures will use a triplanar texture lookup to determine how to apply textures. Triplanar uses the orientation of the object's surface to blend between texture coordinates. It reads from the source texture 3 times, once for each axis and then blends between the results based on how closely the pixel aligns with each axis. This is often used for natural features to get a realistic blend of materials. Because triplanar texturing requires many more texture reads per-pixel it is much slower than normal UV texturing. Additionally, because it is blending the texture between the three axes, it is unsuitable when you are trying to achieve crisp texturing. */
        get uV2Triplanar(): boolean
        set uV2Triplanar(value: boolean)
        
        /** A lower number blends the texture more softly while a higher number blends the texture more sharply.  
         *      
         *  **Note:** [member uv2_triplanar_sharpness] is clamped between `0.0` and `150.0` (inclusive) as values outside that range can look broken depending on the mesh.  
         */
        get uV2TriplanarSharpness(): float64
        set uV2TriplanarSharpness(value: float64)
        
        /** If `true`, triplanar mapping for `UV2` is calculated in world space rather than object local space. See also [member uv2_triplanar]. */
        get uV2WorldTriplanar(): boolean
        set uV2WorldTriplanar(value: boolean)
        
        /** Filter flags for the texture. See [enum TextureFilter] for options.  
         *      
         *  **Note:** [member heightmap_texture] is always sampled with linear filtering, even if nearest-neighbor filtering is selected here. This is to ensure the heightmap effect looks as intended. If you need sharper height transitions between pixels, resize the heightmap texture in an image editor with nearest-neighbor filtering.  
         */
        get textureFilter(): int64
        set textureFilter(value: int64)
        
        /** Repeat flags for the texture. See [enum TextureFilter] for options. */
        get textureRepeat(): boolean
        set textureRepeat(value: boolean)
        
        /** If `true`, the object receives no shadow that would otherwise be cast onto it. */
        get disableReceiveShadows(): boolean
        set disableReceiveShadows(value: boolean)
        
        /** If `true`, enables the "shadow to opacity" render mode where lighting modifies the alpha so shadowed areas are opaque and non-shadowed areas are transparent. Useful for overlaying shadows onto a camera feed in AR. */
        get shadowToOpacity(): boolean
        set shadowToOpacity(value: boolean)
        
        /** Controls how the object faces the camera. See [enum BillboardMode].  
         *      
         *  **Note:** Billboard mode is not suitable for VR because the left-right vector of the camera is not horizontal when the screen is attached to your head instead of on the table. See [url=https://github.com/godotengine/godot/issues/41567]GitHub issue #41567[/url] for details.  
         */
        get billboardMode(): int64
        set billboardMode(value: int64)
        
        /** If `true`, the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. Only applies when [member billboard_mode] is not [constant BILLBOARD_DISABLED]. */
        get billboardKeepScale(): boolean
        set billboardKeepScale(value: boolean)
        
        /** The number of horizontal frames in the particle sprite sheet. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
        get particlesAnimHFrames(): int64
        set particlesAnimHFrames(value: int64)
        
        /** The number of vertical frames in the particle sprite sheet. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
        get particlesAnimVFrames(): int64
        set particlesAnimVFrames(value: int64)
        
        /** If `true`, particle animations are looped. Only enabled when using [constant BILLBOARD_PARTICLES]. See [member billboard_mode]. */
        get particlesAnimLoop(): boolean
        set particlesAnimLoop(value: boolean)
        
        /** If `true`, enables the vertex grow setting. This can be used to create mesh-based outlines using a second material pass and its [member cull_mode] set to [constant CULL_FRONT]. See also [member grow_amount].  
         *      
         *  **Note:** Vertex growth cannot create new vertices, which means that visible gaps may occur in sharp corners. This can be alleviated by designing the mesh to use smooth normals exclusively using [url=http://wiki.polycount.com/wiki/Face_weighted_normals]face weighted normals[/url] in the 3D authoring software. In this case, grow will be able to join every outline together, just like in the original mesh.  
         */
        get grow(): boolean
        set grow(value: boolean)
        
        /** Grows object vertices in the direction of their normals. Only effective if [member grow] is `true`. */
        get growAmount(): float64
        set growAmount(value: float64)
        
        /** If `true`, the object is rendered at the same size regardless of distance. The object's size on screen is the same as if the camera was `1.0` units away from the object's origin, regardless of the actual distance from the camera. The [Camera3D]'s field of view (or [member Camera3D.size] when in orthogonal/frustum mode) still affects the size the object is drawn at. */
        get fixedSize(): boolean
        set fixedSize(value: boolean)
        
        /** If `true`, render point size can be changed.  
         *      
         *  **Note:** This is only effective for objects whose geometry is point-based rather than triangle-based. See also [member point_size].  
         */
        get usePointSize(): boolean
        set usePointSize(value: boolean)
        
        /** The point size in pixels. See [member use_point_size]. */
        get pointSize(): float64
        set pointSize(value: float64)
        
        /** If `true`, enables parts of the shader required for [GPUParticles3D] trails to function. This also requires using a mesh with appropriate skinning, such as [RibbonTrailMesh] or [TubeTrailMesh]. Enabling this feature outside of materials used in [GPUParticles3D] meshes will break material rendering. */
        get useParticleTrails(): boolean
        set useParticleTrails(value: boolean)
        
        /** If `true` use [member z_clip_scale] to scale the object being rendered towards the camera to avoid clipping into things like walls. */
        get useZClipScale(): boolean
        set useZClipScale(value: boolean)
        
        /** Scales the object being rendered towards the camera to avoid clipping into things like walls. This is intended to be used for objects that are fixed with respect to the camera like player arms, tools, etc. Lighting and shadows will continue to work correctly when this setting is adjusted, but screen-space effects like SSAO and SSR may break with lower scales. Therefore, try to keep this setting as close to `1.0` as possible. */
        get zClipScale(): float64
        set zClipScale(value: float64)
        
        /** If `true` use [member fov_override] to override the [Camera3D]'s field of view angle. */
        get useFovOverride(): boolean
        set useFovOverride(value: boolean)
        
        /** Overrides the [Camera3D]'s field of view angle (in degrees).  
         *      
         *  **Note:** This behaves as if the field of view is set on a [Camera3D] with [member Camera3D.keep_aspect] set to [constant Camera3D.KEEP_HEIGHT]. Additionally, it may not look correct on a non-perspective camera where the field of view setting is ignored.  
         */
        get fovOverride(): float64
        set fovOverride(value: float64)
        
        /** If `true`, the proximity fade effect is enabled. The proximity fade effect fades out each pixel based on its distance to another object. */
        get proximityFadeEnabled(): boolean
        set proximityFadeEnabled(value: boolean)
        
        /** Distance over which the fade effect takes place. The larger the distance the longer it takes for an object to fade. */
        get proximityFadeDistance(): float64
        set proximityFadeDistance(value: float64)
        
        /** The width of the range around the shape between the minimum and maximum representable signed distance. */
        get msdfPixelRange(): float64
        set msdfPixelRange(value: float64)
        
        /** The width of the shape outline. */
        get msdfOutlineSize(): float64
        set msdfOutlineSize(value: float64)
        
        /** Specifies which type of fade to use. Can be any of the [enum DistanceFadeMode]s. */
        get distanceFadeMode(): int64
        set distanceFadeMode(value: int64)
        
        /** Distance at which the object starts to become visible. If the object is less than this distance away, it will be invisible.  
         *      
         *  **Note:** If [member distance_fade_min_distance] is greater than [member distance_fade_max_distance], the behavior will be reversed. The object will start to fade away at [member distance_fade_max_distance] and will fully disappear once it reaches [member distance_fade_min_distance].  
         */
        get distanceFadeMinDistance(): float64
        set distanceFadeMinDistance(value: float64)
        
        /** Distance at which the object appears fully opaque.  
         *      
         *  **Note:** If [member distance_fade_max_distance] is less than [member distance_fade_min_distance], the behavior will be reversed. The object will start to fade away at [member distance_fade_max_distance] and will fully disappear once it reaches [member distance_fade_min_distance].  
         */
        get distanceFadeMaxDistance(): float64
        set distanceFadeMaxDistance(value: float64)
    }
    class Bitmap extends Resource {
        constructor(identifier?: any)
        create(size: Vector2I): void
        createFromImageAlpha(image: Image, threshold?: float64 /* = 0.1 */): void
        setBitv(position: Vector2I, bit: boolean): void
        setBit(x: int64, y: int64, bit: boolean): void
        getBitv(position: Vector2I): boolean
        getBit(x: int64, y: int64): boolean
        setBitRect(rect: Rect2I, bit: boolean): void
        getTrueBitCount(): int64
        getSize(): Vector2I
        resize(newSize: Vector2I): void
        growMask(pixels: int64, rect: Rect2I): void
        convertToImage(): null | Image
        opaqueToPolygons(rect: Rect2I, epsilon?: float64 /* = 2 */): GArray
        get data(): GDictionary
        set data(value: GDictionary)
    }
    /** A joint used with [Skeleton2D] to control and animate other nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_bone2d.html  
     */
    class Bone2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Resets the bone to the rest pose. This is equivalent to setting [member Node2D.transform] to [member rest]. */
        applyRest(): void
        
        /** Returns the node's [member rest] [Transform2D] if it doesn't have a parent, or its rest pose relative to its parent. */
        getSkeletonRest(): Transform2D
        
        /** Returns the node's index as part of the entire skeleton. See [Skeleton2D]. */
        getIndexInSkeleton(): int64
        
        /** When set to `true`, the [Bone2D] node will attempt to automatically calculate the bone angle and length using the first child [Bone2D] node, if one exists. If none exist, the [Bone2D] cannot automatically calculate these values and will print a warning. */
        setAutocalculateLengthAndAngle(autoCalculate: boolean): void
        
        /** Returns whether this [Bone2D] is going to autocalculate its length and bone angle using its first [Bone2D] child node, if one exists. If there are no [Bone2D] children, then it cannot autocalculate these values and will print a warning. */
        getAutocalculateLengthAndAngle(): boolean
        
        /** Sets the length of the bone in the [Bone2D]. */
        setLength(length: float64): void
        
        /** Returns the length of the bone in the [Bone2D] node. */
        getLength(): float64
        
        /** Sets the bone angle for the [Bone2D]. This is typically set to the rotation from the [Bone2D] to a child [Bone2D] node.  
         *      
         *  **Note:** This is different from the [Bone2D]'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the [Bone2D]'s [member Node2D.transform].  
         */
        setBoneAngle(angle: float64): void
        
        /** Returns the angle of the bone in the [Bone2D].  
         *      
         *  **Note:** This is different from the [Bone2D]'s rotation. The bone's angle is the rotation of the bone shown by the gizmo, which is unaffected by the [Bone2D]'s [member Node2D.transform].  
         */
        getBoneAngle(): float64
        
        /** Rest transform of the bone. You can reset the node's transforms to this value using [method apply_rest]. */
        get rest(): Transform2D
        set rest(value: Transform2D)
    }
    /** А node that dynamically copies or overrides the 3D transform of a bone in its parent [Skeleton3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_boneattachment3d.html  
     */
    class BoneAttachment3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the parent or external [Skeleton3D] node if it exists, otherwise returns `null`. */
        getSkeleton(): null | Skeleton3D
        
        /** A function that is called automatically when the [Skeleton3D] is updated. This function is where the [BoneAttachment3D] node updates its position so it is correctly bound when it is  *not*  set to override the bone pose. */
        onSkeletonUpdate(): void
        
        /** Sets whether the BoneAttachment3D node will use an external [Skeleton3D] node rather than attempting to use its parent node as the [Skeleton3D]. When set to `true`, the BoneAttachment3D node will use the external [Skeleton3D] node set in [method set_external_skeleton]. */
        setUseExternalSkeleton(useExternalSkeleton: boolean): void
        
        /** Returns whether the BoneAttachment3D node is using an external [Skeleton3D] rather than attempting to use its parent node as the [Skeleton3D]. */
        getUseExternalSkeleton(): boolean
        
        /** Sets the [NodePath] to the external skeleton that the BoneAttachment3D node should use. See [method set_use_external_skeleton] to enable the external [Skeleton3D] node. */
        setExternalSkeleton(externalSkeleton: NodePath | string): void
        
        /** Returns the [NodePath] to the external [Skeleton3D] node, if one has been set. */
        getExternalSkeleton(): NodePath
        
        /** The name of the attached bone. */
        get boneName(): StringName
        set boneName(value: StringName)
        
        /** The index of the attached bone. */
        get boneIdx(): int64
        set boneIdx(value: int64)
        
        /** Whether the BoneAttachment3D node will override the bone pose of the bone it is attached to. When set to `true`, the BoneAttachment3D node can change the pose of the bone. When set to `false`, the BoneAttachment3D will always be set to the bone's transform.  
         *      
         *  **Note:** This override performs interruptively in the skeleton update process using signals due to the old design. It may cause unintended behavior when used at the same time with [SkeletonModifier3D].  
         */
        get overridePose(): boolean
        set overridePose(value: boolean)
    }
    /** Describes a mapping of bone names for retargeting [Skeleton3D] into common names defined by a [SkeletonProfile].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_bonemap.html  
     */
    class BoneMap extends Resource {
        constructor(identifier?: any)
        /** Returns a skeleton bone name is mapped to [param profile_bone_name].  
         *  In the retargeting process, the returned bone name is the bone name of the source skeleton.  
         */
        getSkeletonBoneName(profileBoneName: StringName): StringName
        
        /** Maps a skeleton bone name to [param profile_bone_name].  
         *  In the retargeting process, the setting bone name is the bone name of the source skeleton.  
         */
        setSkeletonBoneName(profileBoneName: StringName, skeletonBoneName: StringName): void
        
        /** Returns a profile bone name having [param skeleton_bone_name]. If not found, an empty [StringName] will be returned.  
         *  In the retargeting process, the returned bone name is the bone name of the target skeleton.  
         */
        findProfileBoneName(skeletonBoneName: StringName): StringName
        
        /** A [SkeletonProfile] of the mapping target. Key names in the [BoneMap] are synchronized with it. */
        get profile(): null | SkeletonProfile
        set profile(value: null | SkeletonProfile)
        
        /** This signal is emitted when change the key value in the [BoneMap]. This is used to validate mapping and to update [BoneMap] editor. */
        readonly boneMapUpdated: Signal<() => void>
        
        /** This signal is emitted when change the value in profile or change the reference of profile. This is used to update key names in the [BoneMap] and to redraw the [BoneMap] editor. */
        readonly profileUpdated: Signal<() => void>
    }
    namespace BoxContainer {
        enum AlignmentMode {
            AlignmentBegin = 0,
            AlignmentCenter = 1,
            AlignmentEnd = 2,
        }
    }
    /** A container that arranges its child controls horizontally or vertically.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_boxcontainer.html  
     */
    class BoxContainer<Map extends NodePathMap = any> extends Container<Map> {
        /** The child controls will be arranged at the beginning of the container, i.e. top if orientation is vertical, left if orientation is horizontal (right for RTL layout). */
        static readonly ALIGNMENT_BEGIN = 0
        
        /** The child controls will be centered in the container. */
        static readonly ALIGNMENT_CENTER = 1
        
        /** The child controls will be arranged at the end of the container, i.e. bottom if orientation is vertical, right if orientation is horizontal (left for RTL layout). */
        static readonly ALIGNMENT_END = 2
        constructor(identifier?: any)
        
        /** Adds a [Control] node to the box as a spacer. If [param begin] is `true`, it will insert the [Control] node in front of all other children. */
        addSpacer(begin: boolean): null | Control
        
        /** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
        get alignment(): int64
        set alignment(value: int64)
        
        /** If `true`, the [BoxContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HBoxContainer] and [VBoxContainer].  
         */
        get vertical(): boolean
        set vertical(value: boolean)
    }
    /** Generate an axis-aligned box [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_boxmesh.html  
     */
    class BoxMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** The box's width, height and depth. */
        get size(): Vector3
        set size(value: Vector3)
        
        /** Number of extra edge loops inserted along the X axis. */
        get subdivideWidth(): int64
        set subdivideWidth(value: int64)
        
        /** Number of extra edge loops inserted along the Y axis. */
        get subdivideHeight(): int64
        set subdivideHeight(value: int64)
        
        /** Number of extra edge loops inserted along the Z axis. */
        get subdivideDepth(): int64
        set subdivideDepth(value: int64)
    }
    /** Cuboid shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_boxoccluder3d.html  
     */
    class BoxOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        /** The box's size in 3D units. */
        get size(): Vector3
        set size(value: Vector3)
    }
    /** A 3D box shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_boxshape3d.html  
     */
    class BoxShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The box's width, height and depth. */
        get size(): Vector3
        set size(value: Vector3)
    }
    /** A themed button that can contain text and an icon.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_button.html  
     */
    class Button<Map extends NodePathMap = any> extends BaseButton<Map> {
        constructor(identifier?: any)
        /** The button's text that will be displayed inside the button's area. */
        get text(): string
        set text(value: string)
        
        /** Button's icon, if text is present the icon will be placed before the text.  
         *  To edit margin and spacing of the icon, use [theme_item h_separation] theme property and `content_margin_*` properties of the used [StyleBox]es.  
         */
        get icon(): null | Texture2D
        set icon(value: null | Texture2D)
        
        /** Flat buttons don't display decoration. */
        get flat(): boolean
        set flat(value: boolean)
        
        /** Text alignment policy for the button's text, use one of the [enum HorizontalAlignment] constants. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** Sets the clipping behavior when the text exceeds the node's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. */
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        
        /** Autowrap space trimming flags. See [constant TextServer.BREAK_TRIM_START_EDGE_SPACES] and [constant TextServer.BREAK_TRIM_END_EDGE_SPACES] for more info. */
        get autowrapTrimFlags(): int64
        set autowrapTrimFlags(value: int64)
        
        /** If `true`, text that is too large to fit the button is clipped horizontally. If `false`, the button will always be wide enough to hold the text. The text is not vertically clipped, and the button's height is not affected by this property. */
        get clipText(): boolean
        set clipText(value: boolean)
        
        /** Specifies if the icon should be aligned horizontally to the left, right, or center of a button. Uses the same [enum HorizontalAlignment] constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon. */
        get iconAlignment(): int64
        set iconAlignment(value: int64)
        
        /** Specifies if the icon should be aligned vertically to the top, bottom, or center of a button. Uses the same [enum VerticalAlignment] constants as the text alignment. If centered horizontally and vertically, text will draw on top of the icon. */
        get verticalIconAlignment(): int64
        set verticalIconAlignment(value: int64)
        
        /** When enabled, the button's icon will expand/shrink to fit the button's size while keeping its aspect. See also [theme_item icon_max_width]. */
        get expandIcon(): boolean
        set expandIcon(value: boolean)
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
    }
    /** A group of buttons that doesn't allow more than one button to be pressed at a time.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_buttongroup.html  
     */
    class ButtonGroup extends Resource {
        constructor(identifier?: any)
        /** Returns the current pressed button. */
        getPressedButton(): null | BaseButton
        
        /** Returns an [Array] of [Button]s who have this as their [ButtonGroup] (see [member BaseButton.button_group]). */
        getButtons(): GArray
        
        /** If `true`, it is possible to unpress all buttons in this [ButtonGroup]. */
        get allowUnpress(): boolean
        set allowUnpress(value: boolean)
        
        /** Emitted when one of the buttons of the group is pressed. */
        readonly pressed: Signal<(button: BaseButton) => void>
    }
    namespace CpuParticles2D {
        enum DrawOrder {
            DrawOrderIndex = 0,
            DrawOrderLifetime = 1,
        }
        enum Parameter {
            ParamInitialLinearVelocity = 0,
            ParamAngularVelocity = 1,
            ParamOrbitVelocity = 2,
            ParamLinearAccel = 3,
            ParamRadialAccel = 4,
            ParamTangentialAccel = 5,
            ParamDamping = 6,
            ParamAngle = 7,
            ParamScale = 8,
            ParamHueVariation = 9,
            ParamAnimSpeed = 10,
            ParamAnimOffset = 11,
            ParamMax = 12,
        }
        enum ParticleFlags {
            ParticleFlagAlignYToVelocity = 0,
            ParticleFlagRotateY = 1,
            ParticleFlagDisableZ = 2,
            ParticleFlagMax = 3,
        }
        enum EmissionShape {
            EmissionShapePoint = 0,
            EmissionShapeSphere = 1,
            EmissionShapeSphereSurface = 2,
            EmissionShapeRectangle = 3,
            EmissionShapePoints = 4,
            EmissionShapeDirectedPoints = 5,
            EmissionShapeMax = 6,
        }
    }
    class CpuParticles2D<Map extends NodePathMap = any> extends Node2D<Map> {
        static readonly DRAW_ORDER_INDEX = 0
        static readonly DRAW_ORDER_LIFETIME = 1
        static readonly PARAM_INITIAL_LINEAR_VELOCITY = 0
        static readonly PARAM_ANGULAR_VELOCITY = 1
        static readonly PARAM_ORBIT_VELOCITY = 2
        static readonly PARAM_LINEAR_ACCEL = 3
        static readonly PARAM_RADIAL_ACCEL = 4
        static readonly PARAM_TANGENTIAL_ACCEL = 5
        static readonly PARAM_DAMPING = 6
        static readonly PARAM_ANGLE = 7
        static readonly PARAM_SCALE = 8
        static readonly PARAM_HUE_VARIATION = 9
        static readonly PARAM_ANIM_SPEED = 10
        static readonly PARAM_ANIM_OFFSET = 11
        static readonly PARAM_MAX = 12
        static readonly PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0
        static readonly PARTICLE_FLAG_ROTATE_Y = 1
        static readonly PARTICLE_FLAG_DISABLE_Z = 2
        static readonly PARTICLE_FLAG_MAX = 3
        static readonly EMISSION_SHAPE_POINT = 0
        static readonly EMISSION_SHAPE_SPHERE = 1
        static readonly EMISSION_SHAPE_SPHERE_SURFACE = 2
        static readonly EMISSION_SHAPE_RECTANGLE = 3
        static readonly EMISSION_SHAPE_POINTS = 4
        static readonly EMISSION_SHAPE_DIRECTED_POINTS = 5
        static readonly EMISSION_SHAPE_MAX = 6
        constructor(identifier?: any)
        requestParticlesProcess(processTime: float64): void
        restart(keepSeed?: boolean /* = false */): void
        setParamMin(param: CpuParticles2D.Parameter, value: float64): void
        getParamMin(param: CpuParticles2D.Parameter): float64
        setParamMax(param: CpuParticles2D.Parameter, value: float64): void
        getParamMax(param: CpuParticles2D.Parameter): float64
        setParamCurve(param: CpuParticles2D.Parameter, curve: Curve): void
        getParamCurve(param: CpuParticles2D.Parameter): null | Curve
        setParticleFlag(particleFlag: CpuParticles2D.ParticleFlags, enable: boolean): void
        getParticleFlag(particleFlag: CpuParticles2D.ParticleFlags): boolean
        convertFromParticles(particles: Node): void
        get emitting(): boolean
        set emitting(value: boolean)
        get amount(): int64
        set amount(value: int64)
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        get lifetime(): float64
        set lifetime(value: float64)
        get oneShot(): boolean
        set oneShot(value: boolean)
        get preprocess(): float64
        set preprocess(value: float64)
        get speedScale(): float64
        set speedScale(value: float64)
        get explosiveness(): float64
        set explosiveness(value: float64)
        get randomness(): float64
        set randomness(value: float64)
        get useFixedSeed(): boolean
        set useFixedSeed(value: boolean)
        get seed(): int64
        set seed(value: int64)
        get lifetimeRandomness(): float64
        set lifetimeRandomness(value: float64)
        get fixedFps(): int64
        set fixedFps(value: int64)
        get fractDelta(): boolean
        set fractDelta(value: boolean)
        get localCoords(): boolean
        set localCoords(value: boolean)
        get drawOrder(): int64
        set drawOrder(value: int64)
        get emissionShape(): int64
        set emissionShape(value: int64)
        get emissionSphereRadius(): float64
        set emissionSphereRadius(value: float64)
        get emissionRectExtents(): Vector2
        set emissionRectExtents(value: Vector2)
        get emissionPoints(): PackedVector2Array
        set emissionPoints(value: PackedVector2Array | Vector2[])
        get emissionNormals(): PackedVector2Array
        set emissionNormals(value: PackedVector2Array | Vector2[])
        get emissionColors(): PackedColorArray
        set emissionColors(value: PackedColorArray | Color[])
        get particleFlagAlignY(): boolean
        set particleFlagAlignY(value: boolean)
        get direction(): Vector2
        set direction(value: Vector2)
        get spread(): float64
        set spread(value: float64)
        get gravity(): Vector2
        set gravity(value: Vector2)
        get initialVelocityMin(): float64
        set initialVelocityMin(value: float64)
        get initialVelocityMax(): float64
        set initialVelocityMax(value: float64)
        get angularVelocityMin(): float64
        set angularVelocityMin(value: float64)
        get angularVelocityMax(): float64
        set angularVelocityMax(value: float64)
        get angularVelocityCurve(): null | Curve
        set angularVelocityCurve(value: null | Curve)
        get orbitVelocityMin(): float64
        set orbitVelocityMin(value: float64)
        get orbitVelocityMax(): float64
        set orbitVelocityMax(value: float64)
        get orbitVelocityCurve(): null | Curve
        set orbitVelocityCurve(value: null | Curve)
        get linearAccelMin(): float64
        set linearAccelMin(value: float64)
        get linearAccelMax(): float64
        set linearAccelMax(value: float64)
        get linearAccelCurve(): null | Curve
        set linearAccelCurve(value: null | Curve)
        get radialAccelMin(): float64
        set radialAccelMin(value: float64)
        get radialAccelMax(): float64
        set radialAccelMax(value: float64)
        get radialAccelCurve(): null | Curve
        set radialAccelCurve(value: null | Curve)
        get tangentialAccelMin(): float64
        set tangentialAccelMin(value: float64)
        get tangentialAccelMax(): float64
        set tangentialAccelMax(value: float64)
        get tangentialAccelCurve(): null | Curve
        set tangentialAccelCurve(value: null | Curve)
        get dampingMin(): float64
        set dampingMin(value: float64)
        get dampingMax(): float64
        set dampingMax(value: float64)
        get dampingCurve(): null | Curve
        set dampingCurve(value: null | Curve)
        get angleMin(): float64
        set angleMin(value: float64)
        get angleMax(): float64
        set angleMax(value: float64)
        get angleCurve(): null | Curve
        set angleCurve(value: null | Curve)
        get scaleAmountMin(): float64
        set scaleAmountMin(value: float64)
        get scaleAmountMax(): float64
        set scaleAmountMax(value: float64)
        get scaleAmountCurve(): null | Curve
        set scaleAmountCurve(value: null | Curve)
        get splitScale(): boolean
        set splitScale(value: boolean)
        get scaleCurveX(): null | Curve
        set scaleCurveX(value: null | Curve)
        get scaleCurveY(): null | Curve
        set scaleCurveY(value: null | Curve)
        get color(): Color
        set color(value: Color)
        get colorRamp(): null | Gradient
        set colorRamp(value: null | Gradient)
        get colorInitialRamp(): null | Gradient
        set colorInitialRamp(value: null | Gradient)
        get hueVariationMin(): float64
        set hueVariationMin(value: float64)
        get hueVariationMax(): float64
        set hueVariationMax(value: float64)
        get hueVariationCurve(): null | Curve
        set hueVariationCurve(value: null | Curve)
        get animSpeedMin(): float64
        set animSpeedMin(value: float64)
        get animSpeedMax(): float64
        set animSpeedMax(value: float64)
        get animSpeedCurve(): null | Curve
        set animSpeedCurve(value: null | Curve)
        get animOffsetMin(): float64
        set animOffsetMin(value: float64)
        get animOffsetMax(): float64
        set animOffsetMax(value: float64)
        get animOffsetCurve(): null | Curve
        set animOffsetCurve(value: null | Curve)
        readonly finished: Signal<() => void>
    }
    namespace CpuParticles3D {
        enum DrawOrder {
            DrawOrderIndex = 0,
            DrawOrderLifetime = 1,
            DrawOrderViewDepth = 2,
        }
        enum Parameter {
            ParamInitialLinearVelocity = 0,
            ParamAngularVelocity = 1,
            ParamOrbitVelocity = 2,
            ParamLinearAccel = 3,
            ParamRadialAccel = 4,
            ParamTangentialAccel = 5,
            ParamDamping = 6,
            ParamAngle = 7,
            ParamScale = 8,
            ParamHueVariation = 9,
            ParamAnimSpeed = 10,
            ParamAnimOffset = 11,
            ParamMax = 12,
        }
        enum ParticleFlags {
            ParticleFlagAlignYToVelocity = 0,
            ParticleFlagRotateY = 1,
            ParticleFlagDisableZ = 2,
            ParticleFlagMax = 3,
        }
        enum EmissionShape {
            EmissionShapePoint = 0,
            EmissionShapeSphere = 1,
            EmissionShapeSphereSurface = 2,
            EmissionShapeBox = 3,
            EmissionShapePoints = 4,
            EmissionShapeDirectedPoints = 5,
            EmissionShapeRing = 6,
            EmissionShapeMax = 7,
        }
    }
    class CpuParticles3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        static readonly DRAW_ORDER_INDEX = 0
        static readonly DRAW_ORDER_LIFETIME = 1
        static readonly DRAW_ORDER_VIEW_DEPTH = 2
        static readonly PARAM_INITIAL_LINEAR_VELOCITY = 0
        static readonly PARAM_ANGULAR_VELOCITY = 1
        static readonly PARAM_ORBIT_VELOCITY = 2
        static readonly PARAM_LINEAR_ACCEL = 3
        static readonly PARAM_RADIAL_ACCEL = 4
        static readonly PARAM_TANGENTIAL_ACCEL = 5
        static readonly PARAM_DAMPING = 6
        static readonly PARAM_ANGLE = 7
        static readonly PARAM_SCALE = 8
        static readonly PARAM_HUE_VARIATION = 9
        static readonly PARAM_ANIM_SPEED = 10
        static readonly PARAM_ANIM_OFFSET = 11
        static readonly PARAM_MAX = 12
        static readonly PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0
        static readonly PARTICLE_FLAG_ROTATE_Y = 1
        static readonly PARTICLE_FLAG_DISABLE_Z = 2
        static readonly PARTICLE_FLAG_MAX = 3
        static readonly EMISSION_SHAPE_POINT = 0
        static readonly EMISSION_SHAPE_SPHERE = 1
        static readonly EMISSION_SHAPE_SPHERE_SURFACE = 2
        static readonly EMISSION_SHAPE_BOX = 3
        static readonly EMISSION_SHAPE_POINTS = 4
        static readonly EMISSION_SHAPE_DIRECTED_POINTS = 5
        static readonly EMISSION_SHAPE_RING = 6
        static readonly EMISSION_SHAPE_MAX = 7
        constructor(identifier?: any)
        restart(keepSeed?: boolean /* = false */): void
        requestParticlesProcess(processTime: float64): void
        captureAabb(): Aabb
        setParamMin(param: CpuParticles3D.Parameter, value: float64): void
        getParamMin(param: CpuParticles3D.Parameter): float64
        setParamMax(param: CpuParticles3D.Parameter, value: float64): void
        getParamMax(param: CpuParticles3D.Parameter): float64
        setParamCurve(param: CpuParticles3D.Parameter, curve: Curve): void
        getParamCurve(param: CpuParticles3D.Parameter): null | Curve
        setParticleFlag(particleFlag: CpuParticles3D.ParticleFlags, enable: boolean): void
        getParticleFlag(particleFlag: CpuParticles3D.ParticleFlags): boolean
        convertFromParticles(particles: Node): void
        get emitting(): boolean
        set emitting(value: boolean)
        get amount(): int64
        set amount(value: int64)
        get lifetime(): float64
        set lifetime(value: float64)
        get oneShot(): boolean
        set oneShot(value: boolean)
        get preprocess(): float64
        set preprocess(value: float64)
        get speedScale(): float64
        set speedScale(value: float64)
        get explosiveness(): float64
        set explosiveness(value: float64)
        get randomness(): float64
        set randomness(value: float64)
        get useFixedSeed(): boolean
        set useFixedSeed(value: boolean)
        get seed(): int64
        set seed(value: int64)
        get lifetimeRandomness(): float64
        set lifetimeRandomness(value: float64)
        get fixedFps(): int64
        set fixedFps(value: int64)
        get fractDelta(): boolean
        set fractDelta(value: boolean)
        get visibilityAabb(): Aabb
        set visibilityAabb(value: Aabb)
        get localCoords(): boolean
        set localCoords(value: boolean)
        get drawOrder(): int64
        set drawOrder(value: int64)
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        get emissionShape(): int64
        set emissionShape(value: int64)
        get emissionSphereRadius(): float64
        set emissionSphereRadius(value: float64)
        get emissionBoxExtents(): Vector3
        set emissionBoxExtents(value: Vector3)
        get emissionPoints(): PackedVector3Array
        set emissionPoints(value: PackedVector3Array | Vector3[])
        get emissionNormals(): PackedVector3Array
        set emissionNormals(value: PackedVector3Array | Vector3[])
        get emissionColors(): PackedColorArray
        set emissionColors(value: PackedColorArray | Color[])
        get emissionRingAxis(): Vector3
        set emissionRingAxis(value: Vector3)
        get emissionRingHeight(): float64
        set emissionRingHeight(value: float64)
        get emissionRingRadius(): float64
        set emissionRingRadius(value: float64)
        get emissionRingInnerRadius(): float64
        set emissionRingInnerRadius(value: float64)
        get emissionRingConeAngle(): float64
        set emissionRingConeAngle(value: float64)
        get particleFlagAlignY(): boolean
        set particleFlagAlignY(value: boolean)
        get particleFlagRotateY(): boolean
        set particleFlagRotateY(value: boolean)
        get particleFlagDisableZ(): boolean
        set particleFlagDisableZ(value: boolean)
        get direction(): Vector3
        set direction(value: Vector3)
        get spread(): float64
        set spread(value: float64)
        get flatness(): float64
        set flatness(value: float64)
        get gravity(): Vector3
        set gravity(value: Vector3)
        get initialVelocityMin(): float64
        set initialVelocityMin(value: float64)
        get initialVelocityMax(): float64
        set initialVelocityMax(value: float64)
        get angularVelocityMin(): float64
        set angularVelocityMin(value: float64)
        get angularVelocityMax(): float64
        set angularVelocityMax(value: float64)
        get angularVelocityCurve(): null | Curve
        set angularVelocityCurve(value: null | Curve)
        get orbitVelocityMin(): float64
        set orbitVelocityMin(value: float64)
        get orbitVelocityMax(): float64
        set orbitVelocityMax(value: float64)
        get orbitVelocityCurve(): null | Curve
        set orbitVelocityCurve(value: null | Curve)
        get linearAccelMin(): float64
        set linearAccelMin(value: float64)
        get linearAccelMax(): float64
        set linearAccelMax(value: float64)
        get linearAccelCurve(): null | Curve
        set linearAccelCurve(value: null | Curve)
        get radialAccelMin(): float64
        set radialAccelMin(value: float64)
        get radialAccelMax(): float64
        set radialAccelMax(value: float64)
        get radialAccelCurve(): null | Curve
        set radialAccelCurve(value: null | Curve)
        get tangentialAccelMin(): float64
        set tangentialAccelMin(value: float64)
        get tangentialAccelMax(): float64
        set tangentialAccelMax(value: float64)
        get tangentialAccelCurve(): null | Curve
        set tangentialAccelCurve(value: null | Curve)
        get dampingMin(): float64
        set dampingMin(value: float64)
        get dampingMax(): float64
        set dampingMax(value: float64)
        get dampingCurve(): null | Curve
        set dampingCurve(value: null | Curve)
        get angleMin(): float64
        set angleMin(value: float64)
        get angleMax(): float64
        set angleMax(value: float64)
        get angleCurve(): null | Curve
        set angleCurve(value: null | Curve)
        get scaleAmountMin(): float64
        set scaleAmountMin(value: float64)
        get scaleAmountMax(): float64
        set scaleAmountMax(value: float64)
        get scaleAmountCurve(): null | Curve
        set scaleAmountCurve(value: null | Curve)
        get splitScale(): boolean
        set splitScale(value: boolean)
        get scaleCurveX(): null | Curve
        set scaleCurveX(value: null | Curve)
        get scaleCurveY(): null | Curve
        set scaleCurveY(value: null | Curve)
        get scaleCurveZ(): null | Curve
        set scaleCurveZ(value: null | Curve)
        get color(): Color
        set color(value: Color)
        get colorRamp(): null | Gradient
        set colorRamp(value: null | Gradient)
        get colorInitialRamp(): null | Gradient
        set colorInitialRamp(value: null | Gradient)
        get hueVariationMin(): float64
        set hueVariationMin(value: float64)
        get hueVariationMax(): float64
        set hueVariationMax(value: float64)
        get hueVariationCurve(): null | Curve
        set hueVariationCurve(value: null | Curve)
        get animSpeedMin(): float64
        set animSpeedMin(value: float64)
        get animSpeedMax(): float64
        set animSpeedMax(value: float64)
        get animSpeedCurve(): null | Curve
        set animSpeedCurve(value: null | Curve)
        get animOffsetMin(): float64
        set animOffsetMin(value: float64)
        get animOffsetMax(): float64
        set animOffsetMax(value: float64)
        get animOffsetCurve(): null | Curve
        set animOffsetCurve(value: null | Curve)
        readonly finished: Signal<() => void>
    }
    class CsgBox3D<Map extends NodePathMap = any> extends CsgPrimitive3D<Map> {
        constructor(identifier?: any)
        get size(): Vector3
        set size(value: Vector3)
        get material(): null | BaseMaterial3D | ShaderMaterial
        set material(value: null | BaseMaterial3D | ShaderMaterial)
    }
    class CsgCombiner3D<Map extends NodePathMap = any> extends CsgShape3D<Map> {
        constructor(identifier?: any)
    }
    class CsgCylinder3D<Map extends NodePathMap = any> extends CsgPrimitive3D<Map> {
        constructor(identifier?: any)
        get radius(): float64
        set radius(value: float64)
        get height(): float64
        set height(value: float64)
        get sides(): int64
        set sides(value: int64)
        get cone(): boolean
        set cone(value: boolean)
        get smoothFaces(): boolean
        set smoothFaces(value: boolean)
        get material(): null | BaseMaterial3D | ShaderMaterial
        set material(value: null | BaseMaterial3D | ShaderMaterial)
    }
    class CsgMesh3D<Map extends NodePathMap = any> extends CsgPrimitive3D<Map> {
        constructor(identifier?: any)
        get mesh(): null | Mesh | any /*-PlaneMesh*/ | any /*-PointMesh*/ | any /*-QuadMesh*/ | any /*-RibbonTrailMesh*/
        set mesh(value: null | Mesh | any /*-PlaneMesh*/ | any /*-PointMesh*/ | any /*-QuadMesh*/ | any /*-RibbonTrailMesh*/)
        get material(): null | BaseMaterial3D | ShaderMaterial
        set material(value: null | BaseMaterial3D | ShaderMaterial)
    }
    namespace CsgPolygon3D {
        enum Mode {
            ModeDepth = 0,
            ModeSpin = 1,
            ModePath = 2,
        }
        enum PathRotation {
            PathRotationPolygon = 0,
            PathRotationPath = 1,
            PathRotationPathFollow = 2,
        }
        enum PathIntervalType {
            PathIntervalDistance = 0,
            PathIntervalSubdivide = 1,
        }
    }
    class CsgPolygon3D<Map extends NodePathMap = any> extends CsgPrimitive3D<Map> {
        static readonly MODE_DEPTH = 0
        static readonly MODE_SPIN = 1
        static readonly MODE_PATH = 2
        static readonly PATH_ROTATION_POLYGON = 0
        static readonly PATH_ROTATION_PATH = 1
        static readonly PATH_ROTATION_PATH_FOLLOW = 2
        static readonly PATH_INTERVAL_DISTANCE = 0
        static readonly PATH_INTERVAL_SUBDIVIDE = 1
        constructor(identifier?: any)
        _isEditable3DPolygon(): boolean
        _hasEditable3DPolygonNoDepth(): boolean
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        get mode(): int64
        set mode(value: int64)
        get depth(): float64
        set depth(value: float64)
        get spinDegrees(): float64
        set spinDegrees(value: float64)
        get spinSides(): int64
        set spinSides(value: int64)
        get pathNode(): NodePath
        set pathNode(value: NodePath | string)
        get pathIntervalType(): int64
        set pathIntervalType(value: int64)
        get pathInterval(): float64
        set pathInterval(value: float64)
        get pathSimplifyAngle(): float64
        set pathSimplifyAngle(value: float64)
        get pathRotation(): int64
        set pathRotation(value: int64)
        get pathRotationAccurate(): boolean
        set pathRotationAccurate(value: boolean)
        get pathLocal(): boolean
        set pathLocal(value: boolean)
        get pathContinuousU(): boolean
        set pathContinuousU(value: boolean)
        get pathUDistance(): float64
        set pathUDistance(value: float64)
        get pathJoined(): boolean
        set pathJoined(value: boolean)
        get smoothFaces(): boolean
        set smoothFaces(value: boolean)
        get material(): null | BaseMaterial3D | ShaderMaterial
        set material(value: null | BaseMaterial3D | ShaderMaterial)
    }
    class CsgPrimitive3D<Map extends NodePathMap = any> extends CsgShape3D<Map> {
        constructor(identifier?: any)
        get flipFaces(): boolean
        set flipFaces(value: boolean)
    }
    namespace CsgShape3D {
        enum Operation {
            OperationUnion = 0,
            OperationIntersection = 1,
            OperationSubtraction = 2,
        }
    }
    class CsgShape3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        static readonly OPERATION_UNION = 0
        static readonly OPERATION_INTERSECTION = 1
        static readonly OPERATION_SUBTRACTION = 2
        constructor(identifier?: any)
        isRootShape(): boolean
        _updateShape(): void
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        _getRootCollisionInstance(): Rid
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        getCollisionLayerValue(layerNumber: int64): boolean
        bakeCollisionShape(): null | ConcavePolygonShape3D
        getMeshes(): GArray
        bakeStaticMesh(): null | ArrayMesh
        get operation(): int64
        set operation(value: int64)
        get snap(): float64
        set snap(value: float64)
        get calculateTangents(): boolean
        set calculateTangents(value: boolean)
        get useCollision(): boolean
        set useCollision(value: boolean)
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        get collisionMask(): int64
        set collisionMask(value: int64)
        get collisionPriority(): float64
        set collisionPriority(value: float64)
    }
    class CsgSphere3D<Map extends NodePathMap = any> extends CsgPrimitive3D<Map> {
        constructor(identifier?: any)
        get radius(): float64
        set radius(value: float64)
        get radialSegments(): int64
        set radialSegments(value: int64)
        get rings(): int64
        set rings(value: int64)
        get smoothFaces(): boolean
        set smoothFaces(value: boolean)
        get material(): null | BaseMaterial3D | ShaderMaterial
        set material(value: null | BaseMaterial3D | ShaderMaterial)
    }
    class CsgTorus3D<Map extends NodePathMap = any> extends CsgPrimitive3D<Map> {
        constructor(identifier?: any)
        get innerRadius(): float64
        set innerRadius(value: float64)
        get outerRadius(): float64
        set outerRadius(value: float64)
        get sides(): int64
        set sides(value: int64)
        get ringSides(): int64
        set ringSides(value: int64)
        get smoothFaces(): boolean
        set smoothFaces(value: boolean)
        get material(): null | BaseMaterial3D | ShaderMaterial
        set material(value: null | BaseMaterial3D | ShaderMaterial)
    }
    /** Calls the specified method after optional delay.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_callbacktweener.html  
     */
    class CallbackTweener extends Tweener {
        constructor(identifier?: any)
        /** Makes the callback call delayed by given time in seconds.  
         *  **Example:** Call [method Node.queue_free] after 2 seconds:  
         *    
         */
        setDelay(delay: float64): null | CallbackTweener
    }
    namespace Camera2D {
        enum AnchorMode {
            AnchorModeFixedTopLeft = 0,
            AnchorModeDragCenter = 1,
        }
        enum Camera2DProcessCallback {
            Camera2DProcessPhysics = 0,
            Camera2DProcessIdle = 1,
        }
    }
    /** Camera node for 2D scenes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_camera2d.html  
     */
    class Camera2D<Map extends NodePathMap = any> extends Node2D<Map> {
        /** The camera's position is fixed so that the top-left corner is always at the origin. */
        static readonly ANCHOR_MODE_FIXED_TOP_LEFT = 0
        
        /** The camera's position takes into account vertical/horizontal offsets and the screen size. */
        static readonly ANCHOR_MODE_DRAG_CENTER = 1
        
        /** The camera updates during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
        static readonly CAMERA2D_PROCESS_PHYSICS = 0
        
        /** The camera updates during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly CAMERA2D_PROCESS_IDLE = 1
        constructor(identifier?: any)
        _updateScroll(): void
        
        /** Forces this [Camera2D] to become the current active one. [member enabled] must be `true`. */
        makeCurrent(): void
        
        /** Returns `true` if this [Camera2D] is the active camera (see [method Viewport.get_camera_2d]). */
        isCurrent(): boolean
        _makeCurrent(_unnamedArg0: GObject): void
        
        /** Sets the camera limit for the specified [enum Side]. See also [member limit_bottom], [member limit_top], [member limit_left], and [member limit_right]. */
        setLimit(margin: Side, limit: int64): void
        
        /** Returns the camera limit for the specified [enum Side]. See also [member limit_bottom], [member limit_top], [member limit_left], and [member limit_right]. */
        getLimit(margin: Side): int64
        
        /** Sets the specified [enum Side]'s margin. See also [member drag_bottom_margin], [member drag_top_margin], [member drag_left_margin], and [member drag_right_margin]. */
        setDragMargin(margin: Side, dragMargin: float64): void
        
        /** Returns the specified [enum Side]'s margin. See also [member drag_bottom_margin], [member drag_top_margin], [member drag_left_margin], and [member drag_right_margin]. */
        getDragMargin(margin: Side): float64
        
        /** Returns this camera's target position, in global coordinates.  
         *      
         *  **Note:** The returned value is not the same as [member Node2D.global_position], as it is affected by the drag properties. It is also not the same as the current position if [member position_smoothing_enabled] is `true` (see [method get_screen_center_position]).  
         */
        getTargetPosition(): Vector2
        
        /** Returns the center of the screen from this camera's point of view, in global coordinates.  
         *      
         *  **Note:** The exact targeted position of the camera may be different. See [method get_target_position].  
         */
        getScreenCenterPosition(): Vector2
        
        /** Forces the camera to update scroll immediately. */
        forceUpdateScroll(): void
        
        /** Sets the camera's position immediately to its current smoothing destination.  
         *  This method has no effect if [member position_smoothing_enabled] is `false`.  
         */
        resetSmoothing(): void
        
        /** Aligns the camera to the tracked node. */
        align(): void
        
        /** The camera's relative offset. Useful for looking around or camera shake animations. The offsetted camera can go past the limits defined in [member limit_top], [member limit_bottom], [member limit_left] and [member limit_right]. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The Camera2D's anchor point. See [enum AnchorMode] constants. */
        get anchorMode(): int64
        set anchorMode(value: int64)
        
        /** If `true`, the camera's rendered view is not affected by its [member Node2D.rotation] and [member Node2D.global_rotation]. */
        get ignoreRotation(): boolean
        set ignoreRotation(value: boolean)
        
        /** Controls whether the camera can be active or not. If `true`, the [Camera2D] will become the main camera when it enters the scene tree and there is no active camera currently (see [method Viewport.get_camera_2d]).  
         *  When the camera is currently active and [member enabled] is set to `false`, the next enabled [Camera2D] in the scene tree will become active.  
         */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The camera's zoom. A zoom of `Vector(2, 2)` doubles the size seen in the viewport. A zoom of `Vector(0.5, 0.5)` halves the size seen in the viewport.  
         *      
         *  **Note:** [member FontFile.oversampling] does  *not*  take [Camera2D] zoom into account. This means that zooming in/out will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated unless the font is part of a [CanvasLayer] that makes it ignore camera zoom. To ensure text remains crisp regardless of zoom, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.  
         */
        get zoom(): Vector2
        set zoom(value: Vector2)
        
        /** The custom [Viewport] node attached to the [Camera2D]. If `null` or not a [Viewport], uses the default viewport instead. */
        get customViewport(): null | Viewport
        set customViewport(value: null | Viewport)
        
        /** The camera's process callback. See [enum Camera2DProcessCallback]. */
        get processCallback(): int64
        set processCallback(value: int64)
        
        /** If `true`, the limits will be enabled. Disabling this will allow the camera to focus anywhere, when the four `limit_*` properties will not work. */
        get limitEnabled(): boolean
        set limitEnabled(value: boolean)
        
        /** Left scroll limit in pixels. The camera stops moving when reaching this value, but [member offset] can push the view past the limit. */
        get limitLeft(): int64
        set limitLeft(value: int64)
        
        /** Top scroll limit in pixels. The camera stops moving when reaching this value, but [member offset] can push the view past the limit. */
        get limitTop(): int64
        set limitTop(value: int64)
        
        /** Right scroll limit in pixels. The camera stops moving when reaching this value, but [member offset] can push the view past the limit. */
        get limitRight(): int64
        set limitRight(value: int64)
        
        /** Bottom scroll limit in pixels. The camera stops moving when reaching this value, but [member offset] can push the view past the limit. */
        get limitBottom(): int64
        set limitBottom(value: int64)
        
        /** If `true`, the camera smoothly stops when reaches its limits.  
         *  This property has no effect if [member position_smoothing_enabled] is `false`.  
         *      
         *  **Note:** To immediately update the camera's position to be within limits without smoothing, even with this setting enabled, invoke [method reset_smoothing].  
         */
        get limitSmoothed(): boolean
        set limitSmoothed(value: boolean)
        
        /** If `true`, the camera's view smoothly moves towards its target position at [member position_smoothing_speed]. */
        get positionSmoothingEnabled(): boolean
        set positionSmoothingEnabled(value: boolean)
        
        /** Speed in pixels per second of the camera's smoothing effect when [member position_smoothing_enabled] is `true`. */
        get positionSmoothingSpeed(): float64
        set positionSmoothingSpeed(value: float64)
        
        /** If `true`, the camera's view smoothly rotates, via asymptotic smoothing, to align with its target rotation at [member rotation_smoothing_speed].  
         *      
         *  **Note:** This property has no effect if [member ignore_rotation] is `true`.  
         */
        get rotationSmoothingEnabled(): boolean
        set rotationSmoothingEnabled(value: boolean)
        
        /** The angular, asymptotic speed of the camera's rotation smoothing effect when [member rotation_smoothing_enabled] is `true`. */
        get rotationSmoothingSpeed(): float64
        set rotationSmoothingSpeed(value: float64)
        
        /** If `true`, the camera only moves when reaching the horizontal (left and right) drag margins. If `false`, the camera moves horizontally regardless of margins. */
        get dragHorizontalEnabled(): boolean
        set dragHorizontalEnabled(value: boolean)
        
        /** If `true`, the camera only moves when reaching the vertical (top and bottom) drag margins. If `false`, the camera moves vertically regardless of the drag margins. */
        get dragVerticalEnabled(): boolean
        set dragVerticalEnabled(value: boolean)
        
        /** The relative horizontal drag offset of the camera between the right (`-1`) and left (`1`) drag margins.  
         *      
         *  **Note:** Used to set the initial horizontal drag offset; determine the current offset; or force the current offset. It's not automatically updated when [member drag_horizontal_enabled] is `true` or the drag margins are changed.  
         */
        get dragHorizontalOffset(): float64
        set dragHorizontalOffset(value: float64)
        
        /** The relative vertical drag offset of the camera between the bottom (`-1`) and top (`1`) drag margins.  
         *      
         *  **Note:** Used to set the initial vertical drag offset; determine the current offset; or force the current offset. It's not automatically updated when [member drag_vertical_enabled] is `true` or the drag margins are changed.  
         */
        get dragVerticalOffset(): float64
        set dragVerticalOffset(value: float64)
        
        /** Left margin needed to drag the camera. A value of `1` makes the camera move only when reaching the left edge of the screen. */
        get dragLeftMargin(): float64
        set dragLeftMargin(value: float64)
        
        /** Top margin needed to drag the camera. A value of `1` makes the camera move only when reaching the top edge of the screen. */
        get dragTopMargin(): float64
        set dragTopMargin(value: float64)
        
        /** Right margin needed to drag the camera. A value of `1` makes the camera move only when reaching the right edge of the screen. */
        get dragRightMargin(): float64
        set dragRightMargin(value: float64)
        
        /** Bottom margin needed to drag the camera. A value of `1` makes the camera move only when reaching the bottom edge of the screen. */
        get dragBottomMargin(): float64
        set dragBottomMargin(value: float64)
        
        /** If `true`, draws the camera's screen rectangle in the editor. */
        get editorDrawScreen(): boolean
        set editorDrawScreen(value: boolean)
        
        /** If `true`, draws the camera's limits rectangle in the editor. */
        get editorDrawLimits(): boolean
        set editorDrawLimits(value: boolean)
        
        /** If `true`, draws the camera's drag margin rectangle in the editor. */
        get editorDrawDragMargin(): boolean
        set editorDrawDragMargin(value: boolean)
    }
    namespace Camera3D {
        enum ProjectionType {
            ProjectionPerspective = 0,
            ProjectionOrthogonal = 1,
            ProjectionFrustum = 2,
        }
        enum KeepAspect {
            KeepWidth = 0,
            KeepHeight = 1,
        }
        enum DopplerTracking {
            DopplerTrackingDisabled = 0,
            DopplerTrackingIdleStep = 1,
            DopplerTrackingPhysicsStep = 2,
        }
    }
    /** Camera node, displays from a point of view.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_camera3d.html  
     */
    class Camera3D<Map extends NodePathMap = any> extends Node3D<Map> {
        /** Perspective projection. Objects on the screen becomes smaller when they are far away. */
        static readonly PROJECTION_PERSPECTIVE = 0
        
        /** Orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are. */
        static readonly PROJECTION_ORTHOGONAL = 1
        
        /** Frustum projection. This mode allows adjusting [member frustum_offset] to create "tilted frustum" effects. */
        static readonly PROJECTION_FRUSTUM = 2
        
        /** Preserves the horizontal aspect ratio; also known as Vert- scaling. This is usually the best option for projects running in portrait mode, as taller aspect ratios will benefit from a wider vertical FOV. */
        static readonly KEEP_WIDTH = 0
        
        /** Preserves the vertical aspect ratio; also known as Hor+ scaling. This is usually the best option for projects running in landscape mode, as wider aspect ratios will automatically benefit from a wider horizontal FOV. */
        static readonly KEEP_HEIGHT = 1
        
        /** Disables [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] simulation (default). */
        static readonly DOPPLER_TRACKING_DISABLED = 0
        
        /** Simulate [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] by tracking positions of objects that are changed in `_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's [member AudioStreamPlayer3D.pitch_scale]). */
        static readonly DOPPLER_TRACKING_IDLE_STEP = 1
        
        /** Simulate [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] by tracking positions of objects that are changed in `_physics_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's [member AudioStreamPlayer3D.pitch_scale]). */
        static readonly DOPPLER_TRACKING_PHYSICS_STEP = 2
        constructor(identifier?: any)
        
        /** Returns a normal vector in world space, that is the result of projecting a point on the [Viewport] rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking. */
        projectRayNormal(screenPoint: Vector2): Vector3
        
        /** Returns a normal vector from the screen point location directed along the camera. Orthogonal cameras are normalized. Perspective cameras account for perspective, screen width/height, etc. */
        projectLocalRayNormal(screenPoint: Vector2): Vector3
        
        /** Returns a 3D position in world space, that is the result of projecting a point on the [Viewport] rectangle by the inverse camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking. */
        projectRayOrigin(screenPoint: Vector2): Vector3
        
        /** Returns the 2D coordinate in the [Viewport] rectangle that maps to the given 3D point in world space.  
         *      
         *  **Note:** When using this to position GUI elements over a 3D viewport, use [method is_position_behind] to prevent them from appearing if the 3D point is behind the camera:  
         *    
         */
        unprojectPosition(worldPoint: Vector3): Vector2
        
        /** Returns `true` if the given position is behind the camera (the blue part of the linked diagram). [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/camera3d_position_frustum.png]See this diagram[/url] for an overview of position query methods.  
         *      
         *  **Note:** A position which returns `false` may still be outside the camera's field of view.  
         */
        isPositionBehind(worldPoint: Vector3): boolean
        
        /** Returns the 3D point in world space that maps to the given 2D coordinate in the [Viewport] rectangle on a plane that is the given [param z_depth] distance into the scene away from the camera. */
        projectPosition(screenPoint: Vector2, zDepth: float64): Vector3
        
        /** Sets the camera projection to perspective mode (see [constant PROJECTION_PERSPECTIVE]), by specifying a [param fov] (field of view) angle in degrees, and the [param z_near] and [param z_far] clip planes in world space units. */
        setPerspective(fov: float64, zNear: float64, zFar: float64): void
        
        /** Sets the camera projection to orthogonal mode (see [constant PROJECTION_ORTHOGONAL]), by specifying a [param size], and the [param z_near] and [param z_far] clip planes in world space units. (As a hint, 2D games often use this projection, with values specified in pixels.) */
        setOrthogonal(size: float64, zNear: float64, zFar: float64): void
        
        /** Sets the camera projection to frustum mode (see [constant PROJECTION_FRUSTUM]), by specifying a [param size], an [param offset], and the [param z_near] and [param z_far] clip planes in world space units. See also [member frustum_offset]. */
        setFrustum(size: float64, offset: Vector2, zNear: float64, zFar: float64): void
        
        /** Makes this camera the current camera for the [Viewport] (see class description). If the camera node is outside the scene tree, it will attempt to become current once it's added. */
        makeCurrent(): void
        
        /** If this is the current camera, remove it from being current. If [param enable_next] is `true`, request to make the next camera current, if any. */
        clearCurrent(enableNext?: boolean /* = true */): void
        
        /** Returns the transform of the camera plus the vertical ([member v_offset]) and horizontal ([member h_offset]) offsets; and any other adjustments made to the position and orientation of the camera by subclassed cameras such as [XRCamera3D]. */
        getCameraTransform(): Transform3D
        
        /** Returns the projection matrix that this camera uses to render to its associated viewport. The camera must be part of the scene tree to function. */
        getCameraProjection(): Projection
        
        /** Returns the camera's frustum planes in world space units as an array of [Plane]s in the following order: near, far, left, top, right, bottom. Not to be confused with [member frustum_offset]. */
        getFrustum(): GArray
        
        /** Returns `true` if the given position is inside the camera's frustum (the green part of the linked diagram). [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/camera3d_position_frustum.png]See this diagram[/url] for an overview of position query methods. */
        isPositionInFrustum(worldPoint: Vector3): boolean
        
        /** Returns the camera's RID from the [RenderingServer]. */
        getCameraRid(): Rid
        
        /** Returns the RID of a pyramid shape encompassing the camera's view frustum, ignoring the camera's near plane. The tip of the pyramid represents the position of the camera. */
        getPyramidShapeRid(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member cull_mask], given a [param layer_number] between 1 and 20. */
        setCullMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member cull_mask] is enabled, given a [param layer_number] between 1 and 20. */
        getCullMaskValue(layerNumber: int64): boolean
        
        /** The axis to lock during [member fov]/[member size] adjustments. Can be either [constant KEEP_WIDTH] or [constant KEEP_HEIGHT]. */
        get keepAspect(): int64
        set keepAspect(value: int64)
        
        /** The culling mask that describes which [member VisualInstance3D.layers] are rendered by this camera. By default, all 20 user-visible layers are rendered.  
         *      
         *  **Note:** Since the [member cull_mask] allows for 32 layers to be stored in total, there are an additional 12 layers that are only used internally by the engine and aren't exposed in the editor. Setting [member cull_mask] using a script allows you to toggle those reserved layers, which can be useful for editor plugins.  
         *  To adjust [member cull_mask] more easily using a script, use [method get_cull_mask_value] and [method set_cull_mask_value].  
         *      
         *  **Note:** [VoxelGI], SDFGI and [LightmapGI] will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [member GeometryInstance3D.gi_mode] to [constant GeometryInstance3D.GI_MODE_DISABLED] for meshes and [member Light3D.light_bake_mode] to [constant Light3D.BAKE_DISABLED] for lights to exclude them from global illumination.  
         */
        get cullMask(): int64
        set cullMask(value: int64)
        
        /** The [Environment] to use for this camera. */
        get environment(): null | Environment
        set environment(value: null | Environment)
        
        /** The [CameraAttributes] to use for this camera. */
        get attributes(): null | CameraAttributesPractical | CameraAttributesPhysical
        set attributes(value: null | CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The [Compositor] to use for this camera. */
        get compositor(): null | Compositor
        set compositor(value: null | Compositor)
        
        /** The horizontal (X) offset of the camera viewport. */
        get hOffset(): float64
        set hOffset(value: float64)
        
        /** The vertical (Y) offset of the camera viewport. */
        get vOffset(): float64
        set vOffset(value: float64)
        
        /** If not [constant DOPPLER_TRACKING_DISABLED], this camera will simulate the [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] for objects changed in particular `_process` methods. See [enum DopplerTracking] for possible values. */
        get dopplerTracking(): int64
        set dopplerTracking(value: int64)
        
        /** The camera's projection mode. In [constant PROJECTION_PERSPECTIVE] mode, objects' Z distance from the camera's local space scales their perceived size. */
        get projection(): int64
        set projection(value: int64)
        
        /** If `true`, the ancestor [Viewport] is currently using this camera.  
         *  If multiple cameras are in the scene, one will always be made current. For example, if two [Camera3D] nodes are present in the scene and only one is current, setting one camera's [member current] to `false` will cause the other camera to be made current.  
         */
        get current(): boolean
        set current(value: boolean)
        
        /** The camera's field of view angle (in degrees). Only applicable in perspective mode. Since [member keep_aspect] locks one axis, [member fov] sets the other axis' field of view angle.  
         *  For reference, the default vertical field of view value (`75.0`) is equivalent to a horizontal FOV of:  
         *  - ~91.31 degrees in a 4:3 viewport  
         *  - ~101.67 degrees in a 16:10 viewport  
         *  - ~107.51 degrees in a 16:9 viewport  
         *  - ~121.63 degrees in a 21:9 viewport  
         */
        get fov(): float64
        set fov(value: float64)
        
        /** The camera's size in meters measured as the diameter of the width or height, depending on [member keep_aspect]. Only applicable in orthogonal and frustum modes. */
        get size(): float64
        set size(value: float64)
        
        /** The camera's frustum offset. This can be changed from the default to create "tilted frustum" effects such as [url=https://zdoom.org/wiki/Y-shearing]Y-shearing[/url].  
         *      
         *  **Note:** Only effective if [member projection] is [constant PROJECTION_FRUSTUM].  
         */
        get frustumOffset(): Vector2
        set frustumOffset(value: Vector2)
        
        /** The distance to the near culling boundary for this camera relative to its local Z axis. Lower values allow the camera to see objects more up close to its origin, at the cost of lower precision across the  *entire*  range. Values lower than the default can lead to increased Z-fighting. */
        get near(): float64
        set near(value: float64)
        
        /** The distance to the far culling boundary for this camera relative to its local Z axis. Higher values allow the camera to see further away, while decreasing [member far] can improve performance if it results in objects being partially or fully culled. */
        get far(): float64
        set far(value: float64)
    }
    /** Parent class for camera settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cameraattributes.html  
     */
    class CameraAttributes extends Resource {
        constructor(identifier?: any)
        /** Sensitivity of camera sensors, measured in ISO. A higher sensitivity results in a brighter image.  
         *  If [member auto_exposure_enabled] is `true`, this can be used as a method of exposure compensation, doubling the value will increase the exposure value (measured in EV100) by 1 stop.  
         *      
         *  **Note:** Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled.  
         */
        get exposureSensitivity(): float64
        set exposureSensitivity(value: float64)
        
        /** Multiplier for the exposure amount. A higher value results in a brighter image. */
        get exposureMultiplier(): float64
        set exposureMultiplier(value: float64)
        
        /** If `true`, enables the tonemapping auto exposure mode of the scene renderer. If `true`, the renderer will automatically determine the exposure setting to adapt to the scene's illumination and the observed light. */
        get autoExposureEnabled(): boolean
        set autoExposureEnabled(value: boolean)
        
        /** The scale of the auto exposure effect. Affects the intensity of auto exposure. */
        get autoExposureScale(): float64
        set autoExposureScale(value: float64)
        
        /** The speed of the auto exposure effect. Affects the time needed for the camera to perform auto exposure. */
        get autoExposureSpeed(): float64
        set autoExposureSpeed(value: float64)
    }
    /** Physically-based camera settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cameraattributesphysical.html  
     */
    class CameraAttributesPhysical extends CameraAttributes {
        constructor(identifier?: any)
        /** Returns the vertical field of view that corresponds to the [member frustum_focal_length]. This value is calculated internally whenever [member frustum_focal_length] is changed. */
        getFov(): float64
        
        /** Distance from camera of object that will be in focus, measured in meters. Internally this will be clamped to be at least 1 millimeter larger than [member frustum_focal_length]. */
        get frustumFocusDistance(): float64
        set frustumFocusDistance(value: float64)
        
        /** Distance between camera lens and camera aperture, measured in millimeters. Controls field of view and depth of field. A larger focal length will result in a smaller field of view and a narrower depth of field meaning fewer objects will be in focus. A smaller focal length will result in a wider field of view and a larger depth of field meaning more objects will be in focus. When attached to a [Camera3D] as its [member Camera3D.attributes], it will override the [member Camera3D.fov] property and the [member Camera3D.keep_aspect] property. */
        get frustumFocalLength(): float64
        set frustumFocalLength(value: float64)
        
        /** Override value for [member Camera3D.near]. Used internally when calculating depth of field. When attached to a [Camera3D] as its [member Camera3D.attributes], it will override the [member Camera3D.near] property. */
        get frustumNear(): float64
        set frustumNear(value: float64)
        
        /** Override value for [member Camera3D.far]. Used internally when calculating depth of field. When attached to a [Camera3D] as its [member Camera3D.attributes], it will override the [member Camera3D.far] property. */
        get frustumFar(): float64
        set frustumFar(value: float64)
        
        /** Size of the aperture of the camera, measured in f-stops. An f-stop is a unitless ratio between the focal length of the camera and the diameter of the aperture. A high aperture setting will result in a smaller aperture which leads to a dimmer image and sharper focus. A low aperture results in a wide aperture which lets in more light resulting in a brighter, less-focused image. Default is appropriate for outdoors at daytime (i.e. for use with a default [DirectionalLight3D]), for indoor lighting, a value between 2 and 4 is more appropriate.  
         *  Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled.  
         */
        get exposureAperture(): float64
        set exposureAperture(value: float64)
        
        /** Time for shutter to open and close, evaluated as `1 / shutter_speed` seconds. A higher value will allow less light (leading to a darker image), while a lower value will allow more light (leading to a brighter image).  
         *  Only available when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled.  
         */
        get exposureShutterSpeed(): float64
        set exposureShutterSpeed(value: float64)
        
        /** The minimum luminance (in EV100) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing above a certain brightness, resulting in a cut off point where the scene will remain dark. */
        get autoExposureMinExposureValue(): float64
        set autoExposureMinExposureValue(value: float64)
        
        /** The maximum luminance (in EV100) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing below a certain brightness, resulting in a cut off point where the scene will remain bright. */
        get autoExposureMaxExposureValue(): float64
        set autoExposureMaxExposureValue(value: float64)
    }
    /** Camera settings in an easy to use format.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cameraattributespractical.html  
     */
    class CameraAttributesPractical extends CameraAttributes {
        constructor(identifier?: any)
        /** Enables depth of field blur for objects further than [member dof_blur_far_distance]. Strength of blur is controlled by [member dof_blur_amount] and modulated by [member dof_blur_far_transition].  
         *      
         *  **Note:** Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        get dofBlurFarEnabled(): boolean
        set dofBlurFarEnabled(value: boolean)
        
        /** Objects further from the [Camera3D] by this amount will be blurred by the depth of field effect. Measured in meters. */
        get dofBlurFarDistance(): float64
        set dofBlurFarDistance(value: float64)
        
        /** When positive, distance over which (starting from [member dof_blur_far_distance]) blur effect will scale from 0 to [member dof_blur_amount]. When negative, uses physically-based scaling so depth of field effect will scale from 0 at [member dof_blur_far_distance] and will increase in a physically accurate way as objects get further from the [Camera3D]. */
        get dofBlurFarTransition(): float64
        set dofBlurFarTransition(value: float64)
        
        /** Enables depth of field blur for objects closer than [member dof_blur_near_distance]. Strength of blur is controlled by [member dof_blur_amount] and modulated by [member dof_blur_near_transition].  
         *      
         *  **Note:** Depth of field blur is only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        get dofBlurNearEnabled(): boolean
        set dofBlurNearEnabled(value: boolean)
        
        /** Objects closer from the [Camera3D] by this amount will be blurred by the depth of field effect. Measured in meters. */
        get dofBlurNearDistance(): float64
        set dofBlurNearDistance(value: float64)
        
        /** When positive, distance over which blur effect will scale from 0 to [member dof_blur_amount], ending at [member dof_blur_near_distance]. When negative, uses physically-based scaling so depth of field effect will scale from 0 at [member dof_blur_near_distance] and will increase in a physically accurate way as objects get closer to the [Camera3D]. */
        get dofBlurNearTransition(): float64
        set dofBlurNearTransition(value: float64)
        
        /** Sets the maximum amount of blur. When using physically-based blur amounts, will instead act as a multiplier. High values lead to an increased amount of blurriness, but can be much more expensive to calculate. It is best to keep this as low as possible for a given art style. */
        get dofBlurAmount(): float64
        set dofBlurAmount(value: float64)
        
        /** The minimum sensitivity (in ISO) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing above a certain brightness, resulting in a cut off point where the scene will remain dark. */
        get autoExposureMinSensitivity(): float64
        set autoExposureMinSensitivity(value: float64)
        
        /** The maximum sensitivity (in ISO) used when calculating auto exposure. When calculating scene average luminance, color values will be clamped to at least this value. This limits the auto-exposure from exposing below a certain brightness, resulting in a cut off point where the scene will remain bright. */
        get autoExposureMaxSensitivity(): float64
        set autoExposureMaxSensitivity(value: float64)
    }
    namespace CameraFeed {
        enum FeedDataType {
            FeedNoimage = 0,
            FeedRgb = 1,
            FeedYcbcr = 2,
            FeedYcbcrSep = 3,
            FeedExternal = 4,
        }
        enum FeedPosition {
            FeedUnspecified = 0,
            FeedFront = 1,
            FeedBack = 2,
        }
    }
    /** A camera feed gives you access to a single physical camera attached to your device.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_camerafeed.html  
     */
    class CameraFeed extends RefCounted {
        /** No image set for the feed. */
        static readonly FEED_NOIMAGE = 0
        
        /** Feed supplies RGB images. */
        static readonly FEED_RGB = 1
        
        /** Feed supplies YCbCr images that need to be converted to RGB. */
        static readonly FEED_YCBCR = 2
        
        /** Feed supplies separate Y and CbCr images that need to be combined and converted to RGB. */
        static readonly FEED_YCBCR_SEP = 3
        
        /** Feed supplies external image. */
        static readonly FEED_EXTERNAL = 4
        
        /** Unspecified position. */
        static readonly FEED_UNSPECIFIED = 0
        
        /** Camera is mounted at the front of the device. */
        static readonly FEED_FRONT = 1
        
        /** Camera is mounted at the back of the device. */
        static readonly FEED_BACK = 2
        constructor(identifier?: any)
        
        /** Called when the camera feed is activated. */
        /* gdvirtual */ _activateFeed(): boolean
        
        /** Called when the camera feed is deactivated. */
        /* gdvirtual */ _deactivateFeed(): void
        
        /** Returns the unique ID for this feed. */
        getId(): int64
        
        /** Returns the camera's name. */
        getName(): string
        
        /** Sets the camera's name. */
        setName(name: string): void
        
        /** Returns the position of camera on the device. */
        getPosition(): CameraFeed.FeedPosition
        
        /** Sets the position of this camera. */
        setPosition(position: CameraFeed.FeedPosition): void
        
        /** Sets RGB image for this feed. */
        setRgbImage(rgbImage: Image): void
        
        /** Sets YCbCr image for this feed. */
        setYcbcrImage(ycbcrImage: Image): void
        
        /** Sets the feed as external feed provided by another library. */
        setExternal(width: int64, height: int64): void
        
        /** Returns the texture backend ID (usable by some external libraries that need a handle to a texture to write data). */
        getTextureTexId(feedImageType: CameraServer.FeedImage): int64
        
        /** Returns feed image data type. */
        getDatatype(): CameraFeed.FeedDataType
        
        /** Sets the feed format parameters for the given index in the [member formats] array. Returns `true` on success. By default YUYV encoded stream is transformed to FEED_RGB. YUYV encoded stream output format can be changed with [param parameters].output value:  
         *  `separate` will result in FEED_YCBCR_SEP  
         *  `grayscale` will result in desaturated FEED_RGB  
         *  `copy` will result in FEED_YCBCR  
         */
        setFormat(index: int64, parameters: GDictionary): boolean
        
        /** If `true`, the feed is active. */
        get feedIsActive(): boolean
        set feedIsActive(value: boolean)
        
        /** The transform applied to the camera's image. */
        get feedTransform(): Transform2D
        set feedTransform(value: Transform2D)
        
        /** Formats supported by the feed. Each entry is a [Dictionary] describing format parameters. */
        get formats(): GArray
        set formats(value: GArray)
        
        /** Emitted when a new frame is available. */
        readonly frameChanged: Signal<() => void>
        
        /** Emitted when the format has changed. */
        readonly formatChanged: Signal<() => void>
    }
    /** Texture provided by a [CameraFeed].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cameratexture.html  
     */
    class CameraTexture extends Texture2D {
        constructor(identifier?: any)
        /** The ID of the [CameraFeed] for which we want to display the image. */
        get cameraFeedId(): int64
        set cameraFeedId(value: int64)
        
        /** Which image within the [CameraFeed] we want access to, important if the camera image is split in a Y and CbCr component. */
        get whichFeed(): int64
        set whichFeed(value: int64)
        
        /** Convenience property that gives access to the active property of the [CameraFeed]. */
        get cameraIsActive(): boolean
        set cameraIsActive(value: boolean)
    }
    /** Merges several 2D nodes into a single draw operation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvasgroup.html  
     */
    class CanvasGroup<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Sets the size of a margin used to expand the drawable rect of this [CanvasGroup]. The size of the [CanvasGroup] is determined by fitting a rect around its children then expanding that rect by [member fit_margin]. This increases both the backbuffer area used and the area covered by the [CanvasGroup] both of which can reduce performance. This should be kept as small as possible and should only be expanded when an increased size is needed (e.g. for custom shader effects). */
        get fitMargin(): float64
        set fitMargin(value: float64)
        
        /** Sets the size of the margin used to expand the clearing rect of this [CanvasGroup]. This expands the area of the backbuffer that will be used by the [CanvasGroup]. A smaller margin will reduce the area of the backbuffer used which can increase performance, however if [member use_mipmaps] is enabled, a small margin may result in mipmap errors at the edge of the [CanvasGroup]. Accordingly, this should be left as small as possible, but should be increased if artifacts appear along the edges of the canvas group. */
        get clearMargin(): float64
        set clearMargin(value: float64)
        
        /** If `true`, calculates mipmaps for the backbuffer before drawing the [CanvasGroup] so that mipmaps can be used in a custom [ShaderMaterial] attached to the [CanvasGroup]. Generating mipmaps has a performance cost so this should not be enabled unless required. */
        get useMipmaps(): boolean
        set useMipmaps(value: boolean)
    }
    namespace CanvasItem {
        enum TextureFilter {
            TextureFilterParentNode = 0,
            TextureFilterNearest = 1,
            TextureFilterLinear = 2,
            TextureFilterNearestWithMipmaps = 3,
            TextureFilterLinearWithMipmaps = 4,
            TextureFilterNearestWithMipmapsAnisotropic = 5,
            TextureFilterLinearWithMipmapsAnisotropic = 6,
            TextureFilterMax = 7,
        }
        enum TextureRepeat {
            TextureRepeatParentNode = 0,
            TextureRepeatDisabled = 1,
            TextureRepeatEnabled = 2,
            TextureRepeatMirror = 3,
            TextureRepeatMax = 4,
        }
        enum ClipChildrenMode {
            ClipChildrenDisabled = 0,
            ClipChildrenOnly = 1,
            ClipChildrenAndDraw = 2,
            ClipChildrenMax = 3,
        }
    }
    /** Abstract base class for everything in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvasitem.html  
     */
    class CanvasItem<Map extends NodePathMap = any> extends Node<Map> {
        /** Notification received when this node's global transform changes, if [method is_transform_notification_enabled] is `true`. See also [method set_notify_transform] and [method get_transform].  
         *      
         *  **Note:** Many canvas items such as [Camera2D] or [CollisionObject2D] automatically enable this in order to function correctly.  
         */
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        
        /** Notification received when this node's transform changes, if [method is_local_transform_notification_enabled] is `true`. This is not received when a parent [Node2D]'s transform changes. See also [method set_notify_local_transform].  
         *      
         *  **Note:** Many canvas items such as [Camera2D] or [CollisionShape2D] automatically enable this in order to function correctly.  
         */
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 35
        
        /** The [CanvasItem] is requested to draw (see [method _draw]). */
        static readonly NOTIFICATION_DRAW = 30
        
        /** Notification received when this node's visibility changes (see [member visible] and [method is_visible_in_tree]).  
         *  This notification is received  *before*  the related [signal visibility_changed] signal.  
         */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 31
        
        /** The [CanvasItem] has entered the canvas. */
        static readonly NOTIFICATION_ENTER_CANVAS = 32
        
        /** The [CanvasItem] has exited the canvas. */
        static readonly NOTIFICATION_EXIT_CANVAS = 33
        
        /** Notification received when this [CanvasItem] is registered to a new [World2D] (see [method get_world_2d]). */
        static readonly NOTIFICATION_WORLD_2D_CHANGED = 36
        
        /** The [CanvasItem] will inherit the filter from its parent. */
        static readonly TEXTURE_FILTER_PARENT_NODE = 0
        
        /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly TEXTURE_FILTER_NEAREST = 1
        
        /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly TEXTURE_FILTER_LINEAR = 2
        
        /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
         *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
         */
        static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3
        
        /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
         *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
         */
        static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 4
        
        /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
         *      
         *  **Note:** This texture filter is rarely useful in 2D projects. [constant TEXTURE_FILTER_NEAREST_WITH_MIPMAPS] is usually more appropriate in this case.  
         */
        static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 5
        
        /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
         *      
         *  **Note:** This texture filter is rarely useful in 2D projects. [constant TEXTURE_FILTER_LINEAR_WITH_MIPMAPS] is usually more appropriate in this case.  
         */
        static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 6
        
        /** Represents the size of the [enum TextureFilter] enum. */
        static readonly TEXTURE_FILTER_MAX = 7
        
        /** The [CanvasItem] will inherit the filter from its parent. */
        static readonly TEXTURE_REPEAT_PARENT_NODE = 0
        
        /** The texture does not repeat. */
        static readonly TEXTURE_REPEAT_DISABLED = 1
        
        /** The texture repeats when exceeding the texture's size. */
        static readonly TEXTURE_REPEAT_ENABLED = 2
        
        /** The texture repeats when the exceeding the texture's size in a "2×2 tiled mode". Repeated textures at even positions are mirrored. */
        static readonly TEXTURE_REPEAT_MIRROR = 3
        
        /** Represents the size of the [enum TextureRepeat] enum. */
        static readonly TEXTURE_REPEAT_MAX = 4
        
        /** Children are drawn over this node and are not clipped. */
        static readonly CLIP_CHILDREN_DISABLED = 0
        
        /** This node is used as a mask and is **not** drawn. The mask is based on this node's alpha channel: Opaque pixels are kept, transparent pixels are discarded, and semi-transparent pixels are blended in according to their opacity. Children are clipped to this node's drawn area. */
        static readonly CLIP_CHILDREN_ONLY = 1
        
        /** This node is used as a mask and is also drawn. The mask is based on this node's alpha channel: Opaque pixels are kept, transparent pixels are discarded, and semi-transparent pixels are blended in according to their opacity. Children are clipped to the parent's drawn area. */
        static readonly CLIP_CHILDREN_AND_DRAW = 2
        
        /** Represents the size of the [enum ClipChildrenMode] enum. */
        static readonly CLIP_CHILDREN_MAX = 3
        constructor(identifier?: any)
        
        /** Called when [CanvasItem] has been requested to redraw (after [method queue_redraw] is called, either manually or by the engine).  
         *  Corresponds to the [constant NOTIFICATION_DRAW] notification in [method Object._notification].  
         */
        /* gdvirtual */ _draw(): void
        _topLevelRaiseSelf(): void
        _editSetState(state: GDictionary): void
        _editGetState(): GDictionary
        _editSetPosition(position: Vector2): void
        _editGetPosition(): Vector2
        _editSetScale(scale: Vector2): void
        _editGetScale(): Vector2
        _editSetRect(rect: Rect2): void
        _editGetRect(): Rect2
        _editUseRect(): boolean
        _editSetRotation(degrees: float64): void
        _editGetRotation(): float64
        _editUseRotation(): boolean
        _editSetPivot(pivot: Vector2): void
        _editGetPivot(): Vector2
        _editUsePivot(): boolean
        _editGetTransform(): Transform2D
        
        /** Returns the internal canvas item [RID] used by the [RenderingServer] for this node. */
        getCanvasItem(): Rid
        
        /** Returns `true` if the node is present in the [SceneTree], its [member visible] property is `true` and all its ancestors are also visible. If any ancestor is hidden, this node will not be visible in the scene tree, and is therefore not drawn (see [method _draw]).  
         *  Visibility is checked only in parent nodes that inherit from [CanvasItem], [CanvasLayer], and [Window]. If the parent is of any other type (such as [Node], [AnimationPlayer], or [Node3D]), it is assumed to be visible.  
         *      
         *  **Note:** This method does not take [member visibility_layer] into account, so even if this method returns `true`, the node might end up not being rendered.  
         */
        isVisibleInTree(): boolean
        
        /** Show the [CanvasItem] if it's currently hidden. This is equivalent to setting [member visible] to `true`.  
         *      
         *  **Note:** For controls that inherit [Popup], the correct way to make them visible is to call one of the multiple `popup*()` functions instead.  
         */
        show(): void
        
        /** Hide the [CanvasItem] if it's currently visible. This is equivalent to setting [member visible] to `false`. */
        hide(): void
        
        /** Queues the [CanvasItem] to redraw. During idle time, if [CanvasItem] is visible, [constant NOTIFICATION_DRAW] is sent and [method _draw] is called. This only occurs **once** per frame, even if this method has been called multiple times. */
        queueRedraw(): void
        
        /** Moves this node below its siblings, usually causing the node to draw on top of its siblings. Does nothing if this node does not have a parent. See also [method Node.move_child]. */
        moveToFront(): void
        
        /** Draws a line from a 2D point to another, with a given color and width. It can be optionally antialiased. See also [method draw_dashed_line], [method draw_multiline], and [method draw_polyline].  
         *  If [param width] is negative, then a two-point primitive will be drawn instead of a four-point one. This means that when the CanvasItem is scaled, the line will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         */
        drawLine(from: Vector2, to: Vector2, color: Color, width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws a dashed line from a 2D point to another, with a given color and width. See also [method draw_line], [method draw_multiline], and [method draw_polyline].  
         *  If [param width] is negative, then a two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the line parts will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         *  [param dash] is the length of each dash in pixels, with the gap between each dash being the same length. If [param aligned] is `true`, the length of the first and last dashes may be shortened or lengthened to allow the line to begin and end at the precise points defined by [param from] and [param to]. Both ends are always symmetrical when [param aligned] is `true`. If [param aligned] is `false`, all dashes will have the same length, but the line may appear incomplete at the end due to the dash length not dividing evenly into the line length. Only full dashes are drawn when [param aligned] is `false`.  
         *  If [param antialiased] is `true`, half transparent "feathers" will be attached to the boundary, making outlines smooth.  
         *      
         *  **Note:** [param antialiased] is only effective if [param width] is greater than `0.0`.  
         */
        drawDashedLine(from: Vector2, to: Vector2, color: Color, width?: float64 /* = -1 */, dash?: float64 /* = 2 */, aligned?: boolean /* = true */, antialiased?: boolean /* = false */): void
        
        /** Draws interconnected line segments with a uniform [param color] and [param width] and optional antialiasing (supported only for positive [param width]). When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw disconnected lines, use [method draw_multiline] instead. See also [method draw_polygon].  
         *  If [param width] is negative, it will be ignored and the polyline will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         */
        drawPolyline(points: PackedVector2Array | Vector2[], color: Color, width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws interconnected line segments with a uniform [param width], point-by-point coloring, and optional antialiasing (supported only for positive [param width]). Colors assigned to line points match by index between [param points] and [param colors], i.e. each line segment is filled with a gradient between the colors of the endpoints. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw disconnected lines, use [method draw_multiline_colors] instead. See also [method draw_polygon].  
         *  If [param width] is negative, it will be ignored and the polyline will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the polyline will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         */
        drawPolylineColors(points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws an unfilled arc between the given angles with a uniform [param color] and [param width] and optional antialiasing (supported only for positive [param width]). The larger the value of [param point_count], the smoother the curve. See also [method draw_circle].  
         *  If [param width] is negative, it will be ignored and the arc will be drawn using [constant RenderingServer.PRIMITIVE_LINE_STRIP]. This means that when the CanvasItem is scaled, the arc will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         *  The arc is drawn from [param start_angle] towards the value of [param end_angle] so in clockwise direction if `start_angle < end_angle` and counter-clockwise otherwise. Passing the same angles but in reversed order will produce the same arc. If absolute difference of [param start_angle] and [param end_angle] is greater than [constant @GDScript.TAU] radians, then a full circle arc is drawn (i.e. arc will not overlap itself).  
         */
        drawArc(center: Vector2, radius: float64, startAngle: float64, endAngle: float64, pointCount: int64, color: Color, width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws multiple disconnected lines with a uniform [param width] and [param color]. Each line is defined by two consecutive points from [param points] array, i.e. i-th segment consists of `points[2 * i]`, `points[2 * i + 1]` endpoints. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw interconnected lines, use [method draw_polyline] instead.  
         *  If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         *      
         *  **Note:** [param antialiased] is only effective if [param width] is greater than `0.0`.  
         */
        drawMultiline(points: PackedVector2Array | Vector2[], color: Color, width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws multiple disconnected lines with a uniform [param width] and segment-by-segment coloring. Each segment is defined by two consecutive points from [param points] array and a corresponding color from [param colors] array, i.e. i-th segment consists of `points[2 * i]`, `points[2 * i + 1]` endpoints and has `colors *` color. When drawing large amounts of lines, this is faster than using individual [method draw_line] calls. To draw interconnected lines, use [method draw_polyline_colors] instead.  
         *  If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         *      
         *  **Note:** [param antialiased] is only effective if [param width] is greater than `0.0`.  
         */
        drawMultilineColors(points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws a rectangle. If [param filled] is `true`, the rectangle will be filled with the [param color] specified. If [param filled] is `false`, the rectangle will be drawn as a stroke with the [param color] and [param width] specified. See also [method draw_texture_rect].  
         *  If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         *  If [param antialiased] is `true`, half transparent "feathers" will be attached to the boundary, making outlines smooth.  
         *      
         *  **Note:** [param width] is only effective if [param filled] is `false`.  
         *      
         *  **Note:** Unfilled rectangles drawn with a negative [param width] may not display perfectly. For example, corners may be missing or brighter due to overlapping lines (for a translucent [param color]).  
         */
        drawRect(rect: Rect2, color: Color, filled?: boolean /* = true */, width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws a circle. See also [method draw_arc], [method draw_polyline], and [method draw_polygon].  
         *  If [param filled] is `true`, the circle will be filled with the [param color] specified. If [param filled] is `false`, the circle will be drawn as a stroke with the [param color] and [param width] specified.  
         *  If [param width] is negative, then two-point primitives will be drawn instead of a four-point ones. This means that when the CanvasItem is scaled, the lines will remain thin. If this behavior is not desired, then pass a positive [param width] like `1.0`.  
         *  If [param antialiased] is `true`, half transparent "feathers" will be attached to the boundary, making outlines smooth.  
         *      
         *  **Note:** [param width] is only effective if [param filled] is `false`.  
         */
        drawCircle(position: Vector2, radius: float64, color: Color, filled?: boolean /* = true */, width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws a texture at a given position. */
        drawTexture(texture: Texture2D, position: Vector2, modulate?: Color /* = new Color(1, 1, 1, 1) */): void
        
        /** Draws a textured rectangle at a given position, optionally modulated by a color. If [param transpose] is `true`, the texture will have its X and Y coordinates swapped. See also [method draw_rect] and [method draw_texture_rect_region]. */
        drawTextureRect(texture: Texture2D, rect: Rect2, tile: boolean, modulate?: Color /* = new Color(1, 1, 1, 1) */, transpose?: boolean /* = false */): void
        
        /** Draws a textured rectangle from a texture's region (specified by [param src_rect]) at a given position, optionally modulated by a color. If [param transpose] is `true`, the texture will have its X and Y coordinates swapped. See also [method draw_texture_rect]. */
        drawTextureRectRegion(texture: Texture2D, rect: Rect2, srcRect: Rect2, modulate?: Color /* = new Color(1, 1, 1, 1) */, transpose?: boolean /* = false */, clipUV?: boolean /* = true */): void
        
        /** Draws a textured rectangle region of the multi-channel signed distance field texture at a given position, optionally modulated by a color. See [member FontFile.multichannel_signed_distance_field] for more information and caveats about MSDF font rendering.  
         *  If [param outline] is positive, each alpha channel value of pixel in region is set to maximum value of true distance in the [param outline] radius.  
         *  Value of the [param pixel_range] should the same that was used during distance field texture generation.  
         */
        drawMsdfTextureRectRegion(texture: Texture2D, rect: Rect2, srcRect: Rect2, modulate?: Color /* = new Color(1, 1, 1, 1) */, outline?: float64 /* = 0 */, pixelRange?: float64 /* = 4 */, scale?: float64 /* = 1 */): void
        
        /** Draws a textured rectangle region of the font texture with LCD subpixel anti-aliasing at a given position, optionally modulated by a color.  
         *  Texture is drawn using the following blend operation, blend mode of the [CanvasItemMaterial] is ignored:  
         *    
         */
        drawLcdTextureRectRegion(texture: Texture2D, rect: Rect2, srcRect: Rect2, modulate?: Color /* = new Color(1, 1, 1, 1) */): void
        
        /** Draws a styled rectangle. */
        drawStyleBox(styleBox: StyleBox, rect: Rect2): void
        
        /** Draws a custom primitive. 1 point for a point, 2 points for a line, 3 points for a triangle, and 4 points for a quad. If 0 points or more than 4 points are specified, nothing will be drawn and an error message will be printed. See also [method draw_line], [method draw_polyline], [method draw_polygon], and [method draw_rect]. */
        drawPrimitive(points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs: PackedVector2Array | Vector2[], texture?: Texture2D /* = undefined */): void
        
        /** Draws a solid polygon of any number of points, convex or concave. Unlike [method draw_colored_polygon], each point's color can be changed individually. See also [method draw_polyline] and [method draw_polyline_colors]. If you need more flexibility (such as being able to use bones), use [method RenderingServer.canvas_item_add_triangle_array] instead.  
         *      
         *  **Note:** If you frequently redraw the same polygon with a large number of vertices, consider pre-calculating the triangulation with [method Geometry2D.triangulate_polygon] and using [method draw_mesh], [method draw_multimesh], or [method RenderingServer.canvas_item_add_triangle_array].  
         */
        drawPolygon(points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs?: PackedVector2Array | Vector2[] /* = [] */, texture?: Texture2D /* = undefined */): void
        
        /** Draws a colored polygon of any number of points, convex or concave. Unlike [method draw_polygon], a single color must be specified for the whole polygon.  
         *      
         *  **Note:** If you frequently redraw the same polygon with a large number of vertices, consider pre-calculating the triangulation with [method Geometry2D.triangulate_polygon] and using [method draw_mesh], [method draw_multimesh], or [method RenderingServer.canvas_item_add_triangle_array].  
         */
        drawColoredPolygon(points: PackedVector2Array | Vector2[], color: Color, uvs?: PackedVector2Array | Vector2[] /* = [] */, texture?: Texture2D /* = undefined */): void
        
        /** Draws [param text] using the specified [param font] at the [param pos] (bottom-left corner using the baseline of the font). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  **Example:** Draw "Hello world", using the project's default font:  
         *    
         *  See also [method Font.draw_string].  
         */
        drawString(font: Font, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Breaks [param text] into lines and draws it using the specified [param font] at the [param pos] (top-left corner). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawMultilineString(font: Font, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, maxLines?: int64 /* = -1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, brkFlags?: TextServer.LineBreakFlag /* = 3 */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Draws [param text] outline using the specified [param font] at the [param pos] (bottom-left corner using the baseline of the font). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawStringOutline(font: Font, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, size?: int64 /* = 1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Breaks [param text] to the lines and draws text outline using the specified [param font] at the [param pos] (top-left corner). The text will have its color multiplied by [param modulate]. If [param width] is greater than or equal to 0, the text will be clipped if it exceeds the specified width. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawMultilineStringOutline(font: Font, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, maxLines?: int64 /* = -1 */, size?: int64 /* = 1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, brkFlags?: TextServer.LineBreakFlag /* = 3 */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Draws a string first character using a custom font. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawChar(font: Font, pos: Vector2, char: string, fontSize?: int64 /* = 16 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draws a string first character outline using a custom font. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawCharOutline(font: Font, pos: Vector2, char: string, fontSize?: int64 /* = 16 */, size?: int64 /* = -1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draws a [Mesh] in 2D, using the provided texture. See [MeshInstance2D] for related documentation. */
        drawMesh(mesh: Mesh, texture: Texture2D, transform?: Transform2D /* = new Transform2D() */, modulate?: Color /* = new Color(1, 1, 1, 1) */): void
        
        /** Draws a [MultiMesh] in 2D with the provided texture. See [MultiMeshInstance2D] for related documentation. */
        drawMultimesh(multimesh: MultiMesh, texture: Texture2D): void
        
        /** Sets a custom transform for drawing via components. Anything drawn afterwards will be transformed by this.  
         *      
         *  **Note:** [member FontFile.oversampling] does  *not*  take [param scale] into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.  
         */
        drawSetTransform(position: Vector2, rotation?: float64 /* = 0 */, scale?: Vector2 /* = Vector2.ONE */): void
        
        /** Sets a custom transform for drawing via matrix. Anything drawn afterwards will be transformed by this. */
        drawSetTransformMatrix(xform: Transform2D): void
        
        /** Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly. */
        drawAnimationSlice(animationLength: float64, sliceBegin: float64, sliceEnd: float64, offset?: float64 /* = 0 */): void
        
        /** After submitting all animations slices via [method draw_animation_slice], this function can be used to revert drawing to its default state (all subsequent drawing commands will be visible). If you don't care about this particular use case, usage of this function after submitting the slices is not required. */
        drawEndAnimation(): void
        
        /** Returns the transform matrix of this [CanvasItem]. */
        getTransform(): Transform2D
        
        /** Returns the global transform matrix of this item, i.e. the combined transform up to the topmost [CanvasItem] node. The topmost item is a [CanvasItem] that either has no parent, has non-[CanvasItem] parent or it has [member top_level] enabled. */
        getGlobalTransform(): Transform2D
        
        /** Returns the transform from the local coordinate system of this [CanvasItem] to the [Viewport]s coordinate system. */
        getGlobalTransformWithCanvas(): Transform2D
        
        /** Returns the transform of this node, converted from its registered canvas's coordinate system to its viewport embedder's coordinate system. See also [method Viewport.get_final_transform] and [method Node.get_viewport]. */
        getViewportTransform(): Transform2D
        
        /** Returns this node's viewport boundaries as a [Rect2]. See also [method Node.get_viewport]. */
        getViewportRect(): Rect2
        
        /** Returns the transform of this node, converted from its registered canvas's coordinate system to its viewport's coordinate system. See also [method Node.get_viewport]. */
        getCanvasTransform(): Transform2D
        
        /** Returns the transform of this [CanvasItem] in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.  
         *  Equals to [method get_global_transform] if the window is embedded (see [member Viewport.gui_embed_subwindows]).  
         */
        getScreenTransform(): Transform2D
        
        /** Returns the mouse's position in this [CanvasItem] using the local coordinate system of this [CanvasItem]. */
        getLocalMousePosition(): Vector2
        
        /** Returns mouse cursor's global position relative to the [CanvasLayer] that contains this node.  
         *      
         *  **Note:** For screen-space coordinates (e.g. when using a non-embedded [Popup]), you can use [method DisplayServer.mouse_get_position].  
         */
        getGlobalMousePosition(): Vector2
        
        /** Returns the [RID] of the [World2D] canvas where this node is registered to, used by the [RenderingServer]. */
        getCanvas(): Rid
        
        /** Returns the [CanvasLayer] that contains this node, or `null` if the node is not in any [CanvasLayer]. */
        getCanvasLayerNode(): null | CanvasLayer
        
        /** Returns the [World2D] this node is registered to.  
         *  Usually, this is the same as this node's viewport (see [method Node.get_viewport] and [method Viewport.find_world_2d]).  
         */
        getWorld2D(): null | World2D
        
        /** Set the value of a shader uniform for this instance only ([url=https://docs.godotengine.org/en/latest/tutorials/shaders/shader_reference/shading_language.html#per-instance-uniforms]per-instance uniform[/url]). See also [method ShaderMaterial.set_shader_parameter] to assign a uniform on all instances using the same [ShaderMaterial].  
         *      
         *  **Note:** For a shader uniform to be assignable on a per-instance basis, it  *must*  be defined with `instance uniform ...` rather than `uniform ...` in the shader code.  
         *      
         *  **Note:** [param name] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).  
         */
        setInstanceShaderParameter(name: StringName, value: any): void
        
        /** Get the value of a shader parameter as set on this instance. */
        getInstanceShaderParameter(name: StringName): any
        
        /** If `true`, the node will receive [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] whenever its local transform changes.  
         *      
         *  **Note:** Many canvas items such as [Bone2D] or [CollisionShape2D] automatically enable this in order to function correctly.  
         */
        setNotifyLocalTransform(enable: boolean): void
        
        /** Returns `true` if the node receives [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] whenever its local transform changes. This is enabled with [method set_notify_local_transform]. */
        isLocalTransformNotificationEnabled(): boolean
        
        /** If `true`, the node will receive [constant NOTIFICATION_TRANSFORM_CHANGED] whenever global transform changes.  
         *      
         *  **Note:** Many canvas items such as [Camera2D] or [Light2D] automatically enable this in order to function correctly.  
         */
        setNotifyTransform(enable: boolean): void
        
        /** Returns `true` if the node receives [constant NOTIFICATION_TRANSFORM_CHANGED] whenever its global transform changes. This is enabled with [method set_notify_transform]. */
        isTransformNotificationEnabled(): boolean
        
        /** Forces the node's transform to update. Fails if the node is not inside the tree. See also [method get_transform].  
         *      
         *  **Note:** For performance reasons, transform changes are usually accumulated and applied  *once*  at the end of the frame. The update propagates through [CanvasItem] children, as well. Therefore, use this method only when you need an up-to-date transform (such as during physics operations).  
         */
        forceUpdateTransform(): void
        
        /** Transforms [param viewport_point] from the viewport's coordinates to this node's local coordinates.  
         *  For the opposite operation, use [method get_global_transform_with_canvas].  
         *    
         */
        makeCanvasPositionLocal(viewportPoint: Vector2): Vector2
        
        /** Returns a copy of the given [param event] with its coordinates converted from global space to this [CanvasItem]'s local space. If not possible, returns the same [InputEvent] unchanged. */
        makeInputLocal(event: InputEvent): null | InputEvent
        
        /** Set/clear individual bits on the rendering visibility layer. This simplifies editing this [CanvasItem]'s visibility layer. */
        setVisibilityLayerBit(layer: int64, enabled: boolean): void
        
        /** Returns `true` if the layer at the given index is set in [member visibility_layer]. */
        getVisibilityLayerBit(layer: int64): boolean
        
        /** If `true`, this [CanvasItem] may be drawn. Whether this [CanvasItem] is actually drawn depends on the visibility of all of its [CanvasItem] ancestors. In other words: this [CanvasItem] will be drawn when [method is_visible_in_tree] returns `true` and all [CanvasItem] ancestors share at least one [member visibility_layer] with this [CanvasItem].  
         *      
         *  **Note:** For controls that inherit [Popup], the correct way to make them visible is to call one of the multiple `popup*()` functions instead.  
         */
        get visible(): boolean
        set visible(value: boolean)
        
        /** The color applied to this [CanvasItem]. This property does affect child [CanvasItem]s, unlike [member self_modulate] which only affects the node itself. */
        get modulate(): Color
        set modulate(value: Color)
        
        /** The color applied to this [CanvasItem]. This property does **not** affect child [CanvasItem]s, unlike [member modulate] which affects both the node itself and its children.  
         *      
         *  **Note:** Internal children are also not affected by this property (see the `include_internal` parameter in [method Node.add_child]). For built-in nodes this includes sliders in [ColorPicker], and the tab bar in [TabContainer].  
         */
        get selfModulate(): Color
        set selfModulate(value: Color)
        
        /** If `true`, this node draws behind its parent. */
        get showBehindParent(): boolean
        set showBehindParent(value: boolean)
        
        /** If `true`, this [CanvasItem] will  *not*  inherit its transform from parent [CanvasItem]s. Its draw order will also be changed to make it draw on top of other [CanvasItem]s that do not have [member top_level] set to `true`. The [CanvasItem] will effectively act as if it was placed as a child of a bare [Node]. */
        get topLevel(): boolean
        set topLevel(value: boolean)
        
        /** The mode in which this node clips its children, acting as a mask.  
         *      
         *  **Note:** Clipping nodes cannot be nested or placed within a [CanvasGroup]. If an ancestor of this node clips its children or is a [CanvasGroup], then this node's clip mode should be set to [constant CLIP_CHILDREN_DISABLED] to avoid unexpected behavior.  
         */
        get clipChildren(): int64
        set clipChildren(value: int64)
        
        /** The rendering layers in which this [CanvasItem] responds to [Light2D] nodes. */
        get lightMask(): int64
        set lightMask(value: int64)
        
        /** The rendering layer in which this [CanvasItem] is rendered by [Viewport] nodes. A [Viewport] will render a [CanvasItem] if it and all its parents share a layer with the [Viewport]'s canvas cull mask. */
        get visibilityLayer(): int64
        set visibilityLayer(value: int64)
        
        /** The order in which this node is drawn. A node with a higher Z index will display in front of others. Must be between [constant RenderingServer.CANVAS_ITEM_Z_MIN] and [constant RenderingServer.CANVAS_ITEM_Z_MAX] (inclusive).  
         *      
         *  **Note:** The Z index does **not** affect the order in which [CanvasItem] nodes are processed or the way input events are handled. This is especially important to keep in mind for [Control] nodes.  
         */
        get zIndex(): int64
        set zIndex(value: int64)
        
        /** If `true`, this node's final Z index is relative to its parent's Z index.  
         *  For example, if [member z_index] is `2` and its parent's final Z index is `3`, then this node's final Z index will be `5` (`2 + 3`).  
         */
        get zAsRelative(): boolean
        set zAsRelative(value: boolean)
        
        /** If `true`, this and child [CanvasItem] nodes with a higher Y position are rendered in front of nodes with a lower Y position. If `false`, this and child [CanvasItem] nodes are rendered normally in scene tree order.  
         *  With Y-sorting enabled on a parent node ('A') but disabled on a child node ('B'), the child node ('B') is sorted but its children ('C1', 'C2', etc.) render together on the same Y position as the child node ('B'). This allows you to organize the render order of a scene without changing the scene tree.  
         *  Nodes sort relative to each other only if they are on the same [member z_index].  
         */
        get ySortEnabled(): boolean
        set ySortEnabled(value: boolean)
        
        /** The filtering mode used to render this [CanvasItem]'s texture(s). */
        get textureFilter(): int64
        set textureFilter(value: int64)
        
        /** The repeating mode used to render this [CanvasItem]'s texture(s). */
        get textureRepeat(): int64
        set textureRepeat(value: int64)
        
        /** The material applied to this [CanvasItem]. */
        get material(): null | CanvasItemMaterial | ShaderMaterial
        set material(value: null | CanvasItemMaterial | ShaderMaterial)
        
        /** If `true`, the parent [CanvasItem]'s [member material] is used as this node's material. */
        get useParentMaterial(): boolean
        set useParentMaterial(value: boolean)
        
        /** Emitted when the [CanvasItem] must redraw,  *after*  the related [constant NOTIFICATION_DRAW] notification, and  *before*  [method _draw] is called.  
         *      
         *  **Note:** Deferred connections do not allow drawing through the `draw_*` methods.  
         */
        readonly draw: Signal<() => void>
        
        /** Emitted when the [CanvasItem]'s visibility changes, either because its own [member visible] property changed or because its visibility in the tree changed (see [method is_visible_in_tree]).  
         *  This signal is emitted  *after*  the related [constant NOTIFICATION_VISIBILITY_CHANGED] notification.  
         */
        readonly visibilityChanged: Signal<() => void>
        
        /** Emitted when this node becomes hidden, i.e. it's no longer visible in the tree (see [method is_visible_in_tree]). */
        readonly hidden: Signal<() => void>
        
        /** Emitted when the [CanvasItem]'s boundaries (position or size) change, or when an action took place that may have affected these boundaries (e.g. changing [member Sprite2D.texture]). */
        readonly itemRectChanged: Signal<() => void>
    }
    namespace CanvasItemMaterial {
        enum BlendMode {
            BlendModeMix = 0,
            BlendModeAdd = 1,
            BlendModeSub = 2,
            BlendModeMul = 3,
            BlendModePremultAlpha = 4,
        }
        enum LightMode {
            LightModeNormal = 0,
            LightModeUnshaded = 1,
            LightModeLightOnly = 2,
        }
    }
    /** A material for [CanvasItem]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvasitemmaterial.html  
     */
    class CanvasItemMaterial extends Material {
        /** Mix blending mode. Colors are assumed to be independent of the alpha (opacity) value. */
        static readonly BLEND_MODE_MIX = 0
        
        /** Additive blending mode. */
        static readonly BLEND_MODE_ADD = 1
        
        /** Subtractive blending mode. */
        static readonly BLEND_MODE_SUB = 2
        
        /** Multiplicative blending mode. */
        static readonly BLEND_MODE_MUL = 3
        
        /** Mix blending mode. Colors are assumed to be premultiplied by the alpha (opacity) value. */
        static readonly BLEND_MODE_PREMULT_ALPHA = 4
        
        /** Render the material using both light and non-light sensitive material properties. */
        static readonly LIGHT_MODE_NORMAL = 0
        
        /** Render the material as if there were no light. */
        static readonly LIGHT_MODE_UNSHADED = 1
        
        /** Render the material as if there were only light. */
        static readonly LIGHT_MODE_LIGHT_ONLY = 2
        constructor(identifier?: any)
        
        /** The manner in which a material's rendering is applied to underlying textures. */
        get blendMode(): int64
        set blendMode(value: int64)
        
        /** The manner in which material reacts to lighting. */
        get lightMode(): int64
        set lightMode(value: int64)
        
        /** If `true`, enable spritesheet-based animation features when assigned to [GPUParticles2D] and [CPUParticles2D] nodes. The [member ParticleProcessMaterial.anim_speed_max] or [member CPUParticles2D.anim_speed_max] should also be set to a positive value for the animation to play.  
         *  This property (and other `particles_anim_*` properties that depend on it) has no effect on other types of nodes.  
         */
        get particlesAnimation(): boolean
        set particlesAnimation(value: boolean)
        
        /** The number of columns in the spritesheet assigned as [Texture2D] for a [GPUParticles2D] or [CPUParticles2D].  
         *      
         *  **Note:** This property is only used and visible in the editor if [member particles_animation] is `true`.  
         */
        get particlesAnimHFrames(): int64
        set particlesAnimHFrames(value: int64)
        
        /** The number of rows in the spritesheet assigned as [Texture2D] for a [GPUParticles2D] or [CPUParticles2D].  
         *      
         *  **Note:** This property is only used and visible in the editor if [member particles_animation] is `true`.  
         */
        get particlesAnimVFrames(): int64
        set particlesAnimVFrames(value: int64)
        
        /** If `true`, the particles animation will loop.  
         *      
         *  **Note:** This property is only used and visible in the editor if [member particles_animation] is `true`.  
         */
        get particlesAnimLoop(): boolean
        set particlesAnimLoop(value: boolean)
    }
    /** A node used for independent rendering of objects within a 2D scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvaslayer.html  
     */
    class CanvasLayer<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Shows any [CanvasItem] under this [CanvasLayer]. This is equivalent to setting [member visible] to `true`. */
        show(): void
        
        /** Hides any [CanvasItem] under this [CanvasLayer]. This is equivalent to setting [member visible] to `false`. */
        hide(): void
        
        /** Returns the transform from the [CanvasLayer]s coordinate system to the [Viewport]s coordinate system. */
        getFinalTransform(): Transform2D
        
        /** Returns the RID of the canvas used by this layer. */
        getCanvas(): Rid
        
        /** Layer index for draw order. Lower values are drawn behind higher values.  
         *      
         *  **Note:** If multiple CanvasLayers have the same layer index, [CanvasItem] children of one CanvasLayer are drawn behind the [CanvasItem] children of the other CanvasLayer. Which CanvasLayer is drawn in front is non-deterministic.  
         */
        get layer(): int64
        set layer(value: int64)
        
        /** If `false`, any [CanvasItem] under this [CanvasLayer] will be hidden.  
         *  Unlike [member CanvasItem.visible], visibility of a [CanvasLayer] isn't propagated to underlying layers.  
         */
        get visible(): boolean
        set visible(value: boolean)
        
        /** The layer's base offset. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The layer's rotation in radians. */
        get rotation(): float64
        set rotation(value: float64)
        
        /** The layer's scale. */
        get scale(): Vector2
        set scale(value: Vector2)
        
        /** The layer's transform. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        
        /** The custom [Viewport] node assigned to the [CanvasLayer]. If `null`, uses the default viewport instead. */
        get customViewport(): null | Viewport
        set customViewport(value: null | Viewport)
        
        /** If enabled, the [CanvasLayer] maintains its position in world space. If disabled, the [CanvasLayer] stays in a fixed position on the screen.  
         *  Together with [member follow_viewport_scale], this can be used for a pseudo-3D effect.  
         */
        get followViewportEnabled(): boolean
        set followViewportEnabled(value: boolean)
        
        /** Scales the layer when using [member follow_viewport_enabled]. Layers moving into the foreground should have increasing scales, while layers moving into the background should have decreasing scales. */
        get followViewportScale(): float64
        set followViewportScale(value: float64)
        
        /** Emitted when visibility of the layer is changed. See [member visible]. */
        readonly visibilityChanged: Signal<() => void>
    }
    /** A node that applies a color tint to a canvas.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvasmodulate.html  
     */
    class CanvasModulate<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The tint color to apply. */
        get color(): Color
        set color(value: Color)
    }
    /** Texture with optional normal and specular maps for use in 2D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvastexture.html  
     */
    class CanvasTexture extends Texture2D {
        constructor(identifier?: any)
        /** The diffuse (color) texture to use. This is the main texture you want to set in most cases. */
        get diffuseTexture(): null | Texture2D
        set diffuseTexture(value: null | Texture2D)
        
        /** The normal map texture to use. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture].  
         *      
         *  **Note:** Godot expects the normal map to use X+, Y+, and Z+ coordinates. See [url=http://wiki.polycount.com/wiki/Normal_Map_Technical_Details#Common_Swizzle_Coordinates]this page[/url] for a comparison of normal map coordinates expected by popular engines.  
         */
        get normalTexture(): null | Texture2D
        set normalTexture(value: null | Texture2D)
        
        /** The specular map to use for [Light2D] specular reflections. This should be a grayscale or colored texture, with brighter areas resulting in a higher [member specular_shininess] value. Using a colored [member specular_texture] allows controlling specular shininess on a per-channel basis. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
        get specularTexture(): null | Texture2D
        set specularTexture(value: null | Texture2D)
        
        /** The multiplier for specular reflection colors. The [Light2D]'s color is also taken into account when determining the reflection color. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
        get specularColor(): Color
        set specularColor(value: Color)
        
        /** The specular exponent for [Light2D] specular reflections. Higher values result in a more glossy/"wet" look, with reflections becoming more localized and less visible overall. The default value of `1.0` disables specular reflections entirely. Only has a visible effect if [Light2D]s are affecting this [CanvasTexture]. */
        get specularShininess(): float64
        set specularShininess(value: float64)
        
        /** The texture filtering mode to use when drawing this [CanvasTexture]. */
        get textureFilter(): int64
        set textureFilter(value: int64)
        
        /** The texture repeat mode to use when drawing this [CanvasTexture]. */
        get textureRepeat(): int64
        set textureRepeat(value: int64)
    }
    /** Class representing a capsule-shaped [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_capsulemesh.html  
     */
    class CapsuleMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Radius of the capsule mesh. */
        get radius(): float64
        set radius(value: float64)
        
        /** Total height of the capsule mesh (including the hemispherical ends). */
        get height(): float64
        set height(value: float64)
        
        /** Number of radial segments on the capsule mesh. */
        get radialSegments(): int64
        set radialSegments(value: int64)
        
        /** Number of rings along the height of the capsule. */
        get rings(): int64
        set rings(value: int64)
    }
    /** A 2D capsule shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_capsuleshape2d.html  
     */
    class CapsuleShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The capsule's radius. */
        get radius(): float64
        set radius(value: float64)
        
        /** The capsule's full height, including the semicircles. */
        get height(): float64
        set height(value: float64)
        
        /** The capsule's height, excluding the semicircles. This is the height of the central rectangular part in the middle of the capsule, and is the distance between the centers of the two semicircles. This is a wrapper for [member height]. */
        get midHeight(): float64
        set midHeight(value: float64)
    }
    /** A 3D capsule shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_capsuleshape3d.html  
     */
    class CapsuleShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The capsule's radius. */
        get radius(): float64
        set radius(value: float64)
        
        /** The capsule's full height, including the hemispheres. */
        get height(): float64
        set height(value: float64)
        
        /** The capsule's height, excluding the hemispheres. This is the height of the central cylindrical part in the middle of the capsule, and is the distance between the centers of the two hemispheres. This is a wrapper for [member height]. */
        get midHeight(): float64
        set midHeight(value: float64)
    }
    /** A container that keeps child controls in its center.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_centercontainer.html  
     */
    class CenterContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** If `true`, centers children relative to the [CenterContainer]'s top left corner. */
        get useTopLeft(): boolean
        set useTopLeft(value: boolean)
    }
    /** Controls how an individual character will be displayed in a [RichTextEffect].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_charfxtransform.html  
     */
    class CharFXTransform extends RefCounted {
        constructor(identifier?: any)
        /** The current transform of the current glyph. It can be overridden (for example, by driving the position and rotation from a curve). You can also alter the existing value to apply transforms on top of other effects. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        
        /** Absolute character range in the string, corresponding to the glyph.  
         *      
         *  **Note:** Read-only. Setting this property won't affect drawing.  
         */
        get range(): Vector2I
        set range(value: Vector2I)
        
        /** The time elapsed since the [RichTextLabel] was added to the scene tree (in seconds). Time stops when the [RichTextLabel] is paused (see [member Node.process_mode]). Resets when the text in the [RichTextLabel] is changed.  
         *      
         *  **Note:** Time still passes while the [RichTextLabel] is hidden.  
         */
        get elapsedTime(): float64
        set elapsedTime(value: float64)
        
        /** If `true`, the character will be drawn. If `false`, the character will be hidden. Characters around hidden characters will reflow to take the space of hidden characters. If this is not desired, set their [member color] to `Color(1, 1, 1, 0)` instead. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, FX transform is called for outline drawing.  
         *      
         *  **Note:** Read-only. Setting this property won't affect drawing.  
         */
        get outline(): boolean
        set outline(value: boolean)
        
        /** The position offset the character will be drawn with (in pixels). */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The color the character will be drawn with. */
        get color(): Color
        set color(value: Color)
        
        /** Contains the arguments passed in the opening BBCode tag. By default, arguments are strings; if their contents match a type such as [bool], [int] or [float], they will be converted automatically. Color codes in the form `#rrggbb` or `#rgb` will be converted to an opaque [Color]. String arguments may not contain spaces, even if they're quoted. If present, quotes will also be present in the final string.  
         *  For example, the opening BBCode tag `[example foo=hello bar=true baz=42 color=#ffffff]` will map to the following [Dictionary]:  
         *    
         */
        get env(): GDictionary
        set env(value: GDictionary)
        
        /** Glyph index specific to the [member font]. If you want to replace this glyph, use [method TextServer.font_get_glyph_index] with [member font] to get a new glyph index for a single character. */
        get glyphIndex(): int64
        set glyphIndex(value: int64)
        
        /** Number of glyphs in the grapheme cluster. This value is set in the first glyph of a cluster.  
         *      
         *  **Note:** Read-only. Setting this property won't affect drawing.  
         */
        get glyphCount(): int64
        set glyphCount(value: int64)
        
        /** Glyph flags. See [enum TextServer.GraphemeFlag] for more info.  
         *      
         *  **Note:** Read-only. Setting this property won't affect drawing.  
         */
        get glyphFlags(): int64
        set glyphFlags(value: int64)
        
        /** The character offset of the glyph, relative to the current [RichTextEffect] custom block.  
         *      
         *  **Note:** Read-only. Setting this property won't affect drawing.  
         */
        get relativeIndex(): int64
        set relativeIndex(value: int64)
        
        /** [TextServer] RID of the font used to render glyph, this value can be used with `TextServer.font_*` methods to retrieve font information.  
         *      
         *  **Note:** Read-only. Setting this property won't affect drawing.  
         */
        get font(): Rid
        set font(value: Rid)
    }
    namespace CharacterBody2D {
        enum MotionMode {
            MotionModeGrounded = 0,
            MotionModeFloating = 1,
        }
        enum PlatformOnLeave {
            PlatformOnLeaveAddVelocity = 0,
            PlatformOnLeaveAddUpwardVelocity = 1,
            PlatformOnLeaveDoNothing = 2,
        }
    }
    /** A 2D physics body specialized for characters moved by script.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_characterbody2d.html  
     */
    class CharacterBody2D<Map extends NodePathMap = any> extends PhysicsBody2D<Map> {
        /** Apply when notions of walls, ceiling and floor are relevant. In this mode the body motion will react to slopes (acceleration/slowdown). This mode is suitable for sided games like platformers. */
        static readonly MOTION_MODE_GROUNDED = 0
        
        /** Apply when there is no notion of floor or ceiling. All collisions will be reported as `on_wall`. In this mode, when you slide, the speed will always be constant. This mode is suitable for top-down games. */
        static readonly MOTION_MODE_FLOATING = 1
        
        /** Add the last platform velocity to the [member velocity] when you leave a moving platform. */
        static readonly PLATFORM_ON_LEAVE_ADD_VELOCITY = 0
        
        /** Add the last platform velocity to the [member velocity] when you leave a moving platform, but any downward motion is ignored. It's useful to keep full jump height even when the platform is moving down. */
        static readonly PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY = 1
        
        /** Do nothing when leaving a platform. */
        static readonly PLATFORM_ON_LEAVE_DO_NOTHING = 2
        constructor(identifier?: any)
        
        /** Moves the body based on [member velocity]. If the body collides with another, it will slide along the other body (by default only on floor) rather than stop immediately. If the other body is a [CharacterBody2D] or [RigidBody2D], it will also be affected by the motion of the other body. You can use this to make moving and rotating platforms, or to make nodes push other nodes.  
         *  Modifies [member velocity] if a slide collision occurred. To get the latest collision call [method get_last_slide_collision], for detailed information about collisions that occurred, use [method get_slide_collision].  
         *  When the body touches a moving platform, the platform's velocity is automatically added to the body motion. If a collision occurs due to the platform's motion, it will always be first in the slide collisions.  
         *  The general behavior and available properties change according to the [member motion_mode].  
         *  Returns `true` if the body collided, otherwise, returns `false`.  
         */
        moveAndSlide(): boolean
        
        /** Allows to manually apply a snap to the floor regardless of the body's velocity. This function does nothing when [method is_on_floor] returns `true`. */
        applyFloorSnap(): void
        
        /** Returns `true` if the body collided with the floor on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        isOnFloor(): boolean
        
        /** Returns `true` if the body collided only with the floor on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        isOnFloorOnly(): boolean
        
        /** Returns `true` if the body collided with the ceiling on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        isOnCeiling(): boolean
        
        /** Returns `true` if the body collided only with the ceiling on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        isOnCeilingOnly(): boolean
        
        /** Returns `true` if the body collided with a wall on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        isOnWall(): boolean
        
        /** Returns `true` if the body collided only with a wall on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        isOnWallOnly(): boolean
        
        /** Returns the collision normal of the floor at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_floor] returns `true`.  
         *  **Warning:** The collision normal is not always the same as the surface normal.  
         */
        getFloorNormal(): Vector2
        
        /** Returns the collision normal of the wall at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_wall] returns `true`.  
         *  **Warning:** The collision normal is not always the same as the surface normal.  
         */
        getWallNormal(): Vector2
        
        /** Returns the last motion applied to the [CharacterBody2D] during the last call to [method move_and_slide]. The movement can be split into multiple motions when sliding occurs, and this method return the last one, which is useful to retrieve the current direction of the movement. */
        getLastMotion(): Vector2
        
        /** Returns the travel (position delta) that occurred during the last call to [method move_and_slide]. */
        getPositionDelta(): Vector2
        
        /** Returns the current real velocity since the last call to [method move_and_slide]. For example, when you climb a slope, you will move diagonally even though the velocity is horizontal. This method returns the diagonal movement, as opposed to [member velocity] which returns the requested velocity. */
        getRealVelocity(): Vector2
        
        /** Returns the floor's collision angle at the last collision point according to [param up_direction], which is [constant Vector2.UP] by default. This value is always positive and only valid after calling [method move_and_slide] and when [method is_on_floor] returns `true`. */
        getFloorAngle(upDirection?: Vector2 /* = new Vector2(0, -1) */): float64
        
        /** Returns the linear velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
        getPlatformVelocity(): Vector2
        
        /** Returns the number of times the body collided and changed direction during the last call to [method move_and_slide]. */
        getSlideCollisionCount(): int64
        
        /** Returns a [KinematicCollision2D], which contains information about a collision that occurred during the last call to [method move_and_slide]. Since the body can collide several times in a single call to [method move_and_slide], you must specify the index of the collision in the range 0 to ([method get_slide_collision_count] - 1).  
         *  **Example:** Iterate through the collisions with a `for` loop:  
         *    
         */
        getSlideCollision(slideIdx: int64): null | KinematicCollision2D
        
        /** Returns a [KinematicCollision2D], which contains information about the latest collision that occurred during the last call to [method move_and_slide]. */
        getLastSlideCollision(): null | KinematicCollision2D
        
        /** Sets the motion mode which defines the behavior of [method move_and_slide]. See [enum MotionMode] constants for available modes. */
        get motionMode(): int64
        set motionMode(value: int64)
        
        /** Vector pointing upwards, used to determine what is a wall and what is a floor (or a ceiling) when calling [method move_and_slide]. Defaults to [constant Vector2.UP]. As the vector will be normalized it can't be equal to [constant Vector2.ZERO], if you want all collisions to be reported as walls, consider using [constant MOTION_MODE_FLOATING] as [member motion_mode]. */
        get upDirection(): Vector2
        set upDirection(value: Vector2)
        
        /** Current velocity vector in pixels per second, used and modified during calls to [method move_and_slide]. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** If `true`, during a jump against the ceiling, the body will slide, if `false` it will be stopped and will fall vertically. */
        get slideOnCeiling(): boolean
        set slideOnCeiling(value: boolean)
        
        /** Maximum number of times the body can change direction before it stops when calling [method move_and_slide]. Must be greater than zero. */
        get maxSlides(): int64
        set maxSlides(value: int64)
        
        /** Minimum angle (in radians) where the body is allowed to slide when it encounters a wall. The default value equals 15 degrees. This property only affects movement when [member motion_mode] is [constant MOTION_MODE_FLOATING]. */
        get wallMinSlideAngle(): float64
        set wallMinSlideAngle(value: float64)
        
        /** If `true`, the body will not slide on slopes when calling [method move_and_slide] when the body is standing still.  
         *  If `false`, the body will slide on floor's slopes when [member velocity] applies a downward force.  
         */
        get floorStopOnSlope(): boolean
        set floorStopOnSlope(value: boolean)
        
        /** If `false` (by default), the body will move faster on downward slopes and slower on upward slopes.  
         *  If `true`, the body will always move at the same speed on the ground no matter the slope. Note that you need to use [member floor_snap_length] to stick along a downward slope at constant speed.  
         */
        get floorConstantSpeed(): boolean
        set floorConstantSpeed(value: boolean)
        
        /** If `true`, the body will be able to move on the floor only. This option avoids to be able to walk on walls, it will however allow to slide down along them. */
        get floorBlockOnWall(): boolean
        set floorBlockOnWall(value: boolean)
        
        /** Maximum angle (in radians) where a slope is still considered a floor (or a ceiling), rather than a wall, when calling [method move_and_slide]. The default value equals 45 degrees. */
        get floorMaxAngle(): float64
        set floorMaxAngle(value: float64)
        
        /** Sets a snapping distance. When set to a value different from `0.0`, the body is kept attached to slopes when calling [method move_and_slide]. The snapping vector is determined by the given distance along the opposite direction of the [member up_direction].  
         *  As long as the snapping vector is in contact with the ground and the body moves against [member up_direction], the body will remain attached to the surface. Snapping is not applied if the body moves along [member up_direction], meaning it contains vertical rising velocity, so it will be able to detach from the ground when jumping or when the body is pushed up by something. If you want to apply a snap without taking into account the velocity, use [method apply_floor_snap].  
         */
        get floorSnapLength(): float64
        set floorSnapLength(value: float64)
        
        /** Sets the behavior to apply when you leave a moving platform. By default, to be physically accurate, when you leave the last platform velocity is applied. See [enum PlatformOnLeave] constants for available behavior. */
        get platformOnLeave(): int64
        set platformOnLeave(value: int64)
        
        /** Collision layers that will be included for detecting floor bodies that will act as moving platforms to be followed by the [CharacterBody2D]. By default, all floor bodies are detected and propagate their velocity. */
        get platformFloorLayers(): int64
        set platformFloorLayers(value: int64)
        
        /** Collision layers that will be included for detecting wall bodies that will act as moving platforms to be followed by the [CharacterBody2D]. By default, all wall bodies are ignored. */
        get platformWallLayers(): int64
        set platformWallLayers(value: int64)
        
        /** Extra margin used for collision recovery when calling [method move_and_slide].  
         *  If the body is at least this close to another body, it will consider them to be colliding and will be pushed away before performing the actual motion.  
         *  A higher value means it's more flexible for detecting collision, which helps with consistently detecting walls and floors.  
         *  A lower value forces the collision algorithm to use more exact detection, so it can be used in cases that specifically require precision, e.g at very low scale to avoid visible jittering, or for stability with a stack of character bodies.  
         */
        get safeMargin(): float64
        set safeMargin(value: float64)
    }
    namespace CharacterBody3D {
        enum MotionMode {
            MotionModeGrounded = 0,
            MotionModeFloating = 1,
        }
        enum PlatformOnLeave {
            PlatformOnLeaveAddVelocity = 0,
            PlatformOnLeaveAddUpwardVelocity = 1,
            PlatformOnLeaveDoNothing = 2,
        }
    }
    /** A 3D physics body specialized for characters moved by script.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_characterbody3d.html  
     */
    class CharacterBody3D<Map extends NodePathMap = any> extends PhysicsBody3D<Map> {
        /** Apply when notions of walls, ceiling and floor are relevant. In this mode the body motion will react to slopes (acceleration/slowdown). This mode is suitable for grounded games like platformers. */
        static readonly MOTION_MODE_GROUNDED = 0
        
        /** Apply when there is no notion of floor or ceiling. All collisions will be reported as `on_wall`. In this mode, when you slide, the speed will always be constant. This mode is suitable for games without ground like space games. */
        static readonly MOTION_MODE_FLOATING = 1
        
        /** Add the last platform velocity to the [member velocity] when you leave a moving platform. */
        static readonly PLATFORM_ON_LEAVE_ADD_VELOCITY = 0
        
        /** Add the last platform velocity to the [member velocity] when you leave a moving platform, but any downward motion is ignored. It's useful to keep full jump height even when the platform is moving down. */
        static readonly PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY = 1
        
        /** Do nothing when leaving a platform. */
        static readonly PLATFORM_ON_LEAVE_DO_NOTHING = 2
        constructor(identifier?: any)
        
        /** Moves the body based on [member velocity]. If the body collides with another, it will slide along the other body rather than stop immediately. If the other body is a [CharacterBody3D] or [RigidBody3D], it will also be affected by the motion of the other body. You can use this to make moving and rotating platforms, or to make nodes push other nodes.  
         *  Modifies [member velocity] if a slide collision occurred. To get the latest collision call [method get_last_slide_collision], for more detailed information about collisions that occurred, use [method get_slide_collision].  
         *  When the body touches a moving platform, the platform's velocity is automatically added to the body motion. If a collision occurs due to the platform's motion, it will always be first in the slide collisions.  
         *  Returns `true` if the body collided, otherwise, returns `false`.  
         */
        moveAndSlide(): boolean
        
        /** Allows to manually apply a snap to the floor regardless of the body's velocity. This function does nothing when [method is_on_floor] returns `true`. */
        applyFloorSnap(): void
        
        /** Returns `true` if the body collided with the floor on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        isOnFloor(): boolean
        
        /** Returns `true` if the body collided only with the floor on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "floor" or not. */
        isOnFloorOnly(): boolean
        
        /** Returns `true` if the body collided with the ceiling on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        isOnCeiling(): boolean
        
        /** Returns `true` if the body collided only with the ceiling on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "ceiling" or not. */
        isOnCeilingOnly(): boolean
        
        /** Returns `true` if the body collided with a wall on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        isOnWall(): boolean
        
        /** Returns `true` if the body collided only with a wall on the last call of [method move_and_slide]. Otherwise, returns `false`. The [member up_direction] and [member floor_max_angle] are used to determine whether a surface is "wall" or not. */
        isOnWallOnly(): boolean
        
        /** Returns the collision normal of the floor at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_floor] returns `true`.  
         *  **Warning:** The collision normal is not always the same as the surface normal.  
         */
        getFloorNormal(): Vector3
        
        /** Returns the collision normal of the wall at the last collision point. Only valid after calling [method move_and_slide] and when [method is_on_wall] returns `true`.  
         *  **Warning:** The collision normal is not always the same as the surface normal.  
         */
        getWallNormal(): Vector3
        
        /** Returns the last motion applied to the [CharacterBody3D] during the last call to [method move_and_slide]. The movement can be split into multiple motions when sliding occurs, and this method return the last one, which is useful to retrieve the current direction of the movement. */
        getLastMotion(): Vector3
        
        /** Returns the travel (position delta) that occurred during the last call to [method move_and_slide]. */
        getPositionDelta(): Vector3
        
        /** Returns the current real velocity since the last call to [method move_and_slide]. For example, when you climb a slope, you will move diagonally even though the velocity is horizontal. This method returns the diagonal movement, as opposed to [member velocity] which returns the requested velocity. */
        getRealVelocity(): Vector3
        
        /** Returns the floor's collision angle at the last collision point according to [param up_direction], which is [constant Vector3.UP] by default. This value is always positive and only valid after calling [method move_and_slide] and when [method is_on_floor] returns `true`. */
        getFloorAngle(upDirection?: Vector3 /* = Vector3.ZERO */): float64
        
        /** Returns the linear velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
        getPlatformVelocity(): Vector3
        
        /** Returns the angular velocity of the platform at the last collision point. Only valid after calling [method move_and_slide]. */
        getPlatformAngularVelocity(): Vector3
        
        /** Returns the number of times the body collided and changed direction during the last call to [method move_and_slide]. */
        getSlideCollisionCount(): int64
        
        /** Returns a [KinematicCollision3D], which contains information about a collision that occurred during the last call to [method move_and_slide]. Since the body can collide several times in a single call to [method move_and_slide], you must specify the index of the collision in the range 0 to ([method get_slide_collision_count] - 1). */
        getSlideCollision(slideIdx: int64): null | KinematicCollision3D
        
        /** Returns a [KinematicCollision3D], which contains information about the latest collision that occurred during the last call to [method move_and_slide]. */
        getLastSlideCollision(): null | KinematicCollision3D
        
        /** Sets the motion mode which defines the behavior of [method move_and_slide]. See [enum MotionMode] constants for available modes. */
        get motionMode(): int64
        set motionMode(value: int64)
        
        /** Vector pointing upwards, used to determine what is a wall and what is a floor (or a ceiling) when calling [method move_and_slide]. Defaults to [constant Vector3.UP]. As the vector will be normalized it can't be equal to [constant Vector3.ZERO], if you want all collisions to be reported as walls, consider using [constant MOTION_MODE_FLOATING] as [member motion_mode]. */
        get upDirection(): Vector3
        set upDirection(value: Vector3)
        
        /** If `true`, during a jump against the ceiling, the body will slide, if `false` it will be stopped and will fall vertically. */
        get slideOnCeiling(): boolean
        set slideOnCeiling(value: boolean)
        
        /** Current velocity vector (typically meters per second), used and modified during calls to [method move_and_slide]. */
        get velocity(): Vector3
        set velocity(value: Vector3)
        
        /** Maximum number of times the body can change direction before it stops when calling [method move_and_slide]. Must be greater than zero. */
        get maxSlides(): int64
        set maxSlides(value: int64)
        
        /** Minimum angle (in radians) where the body is allowed to slide when it encounters a wall. The default value equals 15 degrees. When [member motion_mode] is [constant MOTION_MODE_GROUNDED], it only affects movement if [member floor_block_on_wall] is `true`. */
        get wallMinSlideAngle(): float64
        set wallMinSlideAngle(value: float64)
        
        /** If `true`, the body will not slide on slopes when calling [method move_and_slide] when the body is standing still.  
         *  If `false`, the body will slide on floor's slopes when [member velocity] applies a downward force.  
         */
        get floorStopOnSlope(): boolean
        set floorStopOnSlope(value: boolean)
        
        /** If `false` (by default), the body will move faster on downward slopes and slower on upward slopes.  
         *  If `true`, the body will always move at the same speed on the ground no matter the slope. Note that you need to use [member floor_snap_length] to stick along a downward slope at constant speed.  
         */
        get floorConstantSpeed(): boolean
        set floorConstantSpeed(value: boolean)
        
        /** If `true`, the body will be able to move on the floor only. This option avoids to be able to walk on walls, it will however allow to slide down along them. */
        get floorBlockOnWall(): boolean
        set floorBlockOnWall(value: boolean)
        
        /** Maximum angle (in radians) where a slope is still considered a floor (or a ceiling), rather than a wall, when calling [method move_and_slide]. The default value equals 45 degrees. */
        get floorMaxAngle(): float64
        set floorMaxAngle(value: float64)
        
        /** Sets a snapping distance. When set to a value different from `0.0`, the body is kept attached to slopes when calling [method move_and_slide]. The snapping vector is determined by the given distance along the opposite direction of the [member up_direction].  
         *  As long as the snapping vector is in contact with the ground and the body moves against [member up_direction], the body will remain attached to the surface. Snapping is not applied if the body moves along [member up_direction], meaning it contains vertical rising velocity, so it will be able to detach from the ground when jumping or when the body is pushed up by something. If you want to apply a snap without taking into account the velocity, use [method apply_floor_snap].  
         */
        get floorSnapLength(): float64
        set floorSnapLength(value: float64)
        
        /** Sets the behavior to apply when you leave a moving platform. By default, to be physically accurate, when you leave the last platform velocity is applied. See [enum PlatformOnLeave] constants for available behavior. */
        get platformOnLeave(): int64
        set platformOnLeave(value: int64)
        
        /** Collision layers that will be included for detecting floor bodies that will act as moving platforms to be followed by the [CharacterBody3D]. By default, all floor bodies are detected and propagate their velocity. */
        get platformFloorLayers(): int64
        set platformFloorLayers(value: int64)
        
        /** Collision layers that will be included for detecting wall bodies that will act as moving platforms to be followed by the [CharacterBody3D]. By default, all wall bodies are ignored. */
        get platformWallLayers(): int64
        set platformWallLayers(value: int64)
        
        /** Extra margin used for collision recovery when calling [method move_and_slide].  
         *  If the body is at least this close to another body, it will consider them to be colliding and will be pushed away before performing the actual motion.  
         *  A higher value means it's more flexible for detecting collision, which helps with consistently detecting walls and floors.  
         *  A lower value forces the collision algorithm to use more exact detection, so it can be used in cases that specifically require precision, e.g at very low scale to avoid visible jittering, or for stability with a stack of character bodies.  
         */
        get safeMargin(): float64
        set safeMargin(value: float64)
    }
    /** A button that represents a binary choice.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_checkbox.html  
     */
    class CheckBox<Map extends NodePathMap = any> extends Button<Map> {
        constructor(identifier?: any)
    }
    /** A button that represents a binary choice.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_checkbutton.html  
     */
    class CheckButton<Map extends NodePathMap = any> extends Button<Map> {
        constructor(identifier?: any)
    }
    /** A 2D circle shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_circleshape2d.html  
     */
    class CircleShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The circle's radius. */
        get radius(): float64
        set radius(value: float64)
    }
    namespace CodeEdit {
        enum CodeCompletionKind {
            KindClass = 0,
            KindFunction = 1,
            KindSignal = 2,
            KindVariable = 3,
            KindMember = 4,
            KindEnum = 5,
            KindConstant = 6,
            KindNodePath = 7,
            KindFilePath = 8,
            KindPlainText = 9,
        }
        enum CodeCompletionLocation {
            LocationLocal = 0,
            LocationParentMask = 256,
            LocationOtherUserCode = 512,
            LocationOther = 1024,
        }
    }
    /** A multiline text editor designed for editing code.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_codeedit.html  
     */
    class CodeEdit<Map extends NodePathMap = any> extends TextEdit<Map> {
        /** Marks the option as a class. */
        static readonly KIND_CLASS = 0
        
        /** Marks the option as a function. */
        static readonly KIND_FUNCTION = 1
        
        /** Marks the option as a Godot signal. */
        static readonly KIND_SIGNAL = 2
        
        /** Marks the option as a variable. */
        static readonly KIND_VARIABLE = 3
        
        /** Marks the option as a member. */
        static readonly KIND_MEMBER = 4
        
        /** Marks the option as an enum entry. */
        static readonly KIND_ENUM = 5
        
        /** Marks the option as a constant. */
        static readonly KIND_CONSTANT = 6
        
        /** Marks the option as a Godot node path. */
        static readonly KIND_NODE_PATH = 7
        
        /** Marks the option as a file path. */
        static readonly KIND_FILE_PATH = 8
        
        /** Marks the option as unclassified or plain text. */
        static readonly KIND_PLAIN_TEXT = 9
        
        /** The option is local to the location of the code completion query - e.g. a local variable. Subsequent value of location represent options from the outer class, the exact value represent how far they are (in terms of inner classes). */
        static readonly LOCATION_LOCAL = 0
        
        /** The option is from the containing class or a parent class, relative to the location of the code completion query. Perform a bitwise OR with the class depth (e.g. `0` for the local class, `1` for the parent, `2` for the grandparent, etc.) to store the depth of an option in the class or a parent class. */
        static readonly LOCATION_PARENT_MASK = 256
        
        /** The option is from user code which is not local and not in a derived class (e.g. Autoload Singletons). */
        static readonly LOCATION_OTHER_USER_CODE = 512
        
        /** The option is from other engine code, not covered by the other enum constants - e.g. built-in classes. */
        static readonly LOCATION_OTHER = 1024
        constructor(identifier?: any)
        
        /** Override this method to define how the selected entry should be inserted. If [param replace] is `true`, any existing text should be replaced. */
        /* gdvirtual */ _confirmCodeCompletion(replace: boolean): void
        
        /** Override this method to define what happens when the user requests code completion. If [param force] is `true`, any checks should be bypassed. */
        /* gdvirtual */ _requestCodeCompletion(force: boolean): void
        
        /** Override this method to define what items in [param candidates] should be displayed.  
         *  Both [param candidates] and the return is a [Array] of [Dictionary], see [method get_code_completion_option] for [Dictionary] content.  
         */
        /* gdvirtual */ _filterCodeCompletionCandidates(candidates: GArray): GArray
        
        /** If there is no selection, indentation is inserted at the caret. Otherwise, the selected lines are indented like [method indent_lines]. Equivalent to the [member ProjectSettings.input/ui_text_indent] action. The indentation characters used depend on [member indent_use_spaces] and [member indent_size]. */
        doIndent(): void
        
        /** Indents all lines that are selected or have a caret on them. Uses spaces or a tab depending on [member indent_use_spaces]. See [method unindent_lines]. */
        indentLines(): void
        
        /** Unindents all lines that are selected or have a caret on them. Uses spaces or a tab depending on [member indent_use_spaces]. Equivalent to the [member ProjectSettings.input/ui_text_dedent] action. See [method indent_lines]. */
        unindentLines(): void
        
        /** Converts the indents of lines between [param from_line] and [param to_line] to tabs or spaces as set by [member indent_use_spaces].  
         *  Values of `-1` convert the entire text.  
         */
        convertIndent(fromLine?: int64 /* = -1 */, toLine?: int64 /* = -1 */): void
        
        /** Adds a brace pair.  
         *  Both the start and end keys must be symbols. Only the start key has to be unique.  
         */
        addAutoBraceCompletionPair(startKey: string, endKey: string): void
        
        /** Returns `true` if open key [param open_key] exists. */
        hasAutoBraceCompletionOpenKey(openKey: string): boolean
        
        /** Returns `true` if close key [param close_key] exists. */
        hasAutoBraceCompletionCloseKey(closeKey: string): boolean
        
        /** Gets the matching auto brace close key for [param open_key]. */
        getAutoBraceCompletionCloseKey(openKey: string): string
        
        /** Sets the given line as a breakpoint. If `true` and [member gutters_draw_breakpoints_gutter] is `true`, draws the [theme_item breakpoint] icon in the gutter for this line. See [method get_breakpointed_lines] and [method is_line_breakpointed]. */
        setLineAsBreakpoint(line: int64, breakpointed: boolean): void
        
        /** Returns `true` if the given line is breakpointed. See [method set_line_as_breakpoint]. */
        isLineBreakpointed(line: int64): boolean
        
        /** Clears all breakpointed lines. */
        clearBreakpointedLines(): void
        
        /** Gets all breakpointed lines. */
        getBreakpointedLines(): PackedInt32Array
        
        /** Sets the given line as bookmarked. If `true` and [member gutters_draw_bookmarks] is `true`, draws the [theme_item bookmark] icon in the gutter for this line. See [method get_bookmarked_lines] and [method is_line_bookmarked]. */
        setLineAsBookmarked(line: int64, bookmarked: boolean): void
        
        /** Returns `true` if the given line is bookmarked. See [method set_line_as_bookmarked]. */
        isLineBookmarked(line: int64): boolean
        
        /** Clears all bookmarked lines. */
        clearBookmarkedLines(): void
        
        /** Gets all bookmarked lines. */
        getBookmarkedLines(): PackedInt32Array
        
        /** Sets the given line as executing. If `true` and [member gutters_draw_executing_lines] is `true`, draws the [theme_item executing_line] icon in the gutter for this line. See [method get_executing_lines] and [method is_line_executing]. */
        setLineAsExecuting(line: int64, executing: boolean): void
        
        /** Returns `true` if the given line is marked as executing. See [method set_line_as_executing]. */
        isLineExecuting(line: int64): boolean
        
        /** Clears all executed lines. */
        clearExecutingLines(): void
        
        /** Gets all executing lines. */
        getExecutingLines(): PackedInt32Array
        
        /** Returns `true` if the given line is foldable. A line is foldable if it is the start of a valid code region (see [method get_code_region_start_tag]), if it is the start of a comment or string block, or if the next non-empty line is more indented (see [method TextEdit.get_indent_level]). */
        canFoldLine(line: int64): boolean
        
        /** Folds the given line, if possible (see [method can_fold_line]). */
        foldLine(line: int64): void
        
        /** Unfolds the given line if it is folded or if it is hidden under a folded line. */
        unfoldLine(line: int64): void
        
        /** Folds all lines that are possible to be folded (see [method can_fold_line]). */
        foldAllLines(): void
        
        /** Unfolds all lines that are folded. */
        unfoldAllLines(): void
        
        /** Toggle the folding of the code block at the given line. */
        toggleFoldableLine(line: int64): void
        
        /** Toggle the folding of the code block on all lines with a caret on them. */
        toggleFoldableLinesAtCarets(): void
        
        /** Returns `true` if the given line is folded. See [method fold_line]. */
        isLineFolded(line: int64): boolean
        
        /** Returns all lines that are currently folded. */
        getFoldedLines(): GArray
        
        /** Creates a new code region with the selection. At least one single line comment delimiter have to be defined (see [method add_comment_delimiter]).  
         *  A code region is a part of code that is highlighted when folded and can help organize your script.  
         *  Code region start and end tags can be customized (see [method set_code_region_tags]).  
         *  Code regions are delimited using start and end tags (respectively `region` and `endregion` by default) preceded by one line comment delimiter. (eg. `#region` and `#endregion`)  
         */
        createCodeRegion(): void
        
        /** Returns the code region start tag (without comment delimiter). */
        getCodeRegionStartTag(): string
        
        /** Returns the code region end tag (without comment delimiter). */
        getCodeRegionEndTag(): string
        
        /** Sets the code region start and end tags (without comment delimiter). */
        setCodeRegionTags(start?: string /* = 'region' */, end?: string /* = 'endregion' */): void
        
        /** Returns `true` if the given line is a code region start. See [method set_code_region_tags]. */
        isLineCodeRegionStart(line: int64): boolean
        
        /** Returns `true` if the given line is a code region end. See [method set_code_region_tags]. */
        isLineCodeRegionEnd(line: int64): boolean
        
        /** Defines a string delimiter from [param start_key] to [param end_key]. Both keys should be symbols, and [param start_key] must not be shared with other delimiters.  
         *  If [param line_only] is `true` or [param end_key] is an empty [String], the region does not carry over to the next line.  
         */
        addStringDelimiter(startKey: string, endKey: string, lineOnly?: boolean /* = false */): void
        
        /** Removes the string delimiter with [param start_key]. */
        removeStringDelimiter(startKey: string): void
        
        /** Returns `true` if string [param start_key] exists. */
        hasStringDelimiter(startKey: string): boolean
        
        /** Removes all string delimiters. */
        clearStringDelimiters(): void
        
        /** Returns the delimiter index if [param line] [param column] is in a string. If [param column] is not provided, will return the delimiter index if the entire [param line] is a string. Otherwise `-1`. */
        isInString(line: int64, column?: int64 /* = -1 */): int64
        
        /** Adds a comment delimiter from [param start_key] to [param end_key]. Both keys should be symbols, and [param start_key] must not be shared with other delimiters.  
         *  If [param line_only] is `true` or [param end_key] is an empty [String], the region does not carry over to the next line.  
         */
        addCommentDelimiter(startKey: string, endKey: string, lineOnly?: boolean /* = false */): void
        
        /** Removes the comment delimiter with [param start_key]. */
        removeCommentDelimiter(startKey: string): void
        
        /** Returns `true` if comment [param start_key] exists. */
        hasCommentDelimiter(startKey: string): boolean
        
        /** Removes all comment delimiters. */
        clearCommentDelimiters(): void
        
        /** Returns delimiter index if [param line] [param column] is in a comment. If [param column] is not provided, will return delimiter index if the entire [param line] is a comment. Otherwise `-1`. */
        isInComment(line: int64, column?: int64 /* = -1 */): int64
        
        /** Gets the start key for a string or comment region index. */
        getDelimiterStartKey(delimiterIndex: int64): string
        
        /** Gets the end key for a string or comment region index. */
        getDelimiterEndKey(delimiterIndex: int64): string
        
        /** If [param line] [param column] is in a string or comment, returns the start position of the region. If not or no start could be found, both [Vector2] values will be `-1`. */
        getDelimiterStartPosition(line: int64, column: int64): Vector2
        
        /** If [param line] [param column] is in a string or comment, returns the end position of the region. If not or no end could be found, both [Vector2] values will be `-1`. */
        getDelimiterEndPosition(line: int64, column: int64): Vector2
        
        /** Sets the code hint text. Pass an empty string to clear. */
        setCodeHint(codeHint: string): void
        
        /** If `true`, the code hint will draw below the main caret. If `false`, the code hint will draw above the main caret. See [method set_code_hint]. */
        setCodeHintDrawBelow(drawBelow: boolean): void
        
        /** Returns the full text with char `0xFFFF` at the caret location. */
        getTextForCodeCompletion(): string
        
        /** Emits [signal code_completion_requested], if [param force] is `true` will bypass all checks. Otherwise will check that the caret is in a word or in front of a prefix. Will ignore the request if all current options are of type file path, node path, or signal. */
        requestCodeCompletion(force?: boolean /* = false */): void
        
        /** Submits an item to the queue of potential candidates for the autocomplete menu. Call [method update_code_completion_options] to update the list.  
         *  [param location] indicates location of the option relative to the location of the code completion query. See [enum CodeEdit.CodeCompletionLocation] for how to set this value.  
         *      
         *  **Note:** This list will replace all current candidates.  
         */
        addCodeCompletionOption(type: CodeEdit.CodeCompletionKind, displayText: string, insertText: string, textColor?: Color /* = new Color(1, 1, 1, 1) */, icon?: Resource /* = undefined */, value?: any /* = <any> {} */, location?: int64 /* = 1024 */): void
        
        /** Submits all completion options added with [method add_code_completion_option]. Will try to force the autocomplete menu to popup, if [param force] is `true`.  
         *      
         *  **Note:** This will replace all current candidates.  
         */
        updateCodeCompletionOptions(force: boolean): void
        
        /** Gets all completion options, see [method get_code_completion_option] for return content. */
        getCodeCompletionOptions(): GArray
        
        /** Gets the completion option at [param index]. The return [Dictionary] has the following key-values:  
         *  `kind`: [enum CodeCompletionKind]  
         *  `display_text`: Text that is shown on the autocomplete menu.  
         *  `insert_text`: Text that is to be inserted when this item is selected.  
         *  `font_color`: Color of the text on the autocomplete menu.  
         *  `icon`: Icon to draw on the autocomplete menu.  
         *  `default_value`: Value of the symbol.  
         */
        getCodeCompletionOption(index: int64): GDictionary
        
        /** Gets the index of the current selected completion option. */
        getCodeCompletionSelectedIndex(): int64
        
        /** Sets the current selected completion option. */
        setCodeCompletionSelectedIndex(index: int64): void
        
        /** Inserts the selected entry into the text. If [param replace] is `true`, any existing text is replaced rather than merged. */
        confirmCodeCompletion(replace?: boolean /* = false */): void
        
        /** Cancels the autocomplete menu. */
        cancelCodeCompletion(): void
        
        /** Returns the full text with char `0xFFFF` at the cursor location. */
        getTextForSymbolLookup(): string
        
        /** Returns the full text with char `0xFFFF` at the specified location. */
        getTextWithCursorChar(line: int64, column: int64): string
        
        /** Sets the symbol emitted by [signal symbol_validate] as a valid lookup. */
        setSymbolLookupWordAsValid(valid: boolean): void
        
        /** Moves all lines up that are selected or have a caret on them. */
        moveLinesUp(): void
        
        /** Moves all lines down that are selected or have a caret on them. */
        moveLinesDown(): void
        
        /** Deletes all lines that are selected or have a caret on them. */
        deleteLines(): void
        
        /** Duplicates all selected text and duplicates all lines with a caret on them. */
        duplicateSelection(): void
        
        /** Duplicates all lines currently selected with any caret. Duplicates the entire line beneath the current one no matter where the caret is within the line. */
        duplicateLines(): void
        
        /** Set when a validated word from [signal symbol_validate] is clicked, the [signal symbol_lookup] should be emitted. */
        get symbolLookupOnClick(): boolean
        set symbolLookupOnClick(value: boolean)
        
        /** If `true`, the [signal symbol_hovered] signal is emitted when hovering over a word. */
        get symbolTooltipOnHover(): boolean
        set symbolTooltipOnHover(value: boolean)
        
        /** If `true`, lines can be folded. Otherwise, line folding methods like [method fold_line] will not work and [method can_fold_line] will always return `false`. See [member gutters_draw_fold_gutter]. */
        get lineFolding(): boolean
        set lineFolding(value: boolean)
        
        /** Draws vertical lines at the provided columns. The first entry is considered a main hard guideline and is drawn more prominently. */
        get lineLengthGuidelines(): PackedInt32Array
        set lineLengthGuidelines(value: PackedInt32Array | int32[])
        
        /** If `true`, breakpoints are drawn in the gutter. This gutter is shared with bookmarks and executing lines. Clicking the gutter will toggle the breakpoint for the line, see [method set_line_as_breakpoint]. */
        get guttersDrawBreakpointsGutter(): boolean
        set guttersDrawBreakpointsGutter(value: boolean)
        
        /** If `true`, bookmarks are drawn in the gutter. This gutter is shared with breakpoints and executing lines. See [method set_line_as_bookmarked]. */
        get guttersDrawBookmarks(): boolean
        set guttersDrawBookmarks(value: boolean)
        
        /** If `true`, executing lines are marked in the gutter. This gutter is shared with breakpoints and bookmarks. See [method set_line_as_executing]. */
        get guttersDrawExecutingLines(): boolean
        set guttersDrawExecutingLines(value: boolean)
        
        /** If `true`, the line number gutter is drawn. Line numbers start at `1` and are incremented for each line of text. Clicking and dragging in the line number gutter will select entire lines of text. */
        get guttersDrawLineNumbers(): boolean
        set guttersDrawLineNumbers(value: boolean)
        
        /** If `true`, line numbers drawn in the gutter are zero padded based on the total line count. Requires [member gutters_draw_line_numbers] to be set to `true`. */
        get guttersZeroPadLineNumbers(): boolean
        set guttersZeroPadLineNumbers(value: boolean)
        
        /** If `true`, the fold gutter is drawn. In this gutter, the [theme_item can_fold_code_region] icon is drawn for each foldable line (see [method can_fold_line]) and the [theme_item folded_code_region] icon is drawn for each folded line (see [method is_line_folded]). These icons can be clicked to toggle the fold state, see [method toggle_foldable_line]. [member line_folding] must be `true` to show icons. */
        get guttersDrawFoldGutter(): boolean
        set guttersDrawFoldGutter(value: boolean)
        
        /** Sets the string delimiters. All existing string delimiters will be removed. */
        get delimiterStrings(): PackedStringArray
        set delimiterStrings(value: PackedStringArray | string[])
        
        /** Sets the comment delimiters. All existing comment delimiters will be removed. */
        get delimiterComments(): PackedStringArray
        set delimiterComments(value: PackedStringArray | string[])
        
        /** If `true`, the [member ProjectSettings.input/ui_text_completion_query] action requests code completion. To handle it, see [method _request_code_completion] or [signal code_completion_requested]. */
        get codeCompletionEnabled(): boolean
        set codeCompletionEnabled(value: boolean)
        
        /** Sets prefixes that will trigger code completion. */
        get codeCompletionPrefixes(): PackedStringArray
        set codeCompletionPrefixes(value: PackedStringArray | string[])
        
        /** Size of the tabulation indent (one [kbd]Tab[/kbd] press) in characters. If [member indent_use_spaces] is enabled the number of spaces to use. */
        get indentSize(): int64
        set indentSize(value: int64)
        
        /** Use spaces instead of tabs for indentation. */
        get indentUseSpaces(): boolean
        set indentUseSpaces(value: boolean)
        
        /** If `true`, an extra indent is automatically inserted when a new line is added and a prefix in [member indent_automatic_prefixes] is found. If a brace pair opening key is found, the matching closing brace will be moved to another new line (see [member auto_brace_completion_pairs]). */
        get indentAutomatic(): boolean
        set indentAutomatic(value: boolean)
        
        /** Prefixes to trigger an automatic indent. Used when [member indent_automatic] is set to `true`. */
        get indentAutomaticPrefixes(): PackedStringArray
        set indentAutomaticPrefixes(value: PackedStringArray | string[])
        
        /** If `true`, uses [member auto_brace_completion_pairs] to automatically insert the closing brace when the opening brace is inserted by typing or autocompletion. Also automatically removes the closing brace when using backspace on the opening brace. */
        get autoBraceCompletionEnabled(): boolean
        set autoBraceCompletionEnabled(value: boolean)
        
        /** If `true`, highlights brace pairs when the caret is on either one, using [member auto_brace_completion_pairs]. If matching, the pairs will be underlined. If a brace is unmatched, it is colored with [theme_item brace_mismatch_color]. */
        get autoBraceCompletionHighlightMatching(): boolean
        set autoBraceCompletionHighlightMatching(value: boolean)
        
        /** Sets the brace pairs to be autocompleted. For each entry in the dictionary, the key is the opening brace and the value is the closing brace that matches it. A brace is a [String] made of symbols. See [member auto_brace_completion_enabled] and [member auto_brace_completion_highlight_matching]. */
        get autoBraceCompletionPairs(): GDictionary
        set autoBraceCompletionPairs(value: GDictionary)
        
        /** Emitted when a breakpoint is added or removed from a line. If the line is removed via backspace, a signal is emitted at the old line. */
        readonly breakpointToggled: Signal<(line: int64) => void>
        
        /** Emitted when the user requests code completion. This signal will not be sent if [method _request_code_completion] is overridden or [member code_completion_enabled] is `false`. */
        readonly codeCompletionRequested: Signal<() => void>
        
        /** Emitted when the user has clicked on a valid symbol. */
        readonly symbolLookup: Signal<(symbol: string, line: int64, column: int64) => void>
        
        /** Emitted when the user hovers over a symbol. The symbol should be validated and responded to, by calling [method set_symbol_lookup_word_as_valid].  
         *      
         *  **Note:** [member symbol_lookup_on_click] must be `true` for this signal to be emitted.  
         */
        readonly symbolValidate: Signal<(symbol: string) => void>
        
        /** Emitted when the user hovers over a symbol. Unlike [signal Control.mouse_entered], this signal is not emitted immediately, but when the cursor is over the symbol for [member ProjectSettings.gui/timers/tooltip_delay_sec] seconds.  
         *      
         *  **Note:** [member symbol_tooltip_on_hover] must be `true` for this signal to be emitted.  
         */
        readonly symbolHovered: Signal<(symbol: string, line: int64, column: int64) => void>
    }
    /** A syntax highlighter intended for code.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_codehighlighter.html  
     */
    class CodeHighlighter extends SyntaxHighlighter {
        constructor(identifier?: any)
        /** Sets the color for a keyword.  
         *  The keyword cannot contain any symbols except '_'.  
         */
        addKeywordColor(keyword: string, color: Color): void
        
        /** Removes the keyword. */
        removeKeywordColor(keyword: string): void
        
        /** Returns `true` if the keyword exists, else `false`. */
        hasKeywordColor(keyword: string): boolean
        
        /** Returns the color for a keyword. */
        getKeywordColor(keyword: string): Color
        
        /** Removes all keywords. */
        clearKeywordColors(): void
        
        /** Sets the color for a member keyword.  
         *  The member keyword cannot contain any symbols except '_'.  
         *  It will not be highlighted if preceded by a '.'.  
         */
        addMemberKeywordColor(memberKeyword: string, color: Color): void
        
        /** Removes the member keyword. */
        removeMemberKeywordColor(memberKeyword: string): void
        
        /** Returns `true` if the member keyword exists, else `false`. */
        hasMemberKeywordColor(memberKeyword: string): boolean
        
        /** Returns the color for a member keyword. */
        getMemberKeywordColor(memberKeyword: string): Color
        
        /** Removes all member keywords. */
        clearMemberKeywordColors(): void
        
        /** Adds a color region (such as for comments or strings) from [param start_key] to [param end_key]. Both keys should be symbols, and [param start_key] must not be shared with other delimiters.  
         *  If [param line_only] is `true` or [param end_key] is an empty [String], the region does not carry over to the next line.  
         */
        addColorRegion(startKey: string, endKey: string, color: Color, lineOnly?: boolean /* = false */): void
        
        /** Removes the color region that uses that start key. */
        removeColorRegion(startKey: string): void
        
        /** Returns `true` if the start key exists, else `false`. */
        hasColorRegion(startKey: string): boolean
        
        /** Removes all color regions. */
        clearColorRegions(): void
        
        /** Sets the color for numbers. */
        get numberColor(): Color
        set numberColor(value: Color)
        
        /** Sets the color for symbols. */
        get symbolColor(): Color
        set symbolColor(value: Color)
        
        /** Sets color for functions. A function is a non-keyword string followed by a '('. */
        get functionColor(): Color
        set functionColor(value: Color)
        
        /** Sets color for member variables. A member variable is non-keyword, non-function string proceeded with a '.'. */
        get memberVariableColor(): Color
        set memberVariableColor(value: Color)
        
        /** Sets the keyword colors. All existing keywords will be removed. The [Dictionary] key is the keyword. The value is the keyword color. */
        get keywordColors(): GDictionary
        set keywordColors(value: GDictionary)
        
        /** Sets the member keyword colors. All existing member keyword will be removed. The [Dictionary] key is the member keyword. The value is the member keyword color. */
        get memberKeywordColors(): GDictionary
        set memberKeywordColors(value: GDictionary)
        
        /** Sets the color regions. All existing regions will be removed. The [Dictionary] key is the region start and end key, separated by a space. The value is the region color. */
        get colorRegions(): GDictionary
        set colorRegions(value: GDictionary)
    }
    namespace CollisionObject2D {
        enum DisableMode {
            DisableModeRemove = 0,
            DisableModeMakeStatic = 1,
            DisableModeKeepActive = 2,
        }
    }
    /** Abstract base class for 2D physics objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionobject2d.html  
     */
    class CollisionObject2D<Map extends NodePathMap = any> extends Node2D<Map> {
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], remove from the physics simulation to stop all physics interactions with this [CollisionObject2D].  
         *  Automatically re-added to the physics simulation when the [Node] is processed again.  
         */
        static readonly DISABLE_MODE_REMOVE = 0
        
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], make the body static. Doesn't affect [Area2D]. [PhysicsBody2D] can't be affected by forces or other bodies while static.  
         *  Automatically set [PhysicsBody2D] back to its original mode when the [Node] is processed again.  
         */
        static readonly DISABLE_MODE_MAKE_STATIC = 1
        
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], do not affect the physics simulation. */
        static readonly DISABLE_MODE_KEEP_ACTIVE = 2
        constructor(identifier?: any)
        
        /** Accepts unhandled [InputEvent]s. [param shape_idx] is the child index of the clicked [Shape2D]. Connect to [signal input_event] to easily pick up these events.  
         *      
         *  **Note:** [method _input_event] requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set.  
         */
        /* gdvirtual */ _inputEvent(viewport: Viewport, event: InputEvent, shapeIdx: int64): void
        
        /** Called when the mouse pointer enters any of this object's shapes. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject2D] won't cause this function to be called. */
        /* gdvirtual */ _mouseEnter(): void
        
        /** Called when the mouse pointer exits all this object's shapes. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject2D] won't cause this function to be called. */
        /* gdvirtual */ _mouseExit(): void
        
        /** Called when the mouse pointer enters any of this object's shapes or moves from one shape to another. [param shape_idx] is the child index of the newly entered [Shape2D]. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be called. */
        /* gdvirtual */ _mouseShapeEnter(shapeIdx: int64): void
        
        /** Called when the mouse pointer exits any of this object's shapes. [param shape_idx] is the child index of the exited [Shape2D]. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be called. */
        /* gdvirtual */ _mouseShapeExit(shapeIdx: int64): void
        
        /** Returns the object's [RID]. */
        getRid(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionLayerValue(layerNumber: int64): boolean
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** Creates a new shape owner for the given object. Returns `owner_id` of the new owner for future reference. */
        createShapeOwner(owner: GObject): int64
        
        /** Removes the given shape owner. */
        removeShapeOwner(ownerId: int64): void
        
        /** Returns an [Array] of `owner_id` identifiers. You can use these ids in other methods that take `owner_id` as an argument. */
        getShapeOwners(): PackedInt32Array
        
        /** Sets the [Transform2D] of the given shape owner. */
        shapeOwnerSetTransform(ownerId: int64, transform: Transform2D): void
        
        /** Returns the shape owner's [Transform2D]. */
        shapeOwnerGetTransform(ownerId: int64): Transform2D
        
        /** Returns the parent object of the given shape owner. */
        shapeOwnerGetOwner(ownerId: int64): null | GObject
        
        /** If `true`, disables the given shape owner. */
        shapeOwnerSetDisabled(ownerId: int64, disabled: boolean): void
        
        /** If `true`, the shape owner and its shapes are disabled. */
        isShapeOwnerDisabled(ownerId: int64): boolean
        
        /** If [param enable] is `true`, collisions for the shape owner originating from this [CollisionObject2D] will not be reported to collided with [CollisionObject2D]s. */
        shapeOwnerSetOneWayCollision(ownerId: int64, enable: boolean): void
        
        /** Returns `true` if collisions for the shape owner originating from this [CollisionObject2D] will not be reported to collided with [CollisionObject2D]s. */
        isShapeOwnerOneWayCollisionEnabled(ownerId: int64): boolean
        
        /** Sets the `one_way_collision_margin` of the shape owner identified by given [param owner_id] to [param margin] pixels. */
        shapeOwnerSetOneWayCollisionMargin(ownerId: int64, margin: float64): void
        
        /** Returns the `one_way_collision_margin` of the shape owner identified by given [param owner_id]. */
        getShapeOwnerOneWayCollisionMargin(ownerId: int64): float64
        
        /** Adds a [Shape2D] to the shape owner. */
        shapeOwnerAddShape(ownerId: int64, shape: Shape2D): void
        
        /** Returns the number of shapes the given shape owner contains. */
        shapeOwnerGetShapeCount(ownerId: int64): int64
        
        /** Returns the [Shape2D] with the given ID from the given shape owner. */
        shapeOwnerGetShape(ownerId: int64, shapeId: int64): null | Shape2D
        
        /** Returns the child index of the [Shape2D] with the given ID from the given shape owner. */
        shapeOwnerGetShapeIndex(ownerId: int64, shapeId: int64): int64
        
        /** Removes a shape from the given shape owner. */
        shapeOwnerRemoveShape(ownerId: int64, shapeId: int64): void
        
        /** Removes all shapes from the shape owner. */
        shapeOwnerClearShapes(ownerId: int64): void
        
        /** Returns the `owner_id` of the given shape. */
        shapeFindOwner(shapeIndex: int64): int64
        
        /** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. See [enum DisableMode] for more details about the different modes. */
        get disableMode(): int64
        set disableMode(value: int64)
        
        /** The physics layers this CollisionObject2D is in. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].  
         *      
         *  **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        
        /** The physics layers this CollisionObject2D scans. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].  
         *      
         *  **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
        get collisionPriority(): float64
        set collisionPriority(value: float64)
        
        /** If `true`, this object is pickable. A pickable object can detect the mouse pointer entering/leaving, and if the mouse is inside it, report input events. Requires at least one [member collision_layer] bit to be set. */
        get inputPickable(): boolean
        set inputPickable(value: boolean)
        
        /** Emitted when an input event occurs. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set. See [method _input_event] for details. */
        readonly inputEvent: Signal<(viewport: Node, event: InputEvent, shapeIdx: int64) => void>
        
        /** Emitted when the mouse pointer enters any of this object's shapes. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject2D] won't cause this signal to be emitted.  
         *      
         *  **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the [CollisionObject2D]'s area is small. This signal may also not be emitted if another [CollisionObject2D] is overlapping the [CollisionObject2D] in question.  
         */
        readonly mouseEntered: Signal<() => void>
        
        /** Emitted when the mouse pointer exits all this object's shapes. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject2D] won't cause this signal to be emitted.  
         *      
         *  **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the [CollisionObject2D]'s area is small. This signal may also not be emitted if another [CollisionObject2D] is overlapping the [CollisionObject2D] in question.  
         */
        readonly mouseExited: Signal<() => void>
        
        /** Emitted when the mouse pointer enters any of this object's shapes or moves from one shape to another. [param shape_idx] is the child index of the newly entered [Shape2D]. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set. */
        readonly mouseShapeEntered: Signal<(shapeIdx: int64) => void>
        
        /** Emitted when the mouse pointer exits any of this object's shapes. [param shape_idx] is the child index of the exited [Shape2D]. Requires [member input_pickable] to be `true` and at least one [member collision_layer] bit to be set. */
        readonly mouseShapeExited: Signal<(shapeIdx: int64) => void>
    }
    namespace CollisionObject3D {
        enum DisableMode {
            DisableModeRemove = 0,
            DisableModeMakeStatic = 1,
            DisableModeKeepActive = 2,
        }
    }
    /** Abstract base class for 3D physics objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionobject3d.html  
     */
    class CollisionObject3D<Map extends NodePathMap = any> extends Node3D<Map> {
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], remove from the physics simulation to stop all physics interactions with this [CollisionObject3D].  
         *  Automatically re-added to the physics simulation when the [Node] is processed again.  
         */
        static readonly DISABLE_MODE_REMOVE = 0
        
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], make the body static. Doesn't affect [Area3D]. [PhysicsBody3D] can't be affected by forces or other bodies while static.  
         *  Automatically set [PhysicsBody3D] back to its original mode when the [Node] is processed again.  
         */
        static readonly DISABLE_MODE_MAKE_STATIC = 1
        
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], do not affect the physics simulation. */
        static readonly DISABLE_MODE_KEEP_ACTIVE = 2
        constructor(identifier?: any)
        
        /** Receives unhandled [InputEvent]s. [param event_position] is the location in world space of the mouse pointer on the surface of the shape with index [param shape_idx] and [param normal] is the normal vector of the surface at that point. Connect to the [signal input_event] signal to easily pick up these events.  
         *      
         *  **Note:** [method _input_event] requires [member input_ray_pickable] to be `true` and at least one [member collision_layer] bit to be set.  
         */
        /* gdvirtual */ _inputEvent(camera: Camera3D, event: InputEvent, eventPosition: Vector3, normal: Vector3, shapeIdx: int64): void
        
        /** Called when the mouse pointer enters any of this object's shapes. Requires [member input_ray_pickable] to be `true` and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject3D] won't cause this function to be called. */
        /* gdvirtual */ _mouseEnter(): void
        
        /** Called when the mouse pointer exits all this object's shapes. Requires [member input_ray_pickable] to be `true` and at least one [member collision_layer] bit to be set. Note that moving between different shapes within a single [CollisionObject3D] won't cause this function to be called. */
        /* gdvirtual */ _mouseExit(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionLayerValue(layerNumber: int64): boolean
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** Returns the object's [RID]. */
        getRid(): Rid
        
        /** Creates a new shape owner for the given object. Returns `owner_id` of the new owner for future reference. */
        createShapeOwner(owner: GObject): int64
        
        /** Removes the given shape owner. */
        removeShapeOwner(ownerId: int64): void
        
        /** Returns an [Array] of `owner_id` identifiers. You can use these ids in other methods that take `owner_id` as an argument. */
        getShapeOwners(): PackedInt32Array
        
        /** Sets the [Transform3D] of the given shape owner. */
        shapeOwnerSetTransform(ownerId: int64, transform: Transform3D): void
        
        /** Returns the shape owner's [Transform3D]. */
        shapeOwnerGetTransform(ownerId: int64): Transform3D
        
        /** Returns the parent object of the given shape owner. */
        shapeOwnerGetOwner(ownerId: int64): null | GObject
        
        /** If `true`, disables the given shape owner. */
        shapeOwnerSetDisabled(ownerId: int64, disabled: boolean): void
        
        /** If `true`, the shape owner and its shapes are disabled. */
        isShapeOwnerDisabled(ownerId: int64): boolean
        
        /** Adds a [Shape3D] to the shape owner. */
        shapeOwnerAddShape(ownerId: int64, shape: Shape3D): void
        
        /** Returns the number of shapes the given shape owner contains. */
        shapeOwnerGetShapeCount(ownerId: int64): int64
        
        /** Returns the [Shape3D] with the given ID from the given shape owner. */
        shapeOwnerGetShape(ownerId: int64, shapeId: int64): null | Shape3D
        
        /** Returns the child index of the [Shape3D] with the given ID from the given shape owner. */
        shapeOwnerGetShapeIndex(ownerId: int64, shapeId: int64): int64
        
        /** Removes a shape from the given shape owner. */
        shapeOwnerRemoveShape(ownerId: int64, shapeId: int64): void
        
        /** Removes all shapes from the shape owner. */
        shapeOwnerClearShapes(ownerId: int64): void
        
        /** Returns the `owner_id` of the given shape. */
        shapeFindOwner(shapeIndex: int64): int64
        
        /** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. See [enum DisableMode] for more details about the different modes. */
        get disableMode(): int64
        set disableMode(value: int64)
        
        /** The physics layers this CollisionObject3D **is in**. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].  
         *      
         *  **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        
        /** The physics layers this CollisionObject3D **scans**. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].  
         *      
         *  **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
        get collisionPriority(): float64
        set collisionPriority(value: float64)
        
        /** If `true`, this object is pickable. A pickable object can detect the mouse pointer entering/leaving, and if the mouse is inside it, report input events. Requires at least one [member collision_layer] bit to be set. */
        get inputRayPickable(): boolean
        set inputRayPickable(value: boolean)
        
        /** If `true`, the [CollisionObject3D] will continue to receive input events as the mouse is dragged across its shapes. */
        get inputCaptureOnDrag(): boolean
        set inputCaptureOnDrag(value: boolean)
        
        /** Emitted when the object receives an unhandled [InputEvent]. [param event_position] is the location in world space of the mouse pointer on the surface of the shape with index [param shape_idx] and [param normal] is the normal vector of the surface at that point. */
        readonly inputEvent: Signal<(camera: Node, event: InputEvent, eventPosition: Vector3, normal: Vector3, shapeIdx: int64) => void>
        
        /** Emitted when the mouse pointer enters any of this object's shapes. Requires [member input_ray_pickable] to be `true` and at least one [member collision_layer] bit to be set.  
         *      
         *  **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the [CollisionObject3D]'s area is small. This signal may also not be emitted if another [CollisionObject3D] is overlapping the [CollisionObject3D] in question.  
         */
        readonly mouseEntered: Signal<() => void>
        
        /** Emitted when the mouse pointer exits all this object's shapes. Requires [member input_ray_pickable] to be `true` and at least one [member collision_layer] bit to be set.  
         *      
         *  **Note:** Due to the lack of continuous collision detection, this signal may not be emitted in the expected order if the mouse moves fast enough and the [CollisionObject3D]'s area is small. This signal may also not be emitted if another [CollisionObject3D] is overlapping the [CollisionObject3D] in question.  
         */
        readonly mouseExited: Signal<() => void>
    }
    namespace CollisionPolygon2D {
        enum BuildMode {
            BuildSolids = 0,
            BuildSegments = 1,
        }
    }
    /** A node that provides a polygon shape to a [CollisionObject2D] parent.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionpolygon2d.html  
     */
    class CollisionPolygon2D<Map extends NodePathMap = any> extends Node2D<Map> {
        /** Collisions will include the polygon and its contained area. In this mode the node has the same effect as several [ConvexPolygonShape2D] nodes, one for each convex shape in the convex decomposition of the polygon (but without the overhead of multiple nodes). */
        static readonly BUILD_SOLIDS = 0
        
        /** Collisions will only include the polygon edges. In this mode the node has the same effect as a single [ConcavePolygonShape2D] made of segments, with the restriction that each segment (after the first one) starts where the previous one ends, and the last one ends where the first one starts (forming a closed but hollow polygon). */
        static readonly BUILD_SEGMENTS = 1
        constructor(identifier?: any)
        
        /** Collision build mode. Use one of the [enum BuildMode] constants. */
        get buildMode(): int64
        set buildMode(value: int64)
        
        /** The polygon's list of vertices. Each point will be connected to the next, and the final point will be connected to the first.  
         *      
         *  **Note:** The returned vertices are in the local coordinate space of the given [CollisionPolygon2D].  
         */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        
        /** If `true`, no collisions will be detected. */
        get disabled(): boolean
        set disabled(value: boolean)
        
        /** If `true`, only edges that face up, relative to [CollisionPolygon2D]'s rotation, will collide with other objects.  
         *      
         *  **Note:** This property has no effect if this [CollisionPolygon2D] is a child of an [Area2D] node.  
         */
        get oneWayCollision(): boolean
        set oneWayCollision(value: boolean)
        
        /** The margin used for one-way collision (in pixels). Higher values will make the shape thicker, and work better for colliders that enter the polygon at a high velocity. */
        get oneWayCollisionMargin(): float64
        set oneWayCollisionMargin(value: float64)
    }
    /** A node that provides a thickened polygon shape (a prism) to a [CollisionObject3D] parent.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionpolygon3d.html  
     */
    class CollisionPolygon3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        _isEditable3DPolygon(): boolean
        
        /** Length that the resulting collision extends in either direction perpendicular to its 2D polygon. */
        get depth(): float64
        set depth(value: float64)
        
        /** If `true`, no collision will be produced. */
        get disabled(): boolean
        set disabled(value: boolean)
        
        /** Array of vertices which define the 2D polygon in the local XY plane. */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        
        /** The collision margin for the generated [Shape3D]. See [member Shape3D.margin] for more details. */
        get margin(): float64
        set margin(value: float64)
        
        /** The collision shape color that is displayed in the editor, or in the running project if **Debug > Visible Collision Shapes** is checked at the top of the editor.  
         *      
         *  **Note:** The default value is [member ProjectSettings.debug/shapes/collision/shape_color]. The `Color(0, 0, 0, 0)` value documented here is a placeholder, and not the actual default debug color.  
         */
        get debugColor(): Color
        set debugColor(value: Color)
        
        /** If `true`, when the shape is displayed, it will show a solid fill color in addition to its wireframe. */
        get debugFill(): boolean
        set debugFill(value: boolean)
    }
    /** A node that provides a [Shape2D] to a [CollisionObject2D] parent.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionshape2d.html  
     */
    class CollisionShape2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The actual shape owned by this collision shape. */
        get shape(): null | Shape2D
        set shape(value: null | Shape2D)
        
        /** A disabled collision shape has no effect in the world. This property should be changed with [method Object.set_deferred]. */
        get disabled(): boolean
        set disabled(value: boolean)
        
        /** Sets whether this collision shape should only detect collision on one side (top or bottom).  
         *      
         *  **Note:** This property has no effect if this [CollisionShape2D] is a child of an [Area2D] node.  
         */
        get oneWayCollision(): boolean
        set oneWayCollision(value: boolean)
        
        /** The margin used for one-way collision (in pixels). Higher values will make the shape thicker, and work better for colliders that enter the shape at a high velocity. */
        get oneWayCollisionMargin(): float64
        set oneWayCollisionMargin(value: float64)
        
        /** The collision shape color that is displayed in the editor, or in the running project if **Debug > Visible Collision Shapes** is checked at the top of the editor.  
         *      
         *  **Note:** The default value is [member ProjectSettings.debug/shapes/collision/shape_color]. The `Color(0, 0, 0, 0)` value documented here is a placeholder, and not the actual default debug color.  
         */
        get debugColor(): Color
        set debugColor(value: Color)
    }
    /** A node that provides a [Shape3D] to a [CollisionObject3D] parent.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionshape3d.html  
     */
    class CollisionShape3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** This method does nothing. */
        resourceChanged(resource: Resource): void
        
        /** Sets the collision shape's shape to the addition of all its convexed [MeshInstance3D] siblings geometry. */
        makeConvexFromSiblings(): void
        
        /** The actual shape owned by this collision shape. */
        get shape(): null | Shape3D
        set shape(value: null | Shape3D)
        
        /** A disabled collision shape has no effect in the world. */
        get disabled(): boolean
        set disabled(value: boolean)
        
        /** The collision shape color that is displayed in the editor, or in the running project if **Debug > Visible Collision Shapes** is checked at the top of the editor.  
         *      
         *  **Note:** The default value is [member ProjectSettings.debug/shapes/collision/shape_color]. The `Color(0, 0, 0, 0)` value documented here is a placeholder, and not the actual default debug color.  
         */
        get debugColor(): Color
        set debugColor(value: Color)
        
        /** If `true`, when the shape is displayed, it will show a solid fill color in addition to its wireframe. */
        get debugFill(): boolean
        set debugFill(value: boolean)
    }
    /** A resource class for managing a palette of colors, which can be loaded and saved using [ColorPicker].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_colorpalette.html  
     */
    class ColorPalette extends Resource {
        constructor(identifier?: any)
        /** A [PackedColorArray] containing the colors in the palette. */
        get colors(): PackedColorArray
        set colors(value: PackedColorArray | Color[])
    }
    namespace ColorPicker {
        enum ColorModeType {
            ModeRgb = 0,
            ModeHsv = 1,
            ModeRaw = 2,
            ModeOkhsl = 3,
        }
        enum PickerShapeType {
            ShapeHsvRectangle = 0,
            ShapeHsvWheel = 1,
            ShapeVhsCircle = 2,
            ShapeOkhslCircle = 3,
            ShapeNone = 4,
        }
    }
    /** A widget that provides an interface for selecting or modifying a color.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_colorpicker.html  
     */
    class ColorPicker<Map extends NodePathMap = any> extends VBoxContainer<Map> {
        /** Allows editing the color with Red/Green/Blue sliders. */
        static readonly MODE_RGB = 0
        
        /** Allows editing the color with Hue/Saturation/Value sliders. */
        static readonly MODE_HSV = 1
        
        /** Allows the color R, G, B component values to go beyond 1.0, which can be used for certain special operations that require it (like tinting without darkening or rendering sprites in HDR). */
        static readonly MODE_RAW = 2
        
        /** Allows editing the color with Hue/Saturation/Lightness sliders.  
         *  OKHSL is a new color space similar to HSL but that better match perception by leveraging the Oklab color space which is designed to be simple to use, while doing a good job at predicting perceived lightness, chroma and hue.  
         *  [url=https://bottosson.github.io/posts/colorpicker/]Okhsv and Okhsl color spaces[/url]  
         */
        static readonly MODE_OKHSL = 3
        
        /** HSV Color Model rectangle color space. */
        static readonly SHAPE_HSV_RECTANGLE = 0
        
        /** HSV Color Model rectangle color space with a wheel. */
        static readonly SHAPE_HSV_WHEEL = 1
        
        /** HSV Color Model circle color space. Use Saturation as a radius. */
        static readonly SHAPE_VHS_CIRCLE = 2
        
        /** HSL OK Color Model circle color space. */
        static readonly SHAPE_OKHSL_CIRCLE = 3
        
        /** The color space shape and the shape select button are hidden. Can't be selected from the shapes popup. */
        static readonly SHAPE_NONE = 4
        constructor(identifier?: any)
        
        /** Adds the given color to a list of color presets. The presets are displayed in the color picker and the user will be able to select them.  
         *      
         *  **Note:** The presets list is only for  *this*  color picker.  
         */
        addPreset(color: Color): void
        
        /** Removes the given color from the list of color presets of this color picker. */
        erasePreset(color: Color): void
        
        /** Returns the list of colors in the presets of the color picker. */
        getPresets(): PackedColorArray
        
        /** Adds the given color to a list of color recent presets so that it can be picked later. Recent presets are the colors that were picked recently, a new preset is automatically created and added to recent presets when you pick a new color.  
         *      
         *  **Note:** The recent presets list is only for  *this*  color picker.  
         */
        addRecentPreset(color: Color): void
        
        /** Removes the given color from the list of color recent presets of this color picker. */
        eraseRecentPreset(color: Color): void
        
        /** Returns the list of colors in the recent presets of the color picker. */
        getRecentPresets(): PackedColorArray
        
        /** The currently selected color. */
        get color(): Color
        set color(value: Color)
        
        /** If `true`, shows an alpha channel slider (opacity). */
        get editAlpha(): boolean
        set editAlpha(value: boolean)
        
        /** The currently selected color mode. See [enum ColorModeType]. */
        get colorMode(): int64
        set colorMode(value: int64)
        
        /** If `true`, the color will apply only after the user releases the mouse button, otherwise it will apply immediately even in mouse motion event (which can cause performance issues). */
        get deferredMode(): boolean
        set deferredMode(value: boolean)
        
        /** The shape of the color space view. See [enum PickerShapeType]. */
        get pickerShape(): int64
        set pickerShape(value: int64)
        
        /** If `true`, it's possible to add presets under Swatches. If `false`, the button to add presets is disabled. */
        get canAddSwatches(): boolean
        set canAddSwatches(value: boolean)
        
        /** If `true`, the color sampler and color preview are visible. */
        get samplerVisible(): boolean
        set samplerVisible(value: boolean)
        
        /** If `true`, the color mode buttons are visible. */
        get colorModesVisible(): boolean
        set colorModesVisible(value: boolean)
        
        /** If `true`, the color sliders are visible. */
        get slidersVisible(): boolean
        set slidersVisible(value: boolean)
        
        /** If `true`, the hex color code input field is visible. */
        get hexVisible(): boolean
        set hexVisible(value: boolean)
        
        /** If `true`, the Swatches and Recent Colors presets are visible. */
        get presetsVisible(): boolean
        set presetsVisible(value: boolean)
        
        /** Emitted when the color is changed. */
        readonly colorChanged: Signal<(color: Color) => void>
        
        /** Emitted when a preset is added. */
        readonly presetAdded: Signal<(color: Color) => void>
        
        /** Emitted when a preset is removed. */
        readonly presetRemoved: Signal<(color: Color) => void>
    }
    /** A button that brings up a [ColorPicker] when pressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_colorpickerbutton.html  
     */
    class ColorPickerButton<Map extends NodePathMap = any> extends Button<Map> {
        constructor(identifier?: any)
        /** Returns the [ColorPicker] that this node toggles.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getPicker(): null | ColorPicker
        
        /** Returns the control's [PopupPanel] which allows you to connect to popup signals. This allows you to handle events when the ColorPicker is shown or hidden.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getPopup(): null | PopupPanel
        _aboutToPopup(): void
        
        /** The currently selected color. */
        get color(): Color
        set color(value: Color)
        
        /** If `true`, the alpha channel in the displayed [ColorPicker] will be visible. */
        get editAlpha(): boolean
        set editAlpha(value: boolean)
        
        /** Emitted when the color changes. */
        readonly colorChanged: Signal<(color: Color) => void>
        
        /** Emitted when the [ColorPicker] is closed. */
        readonly popupClosed: Signal<() => void>
        
        /** Emitted when the [ColorPicker] is created (the button is pressed for the first time). */
        readonly pickerCreated: Signal<() => void>
    }
    /** A control that displays a solid color rectangle.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_colorrect.html  
     */
    class ColorRect<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** The fill color of the rectangle. */
        get color(): Color
        set color(value: Color)
    }
    /** Stores attributes used to customize how a Viewport is rendered.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compositor.html  
     */
    class Compositor extends Resource {
        constructor(identifier?: any)
        /** The custom [CompositorEffect]s that are applied during rendering of viewports using this compositor. */
        get compositorEffects(): GArray
        set compositorEffects(value: GArray)
    }
    namespace CompositorEffect {
        enum EffectCallbackType {
            EffectCallbackTypePreOpaque = 0,
            EffectCallbackTypePostOpaque = 1,
            EffectCallbackTypePostSky = 2,
            EffectCallbackTypePreTransparent = 3,
            EffectCallbackTypePostTransparent = 4,
            EffectCallbackTypeMax = 5,
        }
    }
    /** This resource allows for creating a custom rendering effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compositoreffect.html  
     */
    class CompositorEffect extends Resource {
        /** The callback is called before our opaque rendering pass, but after depth prepass (if applicable). */
        static readonly EFFECT_CALLBACK_TYPE_PRE_OPAQUE = 0
        
        /** The callback is called after our opaque rendering pass, but before our sky is rendered. */
        static readonly EFFECT_CALLBACK_TYPE_POST_OPAQUE = 1
        
        /** The callback is called after our sky is rendered, but before our back buffers are created (and if enabled, before subsurface scattering and/or screen space reflections). */
        static readonly EFFECT_CALLBACK_TYPE_POST_SKY = 2
        
        /** The callback is called before our transparent rendering pass, but after our sky is rendered and we've created our back buffers. */
        static readonly EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT = 3
        
        /** The callback is called after our transparent rendering pass, but before any built-in post-processing effects and output to our render target. */
        static readonly EFFECT_CALLBACK_TYPE_POST_TRANSPARENT = 4
        
        /** Represents the size of the [enum EffectCallbackType] enum. */
        static readonly EFFECT_CALLBACK_TYPE_MAX = 5
        constructor(identifier?: any)
        
        /** Implement this function with your custom rendering code. [param effect_callback_type] should always match the effect callback type you've specified in [member effect_callback_type]. [param render_data] provides access to the rendering state, it is only valid during rendering and should not be stored. */
        /* gdvirtual */ _renderCallback(effectCallbackType: int64, renderData: RenderData): void
        
        /** If `true` this rendering effect is applied to any viewport it is added to. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The type of effect that is implemented, determines at what stage of rendering the callback is called. */
        get effectCallbackType(): int64
        set effectCallbackType(value: int64)
        
        /** If `true` and MSAA is enabled, this will trigger a color buffer resolve before the effect is run.  
         *      
         *  **Note:** In [method _render_callback], to access the resolved buffer use:  
         *    
         */
        get accessResolvedColor(): boolean
        set accessResolvedColor(value: boolean)
        
        /** If `true` and MSAA is enabled, this will trigger a depth buffer resolve before the effect is run.  
         *      
         *  **Note:** In [method _render_callback], to access the resolved buffer use:  
         *    
         */
        get accessResolvedDepth(): boolean
        set accessResolvedDepth(value: boolean)
        
        /** If `true` this triggers motion vectors being calculated during the opaque render state.  
         *      
         *  **Note:** In [method _render_callback], to access the motion vector buffer use:  
         *    
         */
        get needsMotionVectors(): boolean
        set needsMotionVectors(value: boolean)
        
        /** If `true` this triggers normal and roughness data to be output during our depth pre-pass, only applicable for the Forward+ renderer.  
         *      
         *  **Note:** In [method _render_callback], to access the roughness buffer use:  
         *    
         *  The raw normal and roughness buffer is stored in an optimized format, different than the one available in Spatial shaders. When sampling the buffer, a conversion function must be applied. Use this function, copied from [url=https://github.com/godotengine/godot/blob/da5f39889f155658cef7f7ec3cc1abb94e17d815/servers/rendering/renderer_rd/shaders/forward_clustered/scene_forward_clustered_inc.glsl#L334-L341]here[/url]:  
         *    
         */
        get needsNormalRoughness(): boolean
        set needsNormalRoughness(value: boolean)
        
        /** If `true` this triggers specular data being rendered to a separate buffer and combined after effects have been applied, only applicable for the Forward+ renderer. */
        get needsSeparateSpecular(): boolean
        set needsSeparateSpecular(value: boolean)
    }
    /** An optionally compressed [Cubemap].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedcubemap.html  
     */
    class CompressedCubemap extends CompressedTextureLayered {
        constructor(identifier?: any)
    }
    /** An optionally compressed [CubemapArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedcubemaparray.html  
     */
    class CompressedCubemapArray extends CompressedTextureLayered {
        constructor(identifier?: any)
    }
    /** Texture with 2 dimensions, optionally compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedtexture2d.html  
     */
    class CompressedTexture2D extends Texture2D {
        constructor(identifier?: any)
        /** The [CompressedTexture2D]'s file path to a `.ctex` file. */
        get loadPath(): string
        set loadPath(value: string)
    }
    /** Array of 2-dimensional textures, optionally compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedtexture2darray.html  
     */
    class CompressedTexture2DArray extends CompressedTextureLayered {
        constructor(identifier?: any)
    }
    /** Texture with 3 dimensions, optionally compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedtexture3d.html  
     */
    class CompressedTexture3D extends Texture3D {
        constructor(identifier?: any)
        /** The [CompressedTexture3D]'s file path to a `.ctex3d` file. */
        get loadPath(): string
        set loadPath(value: string)
    }
    /** Base class for texture arrays that can optionally be compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedtexturelayered.html  
     */
    class CompressedTextureLayered extends TextureLayered {
        constructor(identifier?: any)
        /** The path the texture should be loaded from. */
        get loadPath(): string
        set loadPath(value: string)
    }
    /** A 2D polyline shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_concavepolygonshape2d.html  
     */
    class ConcavePolygonShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The array of points that make up the [ConcavePolygonShape2D]'s line segments. The array (of length divisible by two) is naturally divided into pairs (one pair for each segment); each pair consists of the starting point of a segment and the endpoint of a segment. */
        get segments(): PackedVector2Array
        set segments(value: PackedVector2Array | Vector2[])
    }
    /** A 3D trimesh shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_concavepolygonshape3d.html  
     */
    class ConcavePolygonShape3D extends Shape3D {
        constructor(identifier?: any)
        get data(): PackedVector3Array
        set data(value: PackedVector3Array | Vector3[])
        
        /** If set to `true`, collisions occur on both sides of the concave shape faces. Otherwise they occur only along the face normals. */
        get backfaceCollision(): boolean
        set backfaceCollision(value: boolean)
    }
    namespace ConeTwistJoint3D {
        enum Param {
            ParamSwingSpan = 0,
            ParamTwistSpan = 1,
            ParamBias = 2,
            ParamSoftness = 3,
            ParamRelaxation = 4,
            ParamMax = 5,
        }
    }
    /** A physics joint that connects two 3D physics bodies in a way that simulates a ball-and-socket joint.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_conetwistjoint3d.html  
     */
    class ConeTwistJoint3D<Map extends NodePathMap = any> extends Joint3D<Map> {
        /** Swing is rotation from side to side, around the axis perpendicular to the twist axis.  
         *  The swing span defines, how much rotation will not get corrected along the swing axis.  
         *  Could be defined as looseness in the [ConeTwistJoint3D].  
         *  If below 0.05, this behavior is locked.  
         */
        static readonly PARAM_SWING_SPAN = 0
        
        /** Twist is the rotation around the twist axis, this value defined how far the joint can twist.  
         *  Twist is locked if below 0.05.  
         */
        static readonly PARAM_TWIST_SPAN = 1
        
        /** The speed with which the swing or twist will take place.  
         *  The higher, the faster.  
         */
        static readonly PARAM_BIAS = 2
        
        /** The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint. */
        static readonly PARAM_SOFTNESS = 3
        
        /** Defines, how fast the swing- and twist-speed-difference on both sides gets synced. */
        static readonly PARAM_RELAXATION = 4
        
        /** Represents the size of the [enum Param] enum. */
        static readonly PARAM_MAX = 5
        constructor(identifier?: any)
        
        /** Sets the value of the specified parameter. */
        setParam(param: ConeTwistJoint3D.Param, value: float64): void
        
        /** Returns the value of the specified parameter. */
        getParam(param: ConeTwistJoint3D.Param): float64
        
        /** Swing is rotation from side to side, around the axis perpendicular to the twist axis.  
         *  The swing span defines, how much rotation will not get corrected along the swing axis.  
         *  Could be defined as looseness in the [ConeTwistJoint3D].  
         *  If below 0.05, this behavior is locked.  
         */
        get swingSpan(): float64
        set swingSpan(value: float64)
        
        /** Twist is the rotation around the twist axis, this value defined how far the joint can twist.  
         *  Twist is locked if below 0.05.  
         */
        get twistSpan(): float64
        set twistSpan(value: float64)
        
        /** The speed with which the swing or twist will take place.  
         *  The higher, the faster.  
         */
        get bias(): float64
        set bias(value: float64)
        
        /** The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint. */
        get softness(): float64
        set softness(value: float64)
        
        /** Defines, how fast the swing- and twist-speed-difference on both sides gets synced. */
        get relaxation(): float64
        set relaxation(value: float64)
    }
    /** Helper class to handle INI-style files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_configfile.html  
     */
    class ConfigFile extends RefCounted {
        constructor(identifier?: any)
        /** Assigns a value to the specified key of the specified section. If either the section or the key do not exist, they are created. Passing a `null` value deletes the specified key if it exists, and deletes the section if it ends up empty once the key has been removed. */
        setValue(section: string, key: string, value: any): void
        
        /** Returns the current value for the specified section and key. If either the section or the key do not exist, the method returns the fallback [param default] value. If [param default] is not specified or set to `null`, an error is also raised. */
        getValue(section: string, key: string, default_?: any /* = <any> {} */): any
        
        /** Returns `true` if the specified section exists. */
        hasSection(section: string): boolean
        
        /** Returns `true` if the specified section-key pair exists. */
        hasSectionKey(section: string, key: string): boolean
        
        /** Returns an array of all defined section identifiers. */
        getSections(): PackedStringArray
        
        /** Returns an array of all defined key identifiers in the specified section. Raises an error and returns an empty array if the section does not exist. */
        getSectionKeys(section: string): PackedStringArray
        
        /** Deletes the specified section along with all the key-value pairs inside. Raises an error if the section does not exist. */
        eraseSection(section: string): void
        
        /** Deletes the specified key in a section. Raises an error if either the section or the key do not exist. */
        eraseSectionKey(section: string, key: string): void
        
        /** Loads the config file specified as a parameter. The file's contents are parsed and loaded in the [ConfigFile] object which the method was called on.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        load(path: string): GError
        
        /** Parses the passed string as the contents of a config file. The string is parsed and loaded in the ConfigFile object which the method was called on.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        parse(data: string): GError
        
        /** Saves the contents of the [ConfigFile] object to the file specified as a parameter. The output file uses an INI-style structure.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        save(path: string): GError
        
        /** Obtain the text version of this config file (the same text that would be written to a file). */
        encodeToText(): string
        
        /** Loads the encrypted config file specified as a parameter, using the provided [param key] to decrypt it. The file's contents are parsed and loaded in the [ConfigFile] object which the method was called on.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        loadEncrypted(path: string, key: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads the encrypted config file specified as a parameter, using the provided [param password] to decrypt it. The file's contents are parsed and loaded in the [ConfigFile] object which the method was called on.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        loadEncryptedPass(path: string, password: string): GError
        
        /** Saves the contents of the [ConfigFile] object to the AES-256 encrypted file specified as a parameter, using the provided [param key] to encrypt it. The output file uses an INI-style structure.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        saveEncrypted(path: string, key: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Saves the contents of the [ConfigFile] object to the AES-256 encrypted file specified as a parameter, using the provided [param password] to encrypt it. The output file uses an INI-style structure.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        saveEncryptedPass(path: string, password: string): GError
        
        /** Removes the entire contents of the config. */
        clear(): void
    }
    /** A dialog used for confirmation of actions.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_confirmationdialog.html  
     */
    class ConfirmationDialog<Map extends NodePathMap = any> extends AcceptDialog<Map> {
        constructor(identifier?: any)
        /** Returns the cancel button.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getCancelButton(): null | Button
        
        /** The text displayed by the cancel button (see [method get_cancel_button]). */
        get cancelButtonText(): string
        set cancelButtonText(value: string)
    }
    /** Base class for all GUI containers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_container.html  
     */
    class Container<Map extends NodePathMap = any> extends Control<Map> {
        /** Notification just before children are going to be sorted, in case there's something to process beforehand. */
        static readonly NOTIFICATION_PRE_SORT_CHILDREN = 50
        
        /** Notification for when sorting the children, it must be obeyed immediately. */
        static readonly NOTIFICATION_SORT_CHILDREN = 51
        constructor(identifier?: any)
        
        /** Implement to return a list of allowed horizontal [enum Control.SizeFlags] for child nodes. This doesn't technically prevent the usages of any other size flags, if your implementation requires that. This only limits the options available to the user in the Inspector dock.  
         *      
         *  **Note:** Having no size flags is equal to having [constant Control.SIZE_SHRINK_BEGIN]. As such, this value is always implicitly allowed.  
         */
        /* gdvirtual */ _getAllowedSizeFlagsHorizontal(): PackedInt32Array
        
        /** Implement to return a list of allowed vertical [enum Control.SizeFlags] for child nodes. This doesn't technically prevent the usages of any other size flags, if your implementation requires that. This only limits the options available to the user in the Inspector dock.  
         *      
         *  **Note:** Having no size flags is equal to having [constant Control.SIZE_SHRINK_BEGIN]. As such, this value is always implicitly allowed.  
         */
        /* gdvirtual */ _getAllowedSizeFlagsVertical(): PackedInt32Array
        
        /** Queue resort of the contained children. This is called automatically anyway, but can be called upon request. */
        queueSort(): void
        
        /** Fit a child control in a given rect. This is mainly a helper for creating custom container classes. */
        fitChildInRect(child: Control, rect: Rect2): void
        
        /** Emitted when children are going to be sorted. */
        readonly preSortChildren: Signal<() => void>
        
        /** Emitted when sorting the children is needed. */
        readonly sortChildren: Signal<() => void>
    }
    namespace Control {
        enum FocusMode {
            FocusNone = 0,
            FocusClick = 1,
            FocusAll = 2,
            FocusAccessibility = 3,
        }
        enum FocusBehaviorRecursive {
            FocusBehaviorInherited = 0,
            FocusBehaviorDisabled = 1,
            FocusBehaviorEnabled = 2,
        }
        enum MouseBehaviorRecursive {
            MouseBehaviorInherited = 0,
            MouseBehaviorDisabled = 1,
            MouseBehaviorEnabled = 2,
        }
        enum CursorShape {
            CursorArrow = 0,
            CursorIbeam = 1,
            CursorPointingHand = 2,
            CursorCross = 3,
            CursorWait = 4,
            CursorBusy = 5,
            CursorDrag = 6,
            CursorCanDrop = 7,
            CursorForbidden = 8,
            CursorVsize = 9,
            CursorHsize = 10,
            CursorBdiagsize = 11,
            CursorFdiagsize = 12,
            CursorMove = 13,
            CursorVsplit = 14,
            CursorHsplit = 15,
            CursorHelp = 16,
        }
        enum LayoutPreset {
            PresetTopLeft = 0,
            PresetTopRight = 1,
            PresetBottomLeft = 2,
            PresetBottomRight = 3,
            PresetCenterLeft = 4,
            PresetCenterTop = 5,
            PresetCenterRight = 6,
            PresetCenterBottom = 7,
            PresetCenter = 8,
            PresetLeftWide = 9,
            PresetTopWide = 10,
            PresetRightWide = 11,
            PresetBottomWide = 12,
            PresetVcenterWide = 13,
            PresetHcenterWide = 14,
            PresetFullRect = 15,
        }
        enum LayoutPresetMode {
            PresetModeMinsize = 0,
            PresetModeKeepWidth = 1,
            PresetModeKeepHeight = 2,
            PresetModeKeepSize = 3,
        }
        enum SizeFlags {
            SizeShrinkBegin = 0,
            SizeFill = 1,
            SizeExpand = 2,
            SizeExpandFill = 3,
            SizeShrinkCenter = 4,
            SizeShrinkEnd = 8,
        }
        enum MouseFilter {
            MouseFilterStop = 0,
            MouseFilterPass = 1,
            MouseFilterIgnore = 2,
        }
        enum GrowDirection {
            GrowDirectionBegin = 0,
            GrowDirectionEnd = 1,
            GrowDirectionBoth = 2,
        }
        enum Anchor {
            AnchorBegin = 0,
            AnchorEnd = 1,
        }
        enum LayoutDirection {
            LayoutDirectionInherited = 0,
            LayoutDirectionApplicationLocale = 1,
            LayoutDirectionLtr = 2,
            LayoutDirectionRtl = 3,
            LayoutDirectionSystemLocale = 4,
            LayoutDirectionMax = 5,
            LayoutDirectionLocale = 1,
        }
        enum TextDirection {
            TextDirectionInherited = 3,
            TextDirectionAuto = 0,
            TextDirectionLtr = 1,
            TextDirectionRtl = 2,
        }
    }
    /** Base class for all GUI controls. Adapts its position and size based on its parent control.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_control.html  
     */
    class Control<Map extends NodePathMap = any> extends CanvasItem<Map> {
        /** The node cannot grab focus. Use with [member focus_mode]. */
        static readonly FOCUS_NONE = 0
        
        /** The node can only grab focus on mouse clicks. Use with [member focus_mode]. */
        static readonly FOCUS_CLICK = 1
        
        /** The node can grab focus on mouse click, using the arrows and the Tab keys on the keyboard, or using the D-pad buttons on a gamepad. Use with [member focus_mode]. */
        static readonly FOCUS_ALL = 2
        
        /** The node can grab focus only when screen reader is active. Use with [member focus_mode]. */
        static readonly FOCUS_ACCESSIBILITY = 3
        
        /** Inherits the [member focus_behavior_recursive] from the parent control. If there is no parent control, this is the same as [constant FOCUS_BEHAVIOR_ENABLED]. */
        static readonly FOCUS_BEHAVIOR_INHERITED = 0
        
        /** Prevents the control from getting focused. [method get_focus_mode_with_override] will return [constant FOCUS_NONE]. */
        static readonly FOCUS_BEHAVIOR_DISABLED = 1
        
        /** Allows the control to be focused, depending on the [member focus_mode]. This can be used to ignore the parent's [member focus_behavior_recursive]. [method get_focus_mode_with_override] will return the [member focus_mode]. */
        static readonly FOCUS_BEHAVIOR_ENABLED = 2
        
        /** Inherits the [member mouse_behavior_recursive] from the parent control. If there is no parent control, this is the same as [constant MOUSE_BEHAVIOR_ENABLED]. */
        static readonly MOUSE_BEHAVIOR_INHERITED = 0
        
        /** Prevents the control from receiving mouse input. [method get_mouse_filter_with_override] will return [constant MOUSE_FILTER_IGNORE]. */
        static readonly MOUSE_BEHAVIOR_DISABLED = 1
        
        /** Allows the control to be receive mouse input, depending on the [member mouse_filter]. This can be used to ignore the parent's [member mouse_behavior_recursive]. [method get_mouse_filter_with_override] will return the [member mouse_filter]. */
        static readonly MOUSE_BEHAVIOR_ENABLED = 2
        
        /** Sent when the node changes size. Use [member size] to get the new size. */
        static readonly NOTIFICATION_RESIZED = 40
        
        /** Sent when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_ENTER_SELF].  
         */
        static readonly NOTIFICATION_MOUSE_ENTER = 41
        
        /** Sent when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_EXIT_SELF].  
         */
        static readonly NOTIFICATION_MOUSE_EXIT = 42
        
        /** Sent when the mouse cursor enters the control's visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_ENTER].  
         */
        static readonly NOTIFICATION_MOUSE_ENTER_SELF = 60
        
        /** Sent when the mouse cursor leaves the control's visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_EXIT].  
         */
        static readonly NOTIFICATION_MOUSE_EXIT_SELF = 61
        
        /** Sent when the node grabs focus. */
        static readonly NOTIFICATION_FOCUS_ENTER = 43
        
        /** Sent when the node loses focus. */
        static readonly NOTIFICATION_FOCUS_EXIT = 44
        
        /** Sent when the node needs to refresh its theme items. This happens in one of the following cases:  
         *  - The [member theme] property is changed on this node or any of its ancestors.  
         *  - The [member theme_type_variation] property is changed on this node.  
         *  - One of the node's theme property overrides is changed.  
         *  - The node enters the scene tree.  
         *      
         *  **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.  
         *      
         *  **Note:** This notification is received alongside [constant Node.NOTIFICATION_ENTER_TREE], so if you are instantiating a scene, the child nodes will not be initialized yet. You can use it to setup theming for this node, child nodes created from script, or if you want to access child nodes added in the editor, make sure the node is ready using [method Node.is_node_ready].  
         *    
         */
        static readonly NOTIFICATION_THEME_CHANGED = 45
        
        /** Sent when this node is inside a [ScrollContainer] which has begun being scrolled when dragging the scrollable area  *with a touch event* . This notification is  *not*  sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        static readonly NOTIFICATION_SCROLL_BEGIN = 47
        
        /** Sent when this node is inside a [ScrollContainer] which has stopped being scrolled when dragging the scrollable area  *with a touch event* . This notification is  *not*  sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        static readonly NOTIFICATION_SCROLL_END = 48
        
        /** Sent when the control layout direction is changed from LTR or RTL or vice versa. This notification is propagated to child Control nodes as result of a change to [member layout_direction]. */
        static readonly NOTIFICATION_LAYOUT_DIRECTION_CHANGED = 49
        
        /** Show the system's arrow mouse cursor when the user hovers the node. Use with [member mouse_default_cursor_shape]. */
        static readonly CURSOR_ARROW = 0
        
        /** Show the system's I-beam mouse cursor when the user hovers the node. The I-beam pointer has a shape similar to "I". It tells the user they can highlight or insert text. */
        static readonly CURSOR_IBEAM = 1
        
        /** Show the system's pointing hand mouse cursor when the user hovers the node. */
        static readonly CURSOR_POINTING_HAND = 2
        
        /** Show the system's cross mouse cursor when the user hovers the node. */
        static readonly CURSOR_CROSS = 3
        
        /** Show the system's wait mouse cursor when the user hovers the node. Often an hourglass. */
        static readonly CURSOR_WAIT = 4
        
        /** Show the system's busy mouse cursor when the user hovers the node. Often an arrow with a small hourglass. */
        static readonly CURSOR_BUSY = 5
        
        /** Show the system's drag mouse cursor, often a closed fist or a cross symbol, when the user hovers the node. It tells the user they're currently dragging an item, like a node in the Scene dock. */
        static readonly CURSOR_DRAG = 6
        
        /** Show the system's drop mouse cursor when the user hovers the node. It can be an open hand. It tells the user they can drop an item they're currently grabbing, like a node in the Scene dock. */
        static readonly CURSOR_CAN_DROP = 7
        
        /** Show the system's forbidden mouse cursor when the user hovers the node. Often a crossed circle. */
        static readonly CURSOR_FORBIDDEN = 8
        
        /** Show the system's vertical resize mouse cursor when the user hovers the node. A double-headed vertical arrow. It tells the user they can resize the window or the panel vertically. */
        static readonly CURSOR_VSIZE = 9
        
        /** Show the system's horizontal resize mouse cursor when the user hovers the node. A double-headed horizontal arrow. It tells the user they can resize the window or the panel horizontally. */
        static readonly CURSOR_HSIZE = 10
        
        /** Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the bottom left to the top right. It tells the user they can resize the window or the panel both horizontally and vertically. */
        static readonly CURSOR_BDIAGSIZE = 11
        
        /** Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the top left to the bottom right, the opposite of [constant CURSOR_BDIAGSIZE]. It tells the user they can resize the window or the panel both horizontally and vertically. */
        static readonly CURSOR_FDIAGSIZE = 12
        
        /** Show the system's move mouse cursor when the user hovers the node. It shows 2 double-headed arrows at a 90 degree angle. It tells the user they can move a UI element freely. */
        static readonly CURSOR_MOVE = 13
        
        /** Show the system's vertical split mouse cursor when the user hovers the node. On Windows, it's the same as [constant CURSOR_VSIZE]. */
        static readonly CURSOR_VSPLIT = 14
        
        /** Show the system's horizontal split mouse cursor when the user hovers the node. On Windows, it's the same as [constant CURSOR_HSIZE]. */
        static readonly CURSOR_HSPLIT = 15
        
        /** Show the system's help mouse cursor when the user hovers the node, a question mark. */
        static readonly CURSOR_HELP = 16
        
        /** Snap all 4 anchors to the top-left of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_TOP_LEFT = 0
        
        /** Snap all 4 anchors to the top-right of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_TOP_RIGHT = 1
        
        /** Snap all 4 anchors to the bottom-left of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_BOTTOM_LEFT = 2
        
        /** Snap all 4 anchors to the bottom-right of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_BOTTOM_RIGHT = 3
        
        /** Snap all 4 anchors to the center of the left edge of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_CENTER_LEFT = 4
        
        /** Snap all 4 anchors to the center of the top edge of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_CENTER_TOP = 5
        
        /** Snap all 4 anchors to the center of the right edge of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_CENTER_RIGHT = 6
        
        /** Snap all 4 anchors to the center of the bottom edge of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_CENTER_BOTTOM = 7
        
        /** Snap all 4 anchors to the center of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_CENTER = 8
        
        /** Snap all 4 anchors to the left edge of the parent control. The left offset becomes relative to the left edge and the top offset relative to the top left corner of the node's parent. Use with [method set_anchors_preset]. */
        static readonly PRESET_LEFT_WIDE = 9
        
        /** Snap all 4 anchors to the top edge of the parent control. The left offset becomes relative to the top left corner, the top offset relative to the top edge, and the right offset relative to the top right corner of the node's parent. Use with [method set_anchors_preset]. */
        static readonly PRESET_TOP_WIDE = 10
        
        /** Snap all 4 anchors to the right edge of the parent control. The right offset becomes relative to the right edge and the top offset relative to the top right corner of the node's parent. Use with [method set_anchors_preset]. */
        static readonly PRESET_RIGHT_WIDE = 11
        
        /** Snap all 4 anchors to the bottom edge of the parent control. The left offset becomes relative to the bottom left corner, the bottom offset relative to the bottom edge, and the right offset relative to the bottom right corner of the node's parent. Use with [method set_anchors_preset]. */
        static readonly PRESET_BOTTOM_WIDE = 12
        
        /** Snap all 4 anchors to a vertical line that cuts the parent control in half. Use with [method set_anchors_preset]. */
        static readonly PRESET_VCENTER_WIDE = 13
        
        /** Snap all 4 anchors to a horizontal line that cuts the parent control in half. Use with [method set_anchors_preset]. */
        static readonly PRESET_HCENTER_WIDE = 14
        
        /** Snap all 4 anchors to the respective corners of the parent control. Set all 4 offsets to 0 after you applied this preset and the [Control] will fit its parent control. Use with [method set_anchors_preset]. */
        static readonly PRESET_FULL_RECT = 15
        
        /** The control will be resized to its minimum size. */
        static readonly PRESET_MODE_MINSIZE = 0
        
        /** The control's width will not change. */
        static readonly PRESET_MODE_KEEP_WIDTH = 1
        
        /** The control's height will not change. */
        static readonly PRESET_MODE_KEEP_HEIGHT = 2
        
        /** The control's size will not change. */
        static readonly PRESET_MODE_KEEP_SIZE = 3
        
        /** Tells the parent [Container] to align the node with its start, either the top or the left edge. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical].  
         *      
         *  **Note:** Setting this flag is equal to not having any size flags.  
         */
        static readonly SIZE_SHRINK_BEGIN = 0
        
        /** Tells the parent [Container] to expand the bounds of this node to fill all the available space without pushing any other node. It is mutually exclusive with shrink size flags. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
        static readonly SIZE_FILL = 1
        
        /** Tells the parent [Container] to let this node take all the available space on the axis you flag. If multiple neighboring nodes are set to expand, they'll share the space based on their stretch ratio. See [member size_flags_stretch_ratio]. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
        static readonly SIZE_EXPAND = 2
        
        /** Sets the node's size flags to both fill and expand. See [constant SIZE_FILL] and [constant SIZE_EXPAND] for more information. */
        static readonly SIZE_EXPAND_FILL = 3
        
        /** Tells the parent [Container] to center the node in the available space. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
        static readonly SIZE_SHRINK_CENTER = 4
        
        /** Tells the parent [Container] to align the node with its end, either the bottom or the right edge. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
        static readonly SIZE_SHRINK_END = 8
        
        /** The control will receive mouse movement input events and mouse button input events if clicked on through [method _gui_input]. The control will also receive the [signal mouse_entered] and [signal mouse_exited] signals. These events are automatically marked as handled, and they will not propagate further to other controls. This also results in blocking signals in other controls. */
        static readonly MOUSE_FILTER_STOP = 0
        
        /** The control will receive mouse movement input events and mouse button input events if clicked on through [method _gui_input]. The control will also receive the [signal mouse_entered] and [signal mouse_exited] signals.  
         *  If this control does not handle the event, the event will propagate up to its parent control if it has one. The event is bubbled up the node hierarchy until it reaches a non-[CanvasItem], a control with [constant MOUSE_FILTER_STOP], or a [CanvasItem] with [member CanvasItem.top_level] enabled. This will allow signals to fire in all controls it reaches. If no control handled it, the event will be passed to [method Node._shortcut_input] for further processing.  
         */
        static readonly MOUSE_FILTER_PASS = 1
        
        /** The control will not receive any mouse movement input events nor mouse button input events through [method _gui_input]. The control will also not receive the [signal mouse_entered] nor [signal mouse_exited] signals. This will not block other controls from receiving these events or firing the signals. Ignored events will not be handled automatically. If a child has [constant MOUSE_FILTER_PASS] and an event was passed to this control, the event will further propagate up to the control's parent.  
         *      
         *  **Note:** If the control has received [signal mouse_entered] but not [signal mouse_exited], changing the [member mouse_filter] to [constant MOUSE_FILTER_IGNORE] will cause [signal mouse_exited] to be emitted.  
         */
        static readonly MOUSE_FILTER_IGNORE = 2
        
        /** The control will grow to the left or top to make up if its minimum size is changed to be greater than its current size on the respective axis. */
        static readonly GROW_DIRECTION_BEGIN = 0
        
        /** The control will grow to the right or bottom to make up if its minimum size is changed to be greater than its current size on the respective axis. */
        static readonly GROW_DIRECTION_END = 1
        
        /** The control will grow in both directions equally to make up if its minimum size is changed to be greater than its current size. */
        static readonly GROW_DIRECTION_BOTH = 2
        
        /** Snaps one of the 4 anchor's sides to the origin of the node's `Rect`, in the top left. Use it with one of the `anchor_*` member variables, like [member anchor_left]. To change all 4 anchors at once, use [method set_anchors_preset]. */
        static readonly ANCHOR_BEGIN = 0
        
        /** Snaps one of the 4 anchor's sides to the end of the node's `Rect`, in the bottom right. Use it with one of the `anchor_*` member variables, like [member anchor_left]. To change all 4 anchors at once, use [method set_anchors_preset]. */
        static readonly ANCHOR_END = 1
        
        /** Automatic layout direction, determined from the parent control layout direction. */
        static readonly LAYOUT_DIRECTION_INHERITED = 0
        
        /** Automatic layout direction, determined from the current locale. Right-to-left layout direction is automatically used for languages that require it such as Arabic and Hebrew, but only if a valid translation file is loaded for the given language (unless said language is configured as a fallback in [member ProjectSettings.internationalization/locale/fallback]). For all other languages (or if no valid translation file is found by Godot), left-to-right layout direction is used. If using [TextServerFallback] ([member ProjectSettings.internationalization/rendering/text_driver]), left-to-right layout direction is always used regardless of the language. Right-to-left layout direction can also be forced using [member ProjectSettings.internationalization/rendering/force_right_to_left_layout_direction]. */
        static readonly LAYOUT_DIRECTION_APPLICATION_LOCALE = 1
        
        /** Left-to-right layout direction. */
        static readonly LAYOUT_DIRECTION_LTR = 2
        
        /** Right-to-left layout direction. */
        static readonly LAYOUT_DIRECTION_RTL = 3
        
        /** Automatic layout direction, determined from the system locale. Right-to-left layout direction is automatically used for languages that require it such as Arabic and Hebrew, but only if a valid translation file is loaded for the given language.. For all other languages (or if no valid translation file is found by Godot), left-to-right layout direction is used. If using [TextServerFallback] ([member ProjectSettings.internationalization/rendering/text_driver]), left-to-right layout direction is always used regardless of the language. */
        static readonly LAYOUT_DIRECTION_SYSTEM_LOCALE = 4
        
        /** Represents the size of the [enum LayoutDirection] enum. */
        static readonly LAYOUT_DIRECTION_MAX = 5
        static readonly LAYOUT_DIRECTION_LOCALE = 1
        
        /** Text writing direction is the same as layout direction. */
        static readonly TEXT_DIRECTION_INHERITED = 3
        
        /** Automatic text writing direction, determined from the current locale and text content. */
        static readonly TEXT_DIRECTION_AUTO = 0
        
        /** Left-to-right text writing direction. */
        static readonly TEXT_DIRECTION_LTR = 1
        
        /** Right-to-left text writing direction. */
        static readonly TEXT_DIRECTION_RTL = 2
        constructor(identifier?: any)
        
        /** Virtual method to be implemented by the user. Returns whether the given [param point] is inside this control.  
         *  If not overridden, default behavior is checking if the point is within control's Rect.  
         *      
         *  **Note:** If you want to check if a point is inside the control, you can use `Rect2(Vector2.ZERO, size).has_point(point)`.  
         */
        /* gdvirtual */ _hasPoint(point: Vector2): boolean
        
        /** User defined BiDi algorithm override function.  
         *  Returns an [Array] of [Vector3i] text ranges and text base directions, in the left-to-right order. Ranges should cover full source [param text] without overlaps. BiDi algorithm will be used on each range separately.  
         */
        /* gdvirtual */ _structuredTextParser(args: GArray, text: string): GArray
        
        /** Virtual method to be implemented by the user. Returns the minimum size for this control. Alternative to [member custom_minimum_size] for controlling minimum size via code. The actual minimum size will be the max value of these two (in each axis separately).  
         *  If not overridden, defaults to [constant Vector2.ZERO].  
         *      
         *  **Note:** This method will not be called when the script is attached to a [Control] node that already overrides its minimum size (e.g. [Label], [Button], [PanelContainer] etc.). It can only be used with most basic GUI nodes, like [Control], [Container], [Panel] etc.  
         */
        /* gdvirtual */ _getMinimumSize(): Vector2
        
        /** Virtual method to be implemented by the user. Returns the tooltip text for the position [param at_position] in control's local coordinates, which will typically appear when the cursor is resting over this control. See [method get_tooltip].  
         *      
         *  **Note:** If this method returns an empty [String] and [method _make_custom_tooltip] is not overridden, no tooltip is displayed.  
         */
        /* gdvirtual */ _getTooltip(atPosition: Vector2): string
        
        /** Godot calls this method to get data that can be dragged and dropped onto controls that expect drop data. Returns `null` if there is no data to drag. Controls that want to receive drop data should implement [method _can_drop_data] and [method _drop_data]. [param at_position] is local to this control. Drag may be forced with [method force_drag].  
         *  A preview that will follow the mouse that should represent the data can be set with [method set_drag_preview]. A good time to set the preview is in this method.  
         *      
         *  **Note:** If drag was initiated by keyboard shortcut or [method accessibility_drag], [param at_position] is set to `Vector2(INFINITY, INFINITY)` and the currently selected item/text position should be used as drop position.  
         *    
         */
        /* gdvirtual */ _getDragData(atPosition: Vector2): any
        
        /** Godot calls this method to test if [param data] from a control's [method _get_drag_data] can be dropped at [param at_position]. [param at_position] is local to this control.  
         *  This method should only be used to test the data. Process the data in [method _drop_data].  
         *      
         *  **Note:** If drag was initiated by keyboard shortcut or [method accessibility_drag], [param at_position] is set to `Vector2(INFINITY, INFINITY)` and the currently selected item/text position should be used as drop position.  
         *    
         */
        /* gdvirtual */ _canDropData(atPosition: Vector2, data: any): boolean
        
        /** Godot calls this method to pass you the [param data] from a control's [method _get_drag_data] result. Godot first calls [method _can_drop_data] to test if [param data] is allowed to drop at [param at_position] where [param at_position] is local to this control.  
         *      
         *  **Note:** If drag was initiated by keyboard shortcut or [method accessibility_drag], [param at_position] is set to `Vector2(INFINITY, INFINITY)` and the currently selected item/text position should be used as drop position.  
         *    
         */
        /* gdvirtual */ _dropData(atPosition: Vector2, data: any): void
        
        /** Virtual method to be implemented by the user. Returns a [Control] node that should be used as a tooltip instead of the default one. [param for_text] is the return value of [method get_tooltip].  
         *  The returned node must be of type [Control] or Control-derived. It can have child nodes of any type. It is freed when the tooltip disappears, so make sure you always provide a new instance (if you want to use a pre-existing node from your scene tree, you can duplicate it and pass the duplicated instance). When `null` or a non-Control node is returned, the default tooltip will be used instead.  
         *  The returned node will be added as child to a [PopupPanel], so you should only provide the contents of that panel. That [PopupPanel] can be themed using [method Theme.set_stylebox] for the type `"TooltipPanel"` (see [member tooltip_text] for an example).  
         *      
         *  **Note:** The tooltip is shrunk to minimal size. If you want to ensure it's fully visible, you might want to set its [member custom_minimum_size] to some non-zero value.  
         *      
         *  **Note:** The node (and any relevant children) should have their [member CanvasItem.visible] set to `true` when returned, otherwise, the viewport that instantiates it will not be able to calculate its minimum size reliably.  
         *      
         *  **Note:** If overridden, this method is called even if [method get_tooltip] returns an empty string. When this happens with the default tooltip, it is not displayed. To copy this behavior, return `null` in this method when [param for_text] is empty.  
         *  **Example:** Use a constructed node as a tooltip:  
         *    
         *  **Example:** Usa a scene instance as a tooltip:  
         *    
         */
        /* gdvirtual */ _makeCustomTooltip(forText: string): null | GObject
        
        /** Return the description of the keyboard shortcuts and other contextual help for this control. */
        /* gdvirtual */ _accessibilityGetContextualInfo(): string
        
        /** Virtual method to be implemented by the user. Override this method to handle and accept inputs on UI elements. See also [method accept_event].  
         *  **Example:** Click on the control to print a message:  
         *    
         *  If the [param event] inherits [InputEventMouse], this method will **not** be called when:  
         *  - the control's [member mouse_filter] is set to [constant MOUSE_FILTER_IGNORE];  
         *  - the control is obstructed by another control on top, that doesn't have [member mouse_filter] set to [constant MOUSE_FILTER_IGNORE];  
         *  - the control's parent has [member mouse_filter] set to [constant MOUSE_FILTER_STOP] or has accepted the event;  
         *  - the control's parent has [member clip_contents] enabled and the [param event]'s position is outside the parent's rectangle;  
         *  - the [param event]'s position is outside the control (see [method _has_point]).  
         *      
         *  **Note:** The [param event]'s position is relative to this control's origin.  
         */
        /* gdvirtual */ _guiInput(event: InputEvent): void
        
        /** Marks an input event as handled. Once you accept an input event, it stops propagating, even to nodes listening to [method Node._unhandled_input] or [method Node._unhandled_key_input].  
         *      
         *  **Note:** This does not affect the methods in [Input], only the way events are propagated.  
         */
        acceptEvent(): void
        
        /** Returns the minimum size for this control. See [member custom_minimum_size]. */
        getMinimumSize(): Vector2
        
        /** Returns combined minimum size from [member custom_minimum_size] and [method get_minimum_size]. */
        getCombinedMinimumSize(): Vector2
        
        /** Sets the anchors to a [param preset] from [enum Control.LayoutPreset] enum. This is the code equivalent to using the Layout menu in the 2D editor.  
         *  If [param keep_offsets] is `true`, control's position will also be updated.  
         */
        setAnchorsPreset(preset: Control.LayoutPreset, keepOffsets?: boolean /* = false */): void
        
        /** Sets the offsets to a [param preset] from [enum Control.LayoutPreset] enum. This is the code equivalent to using the Layout menu in the 2D editor.  
         *  Use parameter [param resize_mode] with constants from [enum Control.LayoutPresetMode] to better determine the resulting size of the [Control]. Constant size will be ignored if used with presets that change size, e.g. [constant PRESET_LEFT_WIDE].  
         *  Use parameter [param margin] to determine the gap between the [Control] and the edges.  
         */
        setOffsetsPreset(preset: Control.LayoutPreset, resizeMode?: Control.LayoutPresetMode /* = 0 */, margin?: int64 /* = 0 */): void
        
        /** Sets both anchor preset and offset preset. See [method set_anchors_preset] and [method set_offsets_preset]. */
        setAnchorsAndOffsetsPreset(preset: Control.LayoutPreset, resizeMode?: Control.LayoutPresetMode /* = 0 */, margin?: int64 /* = 0 */): void
        _setAnchor(side: Side, anchor: float64): void
        
        /** Sets the anchor for the specified [enum Side] to [param anchor]. A setter method for [member anchor_bottom], [member anchor_left], [member anchor_right] and [member anchor_top].  
         *  If [param keep_offset] is `true`, offsets aren't updated after this operation.  
         *  If [param push_opposite_anchor] is `true` and the opposite anchor overlaps this anchor, the opposite one will have its value overridden. For example, when setting left anchor to 1 and the right anchor has value of 0.5, the right anchor will also get value of 1. If [param push_opposite_anchor] was `false`, the left anchor would get value 0.5.  
         */
        setAnchor(side: Side, anchor: float64, keepOffset?: boolean /* = false */, pushOppositeAnchor?: boolean /* = true */): void
        
        /** Returns the anchor for the specified [enum Side]. A getter method for [member anchor_bottom], [member anchor_left], [member anchor_right] and [member anchor_top]. */
        getAnchor(side: Side): float64
        
        /** Sets the offset for the specified [enum Side] to [param offset]. A setter method for [member offset_bottom], [member offset_left], [member offset_right] and [member offset_top]. */
        setOffset(side: Side, offset: float64): void
        
        /** Returns the offset for the specified [enum Side]. A getter method for [member offset_bottom], [member offset_left], [member offset_right] and [member offset_top]. */
        getOffset(offset: Side): float64
        
        /** Works the same as [method set_anchor], but instead of `keep_offset` argument and automatic update of offset, it allows to set the offset yourself (see [method set_offset]). */
        setAnchorAndOffset(side: Side, anchor: float64, offset: float64, pushOppositeAnchor?: boolean /* = false */): void
        
        /** Sets [member offset_left] and [member offset_top] at the same time. Equivalent of changing [member position]. */
        setBegin(position: Vector2): void
        
        /** Sets [member offset_right] and [member offset_bottom] at the same time. */
        setEnd(position: Vector2): void
        
        /** Sets the [member position] to given [param position].  
         *  If [param keep_offsets] is `true`, control's anchors will be updated instead of offsets.  
         */
        setPosition(position: Vector2, keepOffsets?: boolean /* = false */): void
        
        /** Sets the size (see [member size]).  
         *  If [param keep_offsets] is `true`, control's anchors will be updated instead of offsets.  
         */
        setSize(size: Vector2, keepOffsets?: boolean /* = false */): void
        
        /** Resets the size to [method get_combined_minimum_size]. This is equivalent to calling `set_size(Vector2())` (or any size below the minimum). */
        resetSize(): void
        
        /** Sets the [member global_position] to given [param position].  
         *  If [param keep_offsets] is `true`, control's anchors will be updated instead of offsets.  
         */
        setGlobalPosition(position: Vector2, keepOffsets?: boolean /* = false */): void
        
        /** Returns [member offset_left] and [member offset_top]. See also [member position]. */
        getBegin(): Vector2
        
        /** Returns [member offset_right] and [member offset_bottom]. */
        getEnd(): Vector2
        
        /** Returns the width/height occupied in the parent control. */
        getParentAreaSize(): Vector2
        
        /** Returns the position of this [Control] in global screen coordinates (i.e. taking window position into account). Mostly useful for editor plugins.  
         *  Equals to [member global_position] if the window is embedded (see [member Viewport.gui_embed_subwindows]).  
         *  **Example:** Show a popup at the mouse position:  
         *    
         */
        getScreenPosition(): Vector2
        
        /** Returns the position and size of the control in the coordinate system of the containing node. See [member position], [member scale] and [member size].  
         *      
         *  **Note:** If [member rotation] is not the default rotation, the resulting size is not meaningful.  
         *      
         *  **Note:** Setting [member Viewport.gui_snap_controls_to_pixels] to `true` can lead to rounding inaccuracies between the displayed control and the returned [Rect2].  
         */
        getRect(): Rect2
        
        /** Returns the position and size of the control relative to the containing canvas. See [member global_position] and [member size].  
         *      
         *  **Note:** If the node itself or any parent [CanvasItem] between the node and the canvas have a non default rotation or skew, the resulting size is likely not meaningful.  
         *      
         *  **Note:** Setting [member Viewport.gui_snap_controls_to_pixels] to `true` can lead to rounding inaccuracies between the displayed control and the returned [Rect2].  
         */
        getGlobalRect(): Rect2
        
        /** Returns the [member focus_mode], but takes the [member focus_behavior_recursive] into account. If [member focus_behavior_recursive] is set to [constant FOCUS_BEHAVIOR_DISABLED], or it is set to [constant FOCUS_BEHAVIOR_INHERITED] and its ancestor is set to [constant FOCUS_BEHAVIOR_DISABLED], then this returns [constant FOCUS_NONE]. */
        getFocusModeWithOverride(): Control.FocusMode
        
        /** Returns `true` if this is the current focused control. See [member focus_mode]. */
        hasFocus(): boolean
        
        /** Steal the focus from another control and become the focused control (see [member focus_mode]).  
         *      
         *  **Note:** Using this method together with [method Callable.call_deferred] makes it more reliable, especially when called inside [method Node._ready].  
         */
        grabFocus(): void
        
        /** Give up the focus. No other control will be able to receive input. */
        releaseFocus(): void
        
        /** Finds the previous (above in the tree) [Control] that can receive the focus. */
        findPrevValidFocus(): null | Control
        
        /** Finds the next (below in the tree) [Control] that can receive the focus. */
        findNextValidFocus(): null | Control
        
        /** Finds the next [Control] that can receive the focus on the specified [enum Side].  
         *      
         *  **Note:** This is different from [method get_focus_neighbor], which returns the path of a specified focus neighbor.  
         */
        findValidFocusNeighbor(side: Side): null | Control
        
        /** Prevents `*_theme_*_override` methods from emitting [constant NOTIFICATION_THEME_CHANGED] until [method end_bulk_theme_override] is called. */
        beginBulkThemeOverride(): void
        
        /** Ends a bulk theme override update. See [method begin_bulk_theme_override]. */
        endBulkThemeOverride(): void
        
        /** Creates a local override for a theme icon with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_icon_override].  
         *  See also [method get_theme_icon].  
         */
        addThemeIconOverride(name: StringName, texture: Texture2D): void
        
        /** Creates a local override for a theme [StyleBox] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_stylebox_override].  
         *  See also [method get_theme_stylebox].  
         *  **Example:** Modify a property in a [StyleBox] by duplicating it:  
         *    
         */
        addThemeStyleboxOverride(name: StringName, stylebox: StyleBox): void
        
        /** Creates a local override for a theme [Font] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_override].  
         *  See also [method get_theme_font].  
         */
        addThemeFontOverride(name: StringName, font: Font): void
        
        /** Creates a local override for a theme font size with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_size_override].  
         *  See also [method get_theme_font_size].  
         */
        addThemeFontSizeOverride(name: StringName, fontSize: int64): void
        
        /** Creates a local override for a theme [Color] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_color_override].  
         *  See also [method get_theme_color].  
         *  **Example:** Override a [Label]'s color and reset it later:  
         *    
         */
        addThemeColorOverride(name: StringName, color: Color): void
        
        /** Creates a local override for a theme constant with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_constant_override].  
         *  See also [method get_theme_constant].  
         */
        addThemeConstantOverride(name: StringName, constant: int64): void
        
        /** Removes a local override for a theme icon with the specified [param name] previously added by [method add_theme_icon_override] or via the Inspector dock. */
        removeThemeIconOverride(name: StringName): void
        
        /** Removes a local override for a theme [StyleBox] with the specified [param name] previously added by [method add_theme_stylebox_override] or via the Inspector dock. */
        removeThemeStyleboxOverride(name: StringName): void
        
        /** Removes a local override for a theme [Font] with the specified [param name] previously added by [method add_theme_font_override] or via the Inspector dock. */
        removeThemeFontOverride(name: StringName): void
        
        /** Removes a local override for a theme font size with the specified [param name] previously added by [method add_theme_font_size_override] or via the Inspector dock. */
        removeThemeFontSizeOverride(name: StringName): void
        
        /** Removes a local override for a theme [Color] with the specified [param name] previously added by [method add_theme_color_override] or via the Inspector dock. */
        removeThemeColorOverride(name: StringName): void
        
        /** Removes a local override for a theme constant with the specified [param name] previously added by [method add_theme_constant_override] or via the Inspector dock. */
        removeThemeConstantOverride(name: StringName): void
        
        /** Returns an icon from the first matching [Theme] in the tree if that [Theme] has an icon item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        getThemeIcon(name: StringName, themeType?: StringName /* = '' */): null | Texture2D
        
        /** Returns a [StyleBox] from the first matching [Theme] in the tree if that [Theme] has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        getThemeStylebox(name: StringName, themeType?: StringName /* = '' */): null | StyleBox
        
        /** Returns a [Font] from the first matching [Theme] in the tree if that [Theme] has a font item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        getThemeFont(name: StringName, themeType?: StringName /* = '' */): null | Font
        
        /** Returns a font size from the first matching [Theme] in the tree if that [Theme] has a font size item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        getThemeFontSize(name: StringName, themeType?: StringName /* = '' */): int64
        
        /** Returns a [Color] from the first matching [Theme] in the tree if that [Theme] has a color item with the specified [param name] and [param theme_type]. If [param theme_type] is omitted the class name of the current control is used as the type, or [member theme_type_variation] if it is defined. If the type is a class name its parent classes are also checked, in order of inheritance. If the type is a variation its base types are checked, in order of dependency, then the control's class name and its parent classes are checked.  
         *  For the current control its local overrides are considered first (see [method add_theme_color_override]), then its assigned [member theme]. After the current control, each parent control and its assigned [member theme] are considered; controls without a [member theme] assigned are skipped. If no matching [Theme] is found in the tree, the custom project [Theme] (see [member ProjectSettings.gui/theme/custom]) and the default [Theme] are used (see [ThemeDB]).  
         *    
         */
        getThemeColor(name: StringName, themeType?: StringName /* = '' */): Color
        
        /** Returns a constant from the first matching [Theme] in the tree if that [Theme] has a constant item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        getThemeConstant(name: StringName, themeType?: StringName /* = '' */): int64
        
        /** Returns `true` if there is a local override for a theme icon with the specified [param name] in this [Control] node.  
         *  See [method add_theme_icon_override].  
         */
        hasThemeIconOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [StyleBox] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_stylebox_override].  
         */
        hasThemeStyleboxOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Font] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_override].  
         */
        hasThemeFontOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme font size with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_size_override].  
         */
        hasThemeFontSizeOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Color] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_color_override].  
         */
        hasThemeColorOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme constant with the specified [param name] in this [Control] node.  
         *  See [method add_theme_constant_override].  
         */
        hasThemeConstantOverride(name: StringName): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has an icon item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        hasThemeIcon(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        hasThemeStylebox(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        hasThemeFont(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font size item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        hasThemeFontSize(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        hasThemeColor(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a constant item with the specified [param name] and [param theme_type].  
         *  See [method get_theme_color] for details.  
         */
        hasThemeConstant(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns the default base scale value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_base_scale] value.  
         *  See [method get_theme_color] for details.  
         */
        getThemeDefaultBaseScale(): float64
        
        /** Returns the default font from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font] value.  
         *  See [method get_theme_color] for details.  
         */
        getThemeDefaultFont(): null | Font
        
        /** Returns the default font size value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font_size] value.  
         *  See [method get_theme_color] for details.  
         */
        getThemeDefaultFontSize(): int64
        
        /** Returns the parent control node. */
        getParentControl(): null | Control
        
        /** Returns the tooltip text for the position [param at_position] in control's local coordinates, which will typically appear when the cursor is resting over this control. By default, it returns [member tooltip_text].  
         *  This method can be overridden to customize its behavior. See [method _get_tooltip].  
         *      
         *  **Note:** If this method returns an empty [String] and [method _make_custom_tooltip] is not overridden, no tooltip is displayed.  
         */
        getTooltip(atPosition?: Vector2 /* = Vector2.ZERO */): string
        
        /** Returns the mouse cursor shape for this control when hovered over [param position] in local coordinates. For most controls, this is the same as [member mouse_default_cursor_shape], but some built-in controls implement more complex logic. See [enum CursorShape]. */
        getCursorShape(position?: Vector2 /* = Vector2.ZERO */): Control.CursorShape
        
        /** Sets the focus neighbor for the specified [enum Side] to the [Control] at [param neighbor] node path. A setter method for [member focus_neighbor_bottom], [member focus_neighbor_left], [member focus_neighbor_right] and [member focus_neighbor_top]. */
        setFocusNeighbor(side: Side, neighbor: NodePath | string): void
        
        /** Returns the focus neighbor for the specified [enum Side]. A getter method for [member focus_neighbor_bottom], [member focus_neighbor_left], [member focus_neighbor_right] and [member focus_neighbor_top].  
         *      
         *  **Note:** To find the next [Control] on the specific [enum Side], even if a neighbor is not assigned, use [method find_valid_focus_neighbor].  
         */
        getFocusNeighbor(side: Side): NodePath
        
        /** Forces drag and bypasses [method _get_drag_data] and [method set_drag_preview] by passing [param data] and [param preview]. Drag will start even if the mouse is neither over nor pressed on this control.  
         *  The methods [method _can_drop_data] and [method _drop_data] must be implemented on controls that want to receive drop data.  
         */
        forceDrag(data: any, preview: Control): void
        
        /** Starts drag-and-drop operation without using a mouse. */
        accessibilityDrag(): void
        
        /** Ends drag-and-drop operation without using a mouse. */
        accessibilityDrop(): void
        
        /** Returns the [member mouse_filter], but takes the [member mouse_behavior_recursive] into account. If [member mouse_behavior_recursive] is set to [constant MOUSE_BEHAVIOR_DISABLED], or it is set to [constant MOUSE_BEHAVIOR_INHERITED] and its ancestor is set to [constant MOUSE_BEHAVIOR_DISABLED], then this returns [constant MOUSE_FILTER_IGNORE]. */
        getMouseFilterWithOverride(): Control.MouseFilter
        
        /** Creates an [InputEventMouseButton] that attempts to click the control. If the event is received, the control gains focus.  
         *    
         */
        grabClickFocus(): void
        
        /** Sets the given callables to be used instead of the control's own drag-and-drop virtual methods. If a callable is empty, its respective virtual method is used as normal.  
         *  The arguments for each callable should be exactly the same as their respective virtual methods, which would be:  
         *  - [param drag_func] corresponds to [method _get_drag_data] and requires a [Vector2];  
         *  - [param can_drop_func] corresponds to [method _can_drop_data] and requires both a [Vector2] and a [Variant];  
         *  - [param drop_func] corresponds to [method _drop_data] and requires both a [Vector2] and a [Variant].  
         */
        setDragForwarding(dragFunc: Callable, canDropFunc: Callable, dropFunc: Callable): void
        
        /** Shows the given control at the mouse pointer. A good time to call this method is in [method _get_drag_data]. The control must not be in the scene tree. You should not free the control, and you should not keep a reference to the control beyond the duration of the drag. It will be deleted automatically after the drag has ended.  
         *    
         */
        setDragPreview(control: Control): void
        
        /** Returns `true` if a drag operation is successful. Alternative to [method Viewport.gui_is_drag_successful].  
         *  Best used with [constant Node.NOTIFICATION_DRAG_END].  
         */
        isDragSuccessful(): boolean
        
        /** Moves the mouse cursor to [param position], relative to [member position] of this [Control].  
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.  
         */
        warpMouse(position: Vector2): void
        
        /** Invalidates the size cache in this node and in parent nodes up to top level. Intended to be used with [method get_minimum_size] when the return value is changed. Setting [member custom_minimum_size] directly calls this method automatically. */
        updateMinimumSize(): void
        
        /** Returns `true` if the layout is right-to-left. See also [member layout_direction]. */
        isLayoutRtl(): boolean
        
        /** Enables whether rendering of [CanvasItem] based children should be clipped to this control's rectangle. If `true`, parts of a child which would be visibly outside of this control's rectangle will not be rendered and won't receive input. */
        get clipContents(): boolean
        set clipContents(value: boolean)
        
        /** The minimum size of the node's bounding rectangle. If you set it to a value greater than `(0, 0)`, the node's bounding rectangle will always have at least this size. Note that [Control] nodes have their internal minimum size returned by [method get_minimum_size]. It depends on the control's contents, like text, textures, or style boxes. The actual minimum size is the maximum value of this property and the internal minimum size (see [method get_combined_minimum_size]). */
        get customMinimumSize(): Vector2
        set customMinimumSize(value: Vector2)
        
        /** Controls layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). See also [method is_layout_rtl]. */
        get layoutDirection(): int64
        set layoutDirection(value: int64)
        get layoutMode(): int64
        set layoutMode(value: int64)
        get anchorsPreset(): int64
        set anchorsPreset(value: int64)
        
        /** Anchors the left edge of the node to the origin, the center or the end of its parent control. It changes how the left offset updates when the node moves or changes size. You can use one of the [enum Anchor] constants for convenience. */
        get anchorLeft(): float64
        set anchorLeft(value: float64)
        
        /** Anchors the top edge of the node to the origin, the center or the end of its parent control. It changes how the top offset updates when the node moves or changes size. You can use one of the [enum Anchor] constants for convenience. */
        get anchorTop(): float64
        set anchorTop(value: float64)
        
        /** Anchors the right edge of the node to the origin, the center or the end of its parent control. It changes how the right offset updates when the node moves or changes size. You can use one of the [enum Anchor] constants for convenience. */
        get anchorRight(): float64
        set anchorRight(value: float64)
        
        /** Anchors the bottom edge of the node to the origin, the center, or the end of its parent control. It changes how the bottom offset updates when the node moves or changes size. You can use one of the [enum Anchor] constants for convenience. */
        get anchorBottom(): float64
        set anchorBottom(value: float64)
        
        /** Distance between the node's left edge and its parent control, based on [member anchor_left].  
         *  Offsets are often controlled by one or multiple parent [Container] nodes, so you should not modify them manually if your node is a direct child of a [Container]. Offsets update automatically when you move or resize the node.  
         */
        get offsetLeft(): float64
        set offsetLeft(value: float64)
        
        /** Distance between the node's top edge and its parent control, based on [member anchor_top].  
         *  Offsets are often controlled by one or multiple parent [Container] nodes, so you should not modify them manually if your node is a direct child of a [Container]. Offsets update automatically when you move or resize the node.  
         */
        get offsetTop(): float64
        set offsetTop(value: float64)
        
        /** Distance between the node's right edge and its parent control, based on [member anchor_right].  
         *  Offsets are often controlled by one or multiple parent [Container] nodes, so you should not modify them manually if your node is a direct child of a [Container]. Offsets update automatically when you move or resize the node.  
         */
        get offsetRight(): float64
        set offsetRight(value: float64)
        
        /** Distance between the node's bottom edge and its parent control, based on [member anchor_bottom].  
         *  Offsets are often controlled by one or multiple parent [Container] nodes, so you should not modify them manually if your node is a direct child of a [Container]. Offsets update automatically when you move or resize the node.  
         */
        get offsetBottom(): float64
        set offsetBottom(value: float64)
        
        /** Controls the direction on the horizontal axis in which the control should grow if its horizontal minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size. */
        get growHorizontal(): int64
        set growHorizontal(value: int64)
        
        /** Controls the direction on the vertical axis in which the control should grow if its vertical minimum size is changed to be greater than its current size, as the control always has to be at least the minimum size. */
        get growVertical(): int64
        set growVertical(value: int64)
        
        /** The size of the node's bounding rectangle, in the node's coordinate system. [Container] nodes update this property automatically. */
        get size(): Vector2
        set size(value: Vector2)
        
        /** The node's position, relative to its containing node. It corresponds to the rectangle's top-left corner. The property is not affected by [member pivot_offset]. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** The node's global position, relative to the world (usually to the [CanvasLayer]). */
        get globalPosition(): Vector2
        set globalPosition(value: Vector2)
        
        /** The node's rotation around its pivot, in radians. See [member pivot_offset] to change the pivot's position.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].  
         */
        get rotation(): float64
        set rotation(value: float64)
        
        /** Helper property to access [member rotation] in degrees instead of radians. */
        get rotationDegrees(): float64
        set rotationDegrees(value: float64)
        
        /** The node's scale, relative to its [member size]. Change this property to scale the node around its [member pivot_offset]. The Control's tooltip will also scale according to this value.  
         *      
         *  **Note:** This property is mainly intended to be used for animation purposes. To support multiple resolutions in your project, use an appropriate viewport stretch mode as described in the [url=https://docs.godotengine.org/en/latest/tutorials/rendering/multiple_resolutions.html]documentation[/url] instead of scaling Controls individually.  
         *      
         *  **Note:** [member FontFile.oversampling] does  *not*  take [Control] [member scale] into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.  
         *      
         *  **Note:** If the Control node is a child of a [Container] node, the scale will be reset to `Vector2(1, 1)` when the scene is instantiated. To set the Control's scale when it's instantiated, wait for one frame using `await get_tree().process_frame` then set its [member scale] property.  
         */
        get scale(): Vector2
        set scale(value: Vector2)
        
        /** By default, the node's pivot is its top-left corner. When you change its [member rotation] or [member scale], it will rotate or scale around this pivot. Set this property to [member size] / 2 to pivot around the Control's center. */
        get pivotOffset(): Vector2
        set pivotOffset(value: Vector2)
        
        /** Tells the parent [Container] nodes how they should resize and place the node on the X axis. Use a combination of the [enum SizeFlags] constants to change the flags. See the constants to learn what each does. */
        get sizeFlagsHorizontal(): int64
        set sizeFlagsHorizontal(value: int64)
        
        /** Tells the parent [Container] nodes how they should resize and place the node on the Y axis. Use a combination of the [enum SizeFlags] constants to change the flags. See the constants to learn what each does. */
        get sizeFlagsVertical(): int64
        set sizeFlagsVertical(value: int64)
        
        /** If the node and at least one of its neighbors uses the [constant SIZE_EXPAND] size flag, the parent [Container] will let it take more or less space depending on this property. If this node has a stretch ratio of 2 and its neighbor a ratio of 1, this node will take two thirds of the available space. */
        get sizeFlagsStretchRatio(): float64
        set sizeFlagsStretchRatio(value: float64)
        
        /** If `true`, automatically converts code line numbers, list indices, [SpinBox] and [ProgressBar] values from the Western Arabic (0..9) to the numeral systems used in current locale.  
         *      
         *  **Note:** Numbers within the text are not automatically converted, it can be done manually, using [method TextServer.format_number].  
         */
        get localizeNumeralSystem(): boolean
        set localizeNumeralSystem(value: boolean)
        
        /** Toggles if any text should automatically change to its translated version depending on the current locale. */
        get autoTranslate(): boolean
        set autoTranslate(value: boolean)
        
        /** The default tooltip text. The tooltip appears when the user's mouse cursor stays idle over this control for a few moments, provided that the [member mouse_filter] property is not [constant MOUSE_FILTER_IGNORE]. The time required for the tooltip to appear can be changed with the [member ProjectSettings.gui/timers/tooltip_delay_sec] setting.  
         *  This string is the default return value of [method get_tooltip]. Override [method _get_tooltip] to generate tooltip text dynamically. Override [method _make_custom_tooltip] to customize the tooltip interface and behavior.  
         *  The tooltip popup will use either a default implementation, or a custom one that you can provide by overriding [method _make_custom_tooltip]. The default tooltip includes a [PopupPanel] and [Label] whose theme properties can be customized using [Theme] methods with the `"TooltipPanel"` and `"TooltipLabel"` respectively. For example:  
         *    
         */
        get tooltipText(): string
        set tooltipText(value: string)
        
        /** Defines if tooltip text should automatically change to its translated version depending on the current locale. Uses the same auto translate mode as this control when set to [constant Node.AUTO_TRANSLATE_MODE_INHERIT].  
         *      
         *  **Note:** Tooltips customized using [method _make_custom_tooltip] do not use this auto translate mode automatically.  
         */
        get tooltipAutoTranslateMode(): int64
        set tooltipAutoTranslateMode(value: int64)
        
        /** Tells Godot which node it should give focus to if the user presses the left arrow on the keyboard or left on a gamepad by default. You can change the key by editing the [member ProjectSettings.input/ui_left] input action. The node must be a [Control]. If this property is not set, Godot will give focus to the closest [Control] to the left of this one. */
        get focusNeighborLeft(): NodePath
        set focusNeighborLeft(value: NodePath | string)
        
        /** Tells Godot which node it should give focus to if the user presses the top arrow on the keyboard or top on a gamepad by default. You can change the key by editing the [member ProjectSettings.input/ui_up] input action. The node must be a [Control]. If this property is not set, Godot will give focus to the closest [Control] to the top of this one. */
        get focusNeighborTop(): NodePath
        set focusNeighborTop(value: NodePath | string)
        
        /** Tells Godot which node it should give focus to if the user presses the right arrow on the keyboard or right on a gamepad by default. You can change the key by editing the [member ProjectSettings.input/ui_right] input action. The node must be a [Control]. If this property is not set, Godot will give focus to the closest [Control] to the right of this one. */
        get focusNeighborRight(): NodePath
        set focusNeighborRight(value: NodePath | string)
        
        /** Tells Godot which node it should give focus to if the user presses the down arrow on the keyboard or down on a gamepad by default. You can change the key by editing the [member ProjectSettings.input/ui_down] input action. The node must be a [Control]. If this property is not set, Godot will give focus to the closest [Control] to the bottom of this one. */
        get focusNeighborBottom(): NodePath
        set focusNeighborBottom(value: NodePath | string)
        
        /** Tells Godot which node it should give focus to if the user presses [kbd]Tab[/kbd] on a keyboard by default. You can change the key by editing the [member ProjectSettings.input/ui_focus_next] input action.  
         *  If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.  
         */
        get focusNext(): NodePath
        set focusNext(value: NodePath | string)
        
        /** Tells Godot which node it should give focus to if the user presses [kbd]Shift + Tab[/kbd] on a keyboard by default. You can change the key by editing the [member ProjectSettings.input/ui_focus_prev] input action.  
         *  If this property is not set, Godot will select a "best guess" based on surrounding nodes in the scene tree.  
         */
        get focusPrevious(): NodePath
        set focusPrevious(value: NodePath | string)
        
        /** Determines which controls can be focused. Only one control can be focused at a time, and the focused control will receive keyboard, gamepad, and mouse events in [method _gui_input]. Use [method get_focus_mode_with_override] to determine if a control can grab focus, since [member focus_behavior_recursive] also affects it. See also [method grab_focus]. */
        get focusMode(): int64
        set focusMode(value: int64)
        
        /** Determines which controls can be focused together with [member focus_mode]. See [method get_focus_mode_with_override]. Since the default behavior is [constant FOCUS_BEHAVIOR_INHERITED], this can be used to prevent all children controls from getting focused. */
        get focusBehaviorRecursive(): int64
        set focusBehaviorRecursive(value: int64)
        
        /** Determines which controls will be able to receive mouse button input events through [method _gui_input] and the [signal mouse_entered], and [signal mouse_exited] signals. Also determines how these events should be propagated. See the constants to learn what each does. Use [method get_mouse_filter_with_override] to determine if a control can receive mouse input, since [member mouse_behavior_recursive] also affects it. */
        get mouseFilter(): int64
        set mouseFilter(value: int64)
        
        /** Determines which controls can receive mouse input together with [member mouse_filter]. See [method get_mouse_filter_with_override]. Since the default behavior is [constant MOUSE_BEHAVIOR_INHERITED], this can be used to prevent all children controls from receiving mouse input. */
        get mouseBehaviorRecursive(): int64
        set mouseBehaviorRecursive(value: int64)
        
        /** When enabled, scroll wheel events processed by [method _gui_input] will be passed to the parent control even if [member mouse_filter] is set to [constant MOUSE_FILTER_STOP].  
         *  You should disable it on the root of your UI if you do not want scroll events to go to the [method Node._unhandled_input] processing.  
         *      
         *  **Note:** Because this property defaults to `true`, this allows nested scrollable containers to work out of the box.  
         */
        get mouseForcePassScrollEvents(): boolean
        set mouseForcePassScrollEvents(value: boolean)
        
        /** The default cursor shape for this control. Useful for Godot plugins and applications or games that use the system's mouse cursors.  
         *      
         *  **Note:** On Linux, shapes may vary depending on the cursor theme of the system.  
         */
        get mouseDefaultCursorShape(): int64
        set mouseDefaultCursorShape(value: int64)
        
        /** The [Node] which must be a parent of the focused [Control] for the shortcut to be activated. If `null`, the shortcut can be activated when any control is focused (a global shortcut). This allows shortcuts to be accepted only when the user has a certain area of the GUI focused. */
        get shortcutContext(): null | GObject
        set shortcutContext(value: null | GObject)
        
        /** The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.  
         *      
         *  **Note:** [Window] styles will have no effect unless the window is embedded.  
         */
        get theme(): null | Theme
        set theme(value: null | Theme)
        
        /** The name of a theme type variation used by this [Control] to look up its own theme items. When empty, the class name of the node is used (e.g. [code skip-lint]Button` for the [Button] control), as well as the class names of all parent classes (in order of inheritance).  
         *  When set, this property gives the highest priority to the type of the specified name. This type can in turn extend another type, forming a dependency chain. See [method Theme.set_type_variation]. If the theme item cannot be found using this type or its base types, lookup falls back on the class names.  
         *      
         *  **Note:** To look up [Control]'s own items use various `get_theme_*` methods without specifying `theme_type`.  
         *      
         *  **Note:** Theme items are looked for in the tree order, from branch to root, where each [Control] node is checked for its [member theme] property. The earliest match against any type/class name is returned. The project-level Theme and the default Theme are checked last.  
         */
        get themeTypeVariation(): string
        set themeTypeVariation(value: string)
        
        /** Emitted when the control changes size. */
        readonly resized: Signal<() => void>
        
        /** Emitted when the node receives an [InputEvent]. */
        readonly guiInput: Signal<(event: InputEvent) => void>
        
        /** Emitted when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect, which Control receives the signal.  
         */
        readonly mouseEntered: Signal<() => void>
        
        /** Emitted when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect, which Control receives the signal.  
         *      
         *  **Note:** If you want to check whether the mouse truly left the area, ignoring any top nodes, you can use code like this:  
         *    
         */
        readonly mouseExited: Signal<() => void>
        
        /** Emitted when the node gains focus. */
        readonly focusEntered: Signal<() => void>
        
        /** Emitted when the node loses focus. */
        readonly focusExited: Signal<() => void>
        
        /** Emitted when one of the size flags changes. See [member size_flags_horizontal] and [member size_flags_vertical]. */
        readonly sizeFlagsChanged: Signal<() => void>
        
        /** Emitted when the node's minimum size changes. */
        readonly minimumSizeChanged: Signal<() => void>
        
        /** Emitted when the [constant NOTIFICATION_THEME_CHANGED] notification is sent. */
        readonly themeChanged: Signal<() => void>
    }
    /** A 2D convex polygon shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_convexpolygonshape2d.html  
     */
    class ConvexPolygonShape2D extends Shape2D {
        constructor(identifier?: any)
        /** Based on the set of points provided, this assigns the [member points] property using the convex hull algorithm, removing all unneeded points. See [method Geometry2D.convex_hull] for details. */
        setPointCloud(pointCloud: PackedVector2Array | Vector2[]): void
        
        /** The polygon's list of vertices that form a convex hull. Can be in either clockwise or counterclockwise order.  
         *  **Warning:** Only set this property to a list of points that actually form a convex hull. Use [method set_point_cloud] to generate the convex hull of an arbitrary set of points.  
         */
        get points(): PackedVector2Array
        set points(value: PackedVector2Array | Vector2[])
    }
    /** A 3D convex polyhedron shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_convexpolygonshape3d.html  
     */
    class ConvexPolygonShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The list of 3D points forming the convex polygon shape. */
        get points(): GArray
        set points(value: GArray)
    }
    /** Provides access to advanced cryptographic functionalities.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_crypto.html  
     */
    class Crypto extends RefCounted {
        constructor(identifier?: any)
        /** Generates a [PackedByteArray] of cryptographically secure random bytes with given [param size]. */
        generateRandomBytes(size: int64): PackedByteArray
        
        /** Generates an RSA [CryptoKey] that can be used for creating self-signed certificates and passed to [method StreamPeerTLS.accept_stream]. */
        generateRsa(size: int64): null | CryptoKey
        
        /** Generates a self-signed [X509Certificate] from the given [CryptoKey] and [param issuer_name]. The certificate validity will be defined by [param not_before] and [param not_after] (first valid date and last valid date). The [param issuer_name] must contain at least "CN=" (common name, i.e. the domain name), "O=" (organization, i.e. your company name), "C=" (country, i.e. 2 lettered ISO-3166 code of the country the organization is based in).  
         *  A small example to generate an RSA key and an X509 self-signed certificate.  
         *    
         */
        generateSelfSignedCertificate(key: CryptoKey, issuerName?: string /* = 'CN=myserver,O=myorganisation,C=IT' */, notBefore?: string /* = '20140101000000' */, notAfter?: string /* = '20340101000000' */): null | X509Certificate
        
        /** Sign a given [param hash] of type [param hash_type] with the provided private [param key]. */
        sign(hashType: HashingContext.HashType, hash: PackedByteArray | byte[] | ArrayBuffer, key: CryptoKey): PackedByteArray
        
        /** Verify that a given [param signature] for [param hash] of type [param hash_type] against the provided public [param key]. */
        verify(hashType: HashingContext.HashType, hash: PackedByteArray | byte[] | ArrayBuffer, signature: PackedByteArray | byte[] | ArrayBuffer, key: CryptoKey): boolean
        
        /** Encrypt the given [param plaintext] with the provided public [param key].  
         *      
         *  **Note:** The maximum size of accepted plaintext is limited by the key size.  
         */
        encrypt(key: CryptoKey, plaintext: PackedByteArray | byte[] | ArrayBuffer): PackedByteArray
        
        /** Decrypt the given [param ciphertext] with the provided private [param key].  
         *      
         *  **Note:** The maximum size of accepted ciphertext is limited by the key size.  
         */
        decrypt(key: CryptoKey, ciphertext: PackedByteArray | byte[] | ArrayBuffer): PackedByteArray
        
        /** Generates an [url=https://en.wikipedia.org/wiki/HMAC]HMAC[/url] digest of [param msg] using [param key]. The [param hash_type] parameter is the hashing algorithm that is used for the inner and outer hashes.  
         *  Currently, only [constant HashingContext.HASH_SHA256] and [constant HashingContext.HASH_SHA1] are supported.  
         */
        hmacDigest(hashType: HashingContext.HashType, key: PackedByteArray | byte[] | ArrayBuffer, msg: PackedByteArray | byte[] | ArrayBuffer): PackedByteArray
        
        /** Compares two [PackedByteArray]s for equality without leaking timing information in order to prevent timing attacks.  
         *  See [url=https://paragonie.com/blog/2015/11/preventing-timing-attacks-on-string-comparison-with-double-hmac-strategy]this blog post[/url] for more information.  
         */
        constantTimeCompare(trusted: PackedByteArray | byte[] | ArrayBuffer, received: PackedByteArray | byte[] | ArrayBuffer): boolean
    }
    /** A cryptographic key (RSA or elliptic-curve).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cryptokey.html  
     */
    class CryptoKey extends Resource {
        constructor(identifier?: any)
        /** Saves a key to the given [param path]. If [param public_only] is `true`, only the public key will be saved.  
         *      
         *  **Note:** [param path] should be a "*.pub" file if [param public_only] is `true`, a "*.key" file otherwise.  
         */
        save(path: string, publicOnly?: boolean /* = false */): GError
        
        /** Loads a key from [param path]. If [param public_only] is `true`, only the public key will be loaded.  
         *      
         *  **Note:** [param path] should be a "*.pub" file if [param public_only] is `true`, a "*.key" file otherwise.  
         */
        load(path: string, publicOnly?: boolean /* = false */): GError
        
        /** Returns `true` if this CryptoKey only has the public part, and not the private one. */
        isPublicOnly(): boolean
        
        /** Returns a string containing the key in PEM format. If [param public_only] is `true`, only the public key will be included. */
        saveToString(publicOnly?: boolean /* = false */): string
        
        /** Loads a key from the given [param string_key]. If [param public_only] is `true`, only the public key will be loaded. */
        loadFromString(stringKey: string, publicOnly?: boolean /* = false */): GError
    }
    /** Six square textures representing the faces of a cube. Commonly used as a skybox.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cubemap.html  
     */
    class Cubemap extends ImageTextureLayered {
        constructor(identifier?: any)
        /** Creates a placeholder version of this resource ([PlaceholderCubemap]). */
        createPlaceholder(): Resource
    }
    /** An array of [Cubemap]s, stored together and with a single reference.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cubemaparray.html  
     */
    class CubemapArray extends ImageTextureLayered {
        constructor(identifier?: any)
        /** Creates a placeholder version of this resource ([PlaceholderCubemapArray]). */
        createPlaceholder(): Resource
    }
    namespace Curve {
        enum TangentMode {
            TangentFree = 0,
            TangentLinear = 1,
            TangentModeCount = 2,
        }
    }
    /** A mathematical curve.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_curve.html  
     */
    class Curve extends Resource {
        /** The tangent on this side of the point is user-defined. */
        static readonly TANGENT_FREE = 0
        
        /** The curve calculates the tangent on this side of the point as the slope halfway towards the adjacent point. */
        static readonly TANGENT_LINEAR = 1
        
        /** The total number of available tangent modes. */
        static readonly TANGENT_MODE_COUNT = 2
        constructor(identifier?: any)
        
        /** Adds a point to the curve. For each side, if the `*_mode` is [constant TANGENT_LINEAR], the `*_tangent` angle (in degrees) uses the slope of the curve halfway to the adjacent point. Allows custom assignments to the `*_tangent` angle if `*_mode` is set to [constant TANGENT_FREE]. */
        addPoint(position: Vector2, leftTangent?: float64 /* = 0 */, rightTangent?: float64 /* = 0 */, leftMode?: Curve.TangentMode /* = 0 */, rightMode?: Curve.TangentMode /* = 0 */): int64
        
        /** Removes the point at [param index] from the curve. */
        removePoint(index: int64): void
        
        /** Removes all points from the curve. */
        clearPoints(): void
        
        /** Returns the curve coordinates for the point at [param index]. */
        getPointPosition(index: int64): Vector2
        
        /** Assigns the vertical position [param y] to the point at [param index]. */
        setPointValue(index: int64, y: float64): void
        
        /** Sets the offset from `0.5`. */
        setPointOffset(index: int64, offset: float64): int64
        
        /** Returns the Y value for the point that would exist at the X position [param offset] along the curve. */
        sample(offset: float64): float64
        
        /** Returns the Y value for the point that would exist at the X position [param offset] along the curve using the baked cache. Bakes the curve's points if not already baked. */
        sampleBaked(offset: float64): float64
        
        /** Returns the left tangent angle (in degrees) for the point at [param index]. */
        getPointLeftTangent(index: int64): float64
        
        /** Returns the right tangent angle (in degrees) for the point at [param index]. */
        getPointRightTangent(index: int64): float64
        
        /** Returns the left [enum TangentMode] for the point at [param index]. */
        getPointLeftMode(index: int64): Curve.TangentMode
        
        /** Returns the right [enum TangentMode] for the point at [param index]. */
        getPointRightMode(index: int64): Curve.TangentMode
        
        /** Sets the left tangent angle for the point at [param index] to [param tangent]. */
        setPointLeftTangent(index: int64, tangent: float64): void
        
        /** Sets the right tangent angle for the point at [param index] to [param tangent]. */
        setPointRightTangent(index: int64, tangent: float64): void
        
        /** Sets the left [enum TangentMode] for the point at [param index] to [param mode]. */
        setPointLeftMode(index: int64, mode: Curve.TangentMode): void
        
        /** Sets the right [enum TangentMode] for the point at [param index] to [param mode]. */
        setPointRightMode(index: int64, mode: Curve.TangentMode): void
        
        /** Returns the difference between [member min_value] and [member max_value]. */
        getValueRange(): float64
        
        /** Returns the difference between [member min_domain] and [member max_domain]. */
        getDomainRange(): float64
        
        /** Removes duplicate points, i.e. points that are less than 0.00001 units (engine epsilon value) away from their neighbor on the curve. */
        cleanDupes(): void
        
        /** Recomputes the baked cache of points for the curve. */
        bake(): void
        
        /** The minimum domain (x-coordinate) that points can have. */
        get minDomain(): float64
        set minDomain(value: float64)
        
        /** The maximum domain (x-coordinate) that points can have. */
        get maxDomain(): float64
        set maxDomain(value: float64)
        
        /** The minimum value (y-coordinate) that points can have. Tangents can cause lower values between points. */
        get minValue(): float64
        set minValue(value: float64)
        
        /** The maximum value (y-coordinate) that points can have. Tangents can cause higher values between points. */
        get maxValue(): float64
        set maxValue(value: float64)
        get _limits(): any
        set _limits(value: any)
        
        /** The number of points to include in the baked (i.e. cached) curve data. */
        get bakeResolution(): int64
        set bakeResolution(value: int64)
        get _data(): int64
        set _data(value: int64)
        
        /** The number of points describing the curve. */
        get pointCount(): any /*Points,point_*/
        set pointCount(value: any /*Points,point_*/)
        
        /** Emitted when [member max_value] or [member min_value] is changed. */
        readonly rangeChanged: Signal<() => void>
        
        /** Emitted when [member max_domain] or [member min_domain] is changed. */
        readonly domainChanged: Signal<() => void>
    }
    /** Describes a Bézier curve in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_curve2d.html  
     */
    class Curve2D extends Resource {
        constructor(identifier?: any)
        /** Adds a point with the specified [param position] relative to the curve's own position, with control points [param in] and [param out]. Appends the new point at the end of the point list.  
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. Every existing point starting from [param index] is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See [member point_count].  
         */
        addPoint(position: Vector2, in_?: Vector2 /* = Vector2.ZERO */, out_?: Vector2 /* = Vector2.ZERO */, index?: int64 /* = -1 */): void
        
        /** Sets the position for the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. */
        setPointPosition(idx: int64, position: Vector2): void
        
        /** Returns the position of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`. */
        getPointPosition(idx: int64): Vector2
        
        /** Sets the position of the control point leading to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        setPointIn(idx: int64, position: Vector2): void
        
        /** Returns the position of the control point leading to the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`. */
        getPointIn(idx: int64): Vector2
        
        /** Sets the position of the control point leading out of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        setPointOut(idx: int64, position: Vector2): void
        
        /** Returns the position of the control point leading out of the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0)`. */
        getPointOut(idx: int64): Vector2
        
        /** Deletes the point [param idx] from the curve. Sends an error to the console if [param idx] is out of bounds. */
        removePoint(idx: int64): void
        
        /** Removes all points from the curve. */
        clearPoints(): void
        
        /** Returns the position between the vertex [param idx] and the vertex `idx + 1`, where [param t] controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of [param t] outside the range (`0.0 <= t <= 1.0`) give strange, but predictable results.  
         *  If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0)`.  
         */
        sample(idx: int64, t: float64): Vector2
        
        /** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as `idx`, and its fractional part as `t`. */
        samplef(fofs: float64): Vector2
        
        /** Returns the total length of the curve, based on the cached points. Given enough density (see [member bake_interval]), it should be approximate enough. */
        getBakedLength(): float64
        
        /** Returns a point within the curve at position [param offset], where [param offset] is measured as a pixel distance along the curve.  
         *  To do that, it finds the two cached points where the [param offset] lies between, then interpolates the values. This interpolation is cubic if [param cubic] is set to `true`, or linear if set to `false`.  
         *  Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).  
         */
        sampleBaked(offset?: float64 /* = 0 */, cubic?: boolean /* = false */): Vector2
        
        /** Similar to [method sample_baked], but returns [Transform2D] that includes a rotation along the curve, with [member Transform2D.origin] as the point position and the [member Transform2D.x] vector pointing in the direction of the path at that point. Returns an empty transform if the length of the curve is `0`.  
         *    
         */
        sampleBakedWithRotation(offset?: float64 /* = 0 */, cubic?: boolean /* = false */): Transform2D
        
        /** Returns the cache of points as a [PackedVector2Array]. */
        getBakedPoints(): PackedVector2Array
        
        /** Returns the closest point on baked segments (in curve's local space) to [param to_point].  
         *  [param to_point] must be in this curve's local space.  
         */
        getClosestPoint(toPoint: Vector2): Vector2
        
        /** Returns the closest offset to [param to_point]. This offset is meant to be used in [method sample_baked].  
         *  [param to_point] must be in this curve's local space.  
         */
        getClosestOffset(toPoint: Vector2): float64
        
        /** Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.  
         *  This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.  
         *  [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!  
         *  [param tolerance_degrees] controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.  
         */
        tessellate(maxStages?: int64 /* = 5 */, toleranceDegrees?: float64 /* = 4 */): PackedVector2Array
        
        /** Returns a list of points along the curve, with almost uniform density. [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!  
         *  [param tolerance_length] controls the maximal distance between two neighboring points, before the segment has to be subdivided.  
         */
        tessellateEvenLength(maxStages?: int64 /* = 5 */, toleranceLength?: float64 /* = 20 */): PackedVector2Array
        
        /** The distance in pixels between two adjacent cached points. Changing it forces the cache to be recomputed the next time the [method get_baked_points] or [method get_baked_length] function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care. */
        get bakeInterval(): float64
        set bakeInterval(value: float64)
        get _data(): int64
        set _data(value: int64)
        
        /** The number of points describing the curve. */
        get pointCount(): any /*Points,point_*/
        set pointCount(value: any /*Points,point_*/)
    }
    /** Describes a Bézier curve in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_curve3d.html  
     */
    class Curve3D extends Resource {
        constructor(identifier?: any)
        /** Adds a point with the specified [param position] relative to the curve's own position, with control points [param in] and [param out]. Appends the new point at the end of the point list.  
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. Every existing point starting from [param index] is shifted further down the list of points. The index must be greater than or equal to `0` and must not exceed the number of existing points in the line. See [member point_count].  
         */
        addPoint(position: Vector3, in_?: Vector3 /* = new Vector3(0, 0, 0) */, out_?: Vector3 /* = new Vector3(0, 0, 0) */, index?: int64 /* = -1 */): void
        
        /** Sets the position for the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. */
        setPointPosition(idx: int64, position: Vector3): void
        
        /** Returns the position of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`. */
        getPointPosition(idx: int64): Vector3
        
        /** Sets the tilt angle in radians for the point [param idx]. If the index is out of bounds, the function sends an error to the console.  
         *  The tilt controls the rotation along the look-at axis an object traveling the path would have. In the case of a curve controlling a [PathFollow3D], this tilt is an offset over the natural tilt the [PathFollow3D] calculates.  
         */
        setPointTilt(idx: int64, tilt: float64): void
        
        /** Returns the tilt angle in radians for the point [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `0`. */
        getPointTilt(idx: int64): float64
        
        /** Sets the position of the control point leading to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        setPointIn(idx: int64, position: Vector3): void
        
        /** Returns the position of the control point leading to the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`. */
        getPointIn(idx: int64): Vector3
        
        /** Sets the position of the control point leading out of the vertex [param idx]. If the index is out of bounds, the function sends an error to the console. The position is relative to the vertex. */
        setPointOut(idx: int64, position: Vector3): void
        
        /** Returns the position of the control point leading out of the vertex [param idx]. The returned position is relative to the vertex [param idx]. If the index is out of bounds, the function sends an error to the console, and returns `(0, 0, 0)`. */
        getPointOut(idx: int64): Vector3
        
        /** Deletes the point [param idx] from the curve. Sends an error to the console if [param idx] is out of bounds. */
        removePoint(idx: int64): void
        
        /** Removes all points from the curve. */
        clearPoints(): void
        
        /** Returns the position between the vertex [param idx] and the vertex `idx + 1`, where [param t] controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of [param t] outside the range (`0.0 >= t <=1`) give strange, but predictable results.  
         *  If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0, 0)`.  
         */
        sample(idx: int64, t: float64): Vector3
        
        /** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as `idx`, and its fractional part as `t`. */
        samplef(fofs: float64): Vector3
        
        /** Returns the total length of the curve, based on the cached points. Given enough density (see [member bake_interval]), it should be approximate enough. */
        getBakedLength(): float64
        
        /** Returns a point within the curve at position [param offset], where [param offset] is measured as a distance in 3D units along the curve. To do that, it finds the two cached points where the [param offset] lies between, then interpolates the values. This interpolation is cubic if [param cubic] is set to `true`, or linear if set to `false`.  
         *  Cubic interpolation tends to follow the curves better, but linear is faster (and often, precise enough).  
         */
        sampleBaked(offset?: float64 /* = 0 */, cubic?: boolean /* = false */): Vector3
        
        /** Returns a [Transform3D] with `origin` as point position, `basis.x` as sideway vector, `basis.y` as up vector, `basis.z` as forward vector. When the curve length is 0, there is no reasonable way to calculate the rotation, all vectors aligned with global space axes. See also [method sample_baked]. */
        sampleBakedWithRotation(offset?: float64 /* = 0 */, cubic?: boolean /* = false */, applyTilt?: boolean /* = false */): Transform3D
        
        /** Returns an up vector within the curve at position [param offset], where [param offset] is measured as a distance in 3D units along the curve. To do that, it finds the two cached up vectors where the [param offset] lies between, then interpolates the values. If [param apply_tilt] is `true`, an interpolated tilt is applied to the interpolated up vector.  
         *  If the curve has no up vectors, the function sends an error to the console, and returns `(0, 1, 0)`.  
         */
        sampleBakedUpVector(offset: float64, applyTilt?: boolean /* = false */): Vector3
        
        /** Returns the cache of points as a [PackedVector3Array]. */
        getBakedPoints(): PackedVector3Array
        
        /** Returns the cache of tilts as a [PackedFloat32Array]. */
        getBakedTilts(): PackedFloat32Array
        
        /** Returns the cache of up vectors as a [PackedVector3Array].  
         *  If [member up_vector_enabled] is `false`, the cache will be empty.  
         */
        getBakedUpVectors(): PackedVector3Array
        
        /** Returns the closest point on baked segments (in curve's local space) to [param to_point].  
         *  [param to_point] must be in this curve's local space.  
         */
        getClosestPoint(toPoint: Vector3): Vector3
        
        /** Returns the closest offset to [param to_point]. This offset is meant to be used in [method sample_baked] or [method sample_baked_up_vector].  
         *  [param to_point] must be in this curve's local space.  
         */
        getClosestOffset(toPoint: Vector3): float64
        
        /** Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.  
         *  This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.  
         *  [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!  
         *  [param tolerance_degrees] controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.  
         */
        tessellate(maxStages?: int64 /* = 5 */, toleranceDegrees?: float64 /* = 4 */): PackedVector3Array
        
        /** Returns a list of points along the curve, with almost uniform density. [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!  
         *  [param tolerance_length] controls the maximal distance between two neighboring points, before the segment has to be subdivided.  
         */
        tessellateEvenLength(maxStages?: int64 /* = 5 */, toleranceLength?: float64 /* = 0.2 */): PackedVector3Array
        
        /** If `true`, and the curve has more than 2 control points, the last point and the first one will be connected in a loop. */
        get closed(): boolean
        set closed(value: boolean)
        
        /** The distance in meters between two adjacent cached points. Changing it forces the cache to be recomputed the next time the [method get_baked_points] or [method get_baked_length] function is called. The smaller the distance, the more points in the cache and the more memory it will consume, so use with care. */
        get bakeInterval(): float64
        set bakeInterval(value: float64)
        get _data(): int64
        set _data(value: int64)
        
        /** The number of points describing the curve. */
        get pointCount(): any /*Points,point_*/
        set pointCount(value: any /*Points,point_*/)
        
        /** If `true`, the curve will bake up vectors used for orientation. This is used when [member PathFollow3D.rotation_mode] is set to [constant PathFollow3D.ROTATION_ORIENTED]. Changing it forces the cache to be recomputed. */
        get upVectorEnabled(): boolean
        set upVectorEnabled(value: boolean)
    }
    namespace CurveTexture {
        enum TextureMode {
            TextureModeRgb = 0,
            TextureModeRed = 1,
        }
    }
    /** A 1D texture where pixel brightness corresponds to points on a curve.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_curvetexture.html  
     */
    class CurveTexture extends Texture2D {
        /** Store the curve equally across the red, green and blue channels. This uses more video memory, but is more compatible with shaders that only read the green and blue values. */
        static readonly TEXTURE_MODE_RGB = 0
        
        /** Store the curve only in the red channel. This saves video memory, but some custom shaders may not be able to work with this. */
        static readonly TEXTURE_MODE_RED = 1
        constructor(identifier?: any)
        
        /** The width of the texture (in pixels). Higher values make it possible to represent high-frequency data better (such as sudden direction changes), at the cost of increased generation time and memory usage. */
        get width(): int64
        set width(value: int64)
        
        /** The format the texture should be generated with. When passing a CurveTexture as an input to a [Shader], this may need to be adjusted. */
        get textureMode(): int64
        set textureMode(value: int64)
        
        /** The [Curve] that is rendered onto the texture. Should be a unit [Curve]. */
        get curve(): null | Curve
        set curve(value: null | Curve)
    }
    class CurveXyzTexture extends Texture2D {
        constructor(identifier?: any)
        get width(): int64
        set width(value: int64)
        get curveX(): null | Curve
        set curveX(value: null | Curve)
        get curveY(): null | Curve
        set curveY(value: null | Curve)
        get curveZ(): null | Curve
        set curveZ(value: null | Curve)
    }
    /** Class representing a cylindrical [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cylindermesh.html  
     */
    class CylinderMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Top radius of the cylinder. If set to `0.0`, the top faces will not be generated, resulting in a conic shape. See also [member cap_top]. */
        get topRadius(): float64
        set topRadius(value: float64)
        
        /** Bottom radius of the cylinder. If set to `0.0`, the bottom faces will not be generated, resulting in a conic shape. See also [member cap_bottom]. */
        get bottomRadius(): float64
        set bottomRadius(value: float64)
        
        /** Full height of the cylinder. */
        get height(): float64
        set height(value: float64)
        
        /** Number of radial segments on the cylinder. Higher values result in a more detailed cylinder/cone at the cost of performance. */
        get radialSegments(): int64
        set radialSegments(value: int64)
        
        /** Number of edge rings along the height of the cylinder. Changing [member rings] does not have any visual impact unless a shader or procedural mesh tool is used to alter the vertex data. Higher values result in more subdivisions, which can be used to create smoother-looking effects with shaders or procedural mesh tools (at the cost of performance). When not altering the vertex data using a shader or procedural mesh tool, [member rings] should be kept to its default value. */
        get rings(): int64
        set rings(value: int64)
        
        /** If `true`, generates a cap at the top of the cylinder. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. See also [member top_radius].  
         *      
         *  **Note:** If [member top_radius] is `0.0`, cap generation is always skipped even if [member cap_top] is `true`.  
         */
        get capTop(): boolean
        set capTop(value: boolean)
        
        /** If `true`, generates a cap at the bottom of the cylinder. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. See also [member bottom_radius].  
         *      
         *  **Note:** If [member bottom_radius] is `0.0`, cap generation is always skipped even if [member cap_bottom] is `true`.  
         */
        get capBottom(): boolean
        set capBottom(value: boolean)
    }
    /** A 3D cylinder shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cylindershape3d.html  
     */
    class CylinderShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The cylinder's height. */
        get height(): float64
        set height(value: float64)
        
        /** The cylinder's radius. */
        get radius(): float64
        set radius(value: float64)
    }
    class DtlsServer extends RefCounted {
        constructor(identifier?: any)
        setup(serverOptions: TlsOptions): GError
        takeConnection(udpPeer: PacketPeerUdp): null | PacketPeerDtls
    }
    /** A physics joint that connects two 2D physics bodies with a spring-like force.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_dampedspringjoint2d.html  
     */
    class DampedSpringJoint2D<Map extends NodePathMap = any> extends Joint2D<Map> {
        constructor(identifier?: any)
        /** The spring joint's maximum length. The two attached bodies cannot stretch it past this value. */
        get length(): float64
        set length(value: float64)
        
        /** When the bodies attached to the spring joint move they stretch or squash it. The joint always tries to resize towards this length. */
        get restLength(): float64
        set restLength(value: float64)
        
        /** The higher the value, the less the bodies attached to the joint will deform it. The joint applies an opposing force to the bodies, the product of the stiffness multiplied by the size difference from its resting length. */
        get stiffness(): float64
        set stiffness(value: float64)
        
        /** The spring joint's damping ratio. A value between `0` and `1`. When the two bodies move into different directions the system tries to align them to the spring axis again. A high [member damping] value forces the attached bodies to align faster. */
        get damping(): float64
        set damping(value: float64)
    }
    namespace Decal {
        enum DecalTexture {
            TextureAlbedo = 0,
            TextureNormal = 1,
            TextureOrm = 2,
            TextureEmission = 3,
            TextureMax = 4,
        }
    }
    /** Node that projects a texture onto a [MeshInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_decal.html  
     */
    class Decal<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        /** [Texture2D] corresponding to [member texture_albedo]. */
        static readonly TEXTURE_ALBEDO = 0
        
        /** [Texture2D] corresponding to [member texture_normal]. */
        static readonly TEXTURE_NORMAL = 1
        
        /** [Texture2D] corresponding to [member texture_orm]. */
        static readonly TEXTURE_ORM = 2
        
        /** [Texture2D] corresponding to [member texture_emission]. */
        static readonly TEXTURE_EMISSION = 3
        
        /** Max size of [enum DecalTexture] enum. */
        static readonly TEXTURE_MAX = 4
        constructor(identifier?: any)
        
        /** Sets the [Texture2D] associated with the specified [enum DecalTexture]. This is a convenience method, in most cases you should access the texture directly.  
         *  For example, instead of `$Decal.set_texture(Decal.TEXTURE_ALBEDO, albedo_tex)`, use `$Decal.texture_albedo = albedo_tex`.  
         *  One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:  
         *    
         */
        setTexture(type: Decal.DecalTexture, texture: Texture2D): void
        
        /** Returns the [Texture2D] associated with the specified [enum DecalTexture]. This is a convenience method, in most cases you should access the texture directly.  
         *  For example, instead of `albedo_tex = $Decal.get_texture(Decal.TEXTURE_ALBEDO)`, use `albedo_tex = $Decal.texture_albedo`.  
         *  One case where this is better than accessing the texture directly is when you want to copy one Decal's textures to another. For example:  
         *    
         */
        getTexture(type: Decal.DecalTexture): null | Texture2D
        
        /** Sets the size of the [AABB] used by the decal. All dimensions must be set to a value greater than zero (they will be clamped to `0.001` if this is not the case). The AABB goes from `-size/2` to `size/2`.  
         *      
         *  **Note:** To improve culling efficiency of "hard surface" decals, set their [member upper_fade] and [member lower_fade] to `0.0` and set the Y component of the [member size] as low as possible. This will reduce the decals' AABB size without affecting their appearance.  
         */
        get size(): Vector3
        set size(value: Vector3)
        
        /** [Texture2D] with the base [Color] of the Decal. Either this or the [member texture_emission] must be set for the Decal to be visible. Use the alpha channel like a mask to smoothly blend the edges of the decal with the underlying object.  
         *      
         *  **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for [Decal] textures is set globally with [member ProjectSettings.rendering/textures/decals/filter].  
         */
        get textureAlbedo(): null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/
        set textureAlbedo(value: null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/)
        
        /** [Texture2D] with the per-pixel normal map for the decal. Use this to add extra detail to decals.  
         *      
         *  **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for [Decal] textures is set globally with [member ProjectSettings.rendering/textures/decals/filter].  
         *      
         *  **Note:** Setting this texture alone will not result in a visible decal, as [member texture_albedo] must also be set. To create a normal-only decal, load an albedo texture into [member texture_albedo] and set [member albedo_mix] to `0.0`. The albedo texture's alpha channel will be used to determine where the underlying surface's normal map should be overridden (and its intensity).  
         */
        get textureNormal(): null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/
        set textureNormal(value: null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/)
        
        /** [Texture2D] storing ambient occlusion, roughness, and metallic for the decal. Use this to add extra detail to decals.  
         *      
         *  **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for [Decal] textures is set globally with [member ProjectSettings.rendering/textures/decals/filter].  
         *      
         *  **Note:** Setting this texture alone will not result in a visible decal, as [member texture_albedo] must also be set. To create an ORM-only decal, load an albedo texture into [member texture_albedo] and set [member albedo_mix] to `0.0`. The albedo texture's alpha channel will be used to determine where the underlying surface's ORM map should be overridden (and its intensity).  
         */
        get textureOrm(): null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/
        set textureOrm(value: null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/)
        
        /** [Texture2D] with the emission [Color] of the Decal. Either this or the [member texture_albedo] must be set for the Decal to be visible. Use the alpha channel like a mask to smoothly blend the edges of the decal with the underlying object.  
         *      
         *  **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for [Decal] textures is set globally with [member ProjectSettings.rendering/textures/decals/filter].  
         */
        get textureEmission(): null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/
        set textureEmission(value: null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/)
        
        /** Energy multiplier for the emission texture. This will make the decal emit light at a higher or lower intensity, independently of the albedo color. See also [member modulate]. */
        get emissionEnergy(): float64
        set emissionEnergy(value: float64)
        
        /** Changes the [Color] of the Decal by multiplying the albedo and emission colors with this value. The alpha component is only taken into account when multiplying the albedo color, not the emission color. See also [member emission_energy] and [member albedo_mix] to change the emission and albedo intensity independently of each other. */
        get modulate(): Color
        set modulate(value: Color)
        
        /** Blends the albedo [Color] of the decal with albedo [Color] of the underlying mesh. This can be set to `0.0` to create a decal that only affects normal or ORM. In this case, an albedo texture is still required as its alpha channel will determine where the normal and ORM will be overridden. See also [member modulate]. */
        get albedoMix(): float64
        set albedoMix(value: float64)
        
        /** Fades the Decal if the angle between the Decal's [AABB] and the target surface becomes too large. A value of `0` projects the Decal regardless of angle, a value of `1` limits the Decal to surfaces that are nearly perpendicular.  
         *      
         *  **Note:** Setting [member normal_fade] to a value greater than `0.0` has a small performance cost due to the added normal angle computations.  
         */
        get normalFade(): float64
        set normalFade(value: float64)
        
        /** Sets the curve over which the decal will fade as the surface gets further from the center of the [AABB]. Only positive values are valid (negative values will be clamped to `0.0`). See also [member lower_fade]. */
        get upperFade(): float64
        set upperFade(value: float64)
        
        /** Sets the curve over which the decal will fade as the surface gets further from the center of the [AABB]. Only positive values are valid (negative values will be clamped to `0.0`). See also [member upper_fade]. */
        get lowerFade(): float64
        set lowerFade(value: float64)
        
        /** If `true`, decals will smoothly fade away when far from the active [Camera3D] starting at [member distance_fade_begin]. The Decal will fade out over [member distance_fade_begin] + [member distance_fade_length], after which it will be culled and not sent to the shader at all. Use this to reduce the number of active Decals in a scene and thus improve performance. */
        get distanceFadeEnabled(): boolean
        set distanceFadeEnabled(value: boolean)
        
        /** The distance from the camera at which the Decal begins to fade away (in 3D units). */
        get distanceFadeBegin(): float64
        set distanceFadeBegin(value: float64)
        
        /** The distance over which the Decal fades (in 3D units). The Decal becomes slowly more transparent over this distance and is completely invisible at the end. Higher values result in a smoother fade-out transition, which is more suited when the camera moves fast. */
        get distanceFadeLength(): float64
        set distanceFadeLength(value: float64)
        
        /** Specifies which [member VisualInstance3D.layers] this decal will project on. By default, Decals affect all layers. This is used so you can specify which types of objects receive the Decal and which do not. This is especially useful so you can ensure that dynamic objects don't accidentally receive a Decal intended for the terrain under them. */
        get cullMask(): int64
        set cullMask(value: int64)
    }
    /** Provides methods for managing directories and their content.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_diraccess.html  
     */
    class DirAccess extends RefCounted {
        constructor(identifier?: any)
        /** Creates a new [DirAccess] object and opens an existing directory of the filesystem. The [param path] argument can be within the project tree (`res://folder`), the user directory (`user://folder`) or an absolute path of the user filesystem (e.g. `/tmp/folder` or `C:\tmp\folder`).  
         *  Returns `null` if opening the directory failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open(path: string): null | DirAccess
        
        /** Returns the result of the last [method open] call in the current thread. */
        static getOpenError(): GError
        
        /** Creates a temporary directory. This directory will be freed when the returned [DirAccess] is freed.  
         *  If [param prefix] is not empty, it will be prefixed to the directory name, separated by a `-`.  
         *  If [param keep] is `true`, the directory is not deleted when the returned [DirAccess] is freed.  
         *  Returns `null` if opening the directory failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static createTemp(prefix?: string /* = '' */, keep?: boolean /* = false */): DirAccess
        
        /** Initializes the stream used to list all files and directories using the [method get_next] function, closing the currently opened stream if needed. Once the stream has been processed, it should typically be closed with [method list_dir_end].  
         *  Affected by [member include_hidden] and [member include_navigational].  
         *      
         *  **Note:** The order of files and directories returned by this method is not deterministic, and can vary between operating systems. If you want a list of all files or folders sorted alphabetically, use [method get_files] or [method get_directories].  
         */
        listDirBegin(): GError
        
        /** Returns the next element (file or directory) in the current directory.  
         *  The name of the file or directory is returned (and not its full path). Once the stream has been fully processed, the method returns an empty [String] and closes the stream automatically (i.e. [method list_dir_end] would not be mandatory in such a case).  
         */
        getNext(): string
        
        /** Returns whether the current item processed with the last [method get_next] call is a directory (`.` and `..` are considered directories). */
        currentIsDir(): boolean
        
        /** Closes the current stream opened with [method list_dir_begin] (whether it has been fully processed with [method get_next] does not matter). */
        listDirEnd(): void
        
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding directories. The array is sorted alphabetically.  
         *  Affected by [member include_hidden].  
         *      
         *  **Note:** When used on a `res://` path in an exported project, only the files actually included in the PCK at the given folder level are returned. In practice, this means that since imported resources are stored in a top-level `.godot/` folder, only paths to `*.gd` and `*.import` files are returned (plus a few files such as `project.godot` or `project.binary` and the project icon). In an exported project, the list of returned files will also vary depending on whether [member ProjectSettings.editor/export/convert_text_resources_to_binary] is `true`.  
         */
        getFiles(): PackedStringArray
        
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding directories, at the given [param path]. The array is sorted alphabetically.  
         *  Use [method get_files] if you want more control of what gets included.  
         *      
         *  **Note:** When used on a `res://` path in an exported project, only the files included in the PCK at the given folder level are returned. In practice, this means that since imported resources are stored in a top-level `.godot/` folder, only paths to `.gd` and `.import` files are returned (plus a few other files, such as `project.godot` or `project.binary` and the project icon). In an exported project, the list of returned files will also vary depending on [member ProjectSettings.editor/export/convert_text_resources_to_binary].  
         */
        static getFilesAt(path: string): PackedStringArray
        
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding files. The array is sorted alphabetically.  
         *  Affected by [member include_hidden] and [member include_navigational].  
         *      
         *  **Note:** The returned directories in the editor and after exporting in the `res://` directory may differ as some files are converted to engine-specific formats when exported.  
         */
        getDirectories(): PackedStringArray
        
        /** Returns a [PackedStringArray] containing filenames of the directory contents, excluding files, at the given [param path]. The array is sorted alphabetically.  
         *  Use [method get_directories] if you want more control of what gets included.  
         *      
         *  **Note:** The returned directories in the editor and after exporting in the `res://` directory may differ as some files are converted to engine-specific formats when exported.  
         */
        static getDirectoriesAt(path: string): PackedStringArray
        
        /** On Windows, returns the number of drives (partitions) mounted on the current filesystem.  
         *  On macOS, returns the number of mounted volumes.  
         *  On Linux, returns the number of mounted volumes and GTK 3 bookmarks.  
         *  On other platforms, the method returns 0.  
         */
        static getDriveCount(): int64
        
        /** On Windows, returns the name of the drive (partition) passed as an argument (e.g. `C:`).  
         *  On macOS, returns the path to the mounted volume passed as an argument.  
         *  On Linux, returns the path to the mounted volume or GTK 3 bookmark passed as an argument.  
         *  On other platforms, or if the requested drive does not exist, the method returns an empty String.  
         */
        static getDriveName(idx: int64): string
        
        /** Returns the currently opened directory's drive index. See [method get_drive_name] to convert returned index to the name of the drive. */
        getCurrentDrive(): int64
        
        /** Changes the currently opened directory to the one passed as an argument. The argument can be relative to the current directory (e.g. `newdir` or `../newdir`), or an absolute path (e.g. `/tmp/newdir` or `res://somedir/newdir`).  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         *      
         *  **Note:** The new directory must be within the same scope, e.g. when you had opened a directory inside `res://`, you can't change it to `user://` directory. If you need to open a directory in another access scope, use [method open] to create a new instance instead.  
         */
        changeDir(toDir: string): GError
        
        /** Returns the absolute path to the currently opened directory (e.g. `res://folder` or `C:\tmp\folder`). */
        getCurrentDir(includeDrive?: boolean /* = true */): string
        
        /** Creates a directory. The argument can be relative to the current directory, or an absolute path. The target directory should be placed in an already existing directory (to create the full path recursively, see [method make_dir_recursive]).  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        makeDir(path: string): GError
        
        /** Static version of [method make_dir]. Supports only absolute paths. */
        static makeDirAbsolute(path: string): GError
        
        /** Creates a target directory and all necessary intermediate directories in its path, by calling [method make_dir] recursively. The argument can be relative to the current directory, or an absolute path.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        makeDirRecursive(path: string): GError
        
        /** Static version of [method make_dir_recursive]. Supports only absolute paths. */
        static makeDirRecursiveAbsolute(path: string): GError
        
        /** Returns whether the target file exists. The argument can be relative to the current directory, or an absolute path.  
         *  For a static equivalent, use [method FileAccess.file_exists].  
         *      
         *  **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. See [method ResourceLoader.exists] for an alternative approach that takes resource remapping into account.  
         */
        fileExists(path: string): boolean
        
        /** Returns whether the target directory exists. The argument can be relative to the current directory, or an absolute path.  
         *      
         *  **Note:** The returned [bool] in the editor and after exporting when used on a path in the `res://` directory may be different. Some files are converted to engine-specific formats when exported, potentially changing the directory structure.  
         */
        dirExists(path: string): boolean
        
        /** Static version of [method dir_exists]. Supports only absolute paths.  
         *      
         *  **Note:** The returned [bool] in the editor and after exporting when used on a path in the `res://` directory may be different. Some files are converted to engine-specific formats when exported, potentially changing the directory structure.  
         */
        static dirExistsAbsolute(path: string): boolean
        
        /** Returns the available space on the current directory's disk, in bytes. Returns `0` if the platform-specific method to query the available space fails. */
        getSpaceLeft(): int64
        
        /** Copies the [param from] file to the [param to] destination. Both arguments should be paths to files, either relative or absolute. If the destination file exists and is not access-protected, it will be overwritten.  
         *  If [param chmod_flags] is different than `-1`, the Unix permissions for the destination path will be set to the provided value, if available on the current operating system.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        copy(from: string, to: string, chmodFlags?: int64 /* = -1 */): GError
        
        /** Static version of [method copy]. Supports only absolute paths. */
        static copyAbsolute(from: string, to: string, chmodFlags?: int64 /* = -1 */): GError
        
        /** Renames (move) the [param from] file or directory to the [param to] destination. Both arguments should be paths to files or directories, either relative or absolute. If the destination file or directory exists and is not access-protected, it will be overwritten.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        rename(from: string, to: string): GError
        
        /** Static version of [method rename]. Supports only absolute paths. */
        static renameAbsolute(from: string, to: string): GError
        
        /** Permanently deletes the target file or an empty directory. The argument can be relative to the current directory, or an absolute path. If the target directory is not empty, the operation will fail.  
         *  If you don't want to delete the file/directory permanently, use [method OS.move_to_trash] instead.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        remove(path: string): GError
        
        /** Static version of [method remove]. Supports only absolute paths. */
        static removeAbsolute(path: string): GError
        
        /** Returns `true` if the file or directory is a symbolic link, directory junction, or other reparse point.  
         *      
         *  **Note:** This method is implemented on macOS, Linux, and Windows.  
         */
        isLink(path: string): boolean
        
        /** Returns target of the symbolic link.  
         *      
         *  **Note:** This method is implemented on macOS, Linux, and Windows.  
         */
        readLink(path: string): string
        
        /** Creates symbolic link between files or folders.  
         *      
         *  **Note:** On Windows, this method works only if the application is running with elevated privileges or Developer Mode is enabled.  
         *      
         *  **Note:** This method is implemented on macOS, Linux, and Windows.  
         */
        createLink(source: string, target: string): GError
        
        /** Returns `true` if the directory is a macOS bundle.  
         *      
         *  **Note:** This method is implemented on macOS.  
         */
        isBundle(path: string): boolean
        
        /** Returns `true` if the file system or directory use case sensitive file names.  
         *      
         *  **Note:** This method is implemented on macOS, Linux (for EXT4 and F2FS filesystems only) and Windows. On other platforms, it always returns `true`.  
         */
        isCaseSensitive(path: string): boolean
        
        /** Returns `true` if paths [param path_a] and [param path_b] resolve to the same file system object. Returns `false` otherwise, even if the files are bit-for-bit identical (e.g., identical copies of the file that are not symbolic links). */
        isEquivalent(pathA: string, pathB: string): boolean
        
        /** If `true`, `.` and `..` are included when navigating the directory.  
         *  Affects [method list_dir_begin] and [method get_directories].  
         */
        get includeNavigational(): boolean
        set includeNavigational(value: boolean)
        
        /** If `true`, hidden files are included when navigating the directory.  
         *  Affects [method list_dir_begin], [method get_directories] and [method get_files].  
         */
        get includeHidden(): boolean
        set includeHidden(value: boolean)
    }
    /** Directional 2D light from a distance.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_directionallight2d.html  
     */
    class DirectionalLight2D<Map extends NodePathMap = any> extends Light2D<Map> {
        constructor(identifier?: any)
        /** The height of the light. Used with 2D normal mapping. Ranges from 0 (parallel to the plane) to 1 (perpendicular to the plane). */
        get height(): float64
        set height(value: float64)
        
        /** The maximum distance from the camera center objects can be before their shadows are culled (in pixels). Decreasing this value can prevent objects located outside the camera from casting shadows (while also improving performance). [member Camera2D.zoom] is not taken into account by [member max_distance], which means that at higher zoom values, shadows will appear to fade out sooner when zooming onto a given point. */
        get maxDistance(): float64
        set maxDistance(value: float64)
    }
    namespace DirectionalLight3D {
        enum ShadowMode {
            ShadowOrthogonal = 0,
            ShadowParallel2Splits = 1,
            ShadowParallel4Splits = 2,
        }
        enum SkyMode {
            SkyModeLightAndSky = 0,
            SkyModeLightOnly = 1,
            SkyModeSkyOnly = 2,
        }
    }
    /** Directional light from a distance, as from the Sun.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_directionallight3d.html  
     */
    class DirectionalLight3D<Map extends NodePathMap = any> extends Light3D<Map> {
        /** Renders the entire scene's shadow map from an orthogonal point of view. This is the fastest directional shadow mode. May result in blurrier shadows on close objects. */
        static readonly SHADOW_ORTHOGONAL = 0
        
        /** Splits the view frustum in 2 areas, each with its own shadow map. This shadow mode is a compromise between [constant SHADOW_ORTHOGONAL] and [constant SHADOW_PARALLEL_4_SPLITS] in terms of performance. */
        static readonly SHADOW_PARALLEL_2_SPLITS = 1
        
        /** Splits the view frustum in 4 areas, each with its own shadow map. This is the slowest directional shadow mode. */
        static readonly SHADOW_PARALLEL_4_SPLITS = 2
        
        /** Makes the light visible in both scene lighting and sky rendering. */
        static readonly SKY_MODE_LIGHT_AND_SKY = 0
        
        /** Makes the light visible in scene lighting only (including direct lighting and global illumination). When using this mode, the light will not be visible from sky shaders. */
        static readonly SKY_MODE_LIGHT_ONLY = 1
        
        /** Makes the light visible to sky shaders only. When using this mode the light will not cast light into the scene (either through direct lighting or through global illumination), but can be accessed through sky shaders. This can be useful, for example, when you want to control sky effects without illuminating the scene (during a night cycle, for example). */
        static readonly SKY_MODE_SKY_ONLY = 2
        constructor(identifier?: any)
        
        /** The light's shadow rendering algorithm. See [enum ShadowMode]. */
        get directionalShadowMode(): int64
        set directionalShadowMode(value: int64)
        
        /** The distance from camera to shadow split 1. Relative to [member directional_shadow_max_distance]. Only used when [member directional_shadow_mode] is [constant SHADOW_PARALLEL_2_SPLITS] or [constant SHADOW_PARALLEL_4_SPLITS]. */
        get directionalShadowSplit1(): float64
        set directionalShadowSplit1(value: float64)
        
        /** The distance from shadow split 1 to split 2. Relative to [member directional_shadow_max_distance]. Only used when [member directional_shadow_mode] is [constant SHADOW_PARALLEL_4_SPLITS]. */
        get directionalShadowSplit2(): float64
        set directionalShadowSplit2(value: float64)
        
        /** The distance from shadow split 2 to split 3. Relative to [member directional_shadow_max_distance]. Only used when [member directional_shadow_mode] is [constant SHADOW_PARALLEL_4_SPLITS]. */
        get directionalShadowSplit3(): float64
        set directionalShadowSplit3(value: float64)
        
        /** If `true`, shadow detail is sacrificed in exchange for smoother transitions between splits. Enabling shadow blend splitting also has a moderate performance cost. This is ignored when [member directional_shadow_mode] is [constant SHADOW_ORTHOGONAL]. */
        get directionalShadowBlendSplits(): boolean
        set directionalShadowBlendSplits(value: boolean)
        
        /** Proportion of [member directional_shadow_max_distance] at which point the shadow starts to fade. At [member directional_shadow_max_distance], the shadow will disappear. The default value is a balance between smooth fading and distant shadow visibility. If the camera moves fast and the [member directional_shadow_max_distance] is low, consider lowering [member directional_shadow_fade_start] below `0.8` to make shadow transitions less noticeable. On the other hand, if you tuned [member directional_shadow_max_distance] to cover the entire scene, you can set [member directional_shadow_fade_start] to `1.0` to prevent the shadow from fading in the distance (it will suddenly cut off instead). */
        get directionalShadowFadeStart(): float64
        set directionalShadowFadeStart(value: float64)
        
        /** The maximum distance for shadow splits. Increasing this value will make directional shadows visible from further away, at the cost of lower overall shadow detail and performance (since more objects need to be included in the directional shadow rendering). */
        get directionalShadowMaxDistance(): float64
        set directionalShadowMaxDistance(value: float64)
        
        /** Sets the size of the directional shadow pancake. The pancake offsets the start of the shadow's camera frustum to provide a higher effective depth resolution for the shadow. However, a high pancake size can cause artifacts in the shadows of large objects that are close to the edge of the frustum. Reducing the pancake size can help. Setting the size to `0` turns off the pancaking effect. */
        get directionalShadowPancakeSize(): float64
        set directionalShadowPancakeSize(value: float64)
        
        /** Set whether this [DirectionalLight3D] is visible in the sky, in the scene, or both in the sky and in the scene. See [enum SkyMode] for options. */
        get skyMode(): int64
        set skyMode(value: int64)
    }
    namespace ENetConnection {
        enum CompressionMode {
            CompressNone = 0,
            CompressRangeCoder = 1,
            CompressFastlz = 2,
            CompressZlib = 3,
            CompressZstd = 4,
        }
        enum EventType {
            EventError = -1,
            EventNone = 0,
            EventConnect = 1,
            EventDisconnect = 2,
            EventReceive = 3,
        }
        enum HostStatistic {
            HostTotalSentData = 0,
            HostTotalSentPackets = 1,
            HostTotalReceivedData = 2,
            HostTotalReceivedPackets = 3,
        }
    }
    /** A wrapper class for an [url=http://enet.bespin.org/group__host.html]ENetHost[/url].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_enetconnection.html  
     */
    class ENetConnection extends RefCounted {
        /** No compression. This uses the most bandwidth, but has the upside of requiring the fewest CPU resources. This option may also be used to make network debugging using tools like Wireshark easier. */
        static readonly COMPRESS_NONE = 0
        
        /** ENet's built-in range encoding. Works well on small packets, but is not the most efficient algorithm on packets larger than 4 KB. */
        static readonly COMPRESS_RANGE_CODER = 1
        
        /** [url=https://fastlz.org/]FastLZ[/url] compression. This option uses less CPU resources compared to [constant COMPRESS_ZLIB], at the expense of using more bandwidth. */
        static readonly COMPRESS_FASTLZ = 2
        
        /** [url=https://www.zlib.net/]Zlib[/url] compression. This option uses less bandwidth compared to [constant COMPRESS_FASTLZ], at the expense of using more CPU resources. */
        static readonly COMPRESS_ZLIB = 3
        
        /** [url=https://facebook.github.io/zstd/]Zstandard[/url] compression. Note that this algorithm is not very efficient on packets smaller than 4 KB. Therefore, it's recommended to use other compression algorithms in most cases. */
        static readonly COMPRESS_ZSTD = 4
        
        /** An error occurred during [method service]. You will likely need to [method destroy] the host and recreate it. */
        static readonly EVENT_ERROR = -1
        
        /** No event occurred within the specified time limit. */
        static readonly EVENT_NONE = 0
        
        /** A connection request initiated by enet_host_connect has completed. The array will contain the peer which successfully connected. */
        static readonly EVENT_CONNECT = 1
        
        /** A peer has disconnected. This event is generated on a successful completion of a disconnect initiated by [method ENetPacketPeer.peer_disconnect], if a peer has timed out, or if a connection request initialized by [method connect_to_host] has timed out. The array will contain the peer which disconnected. The data field contains user supplied data describing the disconnection, or 0, if none is available. */
        static readonly EVENT_DISCONNECT = 2
        
        /** A packet has been received from a peer. The array will contain the peer which sent the packet and the channel number upon which the packet was received. The received packet will be queued to the associated [ENetPacketPeer]. */
        static readonly EVENT_RECEIVE = 3
        
        /** Total data sent. */
        static readonly HOST_TOTAL_SENT_DATA = 0
        
        /** Total UDP packets sent. */
        static readonly HOST_TOTAL_SENT_PACKETS = 1
        
        /** Total data received. */
        static readonly HOST_TOTAL_RECEIVED_DATA = 2
        
        /** Total UDP packets received. */
        static readonly HOST_TOTAL_RECEIVED_PACKETS = 3
        constructor(identifier?: any)
        
        /** Creates an ENetHost bound to the given [param bind_address] and [param bind_port] that allows up to [param max_peers] connected peers, each allocating up to [param max_channels] channels, optionally limiting bandwidth to [param in_bandwidth] and [param out_bandwidth] (if greater than zero).  
         *      
         *  **Note:** It is necessary to create a host in both client and server in order to establish a connection.  
         */
        createHostBound(bindAddress: string, bindPort: int64, maxPeers?: int64 /* = 32 */, maxChannels?: int64 /* = 0 */, inBandwidth?: int64 /* = 0 */, outBandwidth?: int64 /* = 0 */): GError
        
        /** Creates an ENetHost that allows up to [param max_peers] connected peers, each allocating up to [param max_channels] channels, optionally limiting bandwidth to [param in_bandwidth] and [param out_bandwidth] (if greater than zero).  
         *  This method binds a random available dynamic UDP port on the host machine at the  *unspecified*  address. Use [method create_host_bound] to specify the address and port.  
         *      
         *  **Note:** It is necessary to create a host in both client and server in order to establish a connection.  
         */
        createHost(maxPeers?: int64 /* = 32 */, maxChannels?: int64 /* = 0 */, inBandwidth?: int64 /* = 0 */, outBandwidth?: int64 /* = 0 */): GError
        
        /** Destroys the host and all resources associated with it. */
        destroy(): void
        
        /** Initiates a connection to a foreign [param address] using the specified [param port] and allocating the requested [param channels]. Optional [param data] can be passed during connection in the form of a 32 bit integer.  
         *      
         *  **Note:** You must call either [method create_host] or [method create_host_bound] on both ends before calling this method.  
         */
        connectToHost(address: string, port: int64, channels?: int64 /* = 0 */, data?: int64 /* = 0 */): null | ENetPacketPeer
        
        /** Waits for events on this connection and shuttles packets between the host and its peers, with the given [param timeout] (in milliseconds). The returned [Array] will have 4 elements. An [enum EventType], the [ENetPacketPeer] which generated the event, the event associated data (if any), the event associated channel (if any). If the generated event is [constant EVENT_RECEIVE], the received packet will be queued to the associated [ENetPacketPeer].  
         *  Call this function regularly to handle connections, disconnections, and to receive new packets.  
         *      
         *  **Note:** This method must be called on both ends involved in the event (sending and receiving hosts).  
         */
        service(timeout?: int64 /* = 0 */): GArray
        
        /** Sends any queued packets on the host specified to its designated peers. */
        flush(): void
        
        /** Adjusts the bandwidth limits of a host. */
        bandwidthLimit(inBandwidth?: int64 /* = 0 */, outBandwidth?: int64 /* = 0 */): void
        
        /** Limits the maximum allowed channels of future incoming connections. */
        channelLimit(limit: int64): void
        
        /** Queues a [param packet] to be sent to all peers associated with the host over the specified [param channel]. See [ENetPacketPeer] `FLAG_*` constants for available packet flags. */
        broadcast(channel: int64, packet: PackedByteArray | byte[] | ArrayBuffer, flags: int64): void
        
        /** Sets the compression method used for network packets. These have different tradeoffs of compression speed versus bandwidth, you may need to test which one works best for your use case if you use compression at all.  
         *      
         *  **Note:** Most games' network design involve sending many small packets frequently (smaller than 4 KB each). If in doubt, it is recommended to keep the default compression algorithm as it works best on these small packets.  
         *      
         *  **Note:** The compression mode must be set to the same value on both the server and all its clients. Clients will fail to connect if the compression mode set on the client differs from the one set on the server.  
         */
        compress(mode: ENetConnection.CompressionMode): void
        
        /** Configure this ENetHost to use the custom Godot extension allowing DTLS encryption for ENet servers. Call this right after [method create_host_bound] to have ENet expect peers to connect using DTLS. See [method TLSOptions.server]. */
        dtlsServerSetup(serverOptions: TlsOptions): GError
        
        /** Configure this ENetHost to use the custom Godot extension allowing DTLS encryption for ENet clients. Call this before [method connect_to_host] to have ENet connect using DTLS validating the server certificate against [param hostname]. You can pass the optional [param client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe]. */
        dtlsClientSetup(hostname: string, clientOptions?: TlsOptions /* = undefined */): GError
        
        /** Configures the DTLS server to automatically drop new connections.  
         *      
         *  **Note:** This method is only relevant after calling [method dtls_server_setup].  
         */
        refuseNewConnections(refuse: boolean): void
        
        /** Returns and resets host statistics. See [enum HostStatistic] for more info. */
        popStatistic(statistic: ENetConnection.HostStatistic): float64
        
        /** Returns the maximum number of channels allowed for connected peers. */
        getMaxChannels(): int64
        
        /** Returns the local port to which this peer is bound. */
        getLocalPort(): int64
        
        /** Returns the list of peers associated with this host.  
         *      
         *  **Note:** This list might include some peers that are not fully connected or are still being disconnected.  
         */
        getPeers(): GArray
        
        /** Sends a [param packet] toward a destination from the address and port currently bound by this ENetConnection instance.  
         *  This is useful as it serves to establish entries in NAT routing tables on all devices between this bound instance and the public facing internet, allowing a prospective client's connection packets to be routed backward through the NAT device(s) between the public internet and this host.  
         *  This requires forward knowledge of a prospective client's address and communication port as seen by the public internet - after any NAT devices have handled their connection request. This information can be obtained by a [url=https://en.wikipedia.org/wiki/STUN]STUN[/url] service, and must be handed off to your host by an entity that is not the prospective client. This will never work for a client behind a Symmetric NAT due to the nature of the Symmetric NAT routing algorithm, as their IP and Port cannot be known beforehand.  
         */
        socketSend(destinationAddress: string, destinationPort: int64, packet: PackedByteArray | byte[] | ArrayBuffer): void
    }
    /** A MultiplayerPeer implementation using the [url=http://enet.bespin.org/index.html]ENet[/url] library.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_enetmultiplayerpeer.html  
     */
    class ENetMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
        /** Create server that listens to connections via [param port]. The port needs to be an available, unused port between 0 and 65535. Note that ports below 1024 are privileged and may require elevated permissions depending on the platform. To change the interface the server listens on, use [method set_bind_ip]. The default IP is the wildcard `"*"`, which listens on all available interfaces. [param max_clients] is the maximum number of clients that are allowed at once, any number up to 4095 may be used, although the achievable number of simultaneous clients may be far lower and depends on the application. For additional details on the bandwidth parameters, see [method create_client]. Returns [constant OK] if a server was created, [constant ERR_ALREADY_IN_USE] if this ENetMultiplayerPeer instance already has an open connection (in which case you need to call [method MultiplayerPeer.close] first) or [constant ERR_CANT_CREATE] if the server could not be created. */
        createServer(port: int64, maxClients?: int64 /* = 32 */, maxChannels?: int64 /* = 0 */, inBandwidth?: int64 /* = 0 */, outBandwidth?: int64 /* = 0 */): GError
        
        /** Create client that connects to a server at [param address] using specified [param port]. The given address needs to be either a fully qualified domain name (e.g. `"www.example.com"`) or an IP address in IPv4 or IPv6 format (e.g. `"192.168.1.1"`). The [param port] is the port the server is listening on. The [param channel_count] parameter can be used to specify the number of ENet channels allocated for the connection. The [param in_bandwidth] and [param out_bandwidth] parameters can be used to limit the incoming and outgoing bandwidth to the given number of bytes per second. The default of 0 means unlimited bandwidth. Note that ENet will strategically drop packets on specific sides of a connection between peers to ensure the peer's bandwidth is not overwhelmed. The bandwidth parameters also determine the window size of a connection which limits the amount of reliable packets that may be in transit at any given time. Returns [constant OK] if a client was created, [constant ERR_ALREADY_IN_USE] if this ENetMultiplayerPeer instance already has an open connection (in which case you need to call [method MultiplayerPeer.close] first) or [constant ERR_CANT_CREATE] if the client could not be created. If [param local_port] is specified, the client will also listen to the given port; this is useful for some NAT traversal techniques. */
        createClient(address: string, port: int64, channelCount?: int64 /* = 0 */, inBandwidth?: int64 /* = 0 */, outBandwidth?: int64 /* = 0 */, localPort?: int64 /* = 0 */): GError
        
        /** Initialize this [MultiplayerPeer] in mesh mode. The provided [param unique_id] will be used as the local peer network unique ID once assigned as the [member MultiplayerAPI.multiplayer_peer]. In the mesh configuration you will need to set up each new peer manually using [ENetConnection] before calling [method add_mesh_peer]. While this technique is more advanced, it allows for better control over the connection process (e.g. when dealing with NAT punch-through) and for better distribution of the network load (which would otherwise be more taxing on the server). */
        createMesh(uniqueId: int64): GError
        
        /** Add a new remote peer with the given [param peer_id] connected to the given [param host].  
         *      
         *  **Note:** The [param host] must have exactly one peer in the [constant ENetPacketPeer.STATE_CONNECTED] state.  
         */
        addMeshPeer(peerId: int64, host: ENetConnection): GError
        
        /** The IP used when creating a server. This is set to the wildcard `"*"` by default, which binds to all available interfaces. The given IP needs to be in IPv4 or IPv6 address format, for example: `"192.168.1.1"`. */
        setBindIP(iP: string): void
        
        /** Returns the [ENetPacketPeer] associated to the given [param id]. */
        getPeer(id: int64): null | ENetPacketPeer
        
        /** The underlying [ENetConnection] created after [method create_client] and [method create_server]. */
        get host(): null | ENetConnection
        set host(value: null | ENetConnection)
    }
    namespace ENetPacketPeer {
        enum PeerState {
            StateDisconnected = 0,
            StateConnecting = 1,
            StateAcknowledgingConnect = 2,
            StateConnectionPending = 3,
            StateConnectionSucceeded = 4,
            StateConnected = 5,
            StateDisconnectLater = 6,
            StateDisconnecting = 7,
            StateAcknowledgingDisconnect = 8,
            StateZombie = 9,
        }
        enum PeerStatistic {
            PeerPacketLoss = 0,
            PeerPacketLossVariance = 1,
            PeerPacketLossEpoch = 2,
            PeerRoundTripTime = 3,
            PeerRoundTripTimeVariance = 4,
            PeerLastRoundTripTime = 5,
            PeerLastRoundTripTimeVariance = 6,
            PeerPacketThrottle = 7,
            PeerPacketThrottleLimit = 8,
            PeerPacketThrottleCounter = 9,
            PeerPacketThrottleEpoch = 10,
            PeerPacketThrottleAcceleration = 11,
            PeerPacketThrottleDeceleration = 12,
            PeerPacketThrottleInterval = 13,
        }
    }
    /** A wrapper class for an [url=http://enet.bespin.org/group__peer.html]ENetPeer[/url].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_enetpacketpeer.html  
     */
    class ENetPacketPeer extends PacketPeer {
        /** The peer is disconnected. */
        static readonly STATE_DISCONNECTED = 0
        
        /** The peer is currently attempting to connect. */
        static readonly STATE_CONNECTING = 1
        
        /** The peer has acknowledged the connection request. */
        static readonly STATE_ACKNOWLEDGING_CONNECT = 2
        
        /** The peer is currently connecting. */
        static readonly STATE_CONNECTION_PENDING = 3
        
        /** The peer has successfully connected, but is not ready to communicate with yet ([constant STATE_CONNECTED]). */
        static readonly STATE_CONNECTION_SUCCEEDED = 4
        
        /** The peer is currently connected and ready to communicate with. */
        static readonly STATE_CONNECTED = 5
        
        /** The peer is slated to disconnect after it has no more outgoing packets to send. */
        static readonly STATE_DISCONNECT_LATER = 6
        
        /** The peer is currently disconnecting. */
        static readonly STATE_DISCONNECTING = 7
        
        /** The peer has acknowledged the disconnection request. */
        static readonly STATE_ACKNOWLEDGING_DISCONNECT = 8
        
        /** The peer has lost connection, but is not considered truly disconnected (as the peer didn't acknowledge the disconnection request). */
        static readonly STATE_ZOMBIE = 9
        
        /** Mean packet loss of reliable packets as a ratio with respect to the [constant PACKET_LOSS_SCALE]. */
        static readonly PEER_PACKET_LOSS = 0
        
        /** Packet loss variance. */
        static readonly PEER_PACKET_LOSS_VARIANCE = 1
        
        /** The time at which packet loss statistics were last updated (in milliseconds since the connection started). The interval for packet loss statistics updates is 10 seconds, and at least one packet must have been sent since the last statistics update. */
        static readonly PEER_PACKET_LOSS_EPOCH = 2
        
        /** Mean packet round trip time for reliable packets. */
        static readonly PEER_ROUND_TRIP_TIME = 3
        
        /** Variance of the mean round trip time. */
        static readonly PEER_ROUND_TRIP_TIME_VARIANCE = 4
        
        /** Last recorded round trip time for a reliable packet. */
        static readonly PEER_LAST_ROUND_TRIP_TIME = 5
        
        /** Variance of the last trip time recorded. */
        static readonly PEER_LAST_ROUND_TRIP_TIME_VARIANCE = 6
        
        /** The peer's current throttle status. */
        static readonly PEER_PACKET_THROTTLE = 7
        
        /** The maximum number of unreliable packets that should not be dropped. This value is always greater than or equal to `1`. The initial value is equal to [constant PACKET_THROTTLE_SCALE]. */
        static readonly PEER_PACKET_THROTTLE_LIMIT = 8
        
        /** Internal value used to increment the packet throttle counter. The value is hardcoded to `7` and cannot be changed. You probably want to look at [constant PEER_PACKET_THROTTLE_ACCELERATION] instead. */
        static readonly PEER_PACKET_THROTTLE_COUNTER = 9
        
        /** The time at which throttle statistics were last updated (in milliseconds since the connection started). The interval for throttle statistics updates is [constant PEER_PACKET_THROTTLE_INTERVAL]. */
        static readonly PEER_PACKET_THROTTLE_EPOCH = 10
        
        /** The throttle's acceleration factor. Higher values will make ENet adapt to fluctuating network conditions faster, causing unrelaible packets to be sent  *more*  often. The default value is `2`. */
        static readonly PEER_PACKET_THROTTLE_ACCELERATION = 11
        
        /** The throttle's deceleration factor. Higher values will make ENet adapt to fluctuating network conditions faster, causing unrelaible packets to be sent  *less*  often. The default value is `2`. */
        static readonly PEER_PACKET_THROTTLE_DECELERATION = 12
        
        /** The interval over which the lowest mean round trip time should be measured for use by the throttle mechanism (in milliseconds). The default value is `5000`. */
        static readonly PEER_PACKET_THROTTLE_INTERVAL = 13
        
        /** The reference scale for packet loss. See [method get_statistic] and [constant PEER_PACKET_LOSS]. */
        static readonly PACKET_LOSS_SCALE = 65536
        
        /** The reference value for throttle configuration. The default value is `32`. See [method throttle_configure]. */
        static readonly PACKET_THROTTLE_SCALE = 32
        
        /** Mark the packet to be sent as reliable. */
        static readonly FLAG_RELIABLE = 1
        
        /** Mark the packet to be sent unsequenced (unreliable). */
        static readonly FLAG_UNSEQUENCED = 2
        
        /** Mark the packet to be sent unreliable even if the packet is too big and needs fragmentation (increasing the chance of it being dropped). */
        static readonly FLAG_UNRELIABLE_FRAGMENT = 8
        constructor(identifier?: any)
        
        /** Request a disconnection from a peer. An [constant ENetConnection.EVENT_DISCONNECT] will be generated during [method ENetConnection.service] once the disconnection is complete. */
        peerDisconnect(data?: int64 /* = 0 */): void
        
        /** Request a disconnection from a peer, but only after all queued outgoing packets are sent. An [constant ENetConnection.EVENT_DISCONNECT] will be generated during [method ENetConnection.service] once the disconnection is complete. */
        peerDisconnectLater(data?: int64 /* = 0 */): void
        
        /** Force an immediate disconnection from a peer. No [constant ENetConnection.EVENT_DISCONNECT] will be generated. The foreign peer is not guaranteed to receive the disconnect notification, and is reset immediately upon return from this function. */
        peerDisconnectNow(data?: int64 /* = 0 */): void
        
        /** Sends a ping request to a peer. ENet automatically pings all connected peers at regular intervals, however, this function may be called to ensure more frequent ping requests. */
        ping(): void
        
        /** Sets the [param ping_interval] in milliseconds at which pings will be sent to a peer. Pings are used both to monitor the liveness of the connection and also to dynamically adjust the throttle during periods of low traffic so that the throttle has reasonable responsiveness during traffic spikes. The default ping interval is `500` milliseconds. */
        pingInterval(pingInterval: int64): void
        
        /** Forcefully disconnects a peer. The foreign host represented by the peer is not notified of the disconnection and will timeout on its connection to the local host. */
        reset(): void
        
        /** Queues a [param packet] to be sent over the specified [param channel]. See `FLAG_*` constants for available packet flags. */
        send(channel: int64, packet: PackedByteArray | byte[] | ArrayBuffer, flags: int64): GError
        
        /** Configures throttle parameter for a peer.  
         *  Unreliable packets are dropped by ENet in response to the varying conditions of the Internet connection to the peer. The throttle represents a probability that an unreliable packet should not be dropped and thus sent by ENet to the peer. By measuring fluctuations in round trip times of reliable packets over the specified [param interval], ENet will either increase the probability by the amount specified in the [param acceleration] parameter, or decrease it by the amount specified in the [param deceleration] parameter (both are ratios to [constant PACKET_THROTTLE_SCALE]).  
         *  When the throttle has a value of [constant PACKET_THROTTLE_SCALE], no unreliable packets are dropped by ENet, and so 100% of all unreliable packets will be sent.  
         *  When the throttle has a value of `0`, all unreliable packets are dropped by ENet, and so 0% of all unreliable packets will be sent.  
         *  Intermediate values for the throttle represent intermediate probabilities between 0% and 100% of unreliable packets being sent. The bandwidth limits of the local and foreign hosts are taken into account to determine a sensible limit for the throttle probability above which it should not raise even in the best of conditions.  
         */
        throttleConfigure(interval: int64, acceleration: int64, deceleration: int64): void
        
        /** Sets the timeout parameters for a peer. The timeout parameters control how and when a peer will timeout from a failure to acknowledge reliable traffic. Timeout values are expressed in milliseconds.  
         *  The [param timeout] is a factor that, multiplied by a value based on the average round trip time, will determine the timeout limit for a reliable packet. When that limit is reached, the timeout will be doubled, and the peer will be disconnected if that limit has reached [param timeout_min]. The [param timeout_max] parameter, on the other hand, defines a fixed timeout for which any packet must be acknowledged or the peer will be dropped.  
         */
        setTimeout(timeout: int64, timeoutMin: int64, timeoutMax: int64): void
        
        /** Returns the ENet flags of the next packet in the received queue. See `FLAG_*` constants for available packet flags. Note that not all flags are replicated from the sending peer to the receiving peer. */
        getPacketFlags(): int64
        
        /** Returns the IP address of this peer. */
        getRemoteAddress(): string
        
        /** Returns the remote port of this peer. */
        getRemotePort(): int64
        
        /** Returns the requested [param statistic] for this peer. See [enum PeerStatistic]. */
        getStatistic(statistic: ENetPacketPeer.PeerStatistic): float64
        
        /** Returns the current peer state. See [enum PeerState]. */
        getState(): ENetPacketPeer.PeerState
        
        /** Returns the number of channels allocated for communication with peer. */
        getChannels(): int64
        
        /** Returns `true` if the peer is currently active (i.e. the associated [ENetConnection] is still valid). */
        isActive(): boolean
    }
    /** Godot editor's command palette.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorcommandpalette.html  
     */
    class EditorCommandPalette<Map extends NodePathMap = any> extends ConfirmationDialog<Map> {
        constructor(identifier?: any)
        /** Adds a custom command to EditorCommandPalette.  
         *  - [param command_name]: [String] (Name of the **Command**. This is displayed to the user.)  
         *  - [param key_name]: [String] (Name of the key for a particular **Command**. This is used to uniquely identify the **Command**.)  
         *  - [param binded_callable]: [Callable] (Callable of the **Command**. This will be executed when the **Command** is selected.)  
         *  - [param shortcut_text]: [String] (Shortcut text of the **Command** if available.)  
         */
        addCommand(commandName: string, keyName: string, bindedCallable: Callable, shortcutText?: string /* = 'None' */): void
        
        /** Removes the custom command from EditorCommandPalette.  
         *  - [param key_name]: [String] (Name of the key for a particular **Command**.)  
         */
        removeCommand(keyName: string): void
    }
    namespace EditorContextMenuPlugin {
        enum ContextMenuSlot {
            ContextSlotSceneTree = 0,
            ContextSlotFilesystem = 1,
            ContextSlotScriptEditor = 2,
            ContextSlotFilesystemCreate = 3,
            ContextSlotScriptEditorCode = 4,
            ContextSlotSceneTabs = 5,
            ContextSlot2DEditor = 6,
        }
    }
    /** Plugin for adding custom context menus in the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorcontextmenuplugin.html  
     */
    class EditorContextMenuPlugin extends RefCounted {
        /** Context menu of Scene dock. [method _popup_menu] will be called with a list of paths to currently selected nodes, while option callback will receive the list of currently selected nodes. */
        static readonly CONTEXT_SLOT_SCENE_TREE = 0
        
        /** Context menu of FileSystem dock. [method _popup_menu] and option callback will be called with list of paths of the currently selected files. */
        static readonly CONTEXT_SLOT_FILESYSTEM = 1
        
        /** Context menu of Script editor's script tabs. [method _popup_menu] will be called with the path to the currently edited script, while option callback will receive reference to that script. */
        static readonly CONTEXT_SLOT_SCRIPT_EDITOR = 2
        
        /** The "Create..." submenu of FileSystem dock's context menu. [method _popup_menu] and option callback will be called with list of paths of the currently selected files. */
        static readonly CONTEXT_SLOT_FILESYSTEM_CREATE = 3
        
        /** Context menu of Script editor's code editor. [method _popup_menu] will be called with the path to the [CodeEdit] node. You can fetch it using this code:  
         *    
         *  The option callback will receive reference to that node. You can use [CodeEdit] methods to perform symbol lookups etc.  
         */
        static readonly CONTEXT_SLOT_SCRIPT_EDITOR_CODE = 4
        
        /** Context menu of scene tabs. [method _popup_menu] will be called with the path of the clicked scene, or empty [PackedStringArray] if the menu was opened on empty space. The option callback will receive the path of the clicked scene, or empty [String] if none was clicked. */
        static readonly CONTEXT_SLOT_SCENE_TABS = 5
        
        /** Context menu of 2D editor's basic right-click menu. [method _popup_menu] will be called with paths to all [CanvasItem] nodes under the cursor. You can fetch them using this code:  
         *    
         *  The paths array is empty if there weren't any nodes under cursor. The option callback will receive a typed array of [CanvasItem] nodes.  
         */
        static readonly CONTEXT_SLOT_2D_EDITOR = 6
        constructor(identifier?: any)
        
        /** Called when creating a context menu, custom options can be added by using the [method add_context_menu_item] or [method add_context_menu_item_from_shortcut] functions. [param paths] contains currently selected paths (depending on menu), which can be used to conditionally add options. */
        /* gdvirtual */ _popupMenu(paths: PackedStringArray | string[]): void
        
        /** Registers a shortcut associated with the plugin's context menu. This method should be called once (e.g. in plugin's [method Object._init]). [param callback] will be called when user presses the specified [param shortcut] while the menu's context is in effect (e.g. FileSystem dock is focused). Callback should take single [Array] argument; array contents depend on context menu slot.  
         *    
         */
        addMenuShortcut(shortcut: Shortcut, callback: Callable): void
        
        /** Add custom option to the context menu of the plugin's specified slot. When the option is activated, [param callback] will be called. Callback should take single [Array] argument; array contents depend on context menu slot.  
         *    
         *  If you want to assign shortcut to the menu item, use [method add_context_menu_item_from_shortcut] instead.  
         */
        addContextMenuItem(name: string, callback: Callable, icon?: Texture2D /* = undefined */): void
        
        /** Add custom option to the context menu of the plugin's specified slot. The option will have the [param shortcut] assigned and reuse its callback. The shortcut has to be registered beforehand with [method add_menu_shortcut].  
         *    
         */
        addContextMenuItemFromShortcut(name: string, shortcut: Shortcut, icon?: Texture2D /* = undefined */): void
        
        /** Add a submenu to the context menu of the plugin's specified slot. The submenu is not automatically handled, you need to connect to its signals yourself. Also the submenu is freed on every popup, so provide a new [PopupMenu] every time.  
         *    
         */
        addContextSubmenuItem(name: string, menu: PopupMenu, icon?: Texture2D /* = undefined */): void
    }
    /** A base class to implement debugger plugins.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editordebuggerplugin.html  
     */
    class EditorDebuggerPlugin extends RefCounted {
        constructor(identifier?: any)
        /** Override this method to be notified whenever a new [EditorDebuggerSession] is created. Note that the session may be inactive during this stage. */
        /* gdvirtual */ _setupSession(sessionId: int64): void
        
        /** Override this method to enable receiving messages from the debugger. If [param capture] is "my_message" then messages starting with "my_message:" will be passed to the [method _capture] method. */
        /* gdvirtual */ _hasCapture(capture: string): boolean
        
        /** Override this method to process incoming messages. The [param session_id] is the ID of the [EditorDebuggerSession] that received the [param message]. Use [method get_session] to retrieve the session. This method should return `true` if the message is recognized. */
        /* gdvirtual */ _capture(message: string, data: GArray, sessionId: int64): boolean
        
        /** Override this method to be notified when a breakpoint line has been clicked in the debugger breakpoint panel. */
        /* gdvirtual */ _gotoScriptLine(script: Script, line: int64): void
        
        /** Override this method to be notified when all breakpoints are cleared in the editor. */
        /* gdvirtual */ _breakpointsClearedInTree(): void
        
        /** Override this method to be notified when a breakpoint is set in the editor. */
        /* gdvirtual */ _breakpointSetInTree(script: Script, line: int64, enabled: boolean): void
        
        /** Returns the [EditorDebuggerSession] with the given [param id]. */
        getSession(id: int64): null | EditorDebuggerSession
        
        /** Returns an array of [EditorDebuggerSession] currently available to this debugger plugin.  
         *      
         *  **Note:** Sessions in the array may be inactive, check their state via [method EditorDebuggerSession.is_active].  
         */
        getSessions(): GArray
    }
    /** A class to interact with the editor debugger.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editordebuggersession.html  
     */
    class EditorDebuggerSession extends RefCounted {
        constructor(identifier?: any)
        /** Sends the given [param message] to the attached remote instance, optionally passing additionally [param data]. See [EngineDebugger] for how to retrieve those messages. */
        sendMessage(message: string, data?: GArray /* = [] */): void
        
        /** Toggle the given [param profiler] on the attached remote instance, optionally passing additionally [param data]. See [EngineProfiler] for more details. */
        toggleProfiler(profiler: string, enable: boolean, data?: GArray /* = [] */): void
        
        /** Returns `true` if the attached remote instance is currently in the debug loop. */
        isBreaked(): boolean
        
        /** Returns `true` if the attached remote instance can be debugged. */
        isDebuggable(): boolean
        
        /** Returns `true` if the debug session is currently attached to a remote instance. */
        isActive(): boolean
        
        /** Adds the given [param control] to the debug session UI in the debugger bottom panel. The [param control]'s node name will be used as the tab title. */
        addSessionTab(control: Control): void
        
        /** Removes the given [param control] from the debug session UI in the debugger bottom panel. */
        removeSessionTab(control: Control): void
        
        /** Enables or disables a specific breakpoint based on [param enabled], updating the Editor Breakpoint Panel accordingly. */
        setBreakpoint(path: string, line: int64, enabled: boolean): void
        
        /** Emitted when a remote instance is attached to this session (i.e. the session becomes active). */
        readonly started: Signal<() => void>
        
        /** Emitted when a remote instance is detached from this session (i.e. the session becomes inactive). */
        readonly stopped: Signal<() => void>
        
        /** Emitted when the attached remote instance enters a break state. If [param can_debug] is `true`, the remote instance will enter the debug loop. */
        readonly breaked: Signal<(canDebug: boolean) => void>
        
        /** Emitted when the attached remote instance exits a break state. */
        readonly continued: Signal<() => void>
    }
    namespace EditorExportPlatform {
        enum ExportMessageType {
            ExportMessageNone = 0,
            ExportMessageInfo = 1,
            ExportMessageWarning = 2,
            ExportMessageError = 3,
        }
        enum DebugFlags {
            DebugFlagDumbClient = 1,
            DebugFlagRemoteDebug = 2,
            DebugFlagRemoteDebugLocalhost = 4,
            DebugFlagViewCollisions = 8,
            DebugFlagViewNavigation = 16,
        }
    }
    /** Identifies a supported export platform, and internally provides the functionality of exporting to that platform.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatform.html  
     */
    class EditorExportPlatform extends RefCounted {
        /** Invalid message type used as the default value when no type is specified. */
        static readonly EXPORT_MESSAGE_NONE = 0
        
        /** Message type for informational messages that have no effect on the export. */
        static readonly EXPORT_MESSAGE_INFO = 1
        
        /** Message type for warning messages that should be addressed but still allow to complete the export. */
        static readonly EXPORT_MESSAGE_WARNING = 2
        
        /** Message type for error messages that must be addressed and fail the export. */
        static readonly EXPORT_MESSAGE_ERROR = 3
        
        /** Flag is set if remotely debugged project is expected to use remote file system. If set, [method gen_export_flags] will add `--remote-fs` and `--remote-fs-password` (if password is set in the editor settings) command line arguments to the list. */
        static readonly DEBUG_FLAG_DUMB_CLIENT = 1
        
        /** Flag is set if remote debug is enabled. If set, [method gen_export_flags] will add `--remote-debug` and `--breakpoints` (if breakpoints are selected in the script editor or added by the plugin) command line arguments to the list. */
        static readonly DEBUG_FLAG_REMOTE_DEBUG = 2
        
        /** Flag is set if remotely debugged project is running on the localhost. If set, [method gen_export_flags] will use `localhost` instead of [member EditorSettings.network/debug/remote_host] as remote debugger host. */
        static readonly DEBUG_FLAG_REMOTE_DEBUG_LOCALHOST = 4
        
        /** Flag is set if "Visible Collision Shapes" remote debug option is enabled. If set, [method gen_export_flags] will add `--debug-collisions` command line arguments to the list. */
        static readonly DEBUG_FLAG_VIEW_COLLISIONS = 8
        
        /** Flag is set if Visible Navigation" remote debug option is enabled. If set, [method gen_export_flags] will add `--debug-navigation` command line arguments to the list. */
        static readonly DEBUG_FLAG_VIEW_NAVIGATION = 16
        constructor(identifier?: any)
        
        /** Returns the name of the export operating system handled by this [EditorExportPlatform] class, as a friendly string. Possible return values are `Windows`, `Linux`, `macOS`, `Android`, `iOS`, and `Web`. */
        getOsName(): string
        
        /** Create a new preset for this platform. */
        createPreset(): EditorExportPreset
        
        /** Locates export template for the platform, and returns [Dictionary] with the following keys: `path: String` and `error: String`. This method is provided for convenience and custom export platforms aren't required to use it or keep export templates stored in the same way official templates are. */
        findExportTemplate(templateFileName: string): GDictionary
        
        /** Returns array of [EditorExportPreset]s for this platform. */
        getCurrentPresets(): GArray
        
        /** Saves PCK archive and returns [Dictionary] with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`).  
         *  If [param embed] is `true`, PCK content is appended to the end of [param path] file and return [Dictionary] additionally include following keys: `embedded_start: int` (embedded PCK offset) and `embedded_size: int` (embedded PCK size).  
         */
        savePack(preset: EditorExportPreset, debug: boolean, path: string, embed?: boolean /* = false */): GDictionary
        
        /** Saves ZIP archive and returns [Dictionary] with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`). */
        saveZip(preset: EditorExportPreset, debug: boolean, path: string): GDictionary
        
        /** Saves patch PCK archive and returns [Dictionary] with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`). */
        savePackPatch(preset: EditorExportPreset, debug: boolean, path: string): GDictionary
        
        /** Saves patch ZIP archive and returns [Dictionary] with the following keys: `result: Error`, `so_files: Array` (array of the shared/static objects which contains dictionaries with the following keys: `path: String`, `tags: PackedStringArray`, and `target_folder: String`). */
        saveZipPatch(preset: EditorExportPreset, debug: boolean, path: string): GDictionary
        
        /** Generates array of command line arguments for the default export templates for the debug flags and editor settings. */
        genExportFlags(flags: EditorExportPlatform.DebugFlags): PackedStringArray
        
        /** Exports project files for the specified preset. This method can be used to implement custom export format, other than PCK and ZIP. One of the callbacks is called for each exported file.  
         *  [param save_cb] is called for all exported files and have the following arguments: `file_path: String`, `file_data: PackedByteArray`, `file_index: int`, `file_count: int`, `encryption_include_filters: PackedStringArray`, `encryption_exclude_filters: PackedStringArray`, `encryption_key: PackedByteArray`.  
         *  [param shared_cb] is called for exported native shared/static libraries and have the following arguments: `file_path: String`, `tags: PackedStringArray`, `target_folder: String`.  
         *      
         *  **Note:** `file_index` and `file_count` are intended for progress tracking only and aren't necessarily unique and precise.  
         */
        exportProjectFiles(preset: EditorExportPreset, debug: boolean, saveCb: Callable, sharedCb?: Callable /* = new Callable() */): GError
        
        /** Creates a full project at [param path] for the specified [param preset]. */
        exportProject(preset: EditorExportPreset, debug: boolean, path: string, flags?: EditorExportPlatform.DebugFlags /* = 0 */): GError
        
        /** Creates a PCK archive at [param path] for the specified [param preset]. */
        exportPack(preset: EditorExportPreset, debug: boolean, path: string, flags?: EditorExportPlatform.DebugFlags /* = 0 */): GError
        
        /** Create a ZIP archive at [param path] for the specified [param preset]. */
        exportZip(preset: EditorExportPreset, debug: boolean, path: string, flags?: EditorExportPlatform.DebugFlags /* = 0 */): GError
        
        /** Creates a patch PCK archive at [param path] for the specified [param preset], containing only the files that have changed since the last patch.  
         *      
         *  **Note:** [param patches] is an optional override of the set of patches defined in the export preset. When empty the patches defined in the export preset will be used instead.  
         */
        exportPackPatch(preset: EditorExportPreset, debug: boolean, path: string, patches?: PackedStringArray | string[] /* = [] */, flags?: EditorExportPlatform.DebugFlags /* = 0 */): GError
        
        /** Create a patch ZIP archive at [param path] for the specified [param preset], containing only the files that have changed since the last patch.  
         *      
         *  **Note:** [param patches] is an optional override of the set of patches defined in the export preset. When empty the patches defined in the export preset will be used instead.  
         */
        exportZipPatch(preset: EditorExportPreset, debug: boolean, path: string, patches?: PackedStringArray | string[] /* = [] */, flags?: EditorExportPlatform.DebugFlags /* = 0 */): GError
        
        /** Clears the export log. */
        clearMessages(): void
        
        /** Adds a message to the export log that will be displayed when exporting ends. */
        addMessage(type: EditorExportPlatform.ExportMessageType, category: string, message: string): void
        
        /** Returns number of messages in the export log. */
        getMessageCount(): int64
        
        /** Returns message type, for the message with [param index]. */
        getMessageType(index: int64): EditorExportPlatform.ExportMessageType
        
        /** Returns message category, for the message with [param index]. */
        getMessageCategory(index: int64): string
        
        /** Returns message text, for the message with [param index]. */
        getMessageText(index: int64): string
        
        /** Returns most severe message type currently present in the export log. */
        getWorstMessageType(): EditorExportPlatform.ExportMessageType
        
        /** Executes specified command on the remote host via SSH protocol and returns command output in the [param output]. */
        sshRunOnRemote(host: string, port: string, sshArg: PackedStringArray | string[], cmdArgs: string, output?: GArray /* = [] */, portFwd?: int64 /* = -1 */): GError
        
        /** Executes specified command on the remote host via SSH protocol and returns process ID (on the remote host) without waiting for command to finish. */
        sshRunOnRemoteNoWait(host: string, port: string, sshArgs: PackedStringArray | string[], cmdArgs: string, portFwd?: int64 /* = -1 */): int64
        
        /** Uploads specified file over SCP protocol to the remote host. */
        sshPushToRemote(host: string, port: string, scpArgs: PackedStringArray | string[], srcFile: string, dstFile: string): GError
        
        /** Returns additional files that should always be exported regardless of preset configuration, and are not part of the project source. The returned [Dictionary] contains filename keys ([String]) and their corresponding raw data ([PackedByteArray]). */
        getInternalExportFiles(preset: EditorExportPreset, debug: boolean): GDictionary
        
        /** Returns array of core file names that always should be exported regardless of preset config. */
        static getForcedExportFiles(preset: EditorExportPreset): PackedStringArray
    }
}
