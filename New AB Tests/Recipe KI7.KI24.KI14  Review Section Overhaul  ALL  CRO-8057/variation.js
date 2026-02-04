(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "cro-lightHouse_ki7_ki14";
        /* all Pure helper functions */
        
        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }
        
        function live(selector, event, callback, context) {
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            this &&
                this.Element &&
                (function (ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function (selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function (e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }
        
        function insertHtml(selector, content, position) {
            var el = document.querySelector(selector);
            if (!position) {
                position = "afterend";
            }
            if (el && content) {
                el.insertAdjacentHTML(position, content);
            }
        }
        
        function addClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.add(cls);
            }
        }
        
        // Reviews data from JSON
        var reviewsData = {
            "product_url": "https://litehouselighting.com/products/outdoor-solar-lantern-with-touch-control",
            "reviews": [
              {
                "name": "Karen V.",
                "rating": 5,
                "date": "2025-03-14",
                "review": "Recently bought Litehouse Outdoor Solar Lanterns to decorate the space for my husband's 60th birthday celebration, and they created the most magical ambiance! The touch control and different colour temperatures are fantastic features, allowing me to adjust the lighting to suit the mood perfectly. I also love that there's no glass to clean, and the sturdy aluminum frame gives it a luxurious feel. The modern design blends beautifully with our home and décor. Plus, being solar-powered makes them even more convenient and eco-friendly. Absolutely loved them—so much so that I bought six! Highly recommend!",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2025/3/20/HJ1VTpCZmE.jpg"
                ],
                "reply": "Hey Karen V. Thank you for your wonderful feedback on our Outdoor Solar Lanterns💛! We are so pleased to hear they contributed to such a special celebration for your husband's 60th birthday. It's excellent to know the touch control and adjustable color temperatures allowed you to create the perfect atmosphere. We appreciate your mention of the practical design features, such as the absence of glass and the sturdy aluminum frame. Thank you very very much!🤗✨💛"
              },
              {
                "name": "Judith B.",
                "rating": 5,
                "date": "2026-01-08",
                "review": "On the balcony",
                "color": "White",
                "images": [
                  "https://images.loox.io/uploads/2026/1/8/RvjlFJrHz_mid.jpg"
                ]
              },
              {
                "name": "Mark D.",
                "rating": 5,
                "date": "2026-01-07",
                "review": "Nice lights, solar battery does not last nearly as long as they say, even after electric charge, but good enough to get through a long evening outside. Don't expect them to still be on as the sun rises.",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2026/1/10/s4waLbdsP_mid.jpg"
                ]
              },
              {
                "name": "Valerie L.",
                "rating": 5,
                "date": "2026-01-06",
                "review": "We bought 2 lights. They are very classy look great on the dinner table.",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2026/1/6/rxfsLMuss_mid.jpg"
                ]
              },
              {
                "name": "Rochelle S.",
                "rating": 5,
                "date": "2026-01-02",
                "review": "Love our new lanterns. Creates a beautiful glow and love the options of 3 different levels of brightness depending on the mood.",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2026/1/2/U2lSRW8rz_mid.jpg",
                  "https://images.loox.io/uploads/2026/1/2/nlZ8LS5rH_mid.jpg"
                ]
              },
              {
                "name": "Margaret S.",
                "rating": 5,
                "date": "2026-01-02",
                "review": "I ordered a set of lanterns as a gift for my sister and her husband for Christmas. The lanterns arrived safe, sound and on schedule and are already proving to be a welcomed addition to their patio.",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2026/1/2/iFjz8Mlr0_mid.jpg"
                ]
              },
              {
                "name": "Louise Nadine H.",
                "rating": 5,
                "date": "2025-12-31",
                "review": "We never imagined these lights could be this incredible. No glass. No glare. They are easy on your eyes and with a slight touch they respond to dim down or up. Well built, modern with clean lines. Beautiful, yet disappear in the landscape. Effortless lighting. Price? They are priceless!! More please.",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2025/12/30/35njWM8ee_mid.jpg",
                  "https://images.loox.io/uploads/2025/12/30/OGhBZVvIl_mid.jpg",
                  "https://images.loox.io/uploads/2025/12/30/Z2Hgr36vj_mid.jpg"
                ]
              },
              {
                "name": "Laurent F.",
                "rating": 5,
                "date": "2025-12-31",
                "review": "Nice looking and bright. Will be interesting to see how they hold up in the gulf front air.",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2026/1/2/wnMHt1uSd_mid.jpg"
                ]
              },
              {
                "name": "William P.",
                "rating": 5,
                "date": "2025-12-30",
                "review": "Nice ambiance",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2025/12/30/hSViHPm3q_mid.jpg"
                ]
              },
              {
                "name": "Nadine S.",
                "rating": 5,
                "date": "2025-12-30",
                "review": "The quality of these lights is amazing. Love them!",
                "color": "White",
                "images": [
                  "https://images.loox.io/uploads/2025/12/29/c4USlz2Qd_mid.jpg"
                ]
              },
              {
                "name": "John W.",
                "rating": 5,
                "date": "2025-12-29",
                "review": "Sensational product. Design is so clean and finish quality is super.",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2025/12/29/Gh1CZVaKH_mid.jpg"
                ]
              },
              {
                "name": "Andrew C.",
                "rating": 5,
                "date": "2025-12-28",
                "review": "Great light, love the hue and brightness settings.",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2026/1/1/3sMbdtFga_mid.jpg"
                ]
              },
              {
                "name": "Leigh B.",
                "rating": 5,
                "date": "2025-12-24",
                "review": "I really love these lanterns. I actually have been using them indoors in the evening and they provide lovely, warm light. I love that I can move them to wherever I'd like and that they can be charged by plugging them in, not just from the sun. The matte black is lovely, sturdy and good quality.",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2025/12/23/ZzuR55dtt_mid.jpg"
                ]
              },
              {
                "name": "Louisa L.",
                "rating": 5,
                "date": "2025-12-19",
                "review": "We are loving the solar lanterns. They seem very sturdy, look beautiful and are easy to use.",
                "color": "Black",
                "images": [
                  "https://images.loox.io/uploads/2025/12/18/Qd4K6eFWa_mid.jpg"
                ]
              },
              {
                "name": "Wade L.",
                "rating": 4,
                "date": "2026-01-07",
                "review": "We like the styling and color. It's been raining here so the solar charging has only lasted about one to two hours per night. Hopefully the charging efficiency will improve as we get closer to summer.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Alan S.",
                "rating": 4,
                "date": "2026-01-06",
                "review": "As ordered. Arrived safely and pretty much when it was meant too. Love the lights",
                "color": "Black",
                "images": []
              },
              {
                "name": "Dana R.",
                "rating": 5,
                "date": "2026-01-06",
                "review": "Better than I expected.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Kate K.",
                "rating": 5,
                "date": "2026-01-05",
                "review": "Great light!",
                "color": "Black",
                "images": []
              },
              {
                "name": "Rien L.",
                "rating": 5,
                "date": "2026-01-05",
                "review": "Sleek minimalist design… love it!",
                "color": "Black",
                "images": []
              },
              {
                "name": "Nicola P.",
                "rating": 5,
                "date": "2026-01-05",
                "review": "The light are awesome and stylish. More importantly the customer service I received when my first order was found to be damaged upon arrival was impressive and the issues immediately resolved.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Robert T.",
                "rating": 5,
                "date": "2026-01-03",
                "review": "First of all, I was impressed with the packaging… very nicely done. While we won't put these to use until spring, the lanterns are a perfect addition to our outdoor seating area. They are well made and the downlight they provide is just the right illumination for an evening outdoors.",
                "color": "White",
                "images": []
              },
              {
                "name": "Diane H.",
                "rating": 5,
                "date": "2026-01-03",
                "review": "Absolutely love these light for lighting my steps to my patio!",
                "color": "Black",
                "images": []
              },
              {
                "name": "Larry G.",
                "rating": 5,
                "date": "2026-01-02",
                "review": "This is an excellent project. It is beautifully made and beautiful. I recommend it.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Barbara B.",
                "rating": 5,
                "date": "2026-01-02",
                "review": "I love everything about this light…the easy usb charging, the three way light levels, the portability of the light and the sleek design.",
                "color": "Black",
                "images": []
              },
              {
                "name": "James A.",
                "rating": 5,
                "date": "2026-01-01",
                "review": "It delivers as promised.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Suzanne D.",
                "rating": 5,
                "date": "2025-12-31",
                "review": "Definitely the easiest way to light an exterior staircase…",
                "color": "Black",
                "images": []
              },
              {
                "name": "William M.",
                "rating": 5,
                "date": "2025-12-30",
                "review": "Great construction quality, excellent light power",
                "color": "Black",
                "images": []
              },
              {
                "name": "Fiona C.",
                "rating": 5,
                "date": "2025-12-30",
                "review": "The most beautiful light, it is perfect.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Charles A.",
                "rating": 5,
                "date": "2025-12-29",
                "review": "Loved it so much I bought more and gave them out as Christmas gifts to my family!",
                "color": "Black",
                "images": []
              },
              {
                "name": "Kenneth T.",
                "rating": 5,
                "date": "2025-12-27",
                "review": "Exactly as promised!",
                "color": "White",
                "images": []
              },
              {
                "name": "Trudy H.",
                "rating": 5,
                "date": "2025-12-26",
                "review": "Love them",
                "color": "Black",
                "images": []
              },
              {
                "name": "Ellen E.",
                "rating": 5,
                "date": "2025-12-26",
                "review": "Wonderful versatile lantern that serves so many purposes - from walking down the trail to intimate table lighting! I have 2 and am planning on buying more. Excellent engineering and construction too!",
                "color": "Black",
                "images": []
              },
              {
                "name": "Ben S.",
                "rating": 4,
                "date": "2025-12-23",
                "review": "While I appreciate the quality and aesthetic appeal of the lamps, I must express a concern regarding their battery life. The batteries do not last as long as advertised.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Tania C.",
                "rating": 5,
                "date": "2025-12-23",
                "review": "Brilliant design.. everything from the product itself down to the packaging.. quality lantern and love the three light settings and elegant simplicity",
                "color": "Black",
                "images": []
              },
              {
                "name": "Jeannine R.",
                "rating": 5,
                "date": "2025-12-23",
                "review": "These are fantastic!",
                "color": "Black",
                "images": []
              },
              {
                "name": "Jenna B.",
                "rating": 5,
                "date": "2025-12-22",
                "review": "This lamp is versatile, very well designed and works well in many styles. The construction is durable, but retains an elegant style. The downlight design makes it more usable in many locations.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Ine M.",
                "rating": 5,
                "date": "2025-12-22",
                "review": "Lovely lights. Very pleasing to see in their clean design.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Randy W.",
                "rating": 5,
                "date": "2025-12-19",
                "review": "I love my lanterns. They look nice lining up on my patio steps.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Patricia S.",
                "rating": 5,
                "date": "2025-12-19",
                "review": "These lights are fantastic. I bought 2 and immediately reordered 2 more. Love them and will order more!",
                "color": "Black",
                "images": []
              },
              {
                "name": "Sandra W.",
                "rating": 5,
                "date": "2025-12-18",
                "review": "Really happy with my purchase. Just as expected.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Ronald M.",
                "rating": 5,
                "date": "2025-12-18",
                "review": "Nice light.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Sherry H.",
                "rating": 5,
                "date": "2025-12-17",
                "review": "It's a Christmas gift and I'll send photos after Christmas.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Linda W.",
                "rating": 5,
                "date": "2025-12-17",
                "review": "Love these lights. They were the perfect addition to our outdoor area.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Dagmar T.",
                "rating": 5,
                "date": "2025-12-17",
                "review": "They are beautiful and modern design.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Michael D.",
                "rating": 5,
                "date": "2025-12-16",
                "review": "Great lights",
                "color": "Black",
                "images": []
              },
              {
                "name": "Mary S.",
                "rating": 5,
                "date": "2025-12-16",
                "review": "They look great.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Leeann T.",
                "rating": 5,
                "date": "2025-12-13",
                "review": "Beautiful lights, amazing quality, people notice them straight away and ask where they're from. Will be buying more!",
                "color": "",
                "images": []
              },
              {
                "name": "Michael W.",
                "rating": 5,
                "date": "2025-12-13",
                "review": "Well constructed. As advertised.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Daniel P.",
                "rating": 5,
                "date": "2025-12-11",
                "review": "Great quality",
                "color": "Black",
                "images": []
              },
              {
                "name": "James B.",
                "rating": 5,
                "date": "2025-12-10",
                "review": "Well engineered and elegant. I'm getting another for a Christmas present.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Tamsey K.",
                "rating": 5,
                "date": "2025-12-10",
                "review": "Great lights!!",
                "color": "Black",
                "images": []
              },
              {
                "name": "Erika F.",
                "rating": 5,
                "date": "2025-12-09",
                "review": "Great product",
                "color": "Black",
                "images": []
              },
              {
                "name": "Lee M.",
                "rating": 5,
                "date": "2025-12-09",
                "review": "Perfect addition to our outdoor space, we love it.",
                "color": "Black",
                "images": []
              },
              {
                "name": "Charles A.",
                "rating": 5,
                "date": "2025-12-09",
                "review": "Great product exceeded expectations",
                "color": "Black",
                "images": []
              },
              {
                "name": "Leah L.",
                "rating": 5,
                "date": "2025-12-08",
                "review": "Great product!",
                "color": "Black",
                "images": []
              },
              {
                "name": "Alan T.",
                "rating": 5,
                "date": "2025-12-04",
                "review": "From a design perspective this is a stunning lamp.. The quality is evident and I love the three dimmer settings. With two options to charge the lamp - solar and USB, I'm looking forward to seeing how long a single charge will last. And finally, compared with other lamps of a very similar design, I think this product gives real value for money. Very happy with this purchase.",
                "color": "Black",
                "images": [],
                "reply": ""
              },
              {
                "name": "Gilda K.",
                "rating": 5,
                "date": "2025-12-02",
                "review": "Great quality",
                "color": "Black",
                "images": [],
                "reply": ""
              },
              {
                "name": "Dee M.",
                "rating": 5,
                "date": "2025-12-01",
                "review": "Quick delivery, good sturdy product, three different light levels for ambience or dining. Looks good.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Dee✨ We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Donald R.",
                "rating": 5,
                "date": "2025-11-27",
                "review": "Beautiful design, gorgoues ambience, lovingly packaged! I am about to order more of these wonderful lanterns.",
                "color": "Black",
                "images": [],
                "reply": "Wow, Donald! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Ron T.",
                "rating": 5,
                "date": "2025-11-26",
                "review": "This is the 3rd lantern I have bought from you, just love them!",
                "color": "",
                "images": [],
                "reply": "Thank you for the glowing review, Ron✨ We're so happy you love your lights!"
              },
              {
                "name": "Sandra P.",
                "rating": 5,
                "date": "2025-11-25",
                "review": "Very stylish and a lovely warm light which creates a nice atmosphere.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Sandra✨ We're so happy you love your lights!"
              },
              {
                "name": "Tracey L.",
                "rating": 5,
                "date": "2025-11-25",
                "review": "Perfect light for the coffee table on the deck.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Tracey✨ We're so happy you love your lights!"
              },
              {
                "name": "Jackie T.",
                "rating": 5,
                "date": "2025-11-19",
                "review": "Excellent quality material. Sturdy. Gives a beautiful light and love the various settings. I would live to have a dozen of them in my garden",
                "color": "",
                "images": [],
                "reply": "Thank you for the glowing review, Jackie✨ We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Elizabeth P.",
                "rating": 5,
                "date": "",
                "review": "Bought these for my son's property to illuminate the front entrance. Look fab and very bright. Got the seal of approval from my very particular electrician son!",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Elizabeth! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Dianne F.",
                "rating": 5,
                "date": "2025-11-11",
                "review": "👍",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Dianne ✨ We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Larry F.",
                "rating": 5,
                "date": "2025-11-11",
                "review": "Love em!!",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Larry! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Betty H.",
                "rating": 5,
                "date": "2025-11-09",
                "review": "Beautiful construction and quality materials. However, the lanterns don't stay charged for longer than 6 hours, which I am trying to troubleshoot.",
                "color": "Black",
                "images": [],
                "reply": ""
              },
              {
                "name": "Carol L.",
                "rating": 5,
                "date": "2025-11-04",
                "review": "Looks great. Quality product very happy 😃",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Carol! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Jose F.",
                "rating": 5,
                "date": "2025-11-03",
                "review": "Excellent product, very minimalist design and great material. Works great! Very happy and impressed with it. The different light intensities create the right ambiance in the evening.",
                "color": "",
                "images": [],
                "reply": "Wow, Jose! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Shirley L.",
                "rating": 5,
                "date": "2025-11-03",
                "review": "Love this product!! Strange comment - but! the main reason is that there is no glass (to crack/break), plastic (to scratch), but plain good looking metal.",
                "color": "",
                "images": [],
                "reply": "Wow, Shirley! Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Margaret A.",
                "rating": 5,
                "date": "2025-11-02",
                "review": "This company is just wonderful to deal with. Their products are top notch and the minute I got my first two lanterns, I ordered another two. They are elegant and perfect for lighting up a summer verandah with romantic soft light. Thank you!",
                "color": "",
                "images": [],
                "reply": "Wow, Margaret! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Chaday M.",
                "rating": 5,
                "date": "2025-10-30",
                "review": "We are so happy with our purchase. These lights are stunning, so glad that we decided to buy two, it's so sleek and perfect for any setting. Definitely worth buying. We will be back in the future.",
                "color": "Black",
                "images": [],
                "reply": "Wow, Chaday! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Kevin K.",
                "rating": 5,
                "date": "2025-10-30",
                "review": "So far like the product",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Kevin!💡"
              },
              {
                "name": "Denise E.",
                "rating": 5,
                "date": "2025-10-29",
                "review": "What I was hoping for.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Denise! 💡 We're so happy you love your lights. If you ever need more, we're always here to help"
              },
              {
                "name": "Vatiswa S.",
                "rating": 5,
                "date": "2025-10-23",
                "review": "The product... the packaging presentation all top notch. It was such a pleasure to unwrap. Love, love it. Great job.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Claudia F.",
                "rating": 5,
                "date": "2025-10-23",
                "review": "Just love this! Excellent quality and beautiful 🤩",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Torben H.",
                "rating": 5,
                "date": "2025-10-22",
                "review": "Great product!",
                "color": "Black",
                "images": [],
                "reply": "Thank you for your glowing review, Torben!✨"
              },
              {
                "name": "Richard C.",
                "rating": 5,
                "date": "2025-10-22",
                "review": "Great quality and couldn't be happier with this product.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for your kind words, Richard! Wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Melissa T.",
                "rating": 5,
                "date": "2025-10-21",
                "review": "Love it! Thinking I might need more of them though…. So easy that they are solar-powered and weather proof",
                "color": "Black",
                "images": [],
                "reply": "Wow, Melissa! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Jane B.",
                "rating": 5,
                "date": "2025-10-12",
                "review": "I am very happy with them.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Sandy W.",
                "rating": 5,
                "date": "2025-10-12",
                "review": "Amazing service from start to finish! I love customer-centric companies like yours that are super efficient and sell high quality items like the luxury metal solar lanterns I ordered - I am a very happy customer! Sandy",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Cor G.",
                "rating": 4,
                "date": "2025-10-12",
                "review": "So far deem it to be good, solid item.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Rod P.",
                "rating": 5,
                "date": "2025-10-11",
                "review": "Love these Lanton lamps! Very well made — solid, stylish, and classy looking. The three light levels are a great bonus. They look fantastic both indoors and outdoors. I'd highly recommend them!",
                "color": "Black",
                "images": [],
                "reply": "Wow, Rod! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Robyn C.",
                "rating": 5,
                "date": "2025-10-11",
                "review": "Perfect in every way.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for your glowing review, Robyn!✨"
              },
              {
                "name": "Meryl B.",
                "rating": 5,
                "date": "2025-10-10",
                "review": "We bought a lantern some time back and simply love it! A friend recently admired it and I took the opportunity to buy her one as a gift - she is over the moon with it!",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Finn A.",
                "rating": 5,
                "date": "2025-10-10",
                "review": "Elegant lamps that add just the right look and light for our table.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for your kind words, Finn! Wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Christa B.",
                "rating": 5,
                "date": "2025-10-09",
                "review": "Beautifully packaged! The product is well designed and works fantastic. Great concept!",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Karen S.",
                "rating": 5,
                "date": "2025-10-07",
                "review": "Such a classy effective lighting solution. Great service too.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Henri D.",
                "rating": 5,
                "date": "2025-10-07",
                "review": "Thank you, it is a great product! Good quality and it works well.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Alinda N.",
                "rating": 5,
                "date": "2025-10-06",
                "review": "I absolutely love this lantern- it looks amazing- such a simple design, it works in any environment. And the quality is superb- I can see it lasting for many years to come. I have ordered 2 to start with, and will soon be ordering another 2, there are just so many places I can use it. And it will also be my go-to Christmas gift for this year!",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Belinda D.",
                "rating": 5,
                "date": "2025-10-06",
                "review": "Love these solar lanterns never let you done!!they give off a beautiful light and help create the mood in the space that they are used. They handle all weather conditions. A must 🥰",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Randy T.",
                "rating": 5,
                "date": "2025-10-01",
                "review": "We're enjoying these beautiful lights very much.  The service and overall experience has been excellent.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for your kind words, Randy! Wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Michael B.",
                "rating": 5,
                "date": "2025-10-01",
                "review": "Everyone loves them !",
                "color": "Black",
                "images": [],
                "reply": "Thank you so much Michael! We're thrilled to hear that everyone loves the lanterns! 🐔✨ That video made our day — your chicken has great taste in lighting! 😄"
              },
              {
                "name": "Nico B.",
                "rating": 5,
                "date": "2025-09-28",
                "review": "This light attracts attention from all visitors, great product",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Elouwize R.",
                "rating": 5,
                "date": "2025-09-27",
                "review": "Best outdoor lights ever. Gives a nice atmosphere.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Dan H.",
                "rating": 5,
                "date": "2025-09-23",
                "review": "Love the lights!",
                "color": "White",
                "images": [],
                "reply": "Thank you for your glowing review, Dan!✨"
              },
              {
                "name": "Tiffany T.",
                "rating": 5,
                "date": "2025-09-22",
                "review": "Well made, lovely lamps!!",
                "color": "black",
                "images": [],
                "reply": "Thank you for the glowing review, Tiffany! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Mary N.",
                "rating": 5,
                "date": "2025-09-19",
                "review": "Beautiful!",
                "color": "black",
                "images": [],
                "reply": "Thank you for the glowing review, Mary! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Alex V.",
                "rating": 5,
                "date": "2025-09-17",
                "review": "The lantern is beautifully crafted and is absolutely necessary on any camping table or picnic table. I even use it on my back porch table at home to play cards by or to read!",
                "color": "black",
                "images": [],
                "reply": ""
              },
              {
                "name": "David D.",
                "rating": 5,
                "date": "2025-09-15",
                "review": "I was very skeptical of this product. I ended up ordering it when I was drunk and did not even remember ordering it when it arrived in the mail. I use it every day. It is truly a high-quality product and I'm about to order another one…. While sober.",
                "color": "black",
                "images": [],
                "reply": "Thanks so much for the honest (and hilarious!) review😄 — we're thrilled you're loving the lantern, no matter how it got to you! If you ever need more, we're always here to help!"
              },
              {
                "name": "Ryan H.",
                "rating": 5,
                "date": "2025-09-12",
                "review": "I've had the lantern for a few weeks now and it has added so much to our outdoor space in terms of looks and functionality. We have had plenty of solar powered lights in the last few years, but they only last one year before the solar panels themselves start fading over and become less effective. As soon as I took this out of the box, I could tell this was going to give us many years of good use. It feels like it's going to last a long time and doesn't feel cheap by any means. The lighting color temperature is just right for us — not too warm or cool.",
                "color": "black",
                "images": [],
                "reply": "Wow, Ryan! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Nancy N.",
                "rating": 5,
                "date": "2025-09-11",
                "review": "It has great light and I love that I can keep it outdoors in the weather",
                "color": "black",
                "images": [],
                "reply": "Thank you for the glowing review, Nancy! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Shari S.",
                "rating": 5,
                "date": "2025-09-02",
                "review": "Great quality and design.",
                "color": "black",
                "images": [],
                "reply": ""
              },
              {
                "name": "Kenneth G.",
                "rating": 5,
                "date": "2025-08-24",
                "review": "Good experience",
                "color": "black",
                "images": [],
                "reply": ""
              },
              {
                "name": "Alex V.",
                "rating": 5,
                "date": "2025-08-23",
                "review": "This Lighthouse Lantern is so Awesome! It has great light, it is weight and attractive. I highly recommend this for anyone who wants table lighting on their back deck or boat at night.",
                "color": "black",
                "images": [],
                "reply": ""
              },
              {
                "name": "Clare M.",
                "rating": 5,
                "date": "2025-08-22",
                "review": "such a gorgeous, simple but stunning lamp - absolutely love them!!",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Ryan D.",
                "rating": 5,
                "date": "2025-08-20",
                "review": "They look great!",
                "color": "Black",
                "images": [],
                "reply": ""
              },
              {
                "name": "Kyle H.",
                "rating": 5,
                "date": "2025-08-18",
                "review": "love it!",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Jaco C.",
                "rating": 5,
                "date": "2025-08-15",
                "review": "Great quality👍🏼",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Megan M.",
                "rating": 5,
                "date": "2025-08-12",
                "review": "Great outside lights. Amazing quality and construction",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Megan!💡"
              },
              {
                "name": "Wade G.",
                "rating": 5,
                "date": "2025-08-10",
                "review": "Man, I'm beyond stoked with my Lighthouse! We've got an outdoor balcony here in Manhattan, and it's absolutely perfect for the space. Just last night we played a round of cards as the sun was setting, and the Lighthouse gave off the perfect warm glow—enough light to see clearly, but still keeping that cozy evening vibe. Absolutely love it!",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Wade!💡We're thrilled to hear the Lighthouse is lighting up your Manhattan balcony just right ✨ We'd love to see your setup—feel free to tag us @litehouse! 🌟 #LitehouseMoments"
              },
              {
                "name": "David R.",
                "rating": 5,
                "date": "2025-08-09",
                "review": "Awesomeness",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, David!💡"
              },
              {
                "name": "Marc G.",
                "rating": 5,
                "date": "2025-08-03",
                "review": "Well made nice design.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Marco! 💡 We're so happy you love your lights. If you ever need more, we're always here to help"
              },
              {
                "name": "Brian O.",
                "rating": 5,
                "date": "2025-08-01",
                "review": "Love the solar lanterns. They're beautiful, built from quality material and appear to be durable.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Jocelyn S.",
                "rating": 5,
                "date": "2025-08-01",
                "review": "will buy more",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Jocelyn! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Christie K.",
                "rating": 5,
                "date": "2025-07-31",
                "review": "Great, quality light fixture! I purchased two lanterns to use in my backyard for a low/no power option and these are the perfect option. I can leave them on my deck to charge and they're heavy enough to not blow away. The solar panel is well integrated into the design, as well as the USB port.",
                "color": "Black",
                "images": [],
                "reply": "Wow, Christie! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Dan P.",
                "rating": 5,
                "date": "2025-07-29",
                "review": "Great product. Beautiful and sturdy…",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Dan! 💡"
              },
              {
                "name": "Mitchell D.",
                "rating": 5,
                "date": "2025-07-26",
                "review": "Love this item. The other night we found 2 little toads on the platform bug hunting.",
                "color": "Black",
                "images": [],
                "reply": "We're so happy you love your lights. Wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Megan M.",
                "rating": 5,
                "date": "2025-07-23",
                "review": "Really modern but classy outdoor lights.",
                "color": "black",
                "images": [],
                "reply": "Thank you for the glowing review, Megan! 💡 We're so happy you love your Lantern. If you ever need more, we're always here to help!"
              },
              {
                "name": "Jose N.",
                "rating": 5,
                "date": "2025-07-22",
                "review": "Wonderful Compact Lantern. Gives nice amount of light, easy to charge. Love the handle to be able to move it around. Worth the price. Very nicely made.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "John B.",
                "rating": 5,
                "date": "2025-07-22",
                "review": "Love the lights - they look fantastic on my deck.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "William S.",
                "rating": 5,
                "date": "2025-07-21",
                "review": "Lights are great - very bright light but adjustable if needed and look great - everything we needed",
                "color": "Black",
                "images": [],
                "reply": ""
              },
              {
                "name": "Richard A.",
                "rating": 5,
                "date": "2025-07-20",
                "review": "They are perfect, exactly what I was looking for…",
                "color": "Black",
                "images": [],
                "reply": "Thank you so much, Richard! ✨ We're thrilled that you're loving your Litehouse lights! Enjoy creating better, brighter moments. 💛"
              },
              {
                "name": "Donald W.",
                "rating": 5,
                "date": "2025-07-17",
                "review": "We bought 3 for our backyard and these are absolutely fantastic!",
                "color": "Black",
                "images": [],
                "reply": "Thank you for the glowing review, Donald!💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Ivan J.",
                "rating": 5,
                "date": "2025-07-14",
                "review": "This is the best solar lamp I've ever used.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Marino Z.",
                "rating": 5,
                "date": "2025-07-13",
                "review": "Very good ambient light",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Robert D.",
                "rating": 5,
                "date": "2025-07-07",
                "review": "Great product, quick delivery, good price.",
                "color": "Black",
                "images": [],
                "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Yugesh N.",
                "rating": 5,
                "date": "2025-06-23",
                "review": "Sturdy and stylish!",
                "color": "",
                "images": [],
                "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Linda L.",
                "rating": 5,
                "date": "2025-06-21",
                "review": "Absolutely fabulous solar lanterns, have made early morning patio coffee so awesome! Love them!",
                "color": "",
                "images": [],
                "reply": "Thank you for the glowing review💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Patricia G.",
                "rating": 5,
                "date": "2025-06-19",
                "review": "Perfect , and wonderful service",
                "color": "",
                "images": [],
                "reply": "Thank you for the glowing review✨"
              },
              {
                "name": "Amanda A.",
                "rating": 5,
                "date": "2025-06-09",
                "review": "Thank you for excellent service, and great product. Quality is amazing, and quality of the output light is also amazing. I just love this outdoor Lantern.",
                "color": "",
                "images": [],
                "reply": "Thank you for your kind words!  This means so much to us—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Glen W.",
                "rating": 5,
                "date": "2025-06-08",
                "review": "It's exactly what I've been looking for to spruce up my outdoor seating area!",
                "color": "",
                "images": [],
                "reply": "We're so happy you love your lanterns. If you ever need more, we're always here to help!"
              },
              {
                "name": "Tracey A.",
                "rating": 5,
                "date": "2025-06-06",
                "review": "Wonderful product",
                "color": "",
                "images": [],
                "reply": "Thank you for the glowing review✨"
              },
              {
                "name": "Spencer J.",
                "rating": 5,
                "date": "2025-06-06",
                "review": "They are great lights for outdoors",
                "color": "",
                "images": [],
                "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Michele B.",
                "rating": 5,
                "date": "2025-06-02",
                "review": "gave it as a gift to my son for outdoor use and was immediately put in baby's room for use during night time feeds!",
                "color": "",
                "images": [],
                "reply": "Thank you for the glowing review ✨We're so happy to hear the lantern found its perfect place in your son's baby room for night-time feeds."
              },
              {
                "name": "Frank S.",
                "rating": 5,
                "date": "2025-05-30",
                "review": "Wonderlight.",
                "color": "",
                "images": [],
                "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Annerien D.",
                "rating": 5,
                "date": "2025-05-30",
                "review": "It is a great product",
                "color": "",
                "images": [],
                "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
              },
              {
                "name": "Teresa R.",
                "rating": 5,
                "date": "2025-05-28",
                "review": "Works well, looks beautiful !",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Kathy R.",
                "rating": 5,
                "date": "2025-05-28",
                "review": "So easy to charge and use and look gorgeous too",
                "color": "",
                "images": [],
                "reply": "Thank you for the glowing review. We're so happy you love your lights. If you ever need more, we're always here to help!✨"
              },
              {
                "name": "Trish M.",
                "rating": 5,
                "date": "2025-05-27",
                "review": "Best lantern ever",
                "color": "",
                "images": [],
                "reply": "Thank you for the glowing review💡 We're so happy you love your lights."
              },
              {
                "name": "Leesa C.",
                "rating": 5,
                "date": "2025-05-27",
                "review": "I'm buying two more; hands down the best light for cooking while camping in the dark. It doesn't shine in your eyes (like every other camping light) and illuminates a large enough area to easily cover your chopping board and prep area. Nice and sturdy too; does not knock over easily and balances well on uneven ground. Plus sexy design, what more could you want.",
                "color": "Black",
                "images": [],
                "reply": "That's absolutely fantastic to hear! We're thrilled that our light has proven to be the best for your camping cooking needs.\n\nYour detailed feedback is incredibly valuable – it's great to know that the eye-friendly illumination, wide coverage for your prep area, and the sturdy, stable design are making such a positive difference.\n\nKnowing you're buying two more truly speaks volumes. Thank you for choosing us and for sharing your wonderful experience!"
              },
              {
                "name": "Megan V.",
                "rating": 5,
                "date": "2025-05-26",
                "review": "Seamless journey from when I ordered to my product arriving. Beautiful lights- so happy!!",
                "color": "White",
                "images": [],
                "reply": "That's absolutely wonderful to hear! We're thrilled that you had such a seamless journey from ordering to receiving your product, and even more delighted that you're so happy with your beautiful lights!"
              },
              {
                "name": "Volker S.",
                "rating": 5,
                "date": "2025-05-25",
                "review": "Nice lights, good quality. We like it",
                "color": "",
                "images": [],
                "reply": "Thank you for the glowing review 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
              },
              {
                "name": "Kerem G.",
                "rating": 5,
                "date": "2025-05-23",
                "review": "Just great. We have 6 by now",
                "color": "",
                "images": [],
                "reply": "Thank you for your kind words! We'd love to see your setup—feel free to tag us @litehouse! 🌟 #LitehouseMoments"
              },
              {
                "name": "Hannelie S.",
                "rating": 5,
                "date": "2025-05-23",
                "review": "Excellent and beautiful!",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Sara F.",
                "rating": 5,
                "date": "2025-05-20",
                "review": "I am absolutely THRILLED with my lanterns, I have 2 black ones, and have just ordered 2 white ones... I only wish I could afford to have them all around my garden and home!",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Gareth H.",
                "rating": 5,
                "date": "2025-05-19",
                "review": "They're very elegant. I bought similar ones from Amazon but they have a design fault with the switches - they stop switching on. Also they didn't dim. These work perfectly. We're using them indoors because we love their design.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Lou P.",
                "rating": 5,
                "date": "2025-05-18",
                "review": "We use it indoors beause it assists me with my vision problems. It is very easy to carry it around, put it on a surface above the workspace and to hold a small object directly under the light. It is a brilliant design.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Rozelle H.",
                "rating": 5,
                "date": "2025-05-17",
                "review": "Luvit!!",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Sean S.",
                "rating": 5,
                "date": "2025-05-17",
                "review": "Awesome product.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Jude W.",
                "rating": 5,
                "date": "2025-05-15",
                "review": "Love the soft candlielit effect.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Emily M.",
                "rating": 5,
                "date": "2025-05-13",
                "review": "Sturdy chic useful",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Travis S.",
                "rating": 5,
                "date": "2025-05-12",
                "review": "Fantastic light. Well made , durable , great battery life. It's a great addition to any camp setup",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Kugeshen G.",
                "rating": 5,
                "date": "2025-05-11",
                "review": "Provides excellent lighting for the piano",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Trish M.",
                "rating": 5,
                "date": "2025-05-09",
                "review": "Amazing lantern -fantastic service",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Alexandra V.",
                "rating": 5,
                "date": "2025-04-28",
                "review": "Sleek design and amazing quality",
                "color": "Black",
                "images": [],
                "reply": ""
              },
              {
                "name": "Anette M.",
                "rating": 5,
                "date": "2025-04-25",
                "review": "We love our lamp and will buy another one",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Riana V.",
                "rating": 5,
                "date": "2025-04-24",
                "review": "Amazing product, thanks",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Patricia G.",
                "rating": 5,
                "date": "2025-04-13",
                "review": "so elegant ✨️",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Katharine B.",
                "rating": 5,
                "date": "2025-04-01",
                "review": "I love my Solar Lanterns. So elegant , well designed and they throw just the right amount of light for sophisticated dining outdoors. The warm yellow low light settings is good as it does not attract too many insects.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Laura A.",
                "rating": 5,
                "date": "2025-03-23",
                "review": "Love this!",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Francois S.",
                "rating": 5,
                "date": "2025-03-07",
                "review": "Solid quality. Works well. I use it in the baby room",
                "color": "Black",
                "images": [],
                "reply": "Hi Francois S. We're absolutely delighted to hear that you're finding our Outdoor Solar Lantern with Touch Control to be of solid quality and that it's working so well for you! 🌟Knowing that it's providing a gentle and reliable light source in your baby's room makes us incredibly happy. It's wonderful to hear it's found such a perfect purpose! 💖 Thank you for sharing your positive experience. We truly appreciate your feedback!"
              },
              {
                "name": "Jessie H.",
                "rating": 5,
                "date": "2025-03-07",
                "review": "So powerful! About to order two more!",
                "color": "Black",
                "images": [],
                "reply": "Hi Jessie H. This is absolutely amazing to hear! We are so happy to hear that you are loving your Lantern and that you are about to order more! 💛✨ To more, better, brighter moments! 🥰🥰🥰"
              },
              {
                "name": "Martin P.",
                "rating": 2,
                "date": "2025-03-01",
                "review": "The quality looks good but it has a totally fatal design flaw. It doesn't have a day/night sensor so stays on all the time. This means that if you forget it on during the day, the battery doesn't charge. Even the cheapest Temu lanterns have this function to come on at night only. I really regret my purchase.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Kim L.",
                "rating": 5,
                "date": "2025-03-01",
                "review": "Wonderful at the seaside and no glass to keep clean!",
                "color": "White",
                "images": [],
                "reply": "Hey Kim L. Thank you very much for sharing your bright moments with us! Look at that BEAUTY! 😍😍😍 We could not thank you enough! We hope that you continue to enjoy your lit-up moments! ✨"
              },
              {
                "name": "Carina G.",
                "rating": 5,
                "date": "2025-02-23",
                "review": "Sturdy, well made. Great soft downward light.",
                "color": "Blcak",
                "images": [],
                "reply": "Hey Carina G. We're delighted to hear you're pleased with the sturdiness and quality of your Outdoor Solar Lantern, and that you're enjoying the soft, downward light from your lantern. We really appreciate it!✨"
              },
              {
                "name": "Abby M.",
                "rating": 5,
                "date": "2025-02-22",
                "review": "Love this lantern! Sturdy & elegant which gives off a beautiful warm glow.  Highly recommended",
                "color": "Black",
                "images": [],
                "reply": "Hi Abby M. Excellent! We really appreciate your amazing review and that you love the craftsmanship and the warm light it provides. Enjoy!💯💛"
              },
              {
                "name": "Abby M.",
                "rating": 5,
                "date": "2025-02-22",
                "review": "Love this lantern! Sturdy & elegant which gives off a beautiful warm glow.  Highly recommended",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Francois V.",
                "rating": 5,
                "date": "2025-02-18",
                "review": "The solar lantern worked perfectly for our outdoor entertainment area.  The problem we used to phase was either to much lite when just sitting outside or not enough lite when we wanted to enjoy a meal outside. Now with the touch of a button or relocation of the lantern the issue is resolved. Impressed with the quality of the lantern and ease of use. Already have plans for some of the other lights in the range.",
                "color": "Black",
                "images": [],
                "reply": "Hi Francois V. Thank you for the great review! We're pleased you find our solar lantern to be a good value✨ . We strive to offer top-quality products, and your feedback is very encouraging. Thank you very much! Cheers to more enjoyment and meals outside.🥰💛"
              },
              {
                "name": "Francois V.",
                "rating": 5,
                "date": "2025-02-18",
                "review": "The solar lantern worked perfectly for our outdoor entertainment area. The problem we used to phase was either to much lite when just sitting outside or not enough lite when we wanted to enjoy a meal outside. Now with the touch of a button or relocation of the lantern the issue is resolved. Impressed with the quality of the lantern and ease of use. Already have plans for some of the other lights in the range.",
                "color": "",
                "images": [],
                "reply": ""
              },
              {
                "name": "Hester V.",
                "rating": 5,
                "date": "2025-02-17",
                "review": "Heavy, solid lantern with a pool of light!",
                "color": "Black",
                "images": [],
                "reply": "Hey Hester V. You have made our day! Thank you for your wonderful words and amazing review! We hope that you enjoy! 💛"
              },
              {
                "name": "James K.",
                "rating": 5,
                "date": "2025-01-23",
                "review": "I bought this lantern to add a little charm to my deck, and it's honestly become the star of the space. I've even taken it inside when I wanted to set a relaxing mood in my living room. Highly recommend this for anyone looking!",
                "color": "",
                "images": [],
                "reply": "Hey James K. That's awesome🤗 ! So glad you're loving your new lantern. It's always great to hear when our customers find creative ways to use our products, taking it from the deck to the living room is a brilliant idea! Thanks for the shout-out and the recommendation! With Love, Litehouse team!"
              },
              {
                "name": "Amanda S.",
                "rating": 5,
                "date": "2025-01-23",
                "review": "I was looking for an outdoor lantern for ages! This lantern is IT! It's beautiful, and the light output is just right—not too harsh, not too dim. The modern design gets compliments from everyone who visits. Litehouse clearly knows how to blend design with practicality. I'll definitely be purchasing more for my space!",
                "color": "",
                "images": [],
                "reply": "Hi Amanda S. We're so happy you finally found the perfect outdoor lantern!  It's fantastic to hear that it's exactly what you were looking for and that you appreciate the light output and design✨ . We appreciate your kind words and look forward to helping you enhance your space further! Thank you very much, Amanda! 💛"
              },
              {
                "name": "Amanda S.",
                "rating": 5,
                "date": "2025-01-23",
                "review": "I was looking for an outdoor lantern for ages! This lantern is IT! It's beautiful, and the light output is just right—not too harsh, not too dim. The modern design gets compliments from everyone who visits. Litehouse clearly knows how to blend design with practicality. I'll definitely be purchasing more for my space!",
                "color": "",
                "images": [],
                "reply": ""
              }
            ]
        };

        var festoonReviewsData = {
            "product_url": "https://litehouselighting.com/products/litehouse-festoon-solar-power-string-light-10m",
            "reviews": [
                {
                "name": "Gregg H.",
                "rating": 5,
                "date": "2026-01-13",
                "review": "The light adds a nice look to my approach wall.",
                "color": "Charcoal",
                "images": [
                    "https://images.loox.io/uploads/2026/1/12/I5FsvSfhD_mid.jpg"
                ],
                "reply": "Thank you for the glowing review, Gregg✨We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Ross A.",
                "rating": 5,
                "date": "2026-01-12",
                "review": "Installation was a snap and the motion detectors work as advertised. I am very happy with the investment. I purchased four and I have plans for the next pair once the new staircases are complete.",
                "color": "Charcoal",
                "images": [
                    "https://images.loox.io/uploads/2026/1/12/VmNBRj9Oj_mid.jpg"
                ],
                "reply": "Thank you for the glowing review, Ross✨ We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Ting S.",
                "rating": 5,
                "date": "2026-01-04",
                "review": "Love these lites! Now is rain season but they can last till 10pm",
                "color": "Charcoal",
                "images": [
                    "https://images.loox.io/uploads/2026/1/4/TTeQt8deQ_mid.jpg",
                    "https://images.loox.io/uploads/2026/1/4/GSe-169Z9_mid.jpg",
                    "https://images.loox.io/uploads/2026/1/4/gILpljXKm_mid.jpg"
                ]
                },
                {
                "name": "Deborah H.",
                "rating": 5,
                "date": "2026-01-04",
                "review": "We originally got the light for our driveway and put it up temporarily on our fuse box to see how it worked. It worked so well it will stay there and we will get another to put in the driveway.",
                "color": "White",
                "images": [
                    "https://images.loox.io/uploads/2026/1/4/2oAPKJik3_mid.jpg"
                ]
                },
                {
                "name": "Leigh B.",
                "rating": 5,
                "date": "2025-12-24",
                "review": "Really love that this light is simple, minimal, nice quality and not too bright like so many of the solar options out there. I didn't want a cold, blinding spotlight and this was just right to light up the doorway as I approach. The options for motion detection are great, too!",
                "color": "Charcoal",
                "images": [
                    "https://images.loox.io/uploads/2025/12/23/M1k3gu9tD_mid.jpg"
                ]
                },
                {
                "name": "Danny L.",
                "rating": 5,
                "date": "2025-12-23",
                "review": "I love the soft hue and how sleek it looks",
                "color": "Charcoal",
                "video": "https://iframe.videodelivery.net/e876e0a4c70ebcafd2d3059df2f79397?autoplay=true&muted=true&preload=auto"
                },
                {
                "name": "Melanie H.",
                "rating": 5,
                "date": "2025-12-20",
                "review": "Perfect for our entryway, will definitley order more for darker spits around the home.",
                "color": "Charcoal",
                "images": [
                    "https://images.loox.io/uploads/2025/12/20/bkRnhd3s2_mid.jpg"
                ]
                },
                {
                "name": "Barbara S.",
                "rating": 5,
                "date": "2025-12-09",
                "review": "Easy to install, work exactly as I had hoped coming on at dusk automatically.  Very happy.",
                "color": "Charcoal",
                "images": [
                    "https://images.loox.io/uploads/2025/12/8/P_LIinqNJ_mid.jpg"
                ]
                },
                {
                "name": "Jan R.",
                "rating": 5,
                "date": "2025-11-13",
                "review": "Best lights. Looking to buy 6 more for the backyard and a a few lanterns!",
                "images": [
                    "https://images.loox.io/uploads/2025/11/13/PzBOL8tr7_mid.jpg",
                    "https://images.loox.io/uploads/2025/11/13/Ds-8VvBav_mid.jpg"
                ],
                "reply": "Thank you for your kind words, Jan! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Kristy W.",
                "rating": 5,
                "date": "2025-11-13",
                "review": "We are so impressed. Sleek and modern and produces good amount of light at night. Definitely will buy more in the future even for gifts aswell :-)",
                "images": [
                    "https://images.loox.io/uploads/2025/11/12/TZ3EZpcCs_mid.jpg"
                ],
                "reply": "Thank you for your kind words, Kristy! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Michael B.",
                "rating": 5,
                "date": "2025-10-19",
                "review": "Brought great light to a place without direct wiring. We're looking at other areas to add even more.",
                "images": [
                    "https://images.loox.io/uploads/2025/10/18/7ZNUd3KwX_mid.jpg"
                ],
                "reply": "Thank you for the glowing review, Michael! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Andrew S.",
                "rating": 4,
                "date": "2025-10-14",
                "review": "Awesome lights work great for our home",
                "images": [
                    "https://images.loox.io/uploads/2025/10/14/61Q_PITuR_mid.jpg",
                    "https://images.loox.io/uploads/2025/10/14/fEZOlPi3P_mid.jpg"
                ],
                "reply": "Wow, your setup looks amazing, Andrew! Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Tudon M.",
                "rating": 5,
                "date": "2025-09-30",
                "review": "Excellent lights, easy setup and magnetic too!",
                "images": [
                    "https://images.loox.io/uploads/2025/9/30/fe8i-w4m5_mid.jpg"
                ],
                "reply": "Thank you for the glowing review, Tudon! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "John J.",
                "rating": 5,
                "date": "2025-09-24",
                "review": "Easy install , worked exactly as advertised and sets a beautiful ambience over our pool",
                "images": [
                    "https://images.loox.io/uploads/2025/9/24/qZFJQ4aPE_mid.jpg"
                ],
                "reply": "Thank you for the glowing review, John! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Anthony C.",
                "rating": 5,
                "date": "2025-09-21",
                "review": "Brilliant light!! You won't regret buying these!!",
                "video": "https://iframe.videodelivery.net/cafdcc86f4a6e5a9054072b8ddba909c?autoplay=true&muted=true&preload=auto",
                "reply": "Thank you for your kind words Anthony—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Lynda B.",
                "rating": 5,
                "date": "2025-09-19",
                "review": "These lights are awesome. Even better than expected with the different brightness settings.",
                "images": [
                    "https://images.loox.io/uploads/2025/9/19/GyIsOW_JN_mid.jpg",
                    "https://images.loox.io/uploads/2025/9/19/C29J0w2Rt_mid.jpg"
                ],
                "reply": "Thank you for the glowing review, Lynda! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Ruth A.",
                "rating": 5,
                "date": "2025-08-31",
                "review": "These lights are great, they are both functional and beautiful",
                "images": [
                    "https://images.loox.io/uploads/2025/8/31/YK5hpOtmQ_mid.jpg"
                ],
                "reply": "Thank you for the glowing review, Ruth! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Susan H.",
                "rating": 5,
                "date": "2025-08-29",
                "review": "I love my lights.  I purchased two for my new home and now I want more! They are so much better than I expected.  So easy to install and I love the light they put out.  I think they look quite smart.",
                "images": [
                    "http://images.loox.io/uploads/2025/8/28/lb4RQUQUM_mid.jpg"
                ],
                "reply": "Wow, Susan! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Peta A.",
                "rating": 5,
                "date": "2025-08-26",
                "review": "Love these lights.. about to order more !",
                "images": [
                    "https://images.loox.io/uploads/2025/8/26/mNjFXjnTr_mid.jpg"
                ]
                },
                {
                "name": "Mark G.",
                "rating": 5,
                "date": "2025-08-24",
                "review": "Works looks great fits perfectly side of our house",
                "images": [
                    "https://images.loox.io/uploads/2025/8/24/vW7cItC5j_mid.jpg"
                ]
                },
                {
                "name": "Martin S.",
                "rating": 5,
                "date": "2025-08-20",
                "review": "These lights are brilliant (pun intended!) They do exactly as I intended. They have great style and easy to install. With an effective spread of lovely, nice warm light they blend in fabulously on our stairs.",
                "images": [
                    "https://images.loox.io/uploads/2025/8/20/f6lq-6WIY_mid.jpg",
                    "https://images.loox.io/uploads/2025/8/20/RD4uTMDZg_mid.jpg"
                ]
                },
                {
                "name": "Steve H.",
                "rating": 5,
                "date": "2025-08-13",
                "review": "Great highlight for my planter boxes in our courtyard",
                "images": [
                    "https://images.loox.io/uploads/2025/8/13/4EHIgxtdx_mid.jpg",
                    "https://images.loox.io/uploads/2025/8/13/8DlKieHuk_mid.jpg"
                ],
                "reply": "Wow, Steve! Thank you for sharing your set-up with us-wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Simon L.",
                "rating": 5,
                "date": "2025-08-08",
                "review": "Ordered 4 of these lights.  They create a nice atmosphere in the Alfresco/backyard area. Perfect ambiance for a quiet drink with friends and family",
                "images": [
                    "https://images.loox.io/uploads/2025/8/8/QBKusJkC5_mid.jpg"
                ],
                "reply": "Thank you for the glowing review, Simon! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Noreen W.",
                "rating": 5,
                "date": "2025-07-31",
                "review": "We needed some light in our back garden and so we got these.  We hope they offered enough light and they do - we are very pleased with how well they work, going from a dull light on standby to a bright light when we're nearby.  Bright without being spotlight-like.  Very happy.  We've ordered another one to add to what's there for further down the path.",
                "images": [
                    "https://images.loox.io/uploads/2025/7/31/DyElhocxR_mid.jpg"
                ],
                "reply": "Thank you for the glowing review, Noreen! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "James S.",
                "rating": 5,
                "date": "2025-07-28",
                "review": "ABSOLUTELY IN LOVE WITH MY NEW LIGHTS😍 TRANSFORMS THE OUTDOOR AREA BY BRINGS A LEVEL SOPHISTICATION AND CLASS TO OVERALL AMBIENCE! I BOUGHT 8 LIGHTS IN TOTAL 😊",
                "images": [
                    "https://images.loox.io/uploads/2025/7/28/SA8Or6TUD_mid.jpg"
                ],
                "reply": "Wow, James! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Anthony C.",
                "rating": 5,
                "date": "2025-07-27",
                "review": "Great lighting, really like how the sensors operate",
                "video": "https://iframe.videodelivery.net/db9d692794d941f18fd4921b02c74f1d?autoplay=true&muted=true&preload=auto"
                },
                {
                "name": "Hannah P.",
                "rating": 5,
                "date": "2025-07-24",
                "review": "These lights are easy to install and a beautiful addition to our yard.",
                "images": [
                    "https://images.loox.io/uploads/2025/7/24/GDlJD7IbJ_mid.jpg"
                ],
                "reply": "Thank you for the glowing review, Hannah! 💡 We're so happy you love your lights."
                },
                {
                "name": "Nick G.",
                "rating": 5,
                "date": "2025-07-08",
                "review": "Absolutely love these lights. Perfect lighting to light up our driveway. Positive vibes from everyone who has seen them. Will be buying lots more.",
                "images": [
                    "https://images.loox.io/uploads/2025/7/8/5-5GRfQZU_mid.jpg"
                ],
                "reply": "Your setup looks absolutely beautiful! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Charlotte A.",
                "rating": 5,
                "date": "2025-04-25",
                "review": "Absolutely love this product. From ordering the lights, to getting them within a short period of time, to the ease of installing them and did I mention, that they look amazing and are so easy to use. They elevate your garden to the next level. Thank you!! We will definitely be buying more!!",
                "images": [
                    "https://images.loox.io/uploads/2025/6/23/RIB5048oVL_mid.jpg",
                    "https://images.loox.io/uploads/2025/6/23/RigsKMTEw5_mid.jpg"
                ]
                },
                {
                "name": "Daria H.",
                "rating": 5,
                "date": "2025-04-21",
                "review": "Easy to install. Love that you can choose the levels and fit in beautifully with the house",
                "images": [
                    "https://images.loox.io/uploads/2025/6/23/JxZJlYT7QD_mid.jpg"
                ]
                },
                {
                "name": "Thomas J.",
                "rating": 5,
                "date": "2025-04-19",
                "review": "Super easy to install and provide enough light out of the box",
                "images": [
                    "https://images.loox.io/uploads/2025/6/23/xVabKoHZA_mid.jpg"
                ]
                },
                {
                "name": "Cesseri T.",
                "rating": 5,
                "date": "2025-03-28",
                "review": "Great quality product very impressed.",
                "images": [
                    "https://images.loox.io/uploads/2025/6/23/BbBgPm_Vb_I_mid.jpg",
                    "https://images.loox.io/uploads/2025/6/23/i_QeblX5WfF_mid.jpg"
                ]
                },
                {
                "name": "Noleen H.",
                "rating": 5,
                "date": "2025-03-27",
                "review": "These lights are amazing! Totally changed the dynamic of our back garden and illuminated the walkway to the pool. I suddenly felt like I was living in a resort!",
                "images": [
                    "https://images.loox.io/uploads/2025/6/23/D9x1J6L69fZ_mid.jpg"
                ]
                },
                {
                "name": "Dean H.",
                "rating": 5,
                "date": "2025-02-25",
                "review": "Best ever wireless hassle free product - worth every cent!!!",
                "images": [
                    "https://images.loox.io/uploads/2025/2/27/K2On-WtWm_mid.jpg",
                    "https://images.loox.io/uploads/2025/2/27/OjGT02WWUS_mid.jpg"
                ],
                "reply": "Hey Dean H. Wow, this photo looks amazing! We're so thrilled you're loving your Solar Wall Light with Motion Sensor. 'Best ever' is high praise, and we truly appreciate it!💯🔥✨💛"
                },
                {
                "name": "Michelle V.",
                "rating": 5,
                "date": "2025-02-20",
                "review": "Creating a wonderful ambience to an otherwise dark and somewhat neglected area...love the cosy vibes it creates!!✨️",
                "images": [
                    "https://images.loox.io/uploads/2025/2/27/l1fYppJN0_mid.jpg"
                ],
                "reply": "Hey Michelle V. That's fantastic! We're so happy to hear that our Solar Wall Light is transforming your space and creating such a cozy vibe. It's wonderful how a little light can make such a big difference, especially in a neglected area. Thank you for sharing your feedback and the photo – it really brightens our day! ✨"
                },
                {
                "name": "Gill S.",
                "rating": 5,
                "date": "2025-02-19",
                "review": "Love my solar wall lights and my solar string lights. Best Buy ever.",
                "images": [
                    "https://images.loox.io/uploads/2025/2/27/fkd8tSbv_V_mid.jpg"
                ],
                "reply": "Hey Gill S. Thank you very much for sending us your amazing images ✨. We're absolutely beaming to hear you love your solar wall lights and string lights!  \"Best Buy ever\" – that's fantastic!  We're so glad they're bringing you so much enjoyment!🔥💯"
                },
                {
                "name": "Wilma P.",
                "rating": 5,
                "date": "2025-02-16",
                "review": "Great product",
                "images": [
                    "https://images.loox.io/uploads/2025/2/27/NhNRs6SVH_mid.jpg"
                ],
                "reply": "Hi Wilma P. We're delighted you're happy with your Solar Wall Light with Motion Sensor. Your setting looks breathtaking! 🥰"
                },
                {
                "name": "Andreij H.",
                "rating": 5,
                "date": "2025-02-04",
                "review": "The wall lights are exceptionally beautiful, easy to install and intuitive to operate. A great solution to avoid chasing into walls to lay down electric cables. Brilliant - in all the senses of the word.",
                "images": [
                    "https://images.loox.io/uploads/2025/2/27/77eplMqZA_mid.jpg"
                ],
                "reply": "Hi Andreij H. We're so thrilled you find them exceptionally beautiful, easy to install, and intuitive to operate! That's exactly what we aim for. Thanks for the brilliant review – it makes our day!🥰 Thank you!"
                },
                {
                "name": "Darryl B.",
                "rating": 5,
                "date": "2025-02-03",
                "review": "Strong magnets and versatile to place in various areas depending where needed. Goes well with the string lights",
                "images": [
                    "https://images.loox.io/uploads/2025/2/27/kIM4flkXzR_mid.jpg"
                ],
                "reply": "Hi Darryl B. That's wonderful! We designed the light with versatility in mind, so it's great to hear it's working perfectly for you in different areas🤗 . And we love that it matches your string lights! Amazing setting! Thank you for sharing this with us. 💛"
                },
                {
                "name": "Gerard P.",
                "rating": 5,
                "date": "2024-12-06",
                "review": "Our light magnetically sticks to our planter frame. I've set it to turn on when it gets dark and stay on. It adds so much atmosphere and lights up the space beautifully. I'm trying to find another place to put another one.",
                "images": [
                    "https://images.loox.io/uploads/2025/2/27/x1-4gl-ylc_mid.jpg"
                ],
                "reply": "Hey Gerard P, Thank you for sharing this stunning photo and your experience with the Solar Wall Light with Motion Sensor! 😊 It's amazing to see how it enhances your beautiful space with its warm glow and functionality. ✨ We're so glad it's become such a versatile addition to your setup, and we can't wait to hear where you decide to place the next one! 🤩"
                },
                {
                "name": "Tristan",
                "rating": 5,
                "date": "2024-11-12",
                "review": "This solar light exceeded my expectations! It looks sleek and modern on our patio, and the adjustable brightness settings are a huge plus. We love how it instantly lights up when we walk by.",
                "images": [
                    "https://images.loox.io/uploads/2025/2/27/szyUiMFin0_mid.jpg"
                ],
                "reply": "Hi Tristan, Wow, that's fantastic🤩! We love hearing how our products enhance your lifestyle. Our Solar Wall Light is designed to be both stylish and functional, and we're glad you appreciate the sleek design and adjustable brightness. Thank you so so much for your amazing review!✨"
                },
                {
                "name": "Tayla S.",
                "rating": 5,
                "date": "2024-11-12",
                "review": "I couldn't believe how easy it was to set up—everything I needed was included, and I had it mounted in minutes. The motion sensor picks up movement perfectly, and the light is super bright. It's a great addition to our garden! We got 3 of them!",
                "images": [
                    "https://images.loox.io/uploads/2025/2/27/yBns0fyM8X_mid.jpg"
                ],
                "reply": "Hi Tayla S, Thank you so much for sharing your experience! 🤩 We're so happy to hear how easy it was to set up and that it's lighting up your garden beautifully! The motion sensor and brightness really do make it a standout, and we love that you're enjoying it so much that you got three! 🌟 If you ever need anything else, we're just a message away. Happy glowing! ✨"
                },
                {
                "name": "Greg A.",
                "rating": 4,
                "date": "2026-01-11",
                "review": "Use as wall light near outdoor grill.  Motion detect works great.  Provides decent illumination.  Wish fixture was longer to provide more light.  Otherwise very happy with it",
                "color": "White",
                "reply": "Thank you for your kind words, Greg! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Rick H.",
                "rating": 4,
                "date": "2026-01-10",
                "review": "Needs to be more motion sensitive. You have to get to close to it before it kicks up the brightness.",
                "color": "Charcoal"
                },
                {
                "name": "Keith C.",
                "rating": 5,
                "date": "2026-01-08",
                "review": "Love the lights, got the motion and the lantern, such nice quality.",
                "color": "Charcoal"
                },
                {
                "name": "Kerry W.",
                "rating": 5,
                "date": "2026-01-03",
                "review": "A good looking solution that functions super well. There is a lot of crappy solar lights in the market and I had just returned one for not working as promised and then the ad appeared. The light is brilliant with a nice soft warm white and several modes of light strength. I will be buying more 100%.",
                "color": "Charcoal"
                },
                {
                "name": "Jin K.",
                "rating": 4,
                "date": "2025-12-31",
                "review": "Easy install and great sleek design!",
                "color": "Charcoal"
                },
                {
                "name": "Justin L.",
                "rating": 5,
                "date": "2025-12-28",
                "review": "The lights are exactly what we were looking for",
                "color": "Charcoal"
                },
                {
                "name": "Carolyn P.",
                "rating": 5,
                "date": "2025-12-26",
                "review": "Love our lights. Bright and stylish.",
                "color": "Charcoal"
                },
                {
                "name": "Monique L.",
                "rating": 5,
                "date": "2025-12-19",
                "review": "These lights look very premium and were super easy to install. I love having them by my gate entrance, they always magically turn on and they are the perfect amount of brightness.",
                "color": "Charcoal"
                },
                {
                "name": "Lori H.",
                "rating": 5,
                "date": "2025-12-18",
                "review": "A perfect solution",
                "color": "White"
                },
                {
                "name": "Goddard K.",
                "rating": 5,
                "date": "2025-12-16",
                "review": "Wonderful company to deal with very helpful love their solar lights return customer",
                "color": "Charcoal"
                },
                {
                "name": "Carolyn B.",
                "rating": 5,
                "date": "2025-12-15",
                "review": "These are fantastic lights. Easy to set up. Look great.",
                "color": "Charcoal"
                },
                {
                "name": "Misty S.",
                "rating": 4,
                "date": "2025-12-15",
                "review": "We appreciated the sleek design and really liked the size and look of the Lighthouse Solar Light. We did have to make a return due to the fact that the solar panel could not charge on our shaded front property.  So sad!",
                "color": "Charcoal"
                },
                {
                "name": "Matthew M.",
                "rating": 5,
                "date": "2025-12-11",
                "review": "LOOKS GREAT AND WORKS AS IT SHOULD",
                "color": "White"
                },
                {
                "name": "Marie G.",
                "rating": 5,
                "date": "2025-12-09",
                "review": "Only had them in use for a week but so far so good.  Stronger light than other solar lights I have used.",
                "color": "Charcoal"
                },
                {
                "name": "Vivienne J.",
                "rating": 5,
                "date": "2025-12-08",
                "review": "I wanted something good looking, not like the normal solar lights that are around. Very happy",
                "color": "Charcoal"
                },
                {
                "name": "Kylie P.",
                "rating": 5,
                "date": "2025-12-03",
                "review": "Great product. Excellent quality. Works perfectly.",
                "color": "Charcoal"
                },
                {
                "name": "Josuel L.",
                "rating": 5,
                "date": "2025-11-30",
                "review": "Soft lighiting and great product"
                },
                {
                "name": "Mark T.",
                "rating": 5,
                "date": "2025-11-28",
                "review": "Great product",
                "reply": "Thank you for the glowing review, Mark✨ We're so happy you love your lights."
                },
                {
                "name": "Kat V.",
                "rating": 5,
                "date": "2025-11-20",
                "review": "Lovely warm light, high quality, durable build and has all the modes and functions I was looking for. 10/10 stars!",
                "reply": "Wow, Kat! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Glenda D.",
                "rating": 5,
                "date": "2025-11-16",
                "review": "Very happy with the quality and service of your products.",
                "reply": "Thank you for your kind words, Glenda! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Timothy M.",
                "rating": 5,
                "date": "2025-11-13",
                "review": "Love it",
                "reply": "Thank you for your kind words, Timothy! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Pam A.",
                "rating": 5,
                "date": "2025-11-12",
                "review": "I don't like to shop online but took the risk and ordered 4 lights. I was sceptical but so far, they are awesome and so easy to install. Highly recommend.",
                "reply": "Thank you for the glowing review, Pam! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Aivar V.",
                "rating": 5,
                "date": "2025-11-05",
                "review": "The lights arrived well and look good. Unfortunately upon installing, one of the wall brackets broke upon tightening the screw (the screw cut right through the plastic). I don't think I applied too much pressure to it, especially as it was the last (5th light) to install, and the other ones worked well. I managed to use a small thin flat washer to increase the bearing a bit and fasten the bracket to the wall. Perhaps it would be worth supplying washers or increasing the strength of the bracket a bit to avoid such issues. Thank you.",
                "reply": "Thank you so much for taking the time to share your feedback, especially the detail about the wall bracket breaking upon tightening. We are happy the lights look good, but we sincerely apologize for that issue!💛 We truly appreciate your ingenuity in using a washer to fix it, and we will certainly pass your suggestion to supply washers or increase the bracket strength directly to our Product Team for review."
                },
                {
                "name": "A B.",
                "rating": 5,
                "date": "2025-10-21",
                "review": "Awesome",
                "reply": "Thank you for your glowing review!✨"
                },
                {
                "name": "Kim A.",
                "rating": 5,
                "date": "2025-10-11",
                "review": "Love them so mch waiting for another 2 lights! ❤️",
                "reply": "Thank you for the glowing review, Kim! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Wayne S.",
                "rating": 5,
                "date": "2025-10-09",
                "review": "Works really well , easy to install, awesome design",
                "reply": "Thank you for your kind words, Wayne! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Kim A.",
                "rating": 5,
                "date": "2025-10-08",
                "review": "Love them and got 2 more!"
                },
                {
                "name": "Michael R.",
                "rating": 5,
                "date": "2025-09-22",
                "review": "Advertised as promised very satisfied with my purchase",
                "reply": "Thank you so much for your kind words, Michael! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Joseph A.",
                "rating": 4,
                "date": "2025-09-08",
                "review": "Very good quality, easy to install.   They get all day sun for recharging but begin to fade early morning.    Still highly recommend.",
                "reply": "Thank you for the glowing review, Joseph! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Nancy S.",
                "rating": 5,
                "date": "2025-09-08",
                "review": "Love this lantern, as does everyone who sees it. I've sent your link to tons of people!",
                "reply": "This means so much to us! 💛 Thank you for your kind words and for recommending us—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Scott C.",
                "rating": 5,
                "date": "2025-09-04",
                "review": "Very good quality light.",
                "reply": "Thank you for the glowing review, Scott!💡We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Rob W.",
                "rating": 5,
                "date": "2025-08-27",
                "review": "I have them mounted on posts either side of garden gate, they light the post and highlight the area nicely",
                "reply": "Thank you for the glowing review, Rob! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Hannah T.",
                "rating": 5,
                "date": "2025-08-19",
                "review": "Look great",
                "reply": "Thank you for the glowing review, Hannah!✨"
                },
                {
                "name": "Denise H.",
                "rating": 5,
                "date": "2025-08-18",
                "review": "I was a bit nervous about buying something I'd just seen in an insta ad but these lights are actually so good!! They've made such a difference to our very dark back deck at night.",
                "reply": "Wow, Denise! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Jacob G.",
                "rating": 4,
                "date": "2025-08-15",
                "review": "Good functionality and nice warm light.",
                "reply": "Thank you for the glowing review, Jacob! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Michael S.",
                "rating": 5,
                "date": "2025-07-30",
                "review": "look good",
                "reply": "\"Thank you for the glowing review, Michael! 💡"
                },
                {
                "name": "Bruce M.",
                "rating": 5,
                "date": "2025-07-16",
                "review": "Perfect for our converted shipping container. No drilling, magnetic mount means you just slap it onto the side of the container. No leads means it looks nice and clean. Definitely buying more for our place.",
                "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Chris B.",
                "rating": 5,
                "date": "2025-07-11",
                "review": "High quality and exactly what I expected from the marketing.  Work very well, even in winter low-light conditions. Would recommend.",
                "reply": "Wow, Chris! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Corey L.",
                "rating": 5,
                "date": "2025-06-30",
                "review": "We are in the middle of renovating the back yard, great addition and extremely happy with them. They work as advertised",
                "reply": "Thank you for the glowing review💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                "name": "Antonio M.",
                "rating": 5,
                "date": "2025-06-23",
                "review": "Easy installation, great ambience light, do not last through the night, but it may be that there is not sufficient sun to recharge the lights",
                "reply": "Thank you for your glowing review✨ Our solar panels are designed to absorb indirect sunlight more efficiently than other solar panel types, the battery will likely still charge, but it will do so more slowly and may not reach full capacity."
                },
                {
                "name": "Dean M.",
                "rating": 5,
                "date": "2025-06-23",
                "review": "Awesome!",
                "reply": "Thank you for the glowing review!✨"
                },
                {
                "name": "Charlotte J.",
                "rating": 5,
                "date": "2025-06-23",
                "review": "Fantastic quality, sleek and modern design, super quick and easy to install. Great lighting which has added fabulous sensor lighting to my driveway and walkway. The whole experience from ordering to receipt of the product was amazing. ( I loved meeting the team) The packaging it comes in was so professionally done, I was blown away from the minute I opened the first one. 🙌🙌",
                "reply": "Thank you for the glowing review We're so happy you love your lights! We'd love to see your setup—feel free to tag us @litehouse! 🌟 #LitehouseMoments"
                },
                {
                "name": "Amy R.",
                "rating": 5,
                "date": "2025-06-22",
                "review": "We bought this light for a very dark bin area at our block of flats. It saved us having to expense an electrician and works so well. There are 4 modes of brightness so you can choose how much you want to conserve to make the light last longer. Just brilliant and wonderful service from Litehouse.",
                "reply": "This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                "name": "Gideon B.",
                "rating": 5,
                "date": "2025-06-21",
                "review": "Looks and works very nice.",
                "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights✨"
                },
                {
                "name": "Martli P.",
                "rating": 5,
                "date": "2025-05-05",
                "review": "You have impressed me more than I can express. From ordering on your website to almost instant shipping, products arrived in premium packaging and they just work! Not to mention that they are elegant and well thought out. Well done guys! I tried to call you to compliment you in person but I didn't get through. You make me proud!!!"
                },
                {
                "name": "Theunis B.",
                "rating": 5,
                "date": "2025-05-03",
                "review": "As advertised. It is a pity that there is not a model with the sun panel on the immediate panel next to the light itself."
                },
                {
                "name": "Julie B.",
                "rating": 5,
                "date": "2025-05-02",
                "review": "Added these wall lights to my Litehouse string lights at our pool area. Love the finished off look and ambient light they now give to this area."
                },
                {
                "name": "Rupert L.",
                "rating": 5,
                "date": "2025-04-24",
                "review": "Working great so far!"
                },
                {
                "name": "Pravesh A.",
                "rating": 4,
                "date": "2025-04-22",
                "review": "I love the light; I have not installed as yet. We still need to find the right spot with sufficient sun to capture the solar."
                },
                {
                "name": "Pedro C.",
                "rating": 5,
                "date": "2025-04-18",
                "review": "Will keep buying these products ."
                },
                {
                "name": "Bronwyn K.",
                "rating": 5,
                "date": "2025-04-18",
                "review": "Love this product! It works so well and makes such a difference in my garden."
                },
                {
                "name": "Dion O.",
                "rating": 5,
                "date": "2025-04-15",
                "review": "I will send a picture in a few days. Finished off our Koi pond and pool area perfectly. Warm regards Dion"
                },
                {
                "name": "Max S.",
                "rating": 5,
                "date": "2025-04-14",
                "review": "Great product!"
                },
                {
                "name": "Tasneem P.",
                "rating": 5,
                "date": "2025-04-13",
                "review": "Excellent product"
                },
                {
                "name": "Roxanne C.",
                "rating": 5,
                "date": "2025-04-12",
                "review": "Easy and effortless installation 👏🏻"
                },
                {
                "name": "Mare D.",
                "rating": 4,
                "date": "2025-04-11",
                "review": "Good quality light, with one exceptiom: the magnets keep falling out."
                },
                {
                "name": "Francois S.",
                "rating": 5,
                "date": "2025-04-10",
                "review": "Very well manufactured products. Excellent quality."
                },
                {
                "name": "Dustin B.",
                "rating": 5,
                "date": "2025-04-10",
                "review": "Easy delivery. Works well"
                },
                {
                "name": "Bronwen F.",
                "rating": 5,
                "date": "2025-04-07",
                "review": "Absolutely beautiful & classy look .Luv luv luv. Can't wait to get more"
                },
                {
                "name": "Des G.",
                "rating": 5,
                "date": "2025-04-07",
                "review": "Excellent product, good service and prompt delivery."
                },
                {
                "name": "Sean V.",
                "rating": 5,
                "date": "2025-04-05",
                "review": "I am absolutely delighted with the 4 wall mounted lights recently purchased, these lights are in a shaded area and still produce great light very happy. I am wanting more"
                },
                {
                "name": "Annemarie V.",
                "rating": 5,
                "date": "2025-04-03",
                "review": "Love it"
                },
                {
                "name": "Joanna O.",
                "rating": 5,
                "date": "2025-04-03",
                "review": "They do exactly as advertised. Strong light and look great."
                },
                {
                "name": "Shan B.",
                "rating": 5,
                "date": "2025-03-31",
                "review": "Looks great, it's ticking all the boxes so far, I'm holding thumbs it lasts over time."
                },
                {
                "name": "Paul S.",
                "rating": 5,
                "date": "2025-03-31",
                "review": "We put this up at our stables. It's was super easy to install and set up. After about 3 weeks in intense rain, it's still worked tremendously well and has an impressive battery life. It looks tidy and unobtrusive. The light is warm and not harsh. I think I'll get some more!"
                },
                {
                "name": "Luzuko Z.",
                "rating": 5,
                "date": "2025-03-31",
                "review": "Fantastic service and speedy delivery. Great product too"
                },
                {
                "name": "Aidan O.",
                "rating": 5,
                "date": "2025-03-29",
                "review": "Nice product !"
                },
                {
                "name": "Jane M.",
                "rating": 4,
                "date": "2025-03-27",
                "review": "Clean lines, lights the walkway as needed."
                },
                {
                "name": "Andre M.",
                "rating": 5,
                "date": "2025-03-26",
                "review": "Great lights, I like it."
                },
                {
                "name": "Jeffrey L.",
                "rating": 5,
                "date": "2025-03-24",
                "review": "Classy and easy to install ; if they last a couple of years at least then well happy !"
                },
                {
                "name": "Amanda D.",
                "rating": 5,
                "date": "2025-03-19",
                "review": "good"
                },
                {
                "name": "Francois V.",
                "rating": 5,
                "date": "2025-03-02",
                "review": "This is the first 2 of six lights I want to install, once they are all in I can write a review!",
                "reply": "Hi  Francois V. Thank you for your amazing rating! We know that you will fall in love 💞with your Solar Wall Light with Motion Sensor! You can leave a review once you have installed your lights! 🌟🌟"
                },
                {
                "name": "Heather W.",
                "rating": 5,
                "date": "2025-03-01",
                "review": "I just LOVE my Litehouse lights! It adds so much ambience to our outdoors!",
                "reply": "Hi Heather W. WOW💛! That looks amazing! Thank you for sharing your beautiful lit-up space. It is completely magical! 💞🥰"
                },
                {
                "name": "Theo L.",
                "rating": 5,
                "date": "2025-02-24",
                "review": "Great quality and effective!",
                "reply": "Hey Theo L. You read our minds! This is exactly what we aimed for! Thank you greatly for your amazing rating and review of our Solar Wall Light with Motion Sensor! Cheers to better, brighter, moments! 💛"
                },
                {
                "name": "Lindsay S.",
                "rating": 3,
                "date": "2025-02-24",
                "review": "The lights look lovely and neat, however, I find the setting instructions extremely difficult to understand"
                },
                {
                "name": "Michael R.",
                "rating": 5,
                "date": "2025-02-22",
                "review": "Nice product",
                "reply": "Hi Michael R. Thank you very much. We fully agree! ✨"
                },
                {
                "name": "Ingo G.",
                "rating": 5,
                "date": "2025-02-22",
                "review": "Great product, simple well designed, easy to install and operate. Wonderful warm light.",
                "reply": "Hi Ingo G. Thank you very much for your wonderful rating and review! It really means a lot to us that you took the time to share your wonderful experience with our product. The Solar wall lights is a definite winner! Thank you very much 🔥"
                },
                {
                "name": "Charlene B.",
                "rating": 5,
                "date": "2025-02-20",
                "review": "Sleek, classy, perfect colour and works like a charm. I ordered two but will get another one 😃",
                "reply": "Hi Charlene B. That's wonderful to hear! We're happy that you're happy with the sleek design, the color, and especially how well they work!  It's fantastic that you're planning to get another one – that's the best compliment we can receive.  Enjoy your perfectly lit space! 😃"
                },
                {
                "name": "Burgert S.",
                "rating": 5,
                "date": "2025-02-17",
                "review": "The lights seem to be well made, and are surprisingly bright. I've had a lot of disappointments with solar lights, but so far these exceed my expectations. Bonus that you can choose between dim and bright, and with PIR and without.",
                "reply": "Hi Burget S. That's fantastic! We're thrilled to hear that our Solar Wall Light with Motion Sensor has exceeded your expectation. We appreciate you highlighting the brightness and the flexibility of the dim/bright and PIR options – those are features we're particularly proud of.  Thank you for sharing your positive feedback! We hope you continue to enjoy them.✨"
                },
                {
                "name": "Dianne L.",
                "rating": 5,
                "date": "2025-02-14",
                "review": "Love these solar lights they are fantastic!",
                "reply": "Hey Dianne L. We're so glad you're loving your Solar Wall Light with Motion Sensor.  Thanks for sharing your feedback! We confident that it provides you with reliable light for a long time to come.🤗🔥💛"
                },
                {
                "name": "Catherine D.",
                "rating": 5,
                "date": "2025-02-11",
                "review": "Aesthetically beautiful and practical!",
                "reply": "Hey Dianne L. We're so glad you're loving your Solar Wall Light with Motion Sensor.  Thanks for sharing your feedback! We confident that it provides you with reliable light for a long time to come.🤗🔥💛"
                },
                {
                "name": "Edna V.",
                "rating": 5,
                "date": "2025-02-09",
                "review": "Love the string lights effortless to install and look beautiful.",
                "reply": "Hi Edna V. This really made our day! Thank you so very much for taking the time to share your experience with our Solar Wall Light with Motion Sensor✨. Cheers to many more Bright Moments!"
                },
                {
                "name": "Johan M.",
                "rating": 5,
                "date": "2025-01-20",
                "review": "The lights are such a delight, it is exactly what I wanted.",
                "reply": "Hey Johan M. That's so wonderful to hear! 😊  We put a lot of care into creating our lights, so it means a lot to us that you're happy with them. With Love, Litehouse!"
                },
                {
                "name": "Jill F.",
                "rating": 5,
                "date": "2025-01-20",
                "review": "Using presently in the back entertainment area, it lights up the entire braai area and it gives a laid back ambience.  Love it!",
                "reply": "Hi Jill F. That's amazing to hear! We're so happy to hear our lights are creating the perfect ambiance for your braai area! 🔥 Nothing beats that laid-back vibe with good lights, company, and good food, right? Enjoy!"
                },
                {
                "name": "Jill F.",
                "rating": 5,
                "date": "2025-01-20",
                "review": "Using presently in the back entertainment area, it lights up the entire braai area and it gives a laid back ambience. Love it!"
                },
                {
                "name": "Linda P.",
                "rating": 4,
                "date": "2025-01-09",
                "review": "Warm., welcoming light",
                "reply": "Hi Linda P. We're so glad to hear that the lights create such a warm and welcoming atmosphere! That's exactly the effect we strive for. We hope you continue to enjoy the enchanting glow they bring to your space."
                },
                {
                "name": "Annelize H.",
                "rating": 5,
                "date": "2024-12-10",
                "review": "Works much better than expected!  Great value for money.",
                "reply": "Hi Annelize H, Thank you so much for your fantastic feedback! We're thrilled to hear that the Solar Wall Light with Motion Sensor is working even better than expected and that you're happy with the value for money 🤩."
                },
                {
                "name": "Annelize H.",
                "rating": 5,
                "date": "2024-12-10",
                "review": "Works much better than expected! Great value for money."
                },
                {
                "name": "Susan D.",
                "rating": 5,
                "date": "2024-12-02",
                "review": "Amazing products with amazing service. Always going the xstra mile to get my order to me on time. Love every light I ordered.",
                "reply": "Hi Susan D, Thank you so much for your kind words! To hear you're loving your lights and that our service has met your expectations, really makes us happy. ✨ We always strive to go the extra mile for our customers! We hope your lights continue to brighten up your space beautifully! 🌟"
                },
                {
                "name": "Daan S.",
                "rating": 5,
                "date": "2024-11-30",
                "review": "Excellent service and great products!"
                },
                {
                "name": "Johan L.",
                "rating": 5,
                "date": "2024-11-24",
                "review": "Awesome product! Great looking"
                },
                {
                "name": "Khyra ..",
                "rating": 5,
                "date": "2024-11-12",
                "review": "Highly impressed with the quality! The light is sturdy and feels well-made. Installation was quick, and it gives off plenty of light without any wiring needed. We're already planning to buy a few more for the walkway!",
                "reply": "Hey Khyra! We're so glad you're happy with your Solar Wall Mount Light! Thank you for the kind words and for choosing our product.🥰 It's wonderful to hear that you're impressed with the quality and ease of installation of our Solar Wall Mount Light. We're committed to providing high-quality, hassle-free products. Thank you for your support.💛✨💛"
                }
            ]
        };

        var outdoorLanternReviewsData = {
            "product_url": "https://litehouselighting.com/products/litehouse-solar-outdoor-wall-light-wall-mount-led",
            "reviews": [
                {
                    "name": "Gregg H.",
                    "rating": 5,
                    "date": "2026-01-13",
                    "review": "The light adds a nice look to my approach wall.",
                    "color": "Charcoal",
                    "images": [
                        "https://images.loox.io/uploads/2026/1/12/I5FsvSfhD_mid.jpg"
                    ],
                    "reply": "Thank you for the glowing review, Gregg✨We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Ross A.",
                    "rating": 5,
                    "date": "2026-01-12",
                    "review": "Installation was a snap and the motion detectors work as advertised. I am very happy with the investment. I purchased four and I have plans for the next pair once the new staircases are complete.",
                    "color": "Charcoal",
                    "images": [
                        "https://images.loox.io/uploads/2026/1/12/VmNBRj9Oj_mid.jpg"
                    ],
                    "reply": "Thank you for the glowing review, Ross✨ We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Ting S.",
                    "rating": 5,
                    "date": "2026-01-04",
                    "review": "Love these lites! Now is rain season but they can last till 10pm",
                    "color": "Charcoal",
                    "images": [
                        "https://images.loox.io/uploads/2026/1/4/TTeQt8deQ_mid.jpg",
                        "https://images.loox.io/uploads/2026/1/4/GSe-169Z9_mid.jpg",
                        "https://images.loox.io/uploads/2026/1/4/gILpljXKm_mid.jpg"
                    ]
                },
                {
                    "name": "Deborah H.",
                    "rating": 5,
                    "date": "2026-01-04",
                    "review": "We originally got the light for our driveway and put it up temporarily on our fuse box to see how it worked. It worked so well it will stay there and we will get another to put in the driveway.",
                    "color": "White",
                    "images": [
                        "https://images.loox.io/uploads/2026/1/4/2oAPKJik3_mid.jpg"
                    ]
                },
                {
                    "name": "Leigh B.",
                    "rating": 5,
                    "date": "2025-12-24",
                    "review": "Really love that this light is simple, minimal, nice quality and not too bright like so many of the solar options out there. I didn't want a cold, blinding spotlight and this was just right to light up the doorway as I approach. The options for motion detection are great, too!",
                    "color": "Charcoal",
                    "images": [
                        "https://images.loox.io/uploads/2025/12/23/M1k3gu9tD_mid.jpg"
                    ]
                },
                {
                    "name": "Danny L.",
                    "rating": 5,
                    "date": "2025-12-23",
                    "review": "I love the soft hue and how sleek it looks",
                    "color": "Charcoal",
                    "video": "https://iframe.videodelivery.net/e876e0a4c70ebcafd2d3059df2f79397?autoplay=true&muted=true&preload=auto"
                },
                {
                    "name": "Melanie H.",
                    "rating": 5,
                    "date": "2025-12-20",
                    "review": "Perfect for our entryway, will definitley order more for darker spits around the home.",
                    "color": "Charcoal",
                    "images": [
                        "https://images.loox.io/uploads/2025/12/20/bkRnhd3s2_mid.jpg"
                    ]
                },
                {
                    "name": "Barbara S.",
                    "rating": 5,
                    "date": "2025-12-09",
                    "review": "Easy to install, work exactly as I had hoped coming on at dusk automatically.  Very happy.",
                    "color": "Charcoal",
                    "images": [
                        "https://images.loox.io/uploads/2025/12/8/P_LIinqNJ_mid.jpg"
                    ]
                },
                {
                    "name": "Jan R.",
                    "rating": 5,
                    "date": "2025-11-13",
                    "review": "Best lights. Looking to buy 6 more for the backyard and a a few lanterns!",
                    "images": [
                        "https://images.loox.io/uploads/2025/11/13/PzBOL8tr7_mid.jpg",
                        "https://images.loox.io/uploads/2025/11/13/Ds-8VvBav_mid.jpg"
                    ],
                    "reply": "Thank you for your kind words, Jan! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Kristy W.",
                    "rating": 5,
                    "date": "2025-11-13",
                    "review": "We are so impressed. Sleek and modern and produces good amount of light at night. Definitely will buy more in the future even for gifts aswell :-)",
                    "images": [
                        "https://images.loox.io/uploads/2025/11/12/TZ3EZpcCs_mid.jpg"
                    ],
                    "reply": "Thank you for your kind words, Kristy! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Michael B.",
                    "rating": 5,
                    "date": "2025-10-19",
                    "review": "Brought great light to a place without direct wiring. We're looking at other areas to add even more.",
                    "images": [
                        "https://images.loox.io/uploads/2025/10/18/7ZNUd3KwX_mid.jpg"
                    ],
                    "reply": "Thank you for the glowing review, Michael! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Andrew S.",
                    "rating": 4,
                    "date": "2025-10-14",
                    "review": "Awesome lights work great for our home",
                    "images": [
                        "https://images.loox.io/uploads/2025/10/14/61Q_PITuR_mid.jpg",
                        "https://images.loox.io/uploads/2025/10/14/fEZOlPi3P_mid.jpg"
                    ],
                    "reply": "Wow, your setup looks amazing, Andrew! Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Tudon M.",
                    "rating": 5,
                    "date": "2025-09-30",
                    "review": "Excellent lights, easy setup and magnetic too!",
                    "images": [
                        "https://images.loox.io/uploads/2025/9/30/fe8i-w4m5_mid.jpg"
                    ],
                    "reply": "Thank you for the glowing review, Tudon! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "John J.",
                    "rating": 5,
                    "date": "2025-09-24",
                    "review": "Easy install , worked exactly as advertised and sets a beautiful ambience over our pool",
                    "images": [
                        "https://images.loox.io/uploads/2025/9/24/qZFJQ4aPE_mid.jpg"
                    ],
                    "reply": "Thank you for the glowing review, John! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Anthony C.",
                    "rating": 5,
                    "date": "2025-09-21",
                    "review": "Brilliant light!! You won't regret buying these!!",
                    "video": "https://iframe.videodelivery.net/cafdcc86f4a6e5a9054072b8ddba909c?autoplay=true&muted=true&preload=auto",
                    "reply": "Thank you for your kind words Anthony—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Lynda B.",
                    "rating": 5,
                    "date": "2025-09-19",
                    "review": "These lights are awesome. Even better than expected with the different brightness settings.",
                    "images": [
                        "https://images.loox.io/uploads/2025/9/19/GyIsOW_JN_mid.jpg",
                        "https://images.loox.io/uploads/2025/9/19/C29J0w2Rt_mid.jpg"
                    ],
                    "reply": "Thank you for the glowing review, Lynda! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Ruth A.",
                    "rating": 5,
                    "date": "2025-08-31",
                    "review": "These lights are great, they are both functional and beautiful",
                    "images": [
                        "https://images.loox.io/uploads/2025/8/31/YK5hpOtmQ_mid.jpg"
                    ],
                    "reply": "Thank you for the glowing review, Ruth! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Susan H.",
                    "rating": 5,
                    "date": "2025-08-29",
                    "review": "I love my lights.  I purchased two for my new home and now I want more! They are so much better than I expected.  So easy to install and I love the light they put out.  I think they look quite smart.",
                    "images": [
                        "http://images.loox.io/uploads/2025/8/28/lb4RQUQUM_mid.jpg"
                    ],
                    "reply": "Wow, Susan! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Peta A.",
                    "rating": 5,
                    "date": "2025-08-26",
                    "review": "Love these lights.. about to order more !",
                    "images": [
                        "https://images.loox.io/uploads/2025/8/26/mNjFXjnTr_mid.jpg"
                    ]
                },
                {
                    "name": "Mark G.",
                    "rating": 5,
                    "date": "2025-08-24",
                    "review": "Works looks great fits perfectly side of our house",
                    "images": [
                        "https://images.loox.io/uploads/2025/8/24/vW7cItC5j_mid.jpg"
                    ]
                },
                {
                    "name": "Martin S.",
                    "rating": 5,
                    "date": "2025-08-20",
                    "review": "These lights are brilliant (pun intended!) They do exactly as I intended. They have great style and easy to install. With an effective spread of lovely, nice warm light they blend in fabulously on our stairs.",
                    "images": [
                        "https://images.loox.io/uploads/2025/8/20/f6lq-6WIY_mid.jpg",
                        "https://images.loox.io/uploads/2025/8/20/RD4uTMDZg_mid.jpg"
                    ]
                },
                {
                    "name": "Steve H.",
                    "rating": 5,
                    "date": "2025-08-13",
                    "review": "Great highlight for my planter boxes in our courtyard",
                    "images": [
                        "https://images.loox.io/uploads/2025/8/13/4EHIgxtdx_mid.jpg",
                        "https://images.loox.io/uploads/2025/8/13/8DlKieHuk_mid.jpg"
                    ],
                    "reply": "Wow, Steve! Thank you for sharing your set-up with us-wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Simon L.",
                    "rating": 5,
                    "date": "2025-08-08",
                    "review": "Ordered 4 of these lights.  They create a nice atmosphere in the Alfresco/backyard area. Perfect ambiance for a quiet drink with friends and family",
                    "images": [
                        "https://images.loox.io/uploads/2025/8/8/QBKusJkC5_mid.jpg"
                    ],
                    "reply": "Thank you for the glowing review, Simon! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Noreen W.",
                    "rating": 5,
                    "date": "2025-07-31",
                    "review": "We needed some light in our back garden and so we got these.  We hope they offered enough light and they do - we are very pleased with how well they work, going from a dull light on standby to a bright light when we're nearby.  Bright without being spotlight-like.  Very happy.  We've ordered another one to add to what's there for further down the path.",
                    "images": [
                        "https://images.loox.io/uploads/2025/7/31/DyElhocxR_mid.jpg"
                    ],
                    "reply": "Thank you for the glowing review, Noreen! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "James S.",
                    "rating": 5,
                    "date": "2025-07-28",
                    "review": "ABSOLUTELY IN LOVE WITH MY NEW LIGHTS😍 TRANSFORMS THE OUTDOOR AREA BY BRINGS A LEVEL SOPHISTICATION AND CLASS TO OVERALL AMBIENCE! I BOUGHT 8 LIGHTS IN TOTAL 😊",
                    "images": [
                        "https://images.loox.io/uploads/2025/7/28/SA8Or6TUD_mid.jpg"
                    ],
                    "reply": "Wow, James! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Anthony C.",
                    "rating": 5,
                    "date": "2025-07-27",
                    "review": "Great lighting, really like how the sensors operate",
                    "video": "https://iframe.videodelivery.net/db9d692794d941f18fd4921b02c74f1d?autoplay=true&muted=true&preload=auto"
                },
                {
                    "name": "Hannah P.",
                    "rating": 5,
                    "date": "2025-07-24",
                    "review": "These lights are easy to install and a beautiful addition to our yard.",
                    "images": [
                        "https://images.loox.io/uploads/2025/7/24/GDlJD7IbJ_mid.jpg"
                    ],
                    "reply": "Thank you for the glowing review, Hannah! 💡 We're so happy you love your lights."
                },
                {
                    "name": "Nick G.",
                    "rating": 5,
                    "date": "2025-07-08",
                    "review": "Absolutely love these lights. Perfect lighting to light up our driveway. Positive vibes from everyone who has seen them. Will be buying lots more.",
                    "images": [
                        "https://images.loox.io/uploads/2025/7/8/5-5GRfQZU_mid.jpg"
                    ],
                    "reply": "Your setup looks absolutely beautiful! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Charlotte A.",
                    "rating": 5,
                    "date": "2025-04-25",
                    "review": "Absolutely love this product. From ordering the lights, to getting them within a short period of time, to the ease of installing them and did I mention, that they look amazing and are so easy to use. They elevate your garden to the next level. Thank you!! We will definitely be buying more!!",
                    "images": [
                        "https://images.loox.io/uploads/2025/6/23/RIB5048oVL_mid.jpg",
                        "https://images.loox.io/uploads/2025/6/23/RigsKMTEw5_mid.jpg"
                    ]
                },
                {
                    "name": "Daria H.",
                    "rating": 5,
                    "date": "2025-04-21",
                    "review": "Easy to install. Love that you can choose the levels and fit in beautifully with the house",
                    "images": [
                        "https://images.loox.io/uploads/2025/6/23/JxZJlYT7QD_mid.jpg"
                    ]
                },
                {
                    "name": "Thomas J.",
                    "rating": 5,
                    "date": "2025-04-19",
                    "review": "Super easy to install and provide enough light out of the box",
                    "images": [
                        "https://images.loox.io/uploads/2025/6/23/xVabKoHZA_mid.jpg"
                    ]
                },
                {
                    "name": "Cesseri T.",
                    "rating": 5,
                    "date": "2025-03-28",
                    "review": "Great quality product very impressed.",
                    "images": [
                        "https://images.loox.io/uploads/2025/6/23/BbBgPm_Vb_I_mid.jpg",
                        "https://images.loox.io/uploads/2025/6/23/i_QeblX5WfF_mid.jpg"
                    ]
                },
                {
                    "name": "Noleen H.",
                    "rating": 5,
                    "date": "2025-03-27",
                    "review": "These lights are amazing! Totally changed the dynamic of our back garden and illuminated the walkway to the pool. I suddenly felt like I was living in a resort!",
                    "images": [
                        "https://images.loox.io/uploads/2025/6/23/D9x1J6L69fZ_mid.jpg"
                    ]
                },
                {
                    "name": "Dean H.",
                    "rating": 5,
                    "date": "2025-02-25",
                    "review": "Best ever wireless hassle free product - worth every cent!!!",
                    "images": [
                        "https://images.loox.io/uploads/2025/2/27/K2On-WtWm_mid.jpg",
                        "https://images.loox.io/uploads/2025/2/27/OjGT02WWUS_mid.jpg"
                    ],
                    "reply": "Hey Dean H. Wow, this photo looks amazing! We're so thrilled you're loving your Solar Wall Light with Motion Sensor. 'Best ever' is high praise, and we truly appreciate it!💯🔥✨💛"
                },
                {
                    "name": "Michelle V.",
                    "rating": 5,
                    "date": "2025-02-20",
                    "review": "Creating a wonderful ambience to an otherwise dark and somewhat neglected area...love the cosy vibes it creates!!✨️",
                    "images": [
                        "https://images.loox.io/uploads/2025/2/27/l1fYppJN0_mid.jpg"
                    ],
                    "reply": "Hey Michelle V. That's fantastic! We're so happy to hear that our Solar Wall Light is transforming your space and creating such a cozy vibe. It's wonderful how a little light can make such a big difference, especially in a neglected area. Thank you for sharing your feedback and the photo – it really brightens our day! ✨"
                },
                {
                    "name": "Gill S.",
                    "rating": 5,
                    "date": "2025-02-19",
                    "review": "Love my solar wall lights and my solar string lights. Best Buy ever.",
                    "images": [
                        "https://images.loox.io/uploads/2025/2/27/fkd8tSbv_V_mid.jpg"
                    ],
                    "reply": "Hey Gill S. Thank you very much for sending us your amazing images ✨. We're absolutely beaming to hear you love your solar wall lights and string lights!  \"Best Buy ever\" – that's fantastic!  We're so glad they're bringing you so much enjoyment!🔥💯"
                },
                {
                    "name": "Wilma P.",
                    "rating": 5,
                    "date": "2025-02-16",
                    "review": "Great product",
                    "images": [
                        "https://images.loox.io/uploads/2025/2/27/NhNRs6SVH_mid.jpg"
                    ],
                    "reply": "Hi Wilma P. We're delighted you're happy with your Solar Wall Light with Motion Sensor. Your setting looks breathtaking! 🥰"
                },
                {
                    "name": "Andreij H.",
                    "rating": 5,
                    "date": "2025-02-04",
                    "review": "The wall lights are exceptionally beautiful, easy to install and intuitive to operate. A great solution to avoid chasing into walls to lay down electric cables. Brilliant - in all the senses of the word.",
                    "images": [
                        "https://images.loox.io/uploads/2025/2/27/77eplMqZA_mid.jpg"
                    ],
                    "reply": "Hi Andreij H. We're so thrilled you find them exceptionally beautiful, easy to install, and intuitive to operate! That's exactly what we aim for. Thanks for the brilliant review – it makes our day!🥰 Thank you!"
                },
                {
                    "name": "Darryl B.",
                    "rating": 5,
                    "date": "2025-02-03",
                    "review": "Strong magnets and versatile to place in various areas depending where needed. Goes well with the string lights",
                    "images": [
                        "https://images.loox.io/uploads/2025/2/27/kIM4flkXzR_mid.jpg"
                    ],
                    "reply": "Hi Darryl B. That's wonderful! We designed the light with versatility in mind, so it's great to hear it's working perfectly for you in different areas🤗 . And we love that it matches your string lights! Amazing setting! Thank you for sharing this with us. 💛"
                },
                {
                    "name": "Gerard P.",
                    "rating": 5,
                    "date": "2024-12-06",
                    "review": "Our light magnetically sticks to our planter frame. I've set it to turn on when it gets dark and stay on. It adds so much atmosphere and lights up the space beautifully. I'm trying to find another place to put another one.",
                    "images": [
                        "https://images.loox.io/uploads/2025/2/27/x1-4gl-ylc_mid.jpg"
                    ],
                    "reply": "Hey Gerard P, Thank you for sharing this stunning photo and your experience with the Solar Wall Light with Motion Sensor! 😊 It's amazing to see how it enhances your beautiful space with its warm glow and functionality. ✨ We're so glad it's become such a versatile addition to your setup, and we can't wait to hear where you decide to place the next one! 🤩"
                },
                {
                    "name": "Tristan",
                    "rating": 5,
                    "date": "2024-11-12",
                    "review": "This solar light exceeded my expectations! It looks sleek and modern on our patio, and the adjustable brightness settings are a huge plus. We love how it instantly lights up when we walk by.",
                    "images": [
                        "https://images.loox.io/uploads/2025/2/27/szyUiMFin0_mid.jpg"
                    ],
                    "reply": "Hi Tristan, Wow, that's fantastic🤩! We love hearing how our products enhance your lifestyle. Our Solar Wall Light is designed to be both stylish and functional, and we're glad you appreciate the sleek design and adjustable brightness. Thank you so so much for your amazing review!✨"
                },
                {
                    "name": "Tayla S.",
                    "rating": 5,
                    "date": "2024-11-12",
                    "review": "I couldn't believe how easy it was to set up—everything I needed was included, and I had it mounted in minutes. The motion sensor picks up movement perfectly, and the light is super bright. It's a great addition to our garden! We got 3 of them!",
                    "images": [
                        "https://images.loox.io/uploads/2025/2/27/yBns0fyM8X_mid.jpg"
                    ],
                    "reply": "Hi Tayla S, Thank you so much for sharing your experience! 🤩 We're so happy to hear how easy it was to set up and that it's lighting up your garden beautifully! The motion sensor and brightness really do make it a standout, and we love that you're enjoying it so much that you got three! 🌟 If you ever need anything else, we're just a message away. Happy glowing! ✨"
                },
                {
                    "name": "Greg A.",
                    "rating": 4,
                    "date": "2026-01-11",
                    "review": "Use as wall light near outdoor grill.  Motion detect works great.  Provides decent illumination.  Wish fixture was longer to provide more light.  Otherwise very happy with it",
                    "color": "White",
                    "reply": "Thank you for your kind words, Greg! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Rick H.",
                    "rating": 4,
                    "date": "2026-01-10",
                    "review": "Needs to be more motion sensitive. You have to get to close to it before it kicks up the brightness.",
                    "color": "Charcoal"
                },
                {
                    "name": "Keith C.",
                    "rating": 5,
                    "date": "2026-01-08",
                    "review": "Love the lights, got the motion and the lantern, such nice quality.",
                    "color": "Charcoal"
                },
                {
                    "name": "Kerry W.",
                    "rating": 5,
                    "date": "2026-01-03",
                    "review": "A good looking solution that functions super well. There is a lot of crappy solar lights in the market and I had just returned one for not working as promised and then the ad appeared. The light is brilliant with a nice soft warm white and several modes of light strength. I will be buying more 100%.",
                    "color": "Charcoal"
                },
                {
                    "name": "Jin K.",
                    "rating": 4,
                    "date": "2025-12-31",
                    "review": "Easy install and great sleek design!",
                    "color": "Charcoal"
                },
                {
                    "name": "Justin L.",
                    "rating": 5,
                    "date": "2025-12-28",
                    "review": "The lights are exactly what we were looking for",
                    "color": "Charcoal"
                },
                {
                    "name": "Carolyn P.",
                    "rating": 5,
                    "date": "2025-12-26",
                    "review": "Love our lights. Bright and stylish.",
                    "color": "Charcoal"
                },
                {
                    "name": "Monique L.",
                    "rating": 5,
                    "date": "2025-12-19",
                    "review": "These lights look very premium and were super easy to install. I love having them by my gate entrance, they always magically turn on and they are the perfect amount of brightness.",
                    "color": "Charcoal"
                },
                {
                    "name": "Lori H.",
                    "rating": 5,
                    "date": "2025-12-18",
                    "review": "A perfect solution",
                    "color": "White"
                },
                {
                    "name": "Goddard K.",
                    "rating": 5,
                    "date": "2025-12-16",
                    "review": "Wonderful company to deal with very helpful love their solar lights return customer",
                    "color": "Charcoal"
                },
                {
                    "name": "Carolyn B.",
                    "rating": 5,
                    "date": "2025-12-15",
                    "review": "These are fantastic lights. Easy to set up. Look great.",
                    "color": "Charcoal"
                },
                {
                    "name": "Misty S.",
                    "rating": 4,
                    "date": "2025-12-15",
                    "review": "We appreciated the sleek design and really liked the size and look of the Lighthouse Solar Light. We did have to make a return due to the fact that the solar panel could not charge on our shaded front property.  So sad!",
                    "color": "Charcoal"
                },
                {
                    "name": "Matthew M.",
                    "rating": 5,
                    "date": "2025-12-11",
                    "review": "LOOKS GREAT AND WORKS AS IT SHOULD",
                    "color": "White"
                },
                {
                    "name": "Marie G.",
                    "rating": 5,
                    "date": "2025-12-09",
                    "review": "Only had them in use for a week but so far so good.  Stronger light than other solar lights I have used.",
                    "color": "Charcoal"
                },
                {
                    "name": "Vivienne J.",
                    "rating": 5,
                    "date": "2025-12-08",
                    "review": "I wanted something good looking, not like the normal solar lights that are around. Very happy",
                    "color": "Charcoal"
                },
                {
                    "name": "Kylie P.",
                    "rating": 5,
                    "date": "2025-12-03",
                    "review": "Great product. Excellent quality. Works perfectly.",
                    "color": "Charcoal"
                },
                {
                    "name": "Josuel L.",
                    "rating": 5,
                    "date": "2025-11-30",
                    "review": "Soft lighiting and great product"
                },
                {
                    "name": "Mark T.",
                    "rating": 5,
                    "date": "2025-11-28",
                    "review": "Great product",
                    "reply": "Thank you for the glowing review, Mark✨ We're so happy you love your lights."
                },
                {
                    "name": "Kat V.",
                    "rating": 5,
                    "date": "2025-11-20",
                    "review": "Lovely warm light, high quality, durable build and has all the modes and functions I was looking for. 10/10 stars!",
                    "reply": "Wow, Kat! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Glenda D.",
                    "rating": 5,
                    "date": "2025-11-16",
                    "review": "Very happy with the quality and service of your products.",
                    "reply": "Thank you for your kind words, Glenda! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Timothy M.",
                    "rating": 5,
                    "date": "2025-11-13",
                    "review": "Love it",
                    "reply": "Thank you for your kind words, Timothy! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Pam A.",
                    "rating": 5,
                    "date": "2025-11-12",
                    "review": "I don't like to shop online but took the risk and ordered 4 lights. I was sceptical but so far, they are awesome and so easy to install. Highly recommend.",
                    "reply": "Thank you for the glowing review, Pam! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Aivar V.",
                    "rating": 5,
                    "date": "2025-11-05",
                    "review": "The lights arrived well and look good. Unfortunately upon installing, one of the wall brackets broke upon tightening the screw (the screw cut right through the plastic). I don't think I applied too much pressure to it, especially as it was the last (5th light) to install, and the other ones worked well. I managed to use a small thin flat washer to increase the bearing a bit and fasten the bracket to the wall. Perhaps it would be worth supplying washers or increasing the strength of the bracket a bit to avoid such issues. Thank you.",
                    "reply": "Thank you so much for taking the time to share your feedback, especially the detail about the wall bracket breaking upon tightening. We are happy the lights look good, but we sincerely apologize for that issue!💛 We truly appreciate your ingenuity in using a washer to fix it, and we will certainly pass your suggestion to supply washers or increase the bracket strength directly to our Product Team for review."
                },
                {
                    "name": "A B.",
                    "rating": 5,
                    "date": "2025-10-21",
                    "review": "Awesome",
                    "reply": "Thank you for your glowing review!✨"
                },
                {
                    "name": "Kim A.",
                    "rating": 5,
                    "date": "2025-10-11",
                    "review": "Love them so mch waiting for another 2 lights! ❤️",
                    "reply": "Thank you for the glowing review, Kim! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Wayne S.",
                    "rating": 5,
                    "date": "2025-10-09",
                    "review": "Works really well , easy to install, awesome design",
                    "reply": "Thank you for your kind words, Wayne! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Kim A.",
                    "rating": 5,
                    "date": "2025-10-08",
                    "review": "Love them and got 2 more!"
                },
                {
                    "name": "Michael R.",
                    "rating": 5,
                    "date": "2025-09-22",
                    "review": "Advertised as promised very satisfied with my purchase",
                    "reply": "Thank you so much for your kind words, Michael! Wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Joseph A.",
                    "rating": 4,
                    "date": "2025-09-08",
                    "review": "Very good quality, easy to install.   They get all day sun for recharging but begin to fade early morning.    Still highly recommend.",
                    "reply": "Thank you for the glowing review, Joseph! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Nancy S.",
                    "rating": 5,
                    "date": "2025-09-08",
                    "review": "Love this lantern, as does everyone who sees it. I've sent your link to tons of people!",
                    "reply": "This means so much to us! 💛 Thank you for your kind words and for recommending us—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Scott C.",
                    "rating": 5,
                    "date": "2025-09-04",
                    "review": "Very good quality light.",
                    "reply": "Thank you for the glowing review, Scott!💡We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Rob W.",
                    "rating": 5,
                    "date": "2025-08-27",
                    "review": "I have them mounted on posts either side of garden gate, they light the post and highlight the area nicely",
                    "reply": "Thank you for the glowing review, Rob! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Hannah T.",
                    "rating": 5,
                    "date": "2025-08-19",
                    "review": "Look great",
                    "reply": "Thank you for the glowing review, Hannah!✨"
                },
                {
                    "name": "Denise H.",
                    "rating": 5,
                    "date": "2025-08-18",
                    "review": "I was a bit nervous about buying something I'd just seen in an insta ad but these lights are actually so good!! They've made such a difference to our very dark back deck at night.",
                    "reply": "Wow, Denise! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Jacob G.",
                    "rating": 4,
                    "date": "2025-08-15",
                    "review": "Good functionality and nice warm light.",
                    "reply": "Thank you for the glowing review, Jacob! 💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Michael S.",
                    "rating": 5,
                    "date": "2025-07-30",
                    "review": "look good",
                    "reply": "\"Thank you for the glowing review, Michael! 💡"
                },
                {
                    "name": "Bruce M.",
                    "rating": 5,
                    "date": "2025-07-16",
                    "review": "Perfect for our converted shipping container. No drilling, magnetic mount means you just slap it onto the side of the container. No leads means it looks nice and clean. Definitely buying more for our place.",
                    "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Chris B.",
                    "rating": 5,
                    "date": "2025-07-11",
                    "review": "High quality and exactly what I expected from the marketing.  Work very well, even in winter low-light conditions. Would recommend.",
                    "reply": "Wow, Chris! This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Corey L.",
                    "rating": 5,
                    "date": "2025-06-30",
                    "review": "We are in the middle of renovating the back yard, great addition and extremely happy with them. They work as advertised",
                    "reply": "Thank you for the glowing review💡 We're so happy you love your lights. If you ever need more, we're always here to help!"
                },
                {
                    "name": "Antonio M.",
                    "rating": 5,
                    "date": "2025-06-23",
                    "review": "Easy installation, great ambience light, do not last through the night, but it may be that there is not sufficient sun to recharge the lights",
                    "reply": "Thank you for your glowing review✨ Our solar panels are designed to absorb indirect sunlight more efficiently than other solar panel types, the battery will likely still charge, but it will do so more slowly and may not reach full capacity."
                },
                {
                    "name": "Dean M.",
                    "rating": 5,
                    "date": "2025-06-23",
                    "review": "Awesome!",
                    "reply": "Thank you for the glowing review!✨"
                },
                {
                    "name": "Charlotte J.",
                    "rating": 5,
                    "date": "2025-06-23",
                    "review": "Fantastic quality, sleek and modern design, super quick and easy to install. Great lighting which has added fabulous sensor lighting to my driveway and walkway. The whole experience from ordering to receipt of the product was amazing. ( I loved meeting the team) The packaging it comes in was so professionally done, I was blown away from the minute I opened the first one. 🙌🙌",
                    "reply": "Thank you for the glowing review We're so happy you love your lights! We'd love to see your setup—feel free to tag us @litehouse! 🌟 #LitehouseMoments"
                },
                {
                    "name": "Amy R.",
                    "rating": 5,
                    "date": "2025-06-22",
                    "review": "We bought this light for a very dark bin area at our block of flats. It saved us having to expense an electrician and works so well. There are 4 modes of brightness so you can choose how much you want to conserve to make the light last longer. Just brilliant and wonderful service from Litehouse.",
                    "reply": "This means so much to us! 💛 Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights! ✨"
                },
                {
                    "name": "Gideon B.",
                    "rating": 5,
                    "date": "2025-06-21",
                    "review": "Looks and works very nice.",
                    "reply": "Thank you for your kind words—wishing you many better, brighter moments with your Litehouse lights✨"
                },
                {
                    "name": "Martli P.",
                    "rating": 5,
                    "date": "2025-05-05",
                    "review": "You have impressed me more than I can express. From ordering on your website to almost instant shipping, products arrived in premium packaging and they just work! Not to mention that they are elegant and well thought out. Well done guys! I tried to call you to compliment you in person but I didn't get through. You make me proud!!!"
                },
                {
                    "name": "Theunis B.",
                    "rating": 5,
                    "date": "2025-05-03",
                    "review": "As advertised. It is a pity that there is not a model with the sun panel on the immediate panel next to the light itself."
                },
                {
                    "name": "Julie B.",
                    "rating": 5,
                    "date": "2025-05-02",
                    "review": "Added these wall lights to my Litehouse string lights at our pool area. Love the finished off look and ambient light they now give to this area."
                },
                {
                    "name": "Rupert L.",
                    "rating": 5,
                    "date": "2025-04-24",
                    "review": "Working great so far!"
                },
                {
                    "name": "Pravesh A.",
                    "rating": 4,
                    "date": "2025-04-22",
                    "review": "I love the light; I have not installed as yet. We still need to find the right spot with sufficient sun to capture the solar."
                },
                {
                    "name": "Pedro C.",
                    "rating": 5,
                    "date": "2025-04-18",
                    "review": "Will keep buying these products ."
                },
                {
                    "name": "Bronwyn K.",
                    "rating": 5,
                    "date": "2025-04-18",
                    "review": "Love this product! It works so well and makes such a difference in my garden."
                },
                {
                    "name": "Dion O.",
                    "rating": 5,
                    "date": "2025-04-15",
                    "review": "I will send a picture in a few days. Finished off our Koi pond and pool area perfectly. Warm regards Dion"
                },
                {
                    "name": "Max S.",
                    "rating": 5,
                    "date": "2025-04-14",
                    "review": "Great product!"
                },
                {
                    "name": "Tasneem P.",
                    "rating": 5,
                    "date": "2025-04-13",
                    "review": "Excellent product"
                },
                {
                    "name": "Roxanne C.",
                    "rating": 5,
                    "date": "2025-04-12",
                    "review": "Easy and effortless installation 👏🏻"
                },
                {
                    "name": "Mare D.",
                    "rating": 4,
                    "date": "2025-04-11",
                    "review": "Good quality light, with one exceptiom: the magnets keep falling out."
                },
                {
                    "name": "Francois S.",
                    "rating": 5,
                    "date": "2025-04-10",
                    "review": "Very well manufactured products. Excellent quality."
                },
                {
                    "name": "Dustin B.",
                    "rating": 5,
                    "date": "2025-04-10",
                    "review": "Easy delivery. Works well"
                },
                {
                    "name": "Bronwen F.",
                    "rating": 5,
                    "date": "2025-04-07",
                    "review": "Absolutely beautiful & classy look .Luv luv luv. Can't wait to get more"
                },
                {
                    "name": "Des G.",
                    "rating": 5,
                    "date": "2025-04-07",
                    "review": "Excellent product, good service and prompt delivery."
                },
                {
                    "name": "Sean V.",
                    "rating": 5,
                    "date": "2025-04-05",
                    "review": "I am absolutely delighted with the 4 wall mounted lights recently purchased, these lights are in a shaded area and still produce great light very happy. I am wanting more"
                },
                {
                    "name": "Annemarie V.",
                    "rating": 5,
                    "date": "2025-04-03",
                    "review": "Love it"
                },
                {
                    "name": "Joanna O.",
                    "rating": 5,
                    "date": "2025-04-03",
                    "review": "They do exactly as advertised. Strong light and look great."
                },
                {
                    "name": "Shan B.",
                    "rating": 5,
                    "date": "2025-03-31",
                    "review": "Looks great, it's ticking all the boxes so far, I'm holding thumbs it lasts over time."
                },
                {
                    "name": "Paul S.",
                    "rating": 5,
                    "date": "2025-03-31",
                    "review": "We put this up at our stables. It's was super easy to install and set up. After about 3 weeks in intense rain, it's still worked tremendously well and has an impressive battery life. It looks tidy and unobtrusive. The light is warm and not harsh. I think I'll get some more!"
                },
                {
                    "name": "Luzuko Z.",
                    "rating": 5,
                    "date": "2025-03-31",
                    "review": "Fantastic service and speedy delivery. Great product too"
                },
                {
                    "name": "Aidan O.",
                    "rating": 5,
                    "date": "2025-03-29",
                    "review": "Nice product !"
                },
                {
                    "name": "Jane M.",
                    "rating": 4,
                    "date": "2025-03-27",
                    "review": "Clean lines, lights the walkway as needed."
                },
                {
                    "name": "Andre M.",
                    "rating": 5,
                    "date": "2025-03-26",
                    "review": "Great lights, I like it."
                },
                {
                    "name": "Jeffrey L.",
                    "rating": 5,
                    "date": "2025-03-24",
                    "review": "Classy and easy to install ; if they last a couple of years at least then well happy !"
                },
                {
                    "name": "Amanda D.",
                    "rating": 5,
                    "date": "2025-03-19",
                    "review": "good"
                },
                {
                    "name": "Francois V.",
                    "rating": 5,
                    "date": "2025-03-02",
                    "review": "This is the first 2 of six lights I want to install, once they are all in I can write a review!",
                    "reply": "Hi  Francois V. Thank you for your amazing rating! We know that you will fall in love 💞with your Solar Wall Light with Motion Sensor! You can leave a review once you have installed your lights! 🌟🌟"
                },
                {
                    "name": "Heather W.",
                    "rating": 5,
                    "date": "2025-03-01",
                    "review": "I just LOVE my Litehouse lights! It adds so much ambience to our outdoors!",
                    "reply": "Hi Heather W. WOW💛! That looks amazing! Thank you for sharing your beautiful lit-up space. It is completely magical! 💞🥰"
                },
                {
                    "name": "Theo L.",
                    "rating": 5,
                    "date": "2025-02-24",
                    "review": "Great quality and effective!",
                    "reply": "Hey Theo L. You read our minds! This is exactly what we aimed for! Thank you greatly for your amazing rating and review of our Solar Wall Light with Motion Sensor! Cheers to better, brighter, moments! 💛"
                },
                {
                    "name": "Lindsay S.",
                    "rating": 3,
                    "date": "2025-02-24",
                    "review": "The lights look lovely and neat, however, I find the setting instructions extremely difficult to understand"
                },
                {
                    "name": "Michael R.",
                    "rating": 5,
                    "date": "2025-02-22",
                    "review": "Nice product",
                    "reply": "Hi Michael R. Thank you very much. We fully agree! ✨"
                },
                {
                    "name": "Ingo G.",
                    "rating": 5,
                    "date": "2025-02-22",
                    "review": "Great product, simple well designed, easy to install and operate. Wonderful warm light.",
                    "reply": "Hi Ingo G. Thank you very much for your wonderful rating and review! It really means a lot to us that you took the time to share your wonderful experience with our product. The Solar wall lights is a definite winner! Thank you very much 🔥"
                },
                {
                    "name": "Charlene B.",
                    "rating": 5,
                    "date": "2025-02-20",
                    "review": "Sleek, classy, perfect colour and works like a charm. I ordered two but will get another one 😃",
                    "reply": "Hi Charlene B. That's wonderful to hear! We're happy that you're happy with the sleek design, the color, and especially how well they work!  It's fantastic that you're planning to get another one – that's the best compliment we can receive.  Enjoy your perfectly lit space! 😃"
                },
                {
                    "name": "Burgert S.",
                    "rating": 5,
                    "date": "2025-02-17",
                    "review": "The lights seem to be well made, and are surprisingly bright. I've had a lot of disappointments with solar lights, but so far these exceed my expectations. Bonus that you can choose between dim and bright, and with PIR and without.",
                    "reply": "Hi Burget S. That's fantastic! We're thrilled to hear that our Solar Wall Light with Motion Sensor has exceeded your expectation. We appreciate you highlighting the brightness and the flexibility of the dim/bright and PIR options – those are features we're particularly proud of.  Thank you for sharing your positive feedback! We hope you continue to enjoy them.✨"
                },
                {
                    "name": "Dianne L.",
                    "rating": 5,
                    "date": "2025-02-14",
                    "review": "Love these solar lights they are fantastic!",
                    "reply": "Hey Dianne L. We're so glad you're loving your Solar Wall Light with Motion Sensor.  Thanks for sharing your feedback! We confident that it provides you with reliable light for a long time to come.🤗🔥💛"
                },
                {
                    "name": "Catherine D.",
                    "rating": 5,
                    "date": "2025-02-11",
                    "review": "Aesthetically beautiful and practical!",
                    "reply": "Hey Dianne L. We're so glad you're loving your Solar Wall Light with Motion Sensor.  Thanks for sharing your feedback! We confident that it provides you with reliable light for a long time to come.🤗🔥💛"
                },
                {
                    "name": "Edna V.",
                    "rating": 5,
                    "date": "2025-02-09",
                    "review": "Love the string lights effortless to install and look beautiful.",
                    "reply": "Hi Edna V. This really made our day! Thank you so very much for taking the time to share your experience with our Solar Wall Light with Motion Sensor✨. Cheers to many more Bright Moments!"
                },
                {
                    "name": "Johan M.",
                    "rating": 5,
                    "date": "2025-01-20",
                    "review": "The lights are such a delight, it is exactly what I wanted.",
                    "reply": "Hey Johan M. That's so wonderful to hear! 😊  We put a lot of care into creating our lights, so it means a lot to us that you're happy with them. With Love, Litehouse!"
                },
                {
                    "name": "Jill F.",
                    "rating": 5,
                    "date": "2025-01-20",
                    "review": "Using presently in the back entertainment area, it lights up the entire braai area and it gives a laid back ambience.  Love it!",
                    "reply": "Hi Jill F. That's amazing to hear! We're so happy to hear our lights are creating the perfect ambiance for your braai area! 🔥 Nothing beats that laid-back vibe with good lights, company, and good food, right? Enjoy!"
                },
                {
                    "name": "Jill F.",
                    "rating": 5,
                    "date": "2025-01-20",
                    "review": "Using presently in the back entertainment area, it lights up the entire braai area and it gives a laid back ambience. Love it!"
                },
                {
                    "name": "Linda P.",
                    "rating": 4,
                    "date": "2025-01-09",
                    "review": "Warm., welcoming light",
                    "reply": "Hi Linda P. We're so glad to hear that the lights create such a warm and welcoming atmosphere! That's exactly the effect we strive for. We hope you continue to enjoy the enchanting glow they bring to your space."
                },
                {
                    "name": "Annelize H.",
                    "rating": 5,
                    "date": "2024-12-10",
                    "review": "Works much better than expected!  Great value for money.",
                    "reply": "Hi Annelize H, Thank you so much for your fantastic feedback! We're thrilled to hear that the Solar Wall Light with Motion Sensor is working even better than expected and that you're happy with the value for money 🤩."
                },
                {
                    "name": "Annelize H.",
                    "rating": 5,
                    "date": "2024-12-10",
                    "review": "Works much better than expected! Great value for money."
                },
                {
                    "name": "Susan D.",
                    "rating": 5,
                    "date": "2024-12-02",
                    "review": "Amazing products with amazing service. Always going the xstra mile to get my order to me on time. Love every light I ordered.",
                    "reply": "Hi Susan D, Thank you so much for your kind words! To hear you're loving your lights and that our service has met your expectations, really makes us happy. ✨ We always strive to go the extra mile for our customers! We hope your lights continue to brighten up your space beautifully! 🌟"
                },
                {
                    "name": "Daan S.",
                    "rating": 5,
                    "date": "2024-11-30",
                    "review": "Excellent service and great products!"
                },
                {
                    "name": "Johan L.",
                    "rating": 5,
                    "date": "2024-11-24",
                    "review": "Awesome product! Great looking"
                },
                {
                    "name": "Khyra ..",
                    "rating": 5,
                    "date": "2024-11-12",
                    "review": "Highly impressed with the quality! The light is sturdy and feels well-made. Installation was quick, and it gives off plenty of light without any wiring needed. We're already planning to buy a few more for the walkway!",
                    "reply": "Hey Khyra! We're so glad you're happy with your Solar Wall Mount Light! Thank you for the kind words and for choosing our product.🥰 It's wonderful to hear that you're impressed with the quality and ease of installation of our Solar Wall Mount Light. We're committed to providing high-quality, hassle-free products. Thank you for your support.💛✨💛"
                }
            ]
        };
        
        // Function to format date from YYYY-MM-DD to M/D/YYYY
        function formatDate(dateStr) {
            if (!dateStr) return '';
            try {
                var date = new Date(dateStr);
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var year = date.getFullYear();
                return month + '/' + day + '/' + year;
            } catch (e) {
                return dateStr;
            }
        }

        // Function to escape HTML
        function escapeHtml(text) {
            if (!text) return '';
            var map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, function(m) { return map[m]; });
        }

        // Function to create a single review card HTML
        function createReviewCard(review, options) {
            // Map new field names to old ones for compatibility
            var rating = review.rating || 5;
            var reviewText = review.review || '';
            var reviewDate = formatDate(review.date) || review.date || '';
            var images = review.images || [];
            // Handle 'image' field (string, potentially comma-separated) for festoon reviews
            if (!images || images.length === 0) {
                if (review.image && typeof review.image === 'string') {
                    // Split by comma if multiple images
                    images = review.image.split(',').map(function(img) { return img.trim(); }).filter(function(img) { return img.length > 0; });
                }
            }
            var color = review.color || '';
            var reply = review.reply || '';
            
            // Options for data attributes and display style
            options = options || {};
            var dataIndex = options.dataIndex !== undefined ? ' data-review-index="' + options.dataIndex + '"' : '';
            var displayStyle = options.displayStyle || '';
            
            var starCount = Math.min(5, Math.max(0, parseInt(rating, 10) || 0));
            var starsHtml = '';
            for (var i = 0; i < starCount; i++) {
                starsHtml += '<span class="cro-ki7-ki1-star cro-ki7-ki1-star-filled"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><g clip-path="url(#clip0_8_64)"><path d="M14.3491 12.7522L18.2105 9.00459L12.8853 8.22235L10.5 3.4011L8.11475 8.22235L2.7895 9.00459L6.65 12.7522L5.72862 18.0652L10.5 15.554L15.2582 18.0652L14.3491 12.7522ZM21 8.24685C21 8.43234 20.8906 8.63447 20.6719 8.85322L16.0904 13.3201L17.1754 19.6306C17.1841 19.6892 17.1885 19.7741 17.1885 19.8835C17.1885 20.3035 17.0161 20.5135 16.6714 20.5135C16.5112 20.5135 16.3433 20.4636 16.1665 20.363L10.5 17.3836L4.8335 20.3621C4.648 20.4627 4.48 20.5135 4.32863 20.5135C4.15188 20.5135 4.01975 20.4522 3.93138 20.3297C3.84024 20.1988 3.79361 20.042 3.79838 19.8826C3.79838 19.8318 3.80712 19.7478 3.82462 19.6297L4.90963 13.3201L0.315875 8.85234C0.105 8.62572 0 8.42447 0 8.24685C0 7.93622 0.23625 7.74197 0.707 7.66672L7.042 6.74535L9.88138 1.0036C10.0415 0.657971 10.2471 0.485596 10.5 0.485596C10.7529 0.485596 10.9585 0.657971 11.1186 1.0036L13.958 6.74535L20.293 7.66672C20.7646 7.74197 21 7.93622 21 8.24685Z" fill="black"/></g><g clip-path="url(#clip1_8_64)"><path d="M21 8.24685C21 8.43235 20.8906 8.63447 20.6719 8.85322L16.0904 13.3201L17.1754 19.6306C17.1841 19.6892 17.1885 19.7741 17.1885 19.8835C17.1935 20.0428 17.1472 20.1996 17.0564 20.3306C17.0126 20.3909 16.9545 20.4394 16.8873 20.4715C16.82 20.5036 16.7458 20.5183 16.6714 20.5143C16.5112 20.5143 16.3433 20.4636 16.1665 20.3621L10.5 17.3853L4.8335 20.3638C4.648 20.4645 4.48 20.5152 4.32863 20.5152C4.15188 20.5152 4.01975 20.454 3.93138 20.3315C3.84024 20.2006 3.79361 20.0438 3.79838 19.8843C3.79838 19.8336 3.80712 19.7496 3.82462 19.6315L4.90963 13.3218L0.315875 8.8541C0.105 8.62572 0 8.42447 0 8.24685C0 7.93622 0.23625 7.74197 0.707 7.66672L7.042 6.74535L9.88138 1.0036C10.0415 0.657971 10.2471 0.485596 10.5 0.485596C10.7529 0.485596 10.9585 0.657971 11.1186 1.0036L13.958 6.74535L20.293 7.66672C20.7646 7.74197 21 7.93622 21 8.24685Z" fill="black"/></g><defs><clipPath id="clip0_8_64"><rect width="21" height="21" fill="white"/></clipPath><clipPath id="clip1_8_64"><rect width="21" height="21" fill="white"/></clipPath></defs></svg></span>';
            }
            
            var imageHtml = '';
            var hasImage = images && images.length > 0 && images[0];
            var imageCount = images && Array.isArray(images) ? images.length : 0;
            var imageCountOverlay = '';
            var videoUrl = review.video || '';
            var hasVideo = videoUrl && videoUrl.trim() !== '';
            
            // Check for video first - if video exists, show video instead of image
            if (hasVideo) {
                // Display video as iframe
                imageHtml = '<iframe src="' + escapeHtml(videoUrl) + '" class="cro-ki7-ki1-review-video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            } else if (hasImage) {
                // Display image if no video
                imageHtml = '<img src="' + escapeHtml(images[0]) + '" alt="Litehouse Outdoor Solar Lanterns in use" class="cro-ki7-ki1-review-photo" />';
                
                // Add image count overlay if there are multiple images
                if (imageCount > 1) {
                    var additionalImages = imageCount - 1;
                    imageCountOverlay = '<div class="cro-ki7-ki1-review-image-count-overlay">' +
                        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="cro-ki7-ki1-review-image-count-icon">' +
                        '<path d="m3.122 11.13 1.455-1.455 4.002 4.002 2.547-2.547 2.183 2.183V6.69H3.122v4.439Zm-.728-5.894h11.642a.727.727 0 0 1 .728.728v11.642a.727.727 0 0 1-.728.727H2.394a.727.727 0 0 1-.727-.727V5.964a.728.728 0 0 1 .727-.728Zm8.368 5.093a1.091 1.091 0 1 1 0-2.182 1.091 1.091 0 0 1 0 2.182Z"></path>' +
                        '<path d="m15.492 9.364 1.17 1.43.658-6.59L7.184 3.192l-.132 1.317H5.59l.219-2.186a.728.728 0 0 1 .796-.652l11.584 1.16a.728.728 0 0 1 .652.796L17.682 15.21a.728.728 0 0 1-.796.651l-1.394-.139V9.364Z"></path>' +
                        '</svg>' +
                        '<span class="cro-ki7-ki1-review-image-count-text">+' + additionalImages + '</span>' +
                        '</div>';
                }
            } else {
                // No video or image
                imageHtml = '<img src="" alt="Litehouse Outdoor Solar Lanterns in use" class="cro-ki7-ki1-review-photo" />';
            }
            
            // Determine image container class
            var imageContainerClass = 'cro-ki7-ki1-review-image';
            if (!hasImage && !hasVideo) {
                imageContainerClass += ' cro-ki7-ki1-review-noImage';
            }
            
            // Card class: add cro-ki7-ki1-review-cardText when no image or video
            var cardClass = 'cro-ki7-ki1-review-card' + (!hasImage && !hasVideo ? ' cro-ki7-ki1-review-cardText' : '');
            var cardAttributes = 'class="' + cardClass + '"' + dataIndex + (displayStyle ? ' ' + displayStyle : '');
            
            var itemTypeHtml = '';
            if (color && color.trim() !== '') {
                itemTypeHtml = '<div class="cro-ki7-ki1-review-item-type"><span class="cro-ki7-ki1-item-type-label">Item type:</span><span class="cro-ki7-ki1-item-type-value">' + escapeHtml(color) + '</span></div>';
            }
            
            var replyHtml = '';
            if (reply && reply.trim() !== '') {
                // Limit reply to 150 characters and add "See more" button if needed
                var fullReplyText = reply || '';
                var displayReplyText = fullReplyText;
                var replySeeMoreButtonHtml = '';
                var replyEllipsis = '';
                var isReplyTruncated = false;
                
                if (fullReplyText.length > 150) {
                    // Truncate to 150 characters, trim trailing space, ellipsis in link
                    displayReplyText = fullReplyText.substring(0, 150).trimEnd();
                    replyEllipsis = '';
                    isReplyTruncated = true;
                    replySeeMoreButtonHtml = '...<a href="#" class="cro-ki7-ki1-review-see-more">See more</a>';
                }
                
                // Escape HTML and replace newlines for display
                var escapedDisplayReplyText = escapeHtml(displayReplyText).replace(/\n/g, '<br>');
                // Also escape full reply text for data attribute (double escape for HTML attribute)
                var escapedFullReplyText = escapeHtml(fullReplyText).replace(/"/g, '&quot;');
                
                // Store full reply text in data attribute if truncated
                var fullReplyTextDataAttr = isReplyTruncated ? ' data-full-text="' + escapedFullReplyText + '"' : '';
                
                replyHtml = '<div class="cro-ki7-ki1-review-reply"><div class="cro-ki7-ki1-review-reply-header"><span class="cro-ki7-ki1-review-reply-author">Litehouse LLC replied:</span></div><div class="cro-ki7-ki1-review-reply-text"><p' + fullReplyTextDataAttr + '>' + escapedDisplayReplyText + replySeeMoreButtonHtml + '</p></div></div>';
            }
            
            // Limit text to 250 characters and add "See more" button if needed
            var fullText = reviewText || '';
            var displayText = fullText;
            var seeMoreButtonHtml = '';
            var ellipsis = '';
            var isTruncated = false;
            
            if (fullText.length > 250) {
                // Truncate to 250 characters, trim trailing space, ellipsis in link
                displayText = fullText.substring(0, 250).trimEnd();
                ellipsis = '';
                isTruncated = true;
                seeMoreButtonHtml = '...<a href="#" class="cro-ki7-ki1-review-see-more">See more</a>';
            }
            
            // Escape HTML and replace newlines for display
            var escapedDisplayText = escapeHtml(displayText).replace(/\n/g, '<br>');
            // Also escape full text for data attribute (double escape for HTML attribute)
            var escapedFullText = escapeHtml(fullText).replace(/"/g, '&quot;');
            
            // Store full text in data attribute if truncated
            var fullTextDataAttr = isTruncated ? ' data-full-text="' + escapedFullText + '"' : '';
            
            return '<div ' + cardAttributes + '>' +
                '<div class="cro-ki7-ki1-review-content">' +
                    '<div class="cro-ki7-ki1-review-header">' +
                        '<div class="cro-ki7-ki1-review-author">' +
                            '<span class="cro-ki7-ki1-review-name">' + escapeHtml(review.name) + '</span>' +
                            '<span class="cro-ki7-ki1-review-date">' + escapeHtml(reviewDate) + '</span>' +
                        '</div>' +
                        '<div class="cro-ki7-ki1-review-badges">' +
                            '<span class="cro-ki7-ki1-review-verifiedImg"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M6.18329 9.68329L10.2958 5.57079L9.47912 4.75412L6.18329 8.04995L4.52079 6.38745L3.70412 7.20412L6.18329 9.68329ZM6.99995 12.8333C6.21806 12.8383 5.44357 12.6818 4.72495 12.3736C4.03378 12.0799 3.40513 11.6568 2.87287 11.127C2.34787 10.602 1.93254 9.98487 1.62629 9.27495C1.31812 8.55634 1.16164 7.78184 1.16662 6.99995C1.16167 6.21807 1.31816 5.44358 1.62629 4.72495C1.91997 4.03378 2.34309 3.40513 2.87287 2.87287C3.39787 2.34787 4.01504 1.93254 4.72495 1.62629C5.44357 1.31812 6.21806 1.16164 6.99995 1.16662C7.78184 1.16167 8.55633 1.31816 9.27495 1.62629C9.96613 1.91995 10.5948 2.34308 11.127 2.87287C11.652 3.39787 12.068 4.01504 12.3736 4.72495C12.6818 5.44357 12.8383 6.21806 12.8333 6.99995C12.8383 7.78184 12.6818 8.55634 12.3736 9.27495C12.08 9.96613 11.6568 10.5948 11.127 11.127C10.602 11.652 9.98487 12.068 9.27495 12.3736C8.55634 12.6818 7.78184 12.8383 6.99995 12.8333Z" fill="black"/></svg></span>' +
                            '<span class="cro-ki7-ki1-review-verified">Verified</span>' +
                        '</div>' +
                    '</div>' +
                    '<div class="cro-ki7-ki1-review-rating">' + starsHtml + '</div>' +
                    '<div class="cro-ki7-ki1-review-text">' +
                        '<p class="cro-ki7-ki1-review-content-text"' + fullTextDataAttr + '>' + escapedDisplayText + seeMoreButtonHtml + '</p>' +
                    '</div>' +
                    itemTypeHtml +
                    replyHtml +
                '</div>' +
                '<div class="' + imageContainerClass + '">' + imageHtml + imageCountOverlay + '</div>' +
            '</div>';
        }

        // Array of JSON file paths to check (optional - will fallback to hardcoded data if not found)
        var reviewJsonFiles = [
            'reviews1.json',
            'reviews2.json',
            'reviews3.json'
        ];
        
        // Cache for loaded JSON data that matches current URL
        var matchedReviewData = null;
        var reviewsLoaded = false;
        
        // Array of all review data objects to check (hardcoded fallback)
        var allReviewDataObjects = [];
        
        // Function to load reviews from JSON files and match by URL
        function loadReviewsFromJson() {
            if (reviewsLoaded) {
                return; // Already loaded
            }
            
            var currentUrl = window.location.href;
            var jsonFilesToLoad = reviewJsonFiles.length;
            var loadedCount = 0;
            var foundMatch = false;
            
            // First, check hardcoded data objects
            if (typeof reviewsData !== 'undefined' && reviewsData.product_url) {
                allReviewDataObjects.push(reviewsData);
            }
            if (typeof festoonReviewsData !== 'undefined' && festoonReviewsData.product_url) {
                allReviewDataObjects.push(festoonReviewsData);
            }
            if (typeof outdoorLanternReviewsData !== 'undefined' && outdoorLanternReviewsData.product_url) {
                allReviewDataObjects.push(outdoorLanternReviewsData);
            }
            
            // Check hardcoded data objects first
            for (var i = 0; i < allReviewDataObjects.length; i++) {
                var dataObj = allReviewDataObjects[i];
                if (dataObj.product_url && (currentUrl === dataObj.product_url || currentUrl.indexOf(dataObj.product_url) !== -1)) {
                    matchedReviewData = dataObj;
                    foundMatch = true;
                    break;
                }
            }
            
            // If no match found in hardcoded data, try loading JSON files
            if (!foundMatch && jsonFilesToLoad > 0) {
                reviewJsonFiles.forEach(function(jsonFile) {
                    fetch(jsonFile)
                        .then(function(response) {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(function(data) {
                            loadedCount++;
                            
                            // Check if this JSON's product_url matches current URL
                            if (!matchedReviewData && data.product_url) {
                                if (currentUrl === data.product_url || currentUrl.indexOf(data.product_url) !== -1) {
                                    matchedReviewData = data;
                                }
                            }
                            
                            // If all files loaded, mark as loaded
                            if (loadedCount === jsonFilesToLoad) {
                                reviewsLoaded = true;
                            }
                        })
                        .catch(function(error) {
                            console.error('Error loading ' + jsonFile + ':', error);
                            loadedCount++;
                            if (loadedCount === jsonFilesToLoad) {
                                reviewsLoaded = true;
                            }
                        });
                });
            } else {
                reviewsLoaded = true;
            }
        }
        
        // Start loading reviews on initialization
        loadReviewsFromJson();
        
        function getReviewsForCurrentPage() {
            var currentUrl = window.location.href;
            var reviews = [];
            
            // First, try to use matched review data (from JSON or hardcoded)
            if (matchedReviewData && matchedReviewData.reviews) {
                return matchedReviewData.reviews;
            }
            
            // Fallback: check hardcoded data objects if not already checked
            if (typeof reviewsData !== 'undefined' && reviewsData.product_url) {
                var productUrl = reviewsData.product_url;
                if (productUrl && (currentUrl === productUrl || currentUrl.indexOf(productUrl) !== -1)) {
                    return reviewsData.reviews || [];
                }
            }
            if (typeof festoonReviewsData !== 'undefined' && festoonReviewsData.product_url) {
                var productUrl = festoonReviewsData.product_url;
                if (productUrl && (currentUrl === productUrl || currentUrl.indexOf(productUrl) !== -1)) {
                    return festoonReviewsData.reviews || [];
                }
            }
            if (typeof outdoorLanternReviewsData !== 'undefined' && outdoorLanternReviewsData.product_url) {
                var productUrl = outdoorLanternReviewsData.product_url;
                if (productUrl && (currentUrl === productUrl || currentUrl.indexOf(productUrl) !== -1)) {
                    return outdoorLanternReviewsData.reviews || [];
                }
            }
            
            // Legacy fallback
            if (reviewsData && reviewsData.pdp_pages && reviewsData.pdp_pages.length > 0) {
                for (var i = 0; i < reviewsData.pdp_pages.length; i++) {
                    var pdpPage = reviewsData.pdp_pages[i];
                    if (pdpPage.pdp_url && (pdpPage.pdp_url === currentUrl || currentUrl.indexOf(pdpPage.pdp_url) !== -1)) {
                        reviews = pdpPage.reviews || [];
                        break;
                    }
                }
                if (reviews.length === 0 && reviewsData.pdp_pages[0].reviews) {
                    reviews = reviewsData.pdp_pages[0].reviews;
                }
            }
            return reviews;
        }

        function waitForVariable(varName, callback, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                var value = window[varName];
                if (typeof value !== "undefined" && value !== null) {
                    clearInterval(interval);
                    callback(value);
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }

        function generateReviewSummaryHTML(reviews, ratingFilter) {
            if (!reviews || reviews.length === 0) {
                return '';
            }
            ratingFilter = ratingFilter || null;

            // Calculate star rating breakdown
            var ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
            var totalRating = 0;
            var totalReviews = reviews.length;

            for (var i = 0; i < reviews.length; i++) {
                var rating = parseInt(reviews[i].rating, 10) || 0;
                if (rating >= 1 && rating <= 5) {
                    ratingCounts[rating] = (ratingCounts[rating] || 0) + 1;
                    totalRating += rating;
                }
            }

            // Calculate overall average rating
            // var averageRating = totalReviews > 0 ? (totalRating / totalReviews).toFixed(1) : '0.0';
            // Initialize reviewData with placeholder - will be updated asynchronously
            var reviewData = '';
            
            // Get the rating value asynchronously and update the DOM element
            waitForVariable("MetafieldLooxRating", function (rating) {
                var reviewData = rating;
                console.log(reviewData);
                // Update the DOM element with the rating value
                var overallValueElement = document.querySelector('.cro-ki7-ki1-summary-overall-value');
                if (overallValueElement) {
                    overallValueElement.textContent = reviewData;
                }
            },
            100,
            10000
        );

            // Generate star rating rows (5 to 1)
            var starRowsHtml = '';
            for (var star = 5; star >= 1; star--) {
                var count = ratingCounts[star] || 0;
                var percentage = totalReviews > 0 ? (count / totalReviews * 100) : 0;
                var isActive = (ratingFilter !== null && parseInt(ratingFilter, 10) === star);
                var activeClass = isActive ? ' cro-ki7-ki1-summary-rating-row-active' : '';
                
                // Generate star icons (filled for rating, outline for remaining)
                var starsHtml = '';
                for (var s = 1; s <= 5; s++) {
                    // Use unique clip-path IDs for each star to avoid conflicts
                    var clipId0 = 'clip0_' + star + '_' + s + '_' + Math.random().toString(36).substr(2, 9);
                    var clipId1 = 'clip1_' + star + '_' + s + '_' + Math.random().toString(36).substr(2, 9);
                    
                    if (s <= star) {
                        // Filled star - use the exact SVG provided (black filled star)
                        var filledStarSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><g clip-path="url(#' + clipId0 + ')"><path d="M14.3491 12.7522L18.2105 9.00459L12.8853 8.22235L10.5 3.4011L8.11475 8.22235L2.7895 9.00459L6.65 12.7522L5.72862 18.0652L10.5 15.554L15.2582 18.0652L14.3491 12.7522ZM21 8.24685C21 8.43234 20.8906 8.63447 20.6719 8.85322L16.0904 13.3201L17.1754 19.6306C17.1841 19.6892 17.1885 19.7741 17.1885 19.8835C17.1885 20.3035 17.0161 20.5135 16.6714 20.5135C16.5112 20.5135 16.3433 20.4636 16.1665 20.363L10.5 17.3836L4.8335 20.3621C4.648 20.4627 4.48 20.5135 4.32863 20.5135C4.15188 20.5135 4.01975 20.4522 3.93138 20.3297C3.84024 20.1988 3.79361 20.042 3.79838 19.8826C3.79838 19.8318 3.80712 19.7478 3.82462 19.6297L4.90963 13.3201L0.315875 8.85234C0.105 8.62572 0 8.42447 0 8.24685C0 7.93622 0.23625 7.74197 0.707 7.66672L7.042 6.74535L9.88138 1.0036C10.0415 0.657971 10.2471 0.485596 10.5 0.485596C10.7529 0.485596 10.9585 0.657971 11.1186 1.0036L13.958 6.74535L20.293 7.66672C20.7646 7.74197 21 7.93622 21 8.24685Z" fill="black"/></g><g clip-path="url(#' + clipId1 + ')"><path d="M21 8.24685C21 8.43235 20.8906 8.63447 20.6719 8.85322L16.0904 13.3201L17.1754 19.6306C17.1841 19.6892 17.1885 19.7741 17.1885 19.8835C17.1935 20.0428 17.1472 20.1996 17.0564 20.3306C17.0126 20.3909 16.9545 20.4394 16.8873 20.4715C16.82 20.5036 16.7458 20.5183 16.6714 20.5143C16.5112 20.5143 16.3433 20.4636 16.1665 20.3621L10.5 17.3853L4.8335 20.3638C4.648 20.4645 4.48 20.5152 4.32863 20.5152C4.15188 20.5152 4.01975 20.454 3.93138 20.3315C3.84024 20.2006 3.79361 20.0438 3.79838 19.8843C3.79838 19.8336 3.80712 19.7496 3.82462 19.6315L4.90963 13.3218L0.315875 8.8541C0.105 8.62572 0 8.42447 0 8.24685C0 7.93622 0.23625 7.74197 0.707 7.66672L7.042 6.74535L9.88138 1.0036C10.0415 0.657971 10.2471 0.485596 10.5 0.485596C10.7529 0.485596 10.9585 0.657971 11.1186 1.0036L13.958 6.74535L20.293 7.66672C20.7646 7.74197 21 7.93622 21 8.24685Z" fill="black"/></g><defs><clipPath id="' + clipId0 + '"><rect width="21" height="21" fill="white"/></clipPath><clipPath id="' + clipId1 + '"><rect width="21" height="21" fill="white"/></clipPath></defs></svg>';
                        starsHtml += '<span class="cro-ki7-ki1-summary-star cro-ki7-ki1-summary-star-filled">' + filledStarSvg + '</span>';
                    } else {
                        // Outline star - only show the stroke path
                        var outlineStarSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><g clip-path="url(#' + clipId1 + ')"><path d="M10.5 0.923096C10.517 0.923096 10.5339 0.925635 10.5635 0.950439C10.601 0.981902 10.6582 1.05078 10.7217 1.18774L10.7266 1.19751L13.5654 6.9397L13.668 7.14478L13.8955 7.17798L20.2236 8.0979V8.09888C20.422 8.13052 20.5128 8.17908 20.5459 8.2063C20.5527 8.21189 20.5561 8.21608 20.5576 8.21802C20.559 8.21976 20.5596 8.22094 20.5596 8.22095C20.5598 8.22142 20.56 8.22323 20.5605 8.22583C20.5613 8.22943 20.5625 8.23661 20.5625 8.24731C20.5622 8.26148 20.5491 8.35637 20.3662 8.54028L15.7852 13.0071L15.6201 13.1672L15.6592 13.3938L16.7422 19.6946V19.6956C16.7461 19.722 16.751 19.7809 16.751 19.8831V19.8977C16.7528 19.96 16.736 20.0213 16.7021 20.0735C16.7014 20.0745 16.7004 20.0758 16.6992 20.0764C16.6979 20.077 16.6958 20.0775 16.6943 20.0774L16.6826 20.0764H16.6709C16.6057 20.0763 16.5127 20.0561 16.3848 19.9827L16.377 19.9788L16.3701 19.9749L10.7031 16.9983L10.5 16.8909L10.2969 16.9983L4.62988 19.9768L4.625 19.9797C4.47918 20.0588 4.38385 20.0773 4.3291 20.0774C4.30546 20.0774 4.29158 20.0742 4.28516 20.0725C4.25152 20.0205 4.23356 19.9598 4.23535 19.8977H4.23633V19.884C4.23638 19.8683 4.24048 19.8125 4.25781 19.6956L4.25684 19.6946L5.34082 13.3958L5.37988 13.1692L5.21484 13.0081L0.634766 8.55396C0.452175 8.35538 0.437861 8.25936 0.4375 8.24731C0.4375 8.23646 0.438738 8.2293 0.439453 8.22583C0.44014 8.22255 0.440415 8.22098 0.44043 8.22095C0.440547 8.22071 0.441362 8.2203 0.442383 8.21899C0.443879 8.21711 0.446977 8.21216 0.454102 8.2063C0.487449 8.17892 0.577913 8.12953 0.775391 8.0979L7.10449 7.17798L7.33203 7.14478L7.43457 6.9397L10.2734 1.19751L10.2783 1.18774C10.3418 1.05078 10.399 0.981902 10.4365 0.950439C10.4661 0.925635 10.483 0.923096 10.5 0.923096Z" stroke="black" stroke-width="0.875" fill="none"/></g><defs><clipPath id="' + clipId1 + '"><rect width="21" height="21" fill="white"/></clipPath></defs></svg>';
                        starsHtml += '<span class="cro-ki7-ki1-summary-star cro-ki7-ki1-summary-star-outline">' + outlineStarSvg + '</span>';
                    }
                }

                starRowsHtml += '<div class="cro-ki7-ki1-summary-rating-row' + activeClass + '" data-rating="' + star + '">' +
                    '<div class="cro-ki7-ki1-summary-rating-stars">' + starsHtml + '</div>' +
                    '<div class="cro-ki7-ki1-summary-rating-bar">' +
                        '<div class="cro-ki7-ki1-summary-rating-bar-fill" style="width: ' + percentage + '%;"></div>' +
                    '</div>' +
                    '<div class="cro-ki7-ki1-summary-rating-count">(' + count + ')</div>' +
                '</div>';
            }

            // Determine filter prompt text and make it clickable if filter is active
            var filterPromptText = 'Select a row below to filter reviews.';
            var filterPromptClass = 'cro-ki7-ki1-summary-filter-prompt';
            if (ratingFilter !== null && ratingFilter !== undefined) {
                filterPromptText = 'Reset';
                filterPromptClass += ' cro-ki7-ki1-summary-filter-prompt-reset';
            }
            
            return '<div class="cro-ki7-ki1-reviews-summary">' +
                '<h2 class="cro-ki7-ki1-reviews-summary-title">What Our Customers Say</h2>' +
                '<p class="cro-ki7-ki1-reviews-summary-tagline">Loved by over <strong>57,000+</strong> satisfied customers.</p>' +
                '<div class="cro-ki7-ki1-reviews-summary-content">' +
                    '<div class="cro-ki7-ki1-reviews-summary-left">' +
                        '<p class="' + filterPromptClass + '">' + filterPromptText + '</p>' +
                        '<div class="cro-ki7-ki1-summary-rating-rows">' + starRowsHtml + '</div>' +
                    '</div>' +
                    '<div class="cro-ki7-ki1-reviews-summary-right">' +
                        '<div class="cro-ki7-ki1-summary-overall">' +
                            '<div class="cro-ki7-ki1-summary-overall-label">Overall Rating</div>' +
                            '<div class="cro-ki7-ki1-summary-overall-value">' + reviewData + '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }

        // Returns the same filtered and sorted review list used for rendering cards (used by modal click)
        function getFilteredAndSortedReviews(sortOrder, ratingFilter) {
            sortOrder = sortOrder || 'featured';
            ratingFilter = ratingFilter || null;
            var reviews = getReviewsForCurrentPage();
            if (ratingFilter !== null && ratingFilter !== undefined) {
                reviews = reviews.filter(function(review) {
                    return parseInt(review.rating, 10) === parseInt(ratingFilter, 10);
                });
            }
            if (sortOrder === 'newest') {
                reviews = reviews.slice().sort(function (a, b) {
                    var tA = (a.date && !isNaN(new Date(a.date).getTime())) ? new Date(a.date).getTime() : 0;
                    var tB = (b.date && !isNaN(new Date(b.date).getTime())) ? new Date(b.date).getTime() : 0;
                    return tB - tA;
                });
            } else if (sortOrder === 'highest') {
                reviews = reviews.slice().sort(function (a, b) {
                    var rA = parseInt(a.rating, 10) || 0;
                    var rB = parseInt(b.rating, 10) || 0;
                    return rB - rA;
                });
            } else if (sortOrder === 'lowest') {
                reviews = reviews.slice().sort(function (a, b) {
                    var rA = parseInt(a.rating, 10) || 0;
                    var rB = parseInt(b.rating, 10) || 0;
                    return rA - rB;
                });
            }
            return reviews;
        }

        function generateReviewsHTML(sortOrder, ratingFilter) {
            sortOrder = sortOrder || 'featured';
            ratingFilter = ratingFilter || null;
            var reviews = getFilteredAndSortedReviews(sortOrder, ratingFilter);

            var reviewsCardsHtml = '';
            var reviewsToShow = Math.min(5, reviews.length); // Show first 5 reviews initially
            
            for (var j = 0; j < reviews.length; j++) {
                // Add data attribute to track review index and hide reviews beyond initial 5
                var displayStyle = j >= reviewsToShow ? 'style="display: none;"' : '';
                var options = {
                    dataIndex: j,
                    displayStyle: displayStyle
                };
                var reviewCard = createReviewCard(reviews[j], options);
                reviewsCardsHtml += reviewCard;
            }
            
            // Hide button if all reviews are already shown or if there are no reviews
            var buttonStyle = '';
            if (reviews.length <= reviewsToShow || reviews.length === 0) {
                buttonStyle = 'style="display: none;"';
            }
            
            // Total from JSON: same as reviews array length (used for header count)
            var totalFromJson = reviews.length;
            var reviewCountText = totalFromJson + ' Review' + (totalFromJson === 1 ? '' : 's');

            // Generate review summary section (use all reviews, not filtered)
            var allReviews = getReviewsForCurrentPage();
            var summaryHTML = generateReviewSummaryHTML(allReviews, ratingFilter);

            // Return HTML structure (even if empty, to maintain structure)
            var ratingFilterAttr = ratingFilter !== null ? ' data-rating-filter="' + ratingFilter + '"' : '';
            return '<div class="cro-ki7-ki1-reviews" data-total-reviews="' + totalFromJson + '" data-visible-reviews="' + reviewsToShow + '"' + ratingFilterAttr + '">' +
                '<div class="cro-ki7-ki1-reviews-wrapper">' +
                    summaryHTML +
                    '<div class="cro-ki7-ki1-reviews-header">' +
                        '<span class="cro-ki7-ki1-reviews-count">' + reviewCountText + '</span>' +
                        '<div class="cro-ki7-ki1-reviews-header-actions">' +
                            '<div class="cro-ki7-ki1-reviews-sort" data-current-sort="' + sortOrder + '">' +
                                '<span class="cro-ki7-ki1-reviews-sort-label">Sort</span>' +
                                '<div class="cro-ki7-ki1-reviews-sort-trigger-wrap">' +
                                    '<button type="button" class="cro-ki7-ki1-reviews-sort-btn" aria-label="Sort reviews" aria-expanded="false" aria-haspopup="true">' +
                                        '<svg class="cro-ki7-ki1-reviews-sort-icon" width="20" height="21" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M5.143 15a2.501 2.501 0 0 1 4.717 0h8.475v1.666H9.86a2.5 2.5 0 0 1-4.717 0H1.668V15h3.475Zm5-5.834a2.5 2.5 0 0 1 4.717 0h3.475v1.667H14.86a2.5 2.5 0 0 1-4.717 0H1.668V9.166h8.475Zm-5-5.833a2.5 2.5 0 0 1 4.717 0h8.475v1.666H9.86a2.5 2.5 0 0 1-4.717 0H1.668V3.333h3.475Zm2.358 1.666a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm5 5.834a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Zm-5 5.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z"></path></svg>' +
                                    '</button>' +
                                    '<div class="cro-ki7-ki1-reviews-sort-dropdown" role="menu" aria-label="Sort by">' +
                                        '<div class="cro-ki7-ki1-reviews-sort-dropdown-title">Sort by</div>' +
                                        (function () {
                                            var o = [{ v: "featured", l: "Featured" }, { v: "newest", l: "Newest" }, { v: "highest", l: "Highest Ratings" }, { v: "lowest", l: "Lowest Ratings" }];
                                            var h = '';
                                            var check = '<span class="cro-ki7-ki1-reviews-sort-option-check"><svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.364 9.28895L15.556 0.0959473L16.971 1.50995L6.364 12.1169L0 5.75295L1.414 4.33895L6.364 9.28895Z" fill="black"></path></svg></span>';
                                            for (var i = 0; i < o.length; i++) {
                                                h += '<button type="button" class="cro-ki7-ki1-reviews-sort-option' + (o[i].v === sortOrder ? ' is-selected' : '') + '" data-sort="' + o[i].v + '" role="menuitem">' + o[i].l + check + '</button>';
                                            }
                                            return h;
                                        })() +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<button type="button" class="cro-ki7-ki1-reviews-write-btn">Write a review</button>' +
                        '</div>' +
                    '</div>' +
                    '<button type="button" class="cro-ki7-ki1-reviews-write-btnMobile">Write a review</button>' +
                    '<div class="cro-ki7-ki1-reviews-inner">' +
                        reviewsCardsHtml +
                    '</div>' +
                    '<button class="cro-ki7-ki1-show-more-reviews" ' + buttonStyle + '>Show more reviews</button>' +
                '</div>' +
            '</div>';
        }

        function reRenderReviewsWithSort(sortOrder, ratingFilter) {
            var container = document.querySelector('.cro-ki7-ki1-reviews');
            if (!container) return;
            var html = generateReviewsHTML(sortOrder, ratingFilter);
            container.outerHTML = html;
        }
        
        function init() {
            addClass("body", variation_name);

            // .shopify-block.shopify-app-block #looxReviewsFrame
            waitForElement(".shopify-block.shopify-app-block #looxReviews", function () {
                if (!document.querySelector(".cro-ki7-ki1-reviews")) {
                    var reviewsHTML = generateReviewsHTML();
                    insertHtml(".shopify-block.shopify-app-block #looxReviews", reviewsHTML, "beforebegin");
                }
            });
            
        }
        
        function croEventHandkler() {
            live(".cro-ki7-ki1-review-text a.cro-ki7-ki1-review-see-more", "click", function (e) {
                e.preventDefault();
                var reviewTextContainer = this.closest('.cro-ki7-ki1-review-text');
                if (reviewTextContainer) {
                    var paragraph = reviewTextContainer.querySelector('p.cro-ki7-ki1-review-content-text');
                    if (paragraph) {
                        var fullText = paragraph.getAttribute('data-full-text');
                        if (fullText) {
                            // Unescape HTML entities for data attribute
                            var tempDiv = document.createElement('div');
                            tempDiv.innerHTML = fullText;
                            fullText = tempDiv.textContent || tempDiv.innerText || '';
                            
                            var isExpanded = paragraph.classList.contains('cro-ki7-ki1-review-expanded');
                            
                            // Add fade-out class for smooth transition
                            paragraph.classList.add('cro-ki7-ki1-review-transitioning');
                            
                            // After fade-out, change content and fade back in
                            setTimeout(function() {
                                if (isExpanded) {
                                    // Collapse: show truncated text (250 chars, no trailing space, ellipsis in link)
                                    var truncatedText = fullText.length > 250 ? fullText.substring(0, 250).trimEnd() : fullText;
                                    var escapedTruncated = escapeHtml(truncatedText).replace(/\n/g, '<br>');
                                    paragraph.innerHTML = escapedTruncated + (fullText.length > 250 ? '...<a href="#" class="cro-ki7-ki1-review-see-more">See more</a>' : '');
                                    paragraph.classList.remove('cro-ki7-ki1-review-expanded');
                                } else {
                                    // Expand: show full text + button
                                    var escapedFull = escapeHtml(fullText).replace(/\n/g, '<br>');
                                    paragraph.innerHTML = escapedFull + '<a href="#" class="cro-ki7-ki1-review-see-more">See less</a>';
                                    paragraph.classList.add('cro-ki7-ki1-review-expanded');
                                }
                                
                                // Restore data attribute for future toggles
                                var escapedFullTextAttr = escapeHtml(fullText).replace(/"/g, '&quot;');
                                paragraph.setAttribute('data-full-text', escapedFullTextAttr);
                                
                                // Fade back in
                                setTimeout(function() {
                                    paragraph.classList.remove('cro-ki7-ki1-review-transitioning');
                                }, 10);
                            }, 200);
                        }
                    }
                }
            });

            live(".cro-ki7-ki1-review-reply-text a.cro-ki7-ki1-review-see-more", "click", function (e) {
                e.preventDefault();
                var reviewReplyTextContainer = this.closest('.cro-ki7-ki1-review-reply-text');
                if (reviewReplyTextContainer) {
                    var paragraph = reviewReplyTextContainer.querySelector('p');
                    if (paragraph) {
                        var fullText = paragraph.getAttribute('data-full-text');
                        if (fullText) {
                            // Unescape HTML entities for data attribute
                            var tempDiv = document.createElement('div');
                            tempDiv.innerHTML = fullText;
                            fullText = tempDiv.textContent || tempDiv.innerText || '';
                            
                            var isExpanded = paragraph.classList.contains('cro-ki7-ki1-review-reply-expanded');
                            
                            // Add fade-out class for smooth transition
                            paragraph.classList.add('cro-ki7-ki1-review-transitioning');
                            
                            // After fade-out, change content and fade back in
                            setTimeout(function() {
                                if (isExpanded) {
                                    // Collapse: show truncated text (no trailing space, ellipsis in link)
                                    var truncatedReplyText = fullText.substring(0, 150).trimEnd();
                                    var escapedTruncated = escapeHtml(truncatedReplyText).replace(/\n/g, '<br>');
                                    paragraph.innerHTML = escapedTruncated + '...<a href="#" class="cro-ki7-ki1-review-see-more">See more</a>';
                                    paragraph.classList.remove('cro-ki7-ki1-review-reply-expanded');
                                } else {
                                    // Expand: show full text + button
                                    var escapedFull = escapeHtml(fullText).replace(/\n/g, '<br>');
                                    paragraph.innerHTML = escapedFull + '<a href="#" class="cro-ki7-ki1-review-see-more">See less</a>';
                                    paragraph.classList.add('cro-ki7-ki1-review-reply-expanded');
                                }
                                
                                // Restore data attribute for future toggles
                                var escapedFullTextAttr = escapeHtml(fullText).replace(/"/g, '&quot;');
                                paragraph.setAttribute('data-full-text', escapedFullTextAttr);
                                
                                // Fade back in
                                setTimeout(function() {
                                    paragraph.classList.remove('cro-ki7-ki1-review-transitioning');
                                }, 10);
                            }, 200);
                        }
                    }
                }
            });

            live(".cro-ki7-ki1-reviews-sort-btn", "click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                var sortBlock = this.closest('.cro-ki7-ki1-reviews-sort');
                if (!sortBlock) return;
                var isOpen = sortBlock.classList.contains('is-open');
                var dropdown = sortBlock.querySelector('.cro-ki7-ki1-reviews-sort-dropdown');
                var btn = sortBlock.querySelector('.cro-ki7-ki1-reviews-sort-btn');
                if (isOpen) {
                    sortBlock.classList.remove('is-open');
                    if (btn) btn.setAttribute('aria-expanded', 'false');
                } else {
                    sortBlock.classList.add('is-open');
                    if (btn) btn.setAttribute('aria-expanded', 'true');
                }
            });

            live(".cro-ki7-ki1-reviews-sort-option", "click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                var sortValue = this.getAttribute('data-sort') || 'featured';
                // Get current rating filter from container
                var container = document.querySelector('.cro-ki7-ki1-reviews');
                var currentRatingFilter = container ? container.getAttribute('data-rating-filter') : null;
                reRenderReviewsWithSort(sortValue, currentRatingFilter);
            });

            live(".cro-ki7-ki1-summary-rating-row", "click", function (e) {
                e.preventDefault();
                var rating = this.getAttribute('data-rating');
                if (!rating) return;
                
                // Get current sort order
                var sortBlock = document.querySelector('.cro-ki7-ki1-reviews-sort');
                var currentSort = sortBlock ? (sortBlock.getAttribute('data-current-sort') || 'featured') : 'featured';
                
                // Toggle filter: if same rating clicked, remove filter
                var container = document.querySelector('.cro-ki7-ki1-reviews');
                var currentFilter = container ? container.getAttribute('data-rating-filter') : null;
                var newFilter = (currentFilter === rating) ? null : rating;
                
                reRenderReviewsWithSort(currentSort, newFilter);
            });

            live(".cro-ki7-ki1-summary-filter-prompt-reset", "click", function (e) {
                e.preventDefault();
                
                // Get current sort order
                var sortBlock = document.querySelector('.cro-ki7-ki1-reviews-sort');
                var currentSort = sortBlock ? (sortBlock.getAttribute('data-current-sort') || 'featured') : 'featured';
                
                // Clear filter by passing null
                reRenderReviewsWithSort(currentSort, null);
            });

            document.addEventListener('click', function (e) {
                if (e.target.closest('.cro-ki7-ki1-reviews-sort')) return;
                var openSort = document.querySelector('.cro-ki7-ki1-reviews-sort.is-open');
                if (openSort) {
                    openSort.classList.remove('is-open');
                    var b = openSort.querySelector('.cro-ki7-ki1-reviews-sort-btn');
                    if (b) b.setAttribute('aria-expanded', 'false');
                }
            });

            live(".cro-ki7-ki1-show-more-reviews", "click", function (e) {
                e.preventDefault();
                var reviewsContainer = this.closest('.cro-ki7-ki1-reviews');
                if (!reviewsContainer) return;
                
                var totalReviews = parseInt(reviewsContainer.getAttribute('data-total-reviews')) || 0;
                var visibleReviews = parseInt(reviewsContainer.getAttribute('data-visible-reviews')) || 5;
                var reviewsToShow = Math.min(visibleReviews + 5, totalReviews);
                
                // Show next 5 reviews
                var reviewCards = reviewsContainer.querySelectorAll('.cro-ki7-ki1-review-card[data-review-index]');
                for (var i = visibleReviews; i < reviewsToShow; i++) {
                    var card = reviewsContainer.querySelector('.cro-ki7-ki1-review-card[data-review-index="' + i + '"]');
                    if (card) {
                        card.style.display = '';
                    }
                }
                
                // Update visible reviews count
                reviewsContainer.setAttribute('data-visible-reviews', reviewsToShow);
                
                // Hide button if all reviews are now visible
                if (reviewsToShow >= totalReviews) {
                    this.style.display = 'none';
                }
            });

            // Review Modal Functionality
            function createReviewModalHTML(review) {
                var rating = review.rating || 5;
                var reviewText = review.review || '';
                var reviewDate = formatDate(review.date) || review.date || '';
                var images = review.images || [];
                var videoUrl = review.video || '';
                var color = review.color || '';
                var name = review.name || '';
                var reply = review.reply || '';

                // Handle 'image' field (string, potentially comma-separated) for festoon reviews
                if (!images || images.length === 0) {
                    if (review.image && typeof review.image === 'string') {
                        images = review.image.split(',').map(function(img) { return img.trim(); }).filter(function(img) { return img.length > 0; });
                    }
                }

                // Check if review has media (images or video)
                var hasImages = images && images.length > 0;
                var hasVideo = videoUrl && videoUrl.trim() !== '';
                var hasMedia = hasImages || hasVideo;

                // Generate stars
                var starCount = Math.min(5, Math.max(0, parseInt(rating, 10) || 0));
                var starsHtml = '';
                for (var i = 0; i < starCount; i++) {
                    starsHtml += '<span class="cro-ki7-ki1-star cro-ki7-ki1-star-filled"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><g clip-path="url(#clip0_8_64)"><path d="M14.3491 12.7522L18.2105 9.00459L12.8853 8.22235L10.5 3.4011L8.11475 8.22235L2.7895 9.00459L6.65 12.7522L5.72862 18.0652L10.5 15.554L15.2582 18.0652L14.3491 12.7522ZM21 8.24685C21 8.43234 20.8906 8.63447 20.6719 8.85322L16.0904 13.3201L17.1754 19.6306C17.1841 19.6892 17.1885 19.7741 17.1885 19.8835C17.1885 20.3035 17.0161 20.5135 16.6714 20.5135C16.5112 20.5135 16.3433 20.4636 16.1665 20.363L10.5 17.3836L4.8335 20.3621C4.648 20.4627 4.48 20.5135 4.32863 20.5135C4.15188 20.5135 4.01975 20.4522 3.93138 20.3297C3.84024 20.1988 3.79361 20.042 3.79838 19.8826C3.79838 19.8318 3.80712 19.7478 3.82462 19.6297L4.90963 13.3201L0.315875 8.85234C0.105 8.62572 0 8.42447 0 8.24685C0 7.93622 0.23625 7.74197 0.707 7.66672L7.042 6.74535L9.88138 1.0036C10.0415 0.657971 10.2471 0.485596 10.5 0.485596C10.7529 0.485596 10.9585 0.657971 11.1186 1.0036L13.958 6.74535L20.293 7.66672C20.7646 7.74197 21 7.93622 21 8.24685Z" fill="black"/></g><g clip-path="url(#clip1_8_64)"><path d="M21 8.24685C21 8.43235 20.8906 8.63447 20.6719 8.85322L16.0904 13.3201L17.1754 19.6306C17.1841 19.6892 17.1885 19.7741 17.1885 19.8835C17.1935 20.0428 17.1472 20.1996 17.0564 20.3306C17.0126 20.3909 16.9545 20.4394 16.8873 20.4715C16.82 20.5036 16.7458 20.5183 16.6714 20.5143C16.5112 20.5143 16.3433 20.4636 16.1665 20.3621L10.5 17.3853L4.8335 20.3638C4.648 20.4645 4.48 20.5152 4.32863 20.5152C4.15188 20.5152 4.01975 20.454 3.93138 20.3315C3.84024 20.2006 3.79361 20.0438 3.79838 19.8843C3.79838 19.8336 3.80712 19.7496 3.82462 19.6315L4.90963 13.3218L0.315875 8.8541C0.105 8.62572 0 8.42447 0 8.24685C0 7.93622 0.23625 7.74197 0.707 7.66672L7.042 6.74535L9.88138 1.0036C10.0415 0.657971 10.2471 0.485596 10.5 0.485596C10.7529 0.485596 10.9585 0.657971 11.1186 1.0036L13.958 6.74535L20.293 7.66672C20.7646 7.74197 21 7.93622 21 8.24685Z" fill="black"/></g><defs><clipPath id="clip0_8_64"><rect width="21" height="21" fill="white"/></clipPath><clipPath id="clip1_8_64"><rect width="21" height="21" fill="white"/></clipPath></defs></svg></span>';
                }

                // Generate image gallery (only if has media)
                var galleryHtml = '';
                if (hasMedia) {
                    var mainImageHtml = '';
                    var thumbnailsHtml = '';
                    var navButtonsHtml = '';

                    if (hasVideo) {
                        // Display video
                        mainImageHtml = '<iframe src="' + escapeHtml(videoUrl) + '" class="cro-ki7-ki1-review-modal-video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                    } else if (hasImages) {
                        // Main image
                        mainImageHtml = '<img src="' + escapeHtml(images[0]) + '" alt="Review image" class="cro-ki7-ki1-review-modal-main-img" />';
                        
                        // Navigation buttons (only if more than 1 image)
                        if (images.length > 1) {
                            navButtonsHtml = '<button type="button" class="cro-ki7-ki1-review-modal-nav cro-ki7-ki1-review-modal-nav-prev" aria-label="Previous image">' +
                                '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                                '</button>' +
                                '<button type="button" class="cro-ki7-ki1-review-modal-nav cro-ki7-ki1-review-modal-nav-next" aria-label="Next image">' +
                                '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                                '</button>';
                        }

                        // Thumbnails
                        for (var j = 0; j < images.length; j++) {
                            var activeClass = j === 0 ? ' is-active' : '';
                            thumbnailsHtml += '<div class="cro-ki7-ki1-review-modal-thumbnail' + activeClass + '" data-image-index="' + j + '">' +
                                '<img src="' + escapeHtml(images[j]) + '" alt="Thumbnail ' + (j + 1) + '" />' +
                                '</div>';
                        }
                    }

                    galleryHtml = '<div class="cro-ki7-ki1-review-modal-gallery">' +
                        '<div class="cro-ki7-ki1-review-modal-main-image">' +
                            mainImageHtml +
                            navButtonsHtml +
                        '</div>' +
                        (hasImages && images.length > 1 ? '<div class="cro-ki7-ki1-review-modal-thumbnails">' + thumbnailsHtml + '</div>' : '') +
                    '</div>';
                }

                // Format review text (replace newlines with <br>)
                var formattedReviewText = escapeHtml(reviewText).replace(/\n/g, '<br>');

                // Item type HTML
                var itemTypeHtml = '';
                if (color && color.trim() !== '') {
                    itemTypeHtml = '<div class="cro-ki7-ki1-review-modal-item-type">' +
                        '<span class="cro-ki7-ki1-review-modal-item-type-label">Item type:</span>' +
                        '<span class="cro-ki7-ki1-review-modal-item-type-value">' + escapeHtml(color) + '</span>' +
                        '</div>';
                }

                // Reply HTML
                var replyHtml = '';
                if (reply && reply.trim() !== '') {
                    var formattedReplyText = escapeHtml(reply).replace(/\n/g, '<br>');
                    replyHtml = '<div class="cro-ki7-ki1-review-modal-reply">' +
                        '<div class="cro-ki7-ki1-review-modal-reply-header">' +
                            '<span class="cro-ki7-ki1-review-modal-reply-author">Litehouse LLC replied:</span>' +
                        '</div>' +
                        '<div class="cro-ki7-ki1-review-modal-reply-text">' + formattedReplyText + '</div>' +
                    '</div>';
                }

                // Add class to modal if no media
                var modalClass = 'cro-ki7-ki1-review-modal' + (hasMedia ? '' : ' cro-ki7-ki1-review-modal-no-media');

                return '<div class="cro-ki7-ki1-review-modal-overlay">' +
                    '<div class="' + modalClass + '">' +
                        '<button type="button" class="cro-ki7-ki1-review-modal-close" aria-label="Close modal">' +
                            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                        '</button>' +
                        galleryHtml +
                        '<div class="cro-ki7-ki1-review-modal-content">' +
                            '<div class="cro-ki7-ki1-review-modal-header">' +
                                '<div class="cro-ki7-ki1-review-modal-name">' + escapeHtml(name) + '</div>' +
                                '<div class="cro-ki7-ki1-review-modal-rating-badges">' +
                                    '<div class="cro-ki7-ki1-review-modal-rating">' + starsHtml + '</div>' +
                                    '<div class="cro-ki7-ki1-review-modal-badges">' +
                                        '<span class="cro-ki7-ki1-review-modal-verified">' +
                                            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M6.18329 9.68329L10.2958 5.57079L9.47912 4.75412L6.18329 8.04995L4.52079 6.38745L3.70412 7.20412L6.18329 9.68329ZM6.99995 12.8333C6.21806 12.8383 5.44357 12.6818 4.72495 12.3736C4.03378 12.0799 3.40513 11.6568 2.87287 11.127C2.34787 10.602 1.93254 9.98487 1.62629 9.27495C1.31812 8.55634 1.16164 7.78184 1.16662 6.99995C1.16167 6.21807 1.31816 5.44358 1.62629 4.72495C1.91997 4.03378 2.34309 3.40513 2.87287 2.87287C3.39787 2.34787 4.01504 1.93254 4.72495 1.62629C5.44357 1.31812 6.21806 1.16164 6.99995 1.16662C7.78184 1.16167 8.55633 1.31816 9.27495 1.62629C9.96613 1.91995 10.5948 2.34308 11.127 2.87287C11.652 3.39787 12.068 4.01504 12.3736 4.72495C12.6818 5.44357 12.8383 6.21806 12.8333 6.99995C12.8383 7.78184 12.6818 8.55634 12.3736 9.27495C12.08 9.96613 11.6568 10.5948 11.127 11.127C10.602 11.652 9.98487 12.068 9.27495 12.3736C8.55634 12.6818 7.78184 12.8383 6.99995 12.8333Z" fill="black"/></svg>' +
                                            '<span>Verified</span>' +
                                        '</span>' +
                                        '<span class="cro-ki7-ki1-review-modal-date">' +
                                            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" style="width: 14px; height: 14px;"><path d="M11.0833 2.33333H10.5V1.75C10.5 1.475 10.275 1.25 10 1.25C9.725 1.25 9.5 1.475 9.5 1.75V2.33333H4.5V1.75C4.5 1.475 4.275 1.25 4 1.25C3.725 1.25 3.5 1.475 3.5 1.75V2.33333H2.91667C2.04583 2.33333 1.33333 3.04583 1.33333 3.91667V11.0833C1.33333 11.9542 2.04583 12.6667 2.91667 12.6667H11.0833C11.9542 12.6667 12.6667 11.9542 12.6667 11.0833V3.91667C12.6667 3.04583 11.9542 2.33333 11.0833 2.33333ZM11.0833 11.0833H2.91667V5.83333H11.0833V11.0833Z" fill="currentColor"/></svg>' +
                                            escapeHtml(reviewDate) +
                                        '</span>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="cro-ki7-ki1-review-modal-text">' + formattedReviewText + '</div>' +
                            itemTypeHtml +
                            replyHtml +
                        '</div>' +
                    '</div>' +
                '</div>';
            }

            function openReviewModal(review) {
                // Remove existing modal if any
                var existingModal = document.querySelector('.cro-ki7-ki1-review-modal-overlay');
                if (existingModal) {
                    existingModal.remove();
                }

                // Create and insert modal
                var modalHTML = createReviewModalHTML(review);
                document.body.insertAdjacentHTML('beforeend', modalHTML);

                var modalOverlay = document.querySelector('.cro-ki7-ki1-review-modal-overlay');
                if (!modalOverlay) return;

                // Store review data in modal for navigation (only if has images, not video)
                var images = review.images || [];
                var videoUrl = review.video || '';
                var hasVideo = videoUrl && videoUrl.trim() !== '';
                
                // Only process images if no video
                if (!hasVideo) {
                    if (review.image && typeof review.image === 'string' && (!images || images.length === 0)) {
                        images = review.image.split(',').map(function(img) { return img.trim(); }).filter(function(img) { return img.length > 0; });
                    }
                    modalOverlay.setAttribute('data-review-images', JSON.stringify(images));
                    modalOverlay.setAttribute('data-current-image-index', '0');
                } else {
                    modalOverlay.setAttribute('data-review-images', JSON.stringify([]));
                }

                // Open modal with animation
                setTimeout(function() {
                    modalOverlay.classList.add('is-open');
                }, 10);

                // Prevent body scroll
                document.body.style.overflow = 'hidden';

                // Setup event handlers (only pass images if no video)
                setupModalHandlers(modalOverlay, hasVideo ? [] : images);
            }

            function setupModalHandlers(modalOverlay, images) {
                var currentImageIndex = 0;
                var maxIndex = images.length - 1;

                // Close button
                var closeBtn = modalOverlay.querySelector('.cro-ki7-ki1-review-modal-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        closeReviewModal();
                    });
                }

                // Close on overlay click (but not on modal content)
                modalOverlay.addEventListener('click', function(e) {
                    if (e.target === modalOverlay) {
                        closeReviewModal();
                    }
                });

                // Close on ESC key
                var escHandler = function(e) {
                    if (e.key === 'Escape' || e.keyCode === 27) {
                        closeReviewModal();
                        document.removeEventListener('keydown', escHandler);
                    }
                };
                document.addEventListener('keydown', escHandler);

                // Navigation buttons
                if (images.length > 1) {
                    var prevBtn = modalOverlay.querySelector('.cro-ki7-ki1-review-modal-nav-prev');
                    var nextBtn = modalOverlay.querySelector('.cro-ki7-ki1-review-modal-nav-next');

                    function updateImage(index) {
                        if (index < 0 || index > maxIndex) return;
                        currentImageIndex = index;
                        modalOverlay.setAttribute('data-current-image-index', index.toString());

                        // Update main image
                        var mainImg = modalOverlay.querySelector('.cro-ki7-ki1-review-modal-main-img');
                        if (mainImg) {
                            mainImg.src = images[index];
                        }

                        // Update thumbnails
                        var thumbnails = modalOverlay.querySelectorAll('.cro-ki7-ki1-review-modal-thumbnail');
                        thumbnails.forEach(function(thumb) {
                            var thumbIndex = parseInt(thumb.getAttribute('data-image-index'), 10);
                            if (thumbIndex === index) {
                                thumb.classList.add('is-active');
                            } else {
                                thumb.classList.remove('is-active');
                            }
                        });

                        // Update nav buttons
                        if (prevBtn) {
                            prevBtn.disabled = index === 0;
                        }
                        if (nextBtn) {
                            nextBtn.disabled = index === maxIndex;
                        }
                    }

                    if (prevBtn) {
                        prevBtn.addEventListener('click', function(e) {
                            e.stopPropagation();
                            if (currentImageIndex > 0) {
                                updateImage(currentImageIndex - 1);
                            }
                        });
                    }

                    if (nextBtn) {
                        nextBtn.addEventListener('click', function(e) {
                            e.stopPropagation();
                            if (currentImageIndex < maxIndex) {
                                updateImage(currentImageIndex + 1);
                            }
                        });
                    }

                    // Thumbnail clicks
                    var thumbnails = modalOverlay.querySelectorAll('.cro-ki7-ki1-review-modal-thumbnail');
                    thumbnails.forEach(function(thumb) {
                        thumb.addEventListener('click', function(e) {
                            e.stopPropagation();
                            var index = parseInt(thumb.getAttribute('data-image-index'), 10);
                            updateImage(index);
                        });
                    });

                    // Initialize nav buttons
                    updateImage(0);
                }
            }

            function closeReviewModal() {
                var modalOverlay = document.querySelector('.cro-ki7-ki1-review-modal-overlay');
                if (modalOverlay) {
                    modalOverlay.classList.remove('is-open');
                    setTimeout(function() {
                        modalOverlay.remove();
                        document.body.style.overflow = '';
                    }, 300);
                }
            }

            // Handle review card clicks (use same filtered/sorted list as rendered cards)
            live(".cro-ki7-ki1-review-card", "click", function (e) {
                // Don't open modal if clicking on "See more" link or other interactive elements
                if (e.target.closest('a.cro-ki7-ki1-review-see-more')) {
                    return;
                }

                var reviewCard = this;
                var reviewIndex = reviewCard.getAttribute('data-review-index');
                if (reviewIndex === null) return;

                var container = document.querySelector('.cro-ki7-ki1-reviews');
                var sortBlock = document.querySelector('.cro-ki7-ki1-reviews-sort');
                var currentSort = sortBlock ? (sortBlock.getAttribute('data-current-sort') || 'featured') : 'featured';
                var ratingFilter = container ? container.getAttribute('data-rating-filter') : null;
                if (ratingFilter === '') ratingFilter = null;

                var reviews = getFilteredAndSortedReviews(currentSort, ratingFilter);
                var index = parseInt(reviewIndex, 10);
                if (reviews[index]) {
                    openReviewModal(reviews[index]);
                }
            });


            live(".cro-ki7-ki1-reviews-write-btn", "click", function (e) {
                looxWrite();
            });

            live(".cro-ki7-ki1-reviews-write-btnMobile", "click", function (e) {
                looxWrite();
            });
        }
        
        if (!window.cro_t_ki7_ki14) {
            croEventHandkler();
            window.cro_t_ki7_ki14 = true;
        }
        
        waitForElement('.product .product-info', init);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();