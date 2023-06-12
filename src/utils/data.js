import everything from "../assets/097 BRIAN ADAMS - EVERTHING I DO.mp3";
import vividImagination from "../assets/Vivid imagination..mp3"
import player_art from "../assets/player_art.png";
import { images } from "../constants";

export const tracks = [
  {
    title: "Everything I do",
    src: everything,
    author: "Bryan Adams",
    thumbnail: player_art,
  },
  {
    title: "Vivid Imagination",
    src: vividImagination,
    author: "Kwam 1",
    // thumbnail: player_art,
  },
];

export const newReleases = [
  {
    trackArt: images.New1,
    title: "Life in a bubble",
    artist: "The Van",
  },
  {
    trackArt: images.New2,
    title: "Mountain",
    artist: "Krisx",
  },
  {
    trackArt: images.New3,
    title: "Limits",
    artist: "John Dillion",
  },
  {
    trackArt: images.New4,
    title: "Everything's black",
    artist: "Ameed",
  },
  {
    trackArt: images.New5,
    title: "Cancelled",
    artist: "Enimen",
  },
  {
    trackArt: images.New6,
    title: "Nomad",
    artist: "Makrol eli",
  },
  {
    trackArt: images.New7,
    title: "Blind",
    artist: "Wiz zee",
  },
];

export const topCharts = [
  {
    art: images.Top1,
    title: "Golden age of 80s",
    artiste: "Sean swadder",
    time: "2:34:45",
  },
  {
    art: images.Top2,
    title: 'Reggae "n" blues',
    artiste: "Dj YK mule",
    time: "1:02:42",
  },
  {
    art: images.Top3,
    title: "Tomorrow's tunes",
    artiste: "Sean swadder",
    time: "2:01:45",
  },
];

export const trackLists = [
  {
    id: 1,
    art:images.New1,
    heart: images.heart1,
    title: "Let me love you ~ ",
    status: " Single",
    time:"4:07",
    option:images.more,
    artist: "Krisx"

  },
  {
    id: 2,
    art:images.New3,
    heart: images.heart1,
    title: "Watin man go do  ~ ",
    status: " African Giant",
    time:"4:07",
    option:images.more,
    artist: "Burna"

  },
  {
    id: 3,
    art:images.New2,
    heart: images.heart1,
    title: "Stand strong ~ ",
    status: " Single",
    time:"4:07",
    option:images.more,
    artist: "Davido"

  },
  {
    id: 4,
    art:images.New5,
    heart: images.heart1,
    title: "Closa ~ ",
    status: "Single",
    time:"4:07",
    option:images.more,
    artist: "Ybee"

  },
  {
    id: 5,
    art:images.New4,
    heart: images.heart1,
    title: "Suddenly ~ ",
    status: "Entertainer",
    time:"4:07",
    option:images.more,
    artist: "D'banj"

  },
  {
    id: 6,
    art:images.New7,
    heart: images.heart1,
    title: "Gongo aso ~ ",
    status: "Gongo aso",
    time:"4:07",
    option:images.more,
    artist: "9ice"

  },
  {
    id: 7,
    art:images.New6,
    heart: images.heart1,
    title: "Pon Pon ~ ",
    status: "C.E.O",
    time:"4:07",
    option:images.more,
    artist: "Dagrin"

  },
]