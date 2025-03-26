
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

// Mock article data
export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Getting Started with Organic Vegetable Gardening",
    excerpt: "Learn the basics of setting up your first organic vegetable garden, from soil preparation to plant selection.",
    content: `
      <h2>Getting Started with Organic Vegetable Gardening</h2>
      
      <p>Organic vegetable gardening is a rewarding and sustainable way to grow your own food. By avoiding synthetic fertilizers and pesticides, you're not only producing healthier food but also supporting a healthier environment. Here's how to get started on your organic gardening journey.</p>
      
      <h3>1. Choose the Right Location</h3>
      
      <p>Most vegetables need at least 6-8 hours of direct sunlight daily. Observe your yard throughout the day to identify the sunniest spots. Also consider access to water, protection from strong winds, and proximity to your kitchen for convenience.</p>
      
      <h3>2. Start with Great Soil</h3>
      
      <p>Healthy soil is the foundation of organic gardening. Begin by testing your soil to understand its composition and pH level. Most vegetables prefer a slightly acidic to neutral pH (6.0-7.0). Enrich your soil with compost, which adds nutrients and improves soil structure. Aim to add 2-3 inches of compost and work it into the top 6-8 inches of soil.</p>
      
      <h3>3. Select the Right Plants</h3>
      
      <p>Choose plants that are well-suited to your climate and growing conditions. Starting with easier crops like lettuce, radishes, and bush beans can build your confidence. Consider companion planting—certain plants grow better together, help repel pests, or improve flavor when planted near each other.</p>
      
      <h3>4. Practice Sustainable Watering</h3>
      
      <p>Water deeply but infrequently to encourage deep root growth. Morning watering is best as it allows foliage to dry during the day, reducing disease risk. Consider installing a drip irrigation system or using rainwater collection to conserve water.</p>
      
      <h3>5. Manage Weeds and Pests Organically</h3>
      
      <p>Use mulch to suppress weeds and maintain soil moisture. For pest control, try methods like hand-picking, introducing beneficial insects, and using physical barriers like row covers. If needed, there are many organic sprays and treatments available that won't harm the ecosystem.</p>
      
      <h3>6. Practice Crop Rotation</h3>
      
      <p>Avoid planting the same type of crop in the same location year after year. Crop rotation helps prevent pest and disease buildup and manages soil fertility by alternating heavy feeders with soil-building plants.</p>
      
      <p>Remember, organic gardening is a learning process. Take notes, be patient, and enjoy the journey of growing your own nutritious, organic vegetables!</p>
    `,
    image: "https://images.unsplash.com/photo-1587049633312-d628ae10b530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
    category: "Beginner Guides",
    date: "June 15, 2023",
    author: "Emma Wilson"
  },
  {
    id: "2",
    title: "Natural Pest Management Strategies",
    excerpt: "Discover how to keep garden pests at bay without using harmful chemicals or pesticides.",
    content: `
      <h2>Natural Pest Management Strategies for Your Garden</h2>
      
      <p>Managing pests in your garden without resorting to synthetic chemicals is not only possible but often more effective in the long run. Integrated Pest Management (IPM) takes a holistic approach to pest control, focusing on prevention first and using the least toxic methods when intervention is needed.</p>
      
      <h3>Understanding Garden Ecosystems</h3>
      
      <p>A healthy garden ecosystem naturally keeps pest populations in check. The goal isn't to eliminate all insects—many are beneficial—but rather to maintain a balance where pests don't cause significant damage. This starts with healthy soil, diverse plantings, and creating habitat for beneficial insects and wildlife.</p>
      
      <h3>Preventative Measures</h3>
      
      <ul>
        <li><strong>Choose resistant varieties:</strong> Many plant varieties have been developed specifically for their resistance to common pests and diseases.</li>
        <li><strong>Practice crop rotation:</strong> Moving plant families to different locations each season disrupts pest life cycles.</li>
        <li><strong>Time your plantings:</strong> Sometimes adjusting when you plant can help crops avoid the peak of certain pest populations.</li>
        <li><strong>Use physical barriers:</strong> Row covers, netting, and collars around plant stems can prevent pests from reaching your plants.</li>
      </ul>
      
      <h3>Beneficial Insects</h3>
      
      <p>Encouraging beneficial insects is one of the most effective long-term strategies for pest management. Ladybugs, lacewings, hoverflies, parasitic wasps, and predatory mites all help control common garden pests.</p>
      
      <p>To attract these helpers:</p>
      <ul>
        <li>Plant flowers with small blooms like sweet alyssum, dill, fennel, and cosmos</li>
        <li>Include plants from the daisy family (Asteraceae)</li>
        <li>Ensure continuous blooming throughout the growing season</li>
        <li>Provide water sources like shallow dishes with stones</li>
        <li>Create shelter with ground covers and perennial plants</li>
      </ul>
      
      <h3>DIY Organic Pest Control Solutions</h3>
      
      <p>When preventative measures aren't enough, these homemade solutions can help:</p>
      
      <h4>All-Purpose Insect Spray</h4>
      <p>Mix 1 tablespoon of mild liquid soap (like castile soap) with 1 quart of water. Optional: add 1 tablespoon of vegetable oil for enhanced effectiveness. Spray directly on insects, being careful to test on a small area first as some plants are sensitive.</p>
      
      <h4>Garlic-Pepper Spray</h4>
      <p>Blend 4 cloves of garlic and 2 hot peppers with 2 cups of water. Strain, add 1 tablespoon of mild liquid soap, and dilute with 1 gallon of water. This spray deters many insects through its strong smell and taste.</p>
      
      <h3>Targeted Approaches for Common Pests</h3>
      
      <h4>Aphids</h4>
      <p>A strong stream of water can blast aphids off plants. For persistent infestations, soap spray is effective, as are ladybugs and lacewings.</p>
      
      <h4>Cabbage Moths and Caterpillars</h4>
      <p>Bacillus thuringiensis (Bt) is an organic bacteria that specifically targets caterpillars without harming other insects. Row covers can prevent moths from laying eggs on brassicas.</p>
      
      <h4>Slugs and Snails</h4>
      <p>Copper tape around raised beds or containers creates a barrier slugs won't cross. Diatomaceous earth sprinkled around plants also deters these pests, as do shallow dishes of beer, which attract and drown them.</p>
      
      <p>Remember that some plant damage is inevitable and often tolerable. The goal is to maintain plant health and harvest, not necessarily perfect-looking plants. With time, your garden's natural balance will improve, requiring less and less intervention.</p>
    `,
    image: "https://images.unsplash.com/photo-1599588808511-92896d7cb36c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3133&q=80",
    category: "Pest Control",
    date: "July 5, 2023",
    author: "Marcus Chen"
  },
  {
    id: "3",
    title: "Composting Fundamentals",
    excerpt: "Everything you need to know about creating nutrient-rich compost for your garden.",
    content: `
      <h2>Composting Fundamentals: Turn Waste into Garden Gold</h2>
      
      <p>Composting is nature's way of recycling, transforming kitchen scraps and yard waste into a valuable resource for your garden. This rich, dark substance—often called "black gold" by gardeners—improves soil structure, adds nutrients, and boosts beneficial soil life.</p>
      
      <h3>The Science Behind Composting</h3>
      
      <p>At its core, composting is a managed decomposition process where microorganisms break down organic matter. These microbes require four key elements:</p>
      
      <ul>
        <li><strong>Carbon ("browns"):</strong> Materials like dry leaves, straw, paper, and wood chips</li>
        <li><strong>Nitrogen ("greens"):</strong> Fresh materials like food scraps, coffee grounds, and fresh plant trimmings</li>
        <li><strong>Oxygen:</strong> Essential for aerobic decomposition</li>
        <li><strong>Water:</strong> The pile should be as moist as a wrung-out sponge</li>
      </ul>
      
      <p>When these elements are in balance, microorganisms thrive and efficiently break down the materials, generating heat in the process.</p>
      
      <h3>What to Compost</h3>
      
      <h4>Good "Green" Ingredients (Nitrogen-rich):</h4>
      <ul>
        <li>Fruit and vegetable scraps</li>
        <li>Coffee grounds and filters</li>
        <li>Tea bags (remove staples)</li>
        <li>Fresh grass clippings</li>
        <li>Plant trimmings</li>
        <li>Eggshells (crushed)</li>
      </ul>
      
      <h4>Good "Brown" Ingredients (Carbon-rich):</h4>
      <ul>
        <li>Dry leaves</li>
        <li>Straw or hay</li>
        <li>Shredded newspaper or cardboard</li>
        <li>Wood chips or sawdust (untreated wood)</li>
        <li>Dryer lint (from natural fabrics)</li>
        <li>Paper egg cartons</li>
      </ul>
      
      <h4>What to Avoid:</h4>
      <ul>
        <li>Meat, fish, and dairy products (attract pests and can create odors)</li>
        <li>Fats, oils, and greasy foods</li>
        <li>Diseased plants</li>
        <li>Perennial weeds or weeds gone to seed</li>
        <li>Pet waste</li>
        <li>Treated or painted wood</li>
      </ul>
      
      <h3>Composting Methods</h3>
      
      <h4>Traditional Pile or Bin</h4>
      <p>The most common approach is to create layers of browns and greens in a pile or bin. Aim for a ratio of roughly 3 parts browns to 1 part greens by volume. Turn the pile every few weeks to add oxygen and speed decomposition.</p>
      
      <h4>Tumbling Composter</h4>
      <p>These enclosed drums make turning effortless—just spin the tumbler. They're great for smaller spaces and produce compost relatively quickly, usually in 4-8 weeks with regular turning.</p>
      
      <h4>Vermicomposting (Worm Composting)</h4>
      <p>Perfect for indoor composting, this method uses red wiggler worms to process food scraps. The worms create castings that are an exceptionally rich soil amendment.</p>
      
      <h4>Bokashi</h4>
      <p>This anaerobic fermenting process uses beneficial microbes to break down all food waste, including meat and dairy. The pre-compost material then needs to be buried in soil or added to a traditional compost pile to complete decomposition.</p>
      
      <h3>Troubleshooting Common Problems</h3>
      
      <h4>Bad Odors</h4>
      <p>If your compost smells like ammonia, it has too much nitrogen (greens). Add more browns and turn the pile. If it smells rotten, it may be too wet or compacted. Add dry browns and turn to introduce oxygen.</p>
      
      <h4>Not Heating Up</h4>
      <p>A cold pile may be too dry, too small, or lack nitrogen. Ensure proper moisture, build to at least 3x3x3 feet for hot composting, and add more greens if needed.</p>
      
      <h4>Attracting Pests</h4>
      <p>To deter rodents and other unwanted visitors, avoid meat and fatty foods, bury fresh food scraps in the center of the pile, and use a bin with smaller openings.</p>
      
      <h3>Using Your Finished Compost</h3>
      
      <p>Compost is ready when it's dark, crumbly, earthy-smelling, and the original materials are no longer recognizable. Use it to:</p>
      
      <ul>
        <li>Amend garden soil before planting (mix in 2-3 inches)</li>
        <li>Top dress lawns and garden beds (sift for a finer texture)</li>
        <li>Add to potting mixes (use about 1/4 to 1/3 compost)</li>
        <li>Make compost tea for foliar feeding</li>
      </ul>
      
      <p>Composting closes the loop in your garden, reducing waste while creating a valuable resource that improves soil health and plant vigor naturally. The compost you make is truly one of the best gifts you can give your garden!</p>
    `,
    image: "https://images.unsplash.com/photo-1582594692765-78b6973cd8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    category: "Soil Health",
    date: "August 12, 2023",
    author: "Sophia Rodriguez"
  },
  {
    id: "4",
    title: "Seasonal Planting Guide",
    excerpt: "Learn when to plant different vegetables and fruits throughout the year for optimal harvests.",
    content: `
      <h2>Seasonal Planting Guide: Timing Your Garden for Success</h2>
      
      <p>One of the keys to successful gardening is planting at the right time. This guide will help you understand when to plant different crops throughout the growing season, maximizing your harvests and reducing crop failures due to improper timing.</p>
      
      <h3>Understanding Plant Classifications</h3>
      
      <p>Before diving into specific seasons, it's helpful to understand how plants are classified based on their temperature preferences:</p>
      
      <h4>Cool-Season Crops</h4>
      <p>These plants thrive in cool weather (50-70°F) and can tolerate light frost. They're typically planted in early spring and fall.</p>
      <ul>
        <li>Leafy greens (lettuce, spinach, kale, arugula)</li>
        <li>Root vegetables (carrots, radishes, turnips, beets)</li>
        <li>Brassicas (broccoli, cauliflower, cabbage, Brussels sprouts)</li>
        <li>Peas</li>
        <li>Onions and leeks</li>
      </ul>
      
      <h4>Warm-Season Crops</h4>
      <p>These plants need warm soil and air temperatures (70-85°F) and will be damaged by frost. They're planted after the danger of frost has passed.</p>
      <ul>
        <li>Tomatoes</li>
        <li>Peppers and eggplants</li>
        <li>Cucumbers, squash, and melons</li>
        <li>Beans</li>
        <li>Corn</li>
        <li>Sweet potatoes</li>
      </ul>
      
      <h3>Spring Planting (Late Winter to Early Spring)</h3>
      
      <h4>6-8 Weeks Before Last Frost</h4>
      <ul>
        <li>Start indoors: tomatoes, peppers, eggplant, broccoli, cabbage, cauliflower</li>
        <li>Direct sow: peas, spinach (under protection), onion sets</li>
      </ul>
      
      <h4>4 Weeks Before Last Frost</h4>
      <ul>
        <li>Direct sow: carrots, beets, radishes, lettuce, Swiss chard, kale, potatoes</li>
        <li>Transplant: broccoli, cabbage, cauliflower (with protection)</li>
      </ul>
      
      <h4>2 Weeks Before Last Frost</h4>
      <ul>
        <li>Direct sow: more carrots, beets, and greens for succession planting</li>
      </ul>
      
      <h4>At Last Frost Date</h4>
      <ul>
        <li>Direct sow: beans, corn (soil must be warm enough)</li>
      </ul>
      
      <h4>2 Weeks After Last Frost</h4>
      <ul>
        <li>Transplant: tomatoes, peppers, eggplants</li>
        <li>Direct sow: cucumbers, squash, melons</li>
      </ul>
      
      <h3>Summer Planting (Late Spring to Mid-Summer)</h3>
      
      <p>Summer is the time to continue succession planting of some crops and to prepare for fall harvests.</p>
      
      <h4>Early to Mid-Summer</h4>
      <ul>
        <li>Continue succession planting of beans, radishes, lettuce, and other greens (in partial shade during hot weather)</li>
        <li>Plant heat-loving herbs like basil</li>
      </ul>
      
      <h4>Mid to Late Summer</h4>
      <ul>
        <li>Start seeds for fall cool-season crops</li>
        <li>Direct sow quick-maturing varieties for fall harvest</li>
      </ul>
      
      <h3>Fall Planting (Late Summer to Early Fall)</h3>
      
      <p>10-12 Weeks Before First Fall Frost:</p>
      <ul>
        <li>Direct sow: lettuce, spinach, kale, carrots, beets, radishes, turnips, Swiss chard</li>
        <li>Transplant: broccoli, cauliflower, cabbage</li>
      </ul>
      
      <p>8 Weeks Before First Fall Frost:</p>
      <ul>
        <li>Direct sow: quick-growing greens, radishes</li>
        <li>Plant garlic for harvest next summer</li>
      </ul>
      
      <h3>Winter Planting (Late Fall to Winter)</h3>
      
      <p>In milder climates (zones 7-10), winter gardening is possible. Even in colder regions, certain preparations can be made during winter.</p>
      
      <h4>During Winter</h4>
      <ul>
        <li>Use cold frames or hoop houses to grow cold-hardy greens</li>
        <li>Start planning and ordering seeds for spring</li>
        <li>In late winter, start seeds indoors for early spring planting</li>
      </ul>
      
      <h3>Tips for Successful Seasonal Planting</h3>
      
      <h4>Know Your Frost Dates</h4>
      <p>Find out the average last spring frost and first fall frost dates for your area. These are crucial reference points for timing your plantings.</p>
      
      <h4>Use Succession Planting</h4>
      <p>Instead of planting everything at once, stagger plantings every 2-3 weeks for continuous harvests.</p>
      
      <h4>Keep a Garden Journal</h4>
      <p>Record what you plant, when, and how it performs. This personalized information becomes invaluable for planning future gardens.</p>
      
      <h4>Monitor Soil Temperature</h4>
      <p>For many seeds, soil temperature is more important than air temperature. A soil thermometer is a worthwhile investment.</p>
      
      <h4>Extend Your Seasons</h4>
      <p>Use row covers, cold frames, and mulch to protect plants from temperature extremes and extend your growing seasons.</p>
      
      <p>Remember that these are general guidelines—your specific climate, microclimate, and annual weather variations will influence the optimal planting times. With experience and careful observation, you'll refine your planting calendar to match your unique growing conditions.</p>
    `,
    image: "https://images.unsplash.com/photo-1591857177593-aec16c2fa8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
    category: "Growing Tips",
    date: "September 3, 2023",
    author: "Robert Johnson"
  },
  {
    id: "5",
    title: "Water Conservation in the Garden",
    excerpt: "Smart strategies to reduce water usage while maintaining a thriving garden.",
    content: `
      <h2>Water Conservation in the Garden: Growing Green with Less Blue</h2>
      
      <p>Water is a precious resource, and as climate patterns change, many regions are experiencing more frequent droughts and water restrictions. The good news is that you can create a beautiful, productive garden while using water wisely. These conservation strategies will help you reduce water usage without sacrificing garden health.</p>
      
      <h3>Soil Improvement: The Foundation of Water Conservation</h3>
      
      <p>Well-structured soil is your best ally in water conservation. Soil rich in organic matter acts like a sponge, absorbing and holding moisture where plant roots can access it.</p>
      
      <h4>Add Organic Matter</h4>
      <p>Incorporate 2-3 inches of compost into your soil annually. This improves water retention in sandy soils and drainage in clay soils, creating the ideal balance for plant roots.</p>
      
      <h4>Avoid Compaction</h4>
      <p>Compacted soil repels water rather than absorbing it. Use designated paths in your garden and avoid working wet soil to prevent compaction.</p>
      
      <h3>Smart Watering Techniques</h3>
      
      <h4>Water Deeply and Infrequently</h4>
      <p>Shallow, frequent watering encourages shallow root systems that are vulnerable to drought. Instead, water deeply (to a depth of 6-8 inches) but less frequently to encourage deep root growth. Most established plants need only about 1 inch of water per week, including rainfall.</p>
      
      <h4>Water at the Right Time</h4>
      <p>Early morning (around 5-9 AM) is the ideal watering time. Temperatures are cool, winds are typically calm, and the water has time to soak in before evaporating. Avoid evening watering, which can promote fungal diseases by leaving foliage wet overnight.</p>
      
      <h4>Target the Roots</h4>
      <p>Use drip irrigation, soaker hoses, or watering cans to deliver water directly to the soil around plants. These methods can reduce water usage by 30-50% compared to overhead sprinklers, which lose much water to evaporation and runoff.</p>
      
      <h4>Check Soil Moisture Before Watering</h4>
      <p>Insert your finger into the soil to a depth of 2 inches. If it feels dry at that depth, it's time to water. For a more precise measurement, use a soil moisture meter.</p>
      
      <h3>Mulching: Nature's Water Saver</h3>
      
      <p>A 2-3 inch layer of mulch is one of the simplest yet most effective water conservation strategies. Mulch:</p>
      <ul>
        <li>Reduces evaporation from the soil surface by up to 70%</li>
        <li>Suppresses thirsty weeds that compete for water</li>
        <li>Moderates soil temperature, reducing plant stress</li>
        <li>Prevents soil crusting, allowing better water penetration</li>
      </ul>
      
      <h4>Organic Mulch Options</h4>
      <ul>
        <li>Straw or hay (ensure it's seed-free)</li>
        <li>Shredded leaves or leaf mold</li>
        <li>Wood chips or bark (best for pathways and around trees and shrubs)</li>
        <li>Grass clippings (thin layer, dried first)</li>
        <li>Compost</li>
      </ul>
      
      <h3>Plant Selection and Garden Design</h3>
      
      <h4>Choose Drought-Tolerant Plants</h4>
      <p>Many plants naturally require less water once established. Native plants are often well-adapted to local rainfall patterns. Research drought-tolerant varieties of your favorite vegetables and flowers.</p>
      
      <h4>Group Plants by Water Needs</h4>
      <p>Practice "hydrozoning" by placing plants with similar water requirements together. This prevents overwatering some plants while trying to meet the needs of thirstier ones.</p>
      
      <h4>Consider Planting Density</h4>
      <p>Plants placed too closely together compete for water. Follow spacing recommendations, but consider that moderate density can actually help by shading the soil and reducing evaporation.</p>
      
      <h3>Rainwater Harvesting</h3>
      
      <h4>Install Rain Barrels</h4>
      <p>A 1,000 square foot roof can collect approximately 600 gallons of water from just 1 inch of rainfall. Rain barrels or cisterns let you capture this free resource for garden use.</p>
      
      <h4>Create Rain Gardens</h4>
      <p>These shallow depressions planted with native species capture runoff from roofs and hard surfaces, allowing it to soak into the ground rather than becoming lost runoff.</p>
      
      <h3>Garden Maintenance for Water Efficiency</h3>
      
      <h4>Weed Regularly</h4>
      <p>Weeds compete with your plants for water. Remove them promptly before they establish deep roots.</p>
      
      <h4>Manage Fertilizer Use</h4>
      <p>Over-fertilizing creates excessive leafy growth that requires more water. Use balanced, slow-release organic fertilizers and compost.</p>
      
      <h4>Prune Thoughtfully</h4>
      <p>Selective pruning can reduce a plant's leaf surface area, decreasing its water needs during extreme drought.</p>
      
      <h3>Advanced Water Conservation Strategies</h3>
      
      <h4>Greywater Systems</h4>
      <p>With proper setup and local approval, water from showers, bathroom sinks, and washing machines can be safely used in the garden.</p>
      
      <h4>Xeriscaping</h4>
      <p>This comprehensive approach to water-efficient landscaping incorporates all the principles above, plus the strategic use of hardscaping and careful attention to site conditions.</p>
      
      <p>By implementing these water conservation strategies, you'll not only reduce your environmental footprint but also create a more resilient garden that can thrive even during dry periods. Remember that plants grown with moderate water stress often develop stronger roots and can actually produce more flavorful fruits and vegetables!</p>
    `,
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
    category: "Sustainability",
    date: "October 18, 2023",
    author: "Elena Patel"
  },
  {
    id: "6",
    title: "Seed Saving Basics",
    excerpt: "Learn how to harvest and store seeds from your garden for future planting seasons.",
    content: `
      <h2>Seed Saving Basics: Preserving Your Garden's Legacy</h2>
      
      <p>Seed saving is an ancient practice that connects us to the generations of gardeners and farmers who came before us. By learning to save seeds from your own garden, you'll not only save money but also help preserve genetic diversity and develop plants that are perfectly adapted to your specific growing conditions. This guide will walk you through the fundamentals of successful seed saving.</p>
      
      <h3>Why Save Seeds?</h3>
      
      <ul>
        <li><strong>Self-reliance:</strong> Create a sustainable cycle in your garden without depending on external sources</li>
        <li><strong>Cost savings:</strong> A single plant can produce hundreds or even thousands of seeds for free</li>
        <li><strong>Adaptation:</strong> Over time, saved seeds adapt to your specific soil, climate, and growing conditions</li>
        <li><strong>Preservation:</strong> Help maintain genetic diversity, especially of heirloom and rare varieties</li>
        <li><strong>Connection:</strong> Participate in the age-old tradition of seed stewardship</li>
      </ul>
      
      <h3>Understanding Plant Reproduction</h3>
      
      <p>Before saving seeds, it's important to understand how plants reproduce. This knowledge will help you prevent cross-pollination that could result in unexpected hybrid plants.</p>
      
      <h4>Self-Pollinating Plants</h4>
      <p>These plants typically pollinate themselves before their flowers even open, making them the easiest choices for beginner seed savers. Cross-pollination is possible but uncommon, so you generally don't need to worry about isolation distances. Examples include:</p>
      <ul>
        <li>Tomatoes</li>
        <li>Peppers</li>
        <li>Beans and peas</li>
        <li>Lettuce</li>
        <li>Eggplant</li>
      </ul>
      
      <h4>Cross-Pollinating Plants</h4>
      <p>These plants depend on wind or insects to transfer pollen between flowers, which means they can easily cross with other varieties of the same species. To maintain pure seed lines, you'll need to either:</p>
      <ul>
        <li>Plant only one variety of that species</li>
        <li>Maintain recommended isolation distances between varieties</li>
        <li>Use physical barriers like row covers or bags</li>
        <li>Practice hand pollination techniques</li>
      </ul>
      
      <p>Common cross-pollinating vegetables include:</p>
      <ul>
        <li>Corn</li>
        <li>Squash, cucumbers, and melons</li>
        <li>Brassicas (broccoli, kale, cabbage, etc.)</li>
        <li>Carrots</li>
        <li>Beets</li>
      </ul>
      
      <h3>Selecting the Best Plants for Seed Saving</h3>
      
      <p>Not all plants in your garden will make good candidates for seed saving. Here's what to look for:</p>
      
      <ul>
        <li><strong>Open-pollinated or heirloom varieties:</strong> These produce seeds that grow "true to type," unlike hybrids (F1), which won't reliably reproduce their parent characteristics</li>
        <li><strong>Healthy specimens:</strong> Choose plants that show disease resistance and vigor</li>
        <li><strong>Desirable traits:</strong> Select for qualities you value—flavor, productivity, earliness, etc.</li>
        <li><strong>Multiple plants:</strong> When possible, save seeds from several plants of the same variety to maintain genetic diversity</li>
      </ul>
      
      <h3>Seed Harvesting Techniques</h3>
      
      <h4>Dry Seed Processing (Beans, Peas, Corn, Lettuce, etc.)</h4>
      <ol>
        <li>Allow seeds to mature fully on the plant until they're dry (typically beyond the eating stage)</li>
        <li>Harvest when pods are brown and brittle or seed heads are dry</li>
        <li>Remove seeds from their pods, husks, or chaff</li>
        <li>Further dry seeds by spreading them in a single layer in a warm, dry place with good air circulation</li>
      </ol>
      
      <h4>Wet Seed Processing (Tomatoes, Cucumbers, Melons, etc.)</h4>
      <ol>
        <li>Choose fully ripe fruits from healthy plants</li>
        <li>Cut open the fruit and scoop out the seeds with their surrounding gel or pulp</li>
        <li>For tomatoes and cucumbers, ferment the seed mixture:</li>
        <ul>
          <li>Place seeds and pulp in a container with some water</li>
          <li>Let sit for 2-5 days until a mold layer forms on top</li>
          <li>This process helps break down germination inhibitors and can kill some seed-borne diseases</li>
        </ul>
        <li>Rinse seeds thoroughly in a fine-mesh strainer under running water</li>
        <li>Spread cleaned seeds on a coffee filter, paper plate, or screen to dry completely</li>
      </ol>
      
      <h3>Proper Seed Storage</h3>
      
      <p>The viability of your saved seeds depends largely on how you store them. The "100 rule" is helpful: the temperature in °F plus the relative humidity percentage should not exceed 100 for best seed storage.</p>
      
      <h4>Essential Storage Tips</h4>
      <ul>
        <li><strong>Ensure complete dryness:</strong> Seeds should snap rather than bend when folded</li>
        <li><strong>Use airtight containers:</strong> Glass jars, seed envelopes in plastic containers, or ziplock freezer bags work well</li>
        <li><strong>Label clearly:</strong> Include the variety name, source, and harvest date</li>
        <li><strong>Store in a cool, dark, dry place:</strong> Refrigerators and freezers work well for long-term storage</li>
        <li><strong>Consider adding desiccants:</strong> Silica gel packets help maintain low humidity</li>
      </ul>
      
      <h3>Seed Viability Timeframes</h3>
      
      <p>When properly stored, seeds can remain viable for years, but their germination rates decline over time. Here are general guidelines for seed longevity under good storage conditions:</p>
      
      <h4>Short-lived seeds (1-2 years):</h4>
      <ul>
        <li>Onions, leeks, parsnips</li>
        <li>Sweet corn</li>
        <li>Peppers</li>
      </ul>
      
      <h4>Medium-lived seeds (3-5 years):</h4>
      <ul>
        <li>Beans and peas</li>
        <li>Carrots</li>
        <li>Tomatoes</li>
        <li>Beets, chard</li>
      </ul>
      
      <h4>Long-lived seeds (6+ years):</h4>
      <ul>
        <li>Cucumbers, melons, squash</li>
        <li>Lettuce</li>
        <li>Brassicas (broccoli, cabbage, etc.)</li>
        <li>Radishes</li>
      </ul>
      
      <h3>Testing Seed Viability</h3>
      
      <p>Before planting older saved seeds, it's wise to test their germination rate:</p>
      <ol>
        <li>Place 10 seeds on a damp paper towel</li>
        <li>Roll up the towel and place it in a plastic bag</li>
        <li>Check after the expected germination period</li>
        <li>Calculate the percentage that sprouted to estimate viability</li>
      </ol>
      
      <h3>Seed Saving by Plant Type</h3>
      
      <h4>Tomatoes</h4>
      <p>Choose fully ripe tomatoes. Squeeze or scoop seeds with gel into a container, add water, and let ferment for 2-4 days, stirring daily. The good seeds sink to the bottom. Rinse thoroughly and dry.</p>
      
      <h4>Beans and Peas</h4>
      <p>Allow pods to dry on the plant until they're brown and rattling with seeds inside. Shell and continue drying indoors if necessary before storage.</p>
      
      <h4>Lettuce</h4>
      <p>Let a few plants bolt and produce flower stalks. As the seed heads develop a fluffy, dandelion-like appearance, they're ready to harvest. Cut entire stalks and place upside down in a paper bag to catch seeds as they fall.</p>
      
      <h4>Squash</h4>
      <p>Allow fruit to fully mature beyond the eating stage. Harvest, cut open, and scoop out seeds. Rinse to remove pulp, then dry thoroughly.</p>
      
      <p>Seed saving is both a science and an art. As you practice these techniques, you'll develop an intuitive understanding of your plants' lifecycles and contribute to a more sustainable and self-reliant garden. Each seed you save carries not just genetic material but the story of your garden and your own growing experience.</p>
    `,
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    category: "Self-Sufficiency",
    date: "November 5, 2023",
    author: "Thomas Yang"
  }
];
