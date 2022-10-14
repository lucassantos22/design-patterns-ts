import IPlatform from "./platforms/IPlatform";
import Live from "./transmissions/Live";
import Youtube from './platforms/Youtube'
import Twitch from "./platforms/Twitch";
import AdvancedLive from "./transmissions/AdvancedLive";

function startLive(platform: IPlatform) {
    console.log('Aguarde...')
    const live = new Live(platform)
    live.broadcasting()
    live.result()
}

function startAdvancedLive(platform: IPlatform) {
    console.log('Aguarde...')
    const live = new AdvancedLive(platform)
    live.comments()
    live.subtitles()
    live.broadcasting()
    live.result()
}

startLive(new Youtube)
startAdvancedLive(new Twitch)