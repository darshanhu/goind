const urlParams = new URLSearchParams(window.location.search),
        disablePendo = "true" === urlParams.get("disablePendo"),
        urlVisitor = urlParams.get("visitor"),
        urlAccount = urlParams.get("account"),
        urlRole = urlParams.get("role"),
        visitors = [
          "Michael",
          "Christopher",
          "Jessica",
          "Matthew",
          "Ashley",
          "Jennifer",
          "Joshua",
          "Amanda",
          "Daniel",
          "David",
          "James",
          "Robert",
          "John",
          "Joseph",
          "Andrew",
          "Ryan",
          "Sarah",
          "Stephanie",
          "Rachel",
          "Erika",
          "Thomas",
          "Sonya",
          "Bill",
          "Tyrone",
          "Denise",
          "Brian",
          "Adam",
          "Megan",
          "Eric",
          "Elizabeth",
          "Anthony",
          "Nicole",
          "Kevin",
          "Melissa",
          "Kevin",
          "Laura",
          "Kyle",
          "Kayla",
          "Amber",
          "Richard",
          "Kim",
          "Jeff",
          "Amy",
          "Michelle",
          "Benjamin",
          "Mark",
          "Emily",
          "Aaron",
          "Charles",
          "Rebecca",
          "Jamie",
          "Erin",
          "Zachary",
          "Sean",
          "Mary",
          "Kelly",
          "Paul",
          "Dustin",
          "Travis",
          "Gregory",
          "Andrea",
          "Angela",
          "Bryan",
          "Shane",
          "Todd",
          "George",
          "Phillip",
          "Stacy",
          "Joanna",
          "Jasmine",
          "Brooke",
          "Felicity",
          "Tony",
          "Nancy",
          "Kate",
          "Jillian",
          "Jerry",
          "Luke",
          "Maria",
          "Cody",
          "Allison",
          "Peter",
          "Jordan",
          "Natalie",
          "Holly",
          "Jared",
          "Anna",
          "Caroline",
          "Amalia",
          "Donald",
          "Micah",
          "Marvin",
          "Levi",
          "Brad",
          "Taryn",
          "Toni",
          "Jessie",
          "Ronnie",
          "Ruth",
          "Adriana",
          "Darryl",
          "Mayra",
          "Ralph",
          "Elena",
          "Anita",
          "Jane",
          "Simon",
          "Eli",
          "Quentin",
          "Collin",
          "Dallas",
          "Lamar",
          "Lebron",
          "Francisco",
          "DwayneTheRock",
          "Rudy",
          "Rosemary",
          "Marlin",
          "Dory",
          "Glen",
          "Dipper",
        ],
        roles = ["user", "admin", "read-only"],
        accounts = [
          "Soylent Corp",
          "Wonka Industries",
          "Dharma Initiative",
          "Waynes World",
          "Parker Industries",
          "Oceanic",
          "Rearden Steal",
          "InGen",
          "Oscorp",
          "Purrada",
          "Rent A Swag",
          "Space Y",
          "Pixel Arts",
          "Vinepoly",
          "Cloudworks",
          "Chief Aviation",
          "Sphere Co",
          "Altair Corp",
          "Vega Corp",
          "Deneb Corp",
          "Shade Arts",
          "Lion Security",
          "Jupiter Brews",
          "Jetlife",
          "Herolutions",
          "Sphinx Solutions",
          "WhiteBox Inc",
          "Rosefly",
          "Dinoco",
          "Silver Shamrock",
          "Bushwood",
          "HAL Labs",
          "Mugatu Industries",
          "Pizza Planet",
          "Rex Kwan Do",
          "Macmillan",
          "Empire Industries",
        ],
        oldAccounts = [
          "Stark Industries",
          "Wayne Enterprises",
          "Hooli",
          "Dunder Mifflin US",
          "Pied Piper",
          "Dunder Mifflin EU",
          "Associated Strategies",
          "Sterling Cooper",
          "Ewing Oil",
          "Prestige Worldwide",
          "TelAmeriCorp",
          "TakeOff",
          "Burnham and Root",
          "Outer Inc",
          "One World",
          "Cadence",
          "WorryFree Inc",
          "BlueLine",
          "Raptor Inc",
          "Arrowhead",
          "Moonlight Inc",
          "BlueRibbon",
          "LightSpeed",
          "Imaginary Inc",
          "Pluto Corp",
          "Hyperion",
          "BlackBox Inc",
          "Eco Focus",
          "Innovation Arch",
          "Strat Security",
          "Inspire Fitness Co",
          "Candor Corp",
          "Cogent Data",
          "Epic Adventure Inc",
          "Sanguine Skincare",
          "Vortex Solar",
          "Admire Arts",
        ];
      let visitor, role, accString, account_id;
      const randomRoll = getRandomArbitrary(0, 3);
      function getDateBasedVisitorId(r) {
        const e = getRandomArbitrary(0, 3),
          a = getRandomArbitrary(0, 2);
        let i = "";
        switch ((r || new Date()).getDay()) {
          case 1:
            (i = visitors[Math.floor(Math.random() * visitors.length)]),
              (visitor = `${i}${calcPrevDate(0)}@`);
            break;
          case 2:
            e < 2
              ? ((i =
                  visitors[
                    Math.floor(Math.random() * getRandomArbitrary(31, 38))
                  ]),
                (visitor = `${i}${calcPrevDate(8)}@`))
              : ((i = visitors[Math.floor(getRandomArbitrary(94, 100))]),
                (visitor = `${i}${calcPrevDate(29)}@`));
            break;
          case 3:
            a < 1
              ? ((i =
                  visitors[
                    Math.floor(Math.random() * getRandomArbitrary(27, 35))
                  ]),
                (visitor = `${i}${calcPrevDate(16)}@`))
              : ((i = visitors[Math.floor(getRandomArbitrary(77, 100))]),
                (visitor = `${i}${calcPrevDate(58)}@`));
            break;
          case 4:
            a < 1
              ? ((i =
                  visitors[
                    Math.floor(Math.random() * getRandomArbitrary(23, 28))
                  ]),
                (visitor = `${i}${calcPrevDate(24)}@`))
              : ((i = visitors[Math.floor(getRandomArbitrary(70, 100))]),
                (visitor = `${i}${calcPrevDate(87)}@`));
            break;
          case 5:
            a < 1
              ? ((i =
                  visitors[
                    Math.floor(Math.random() * getRandomArbitrary(20, 25))
                  ]),
                (visitor = `${i}${calcPrevDate(32)}@`))
              : ((i = visitors[Math.floor(getRandomArbitrary(73, 100))]),
                (visitor = `${i}${calcPrevDate(116)}@`));
            break;
          case 6:
            a < 1
              ? ((i =
                  visitors[
                    Math.floor(Math.random() * getRandomArbitrary(12, 18))
                  ]),
                (visitor = `${i}${calcPrevDate(40)}@`))
              : ((i = visitors[Math.floor(getRandomArbitrary(77, 100))]),
                (visitor = `${i}${calcPrevDate(145)}@`));
            break;
          case 0:
            a < 1
              ? ((i =
                  visitors[
                    Math.floor(Math.random() * getRandomArbitrary(8, 12))
                  ]),
                (visitor = `${i}${calcPrevDate(48)}@`))
              : ((i = visitors[Math.floor(getRandomArbitrary(80, 100))]),
                (visitor = `${i}${calcPrevDate(174)}@`));
            break;
          default:
            (i = Satvisitors[Math.floor(Math.random() * Satvisitors.length)]),
              (visitor = `${i}${dd}@${accString}.com`),
              (role = "read-only");
        }
        return (
          (role = roles[visitors.indexOf(i) % roles.length]),
          (account_id = accounts[visitors.indexOf(i) % accounts.length]),
          (accString = account_id.replace(/\s/g, "")),
          (visitor = `${visitor}${accString}.com`),
          visitor
        );
      }
      function getVisitorId(r) {
        const e = 100 * Math.random();
        return (
          e < 25
            ? ((visitor = `visitor1@${r}.com`), (role = "admin"))
            : e <= 50
            ? ((visitor = `visitor6@${r}.com`), (role = "admin"))
            : e <= 65
            ? ((visitor = `visitor4@${r}.com`), (role = "user"))
            : e <= 80
            ? ((visitor = `visitor7@${r}.com`), (role = "user"))
            : e <= 90
            ? ((visitor = `visitor5@${r}.com`), (role = "user"))
            : e <= 95
            ? ((visitor = `visitor3@${r}.com`), (role = "read-only"))
            : ((visitor = `visitor2@${r}.com`), (role = "read-only")),
          visitor
        );
      }
      function getRandomArbitrary(r, e) {
        return Math.random() * (e - r) + r;
      }
      function calcPrevDate(r) {
        const e = new Date(),
          a = new Date(e.getFullYear(), e.getMonth(), e.getDate() - r),
          i = a.getMonth() + 1,
          o = a.getDate(),
          t = `${i < 10 ? "0" : ""}${i}${o < 10 ? "0" : ""}${o}${
            a.getFullYear() - 2e3
          }`;
        return (calcDate = t), t;
      }
      randomRoll > 2
        ? ((account_id =
            oldAccounts[Math.floor(Math.random() * accounts.length)]),
          (accString = account_id.replace(/\s/g, "")),
          getVisitorId(accString))
        : getDateBasedVisitorId(),
        (account_id = urlAccount || account_id),
        (visitor = `${
          urlVisitor || visitor.slice(0, visitor.indexOf("@"))
        }@${account_id.replace(/\s/g, "")}.com`),
        (role = urlRole || role),
        (window.userInfo = {
          account: account_id,
          visitor: visitor.slice(0, visitor.indexOf("@")),
          visitorId: visitor,
          role: role,
        }),
        disablePendo ||
          (!(function (r, e, a, i, o) {
            var t, n, s, c, l;
            for (
              (o = r[i] = r[i] || {})._q = [],
                n = 0,
                s = (t = [
                  "initialize",
                  "identify",
                  "updateOptions",
                  "pageLoad",
                  "track"
                ]).length;
              n < s;
              ++n
            )
              !(function (r) {
                o[r] =
                  o[r] ||
                  function () {
                    o._q[r === t[0] ? "unshift" : "push"](
                      [r].concat([].slice.call(arguments, 0))
                    );
                  };
              })(t[n]);
            ((c = e.createElement(a)).async = !0),
              (c.src =
                "https://cdn.pendo.io/agent/static/43994d6b-66ea-49fc-71f1-31077e387150/pendo.js"),
              (l = e.getElementsByTagName(a)[0]).parentNode.insertBefore(c, l);
          })(window, document, "script", "pendo"),

          pendo.initialize({
            visitor: {
              id: visitor || "VISITOR-UNIQUE-ID",
              role: role || "user",
            },
            account: { id: account_id || "ACCOUNT-UNIQUE-ID" },
          }));