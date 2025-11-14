import './event.css';

const eventRules = [
  {
    eventName: "Astrinix",
    rules: [
      "Each team should consist of 2 members only.",
      "Teams will be eliminated based on the points on the points scored.",
      "This event is open to both UG and PG students.",
      "Registration cost ₹150/head",
      "Total 3 rounds.",
    ],
    coordinators: [
      { name: "Adithya B R", contact: "+91 9513463708", image: "/astro1.png" },
      { name: "Rahul Kulal", contact: "+91 9513463708", image: "/astro2.png" }
    ]
  },
  {
    eventName: "Tech Blitz",
    rules: [
      "Each team should consist of 2 members only.",
      "Total 3 rounds.",
      "Teams will be eliminated based on the points on the points scored."
    ],
    coordinators: [
      { name: "Alex Johnson", contact: "+91 98765 43212", image: "/astro3.png" },
      { name: "Sarah Wilson", contact: "+91 98765 43213", image: "/astro4.png" }
    ]
  },
  {
    eventName: "Galactic Rise",
    rules: [
      "Each team should consist of 2 members only.",
      "Total 3 rounds.",
      "Teams will be eliminated based on the points on the points scored."
    ],
    coordinators: [
      { name: "Mike Brown", contact: "+91 98765 43214", image: "/astro5.png" },
      { name: "Emily Davis", contact: "+91 98765 43215", image: "/astro6.png" }
    ]
  },
  {
    eventName: "Reel Verse",
    rules: [
      "Each team should consist of 2 members only.",
      "Total 3 rounds.",
      "Teams will be eliminated based on the points on the points scored."
    ],
    coordinators: [
      { name: "David Miller", contact: "+91 98765 43216", image: "/astro7.png" },
      { name: "Lisa Taylor", contact: "+91 98765 43217", image: "/astro8.png" }
    ]
  },
  {
    eventName: "Stellar",
    rules: [
      "Each team should consist of 2 members only.",
      "Total 3 rounds.",
      "Teams will be eliminated based on the points on the points scored."
    ],
    coordinators: [
      { name: "Robert Wilson", contact: "+91 98765 43218", image: "/astro9.png" },
      { name: "Maria Garcia", contact: "+91 98765 43219", image: "/astro10.png" }
    ]
  },
  {
    eventName: "Tech Nova",
    rules: [
      "Each team should consist of 2 members only.",
      "Total 3 rounds.",
      "Teams will be eliminated based on the points on the points scored."
    ],
    coordinators: [
      { name: "James Anderson", contact: "+91 98765 43220", image: "/astro11.png" },
      { name: "Sophia Martinez", contact: "+91 98765 43221", image: "/astro12.png" }
    ]
  },
  {
    eventName: "Chrono Cipher",
    rules: [
      "Each team should consist of 2 members only.",
      "Total 3 rounds.",
      "Teams will be eliminated based on the points on the points scored."
    ],
    coordinators: [
      { name: "Thomas Clark", contact: "+91 98765 43222", image: "/astro13.png" },
      { name: "Emma White", contact: "+91 98765 43223", image: "/astro14.png" }
    ]
  },
  {
    eventName: "Time Nova",
    rules: [
      "Each team should consist of 2 members only.",
      "Total 3 rounds.",
      "Teams will be eliminated based on the points on the points scored."
    ],
    coordinators: [
      { name: "Daniel Lee", contact: "+91 98765 43224", image: "/astro15.png" },
      { name: "Olivia Harris", contact: "+91 98765 43225", image: "/astro16.png" }
    ]
  },
];

export const Rules = ({ eventName = "Astrinix", eventRules: rulesData = eventRules, section = 0 }) => {
  const boxStyle = {
    '--clip-border-color': 'royalblue',
    '--bg-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)'
  };

  const currentEvent = rulesData[section];

  const rulesList = currentEvent ? currentEvent.rules : [];
  const coordinatorsList = currentEvent ? currentEvent.coordinators : [];
  const validRules = rulesList.filter(rule => rule.trim() !== "");
  const displayedEventName = currentEvent ? currentEvent.eventName : eventName;

  return (
    <>
      <div
        className="absolute md:left-10 left-5 top-[30%] fookin-a-box aboutPopup is-visible z-999 bg-transparent backdrop-blur-sm"
        style={boxStyle}
      >
        <h2 className="md:pr-16 pr-9 md:text-lg text-[14px] z-1 p-3 heading-clip-mirrored font-space">
          <span>Guidelines</span>
        </h2>

        <div className="clip-shape-border-mirrored"></div>

        <div className="clip-shape-mirrored -mt-15 p-5">
          <div className="pt-14 my-2 text-white">
            <div className="opacity-76 normal-case text-base font-sans">
              <ul className="list-disc pl-5">
                {validRules.length > 0 ? (
                  validRules.map((rule, index) => (
                    <li key={index} className="mb-4">
                      {rule}
                    </li>
                  ))
                ) : (
                  <li>Rules not available or event index ({section}) is out of bounds.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute md:right-10 right-5 top-[45%] fookin-a-box aboutPopup is-visible z-999 bg-transparent backdrop-blur-sm"
        style={boxStyle}
      >
        <h2 className="md:pr-16 pr-9 md:text-lg text-[14px] z-1 p-3 heading-clip-mirrored font-space">
          <span>Coordinators</span>
        </h2>

        <div className="clip-shape-border-mirrored"></div>

        <div className="clip-shape-mirrored -mt-15 p-5">
          <div className="pt-14 my-2 text-white">
            <div className="opacity-76 normal-case text-base font-sans">
              <div className="flex flex-col space-y-6">
                {coordinatorsList.length > 0 ? (
                  coordinatorsList.map((coordinator, index) => (
                    <div key={index} className="flex md:pl-10 md:gap-10 flex-col items-center md:flex-row md:items-center md:space-x-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-400 overflow-hidden border-2 border-white shrink-0 mb-3 md:mb-0">
                        <img
                          src={coordinator.image}
                          alt={coordinator.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="text-center md:text-left">
                        <div className="font-semibold text-white">{coordinator.name}</div>
                        <a
                          href={`tel:${coordinator.contact.replace(/\s+/g, '')}`}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {coordinator.contact}
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>Coordinators not available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};