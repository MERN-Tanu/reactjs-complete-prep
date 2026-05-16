import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

const CHAT_MESSAGE_LIMIT = 3;

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
function generateRandomNames() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

function ChatWindow() {
  const [message, setMessage] = useState([]);

  const fetchData = () => {
    const data = [
      {
        name: generateRandomNames(),
        photo:
          "https://imgs.search.brave.com/Wy-Ef8NB-xX-vVBavK_FCw7ABxXiCw9wjla6XflePnA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/Y291cnNlcy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNy9J/TUctQ09VUlNFUy1T/RU8tVGVzdGluZy1T/dW1taXQtMjAyNV9z/Y2FsZWQucG5n",
        message: "hello, I am spamming in the live chat",
      },
    ];

    setMessage((message) => {
      let newMessageList = [...data, ...message];
      newMessageList = newMessageList.splice(0, CHAT_MESSAGE_LIMIT);
      return newMessageList;
    });
  };

  useEffect(() => {
    const s = setInterval(fetchData, 1000);
    // do always clear interval if you are using setInterval
    return () => {
      clearInterval(s);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse w-[800px] h-[600px] border border-black m-5 overflow-y-scroll">
        {message.map((item, i) => (
          <ChatMessage id={i} {...item} />
        ))}
        <div>
          <input placeholder="type here..." />
          <button>Add</button>
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
