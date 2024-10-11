import Icards from "@/components/itemscard";

interface Items {
  name: string;
  shopable: boolean;
  image: string;
  cost: number;
  item_slot_type: string;
  tier: number;
}
// Utility function to return the appropriate background color based on itemtype
function getItemTypeBackground(item_slot_type: string): string {
  switch (item_slot_type) {
    case "weapon":
      return "bg-orange-500";
    case "vitality":
      return "bg-green-500";
    case "spirit":
      return "bg-violet-500";
    default:
      return "bg-gray-500";
  }
}

function groupAndSortItems(itemsArray: Items[]) {
  // Group items by item_slot_type
  const groupedItems: { [key: string]: Items[] } = itemsArray.reduce(
    (acc, item) => {
      if (!acc[item.item_slot_type]) {
        acc[item.item_slot_type] = [];
      }
      acc[item.item_slot_type].push(item);
      return acc;
    },
    {} as { [key: string]: Items[] }
  );

  // Sort each group by tier
  for (const slotType in groupedItems) {
    groupedItems[slotType].sort((a, b) => a.tier - b.tier); // Sort by tier in ascending order
  }

  return groupedItems;
}

export default async function Items() {
  let data = await fetch(
    "https://assets.deadlock-api.com/v1/items?language=english"
  );
  let itemsArray: Items[] = await data.json();

  // Filter out non-shopable items and group/sort by item_slot_type and tier
  const groupedItems = groupAndSortItems(
    itemsArray.filter((items) => items.shopable)
  );

  return (
    <div>
      <main id="cards-container" className="grid grid-cols-3 gap-6">
        {Object.keys(groupedItems).map((slotType) => (
          <div key={slotType} className="mb-8">
            <h2 className="mt-8 capitalize w-full text-center text-xl font-bold mb-4">
              {slotType}
            </h2>
            {/* Grid layout for the items in this slot type */}
            <div className="grid grid-cols-3">
              {groupedItems[slotType].map((items, index: number) => (
                <Icards
                  key={index}
                  name={items.name}
                  image={items.image}
                  backgroundClass={getItemTypeBackground(items.item_slot_type)}
                />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
