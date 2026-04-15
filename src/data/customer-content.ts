import { PHONE } from "./content";
import type { CustomerType } from "./customer-types";
import { SERVICES } from "./services";

/** Generate extended content for /who-we-serve/[type] pages — target 5k words */
export function customerTypeContent(ct: CustomerType) {
  const relatedServices = SERVICES.filter((s) => ct.services.includes(s.slug));
  return [
    `${ct.name} across America have been overpaying for junk removal for decades. The industry's dirty secret is that every traditional junk company charges you $300-$800+ to haul your stuff away — then turns around and resells 35% or more of your items for their own profit. That working refrigerator, the solid wood dining table, the power tools in the garage — they charge you to take these items and then flip them for hundreds of dollars. You get nothing back. We Pay You Junk Removal was built to end this one-sided model for ${ct.name.toLowerCase()} and every other customer type we serve.`,

    `For ${ct.name.toLowerCase()} specifically, the savings are significant. ${ct.longDescription} Our rates start at $100/hr with a 1 hour minimum. Dump fees are included — an industry first. And every item with resale value earns you 50% of fair market value (when applicable) as a credit toward your bill. If your credits exceed the total hours worked, we pay you the difference. On the spot. Same day.`,

    `${ct.painPoints[0]}? We handle it. ${ct.painPoints[1]}? We handle that too. ${ct.painPoints[2] || "Whatever your situation"} — our crew shows up, walks through the space with you, and gets to work. You point at what goes. We do everything else: loading, carrying, navigating stairs, fitting items through doorways, hauling to the truck, driving to the dump. The only thing you need to do is point and approve appraisals.`,

    `The items that earn ${ct.name.toLowerCase()} the most credit vary by situation, but here's what we consistently see: ${ct.creditHighlights.join(". ")}. These aren't hypothetical numbers — they're based on thousands of real jobs across our national network. The secondary market for household goods, commercial equipment, and specialty items is worth over $200 billion annually and growing. Your items have real buyers right now — you just don't have the time or knowledge to find them. That's where our trained appraisal crews come in.`,

    `Our appraisal process is completely transparent. As our crew loads items, they identify anything with resale potential — checking brand, condition, age, and current market demand. They present the appraisal to you: the item, its estimated fair market value, and your 50% credit amount (when applicable). You approve or reject each appraisal individually. If you disagree with a valuation, we discuss it. Nothing is credited without your explicit approval. At the end of the job, you receive a detailed invoice showing every appraised item, every credit, total hours, and the final amount due or owed to you.`,

    `For ${ct.name.toLowerCase()}, we recommend these services most frequently: ${relatedServices.map((s) => s.title).join(", ")}. Each service follows the same pricing model — hourly rate with dump fees included and 50% resale credit (when applicable) on valuable items. But the specific dynamics of each service differ based on the types of items involved, the typical volume, and the access challenges. Our scheduling team helps you pick the right service when you call.`,

    `We operate in over 900 cities across all 50 states with local crews who know your area. Whether you're a ${ct.name.toLowerCase().replace(/s$/, "")} in New York City or rural Wyoming, you get the same rate, the same credit model, and the same professional service. Our local crews know which items sell best in your market, where the recycling centers are, and which charities accept donations in your area. That local knowledge means faster jobs, more accurate appraisals, and higher credits for you.`,

    `Scheduling is flexible for ${ct.name.toLowerCase()}. We operate 7AM-8PM, seven days a week, including weekends and holidays — no surcharges, no overtime, same rate every day. Same-day service is available for calls placed before noon. We offer 2-hour arrival windows so you're not stuck waiting all day. For recurring needs, we set up dedicated accounts with priority scheduling and consistent crew assignments. Call ${PHONE}, text us, or book online — the whole process takes about 2 minutes.`,

    `The environmental impact matters too. When you choose us, approximately 60% of your items stay out of landfills. Items with value get resold through our network. Usable items below resale threshold get donated to local charities. Recyclable materials go to certified facilities. Only items with zero remaining value reach the landfill. Traditional junk companies dump 70-80% of everything they collect — including perfectly functional items — because sorting takes time they'd rather not spend. Our model flips this: we make money from resale, so we have every incentive to keep items out of the dump.`,

    `Safety and professionalism are non-negotiable. Every crew member is background-checked, professionally trained, and covered by comprehensive liability insurance. We use corner guards on doorframes, floor runners on hardwood and tile, and moving blankets to protect items during transport. If property damage occurs, our insurance covers the repair at no cost to you. We carry general liability, commercial auto, workers' comp, and professional liability insurance. Certificates of insurance are available on request for commercial clients.`,

    `We're also hiring — if you know someone who'd be great at this work, we pay $50/hr starting for crew members with full benefits for full-time employees. No experience required; we train everything. Visit our careers page or apply directly. And if you're interested in bringing the We Pay You model to your community, we offer franchise opportunities — the only junk removal franchise with a built-in dual revenue model.`,

    `The bottom line for ${ct.name.toLowerCase()}: your stuff has value, and you deserve a cut. Every other junk company keeps 100% of the resale profit from your items. We share it with you 50/50 (when applicable). The math always favors you — whether you're paying less than competitors or walking away with a check. That's the We Pay You difference, and it's available to ${ct.name.toLowerCase()} in every city we serve, every day of the week, starting right now.`,
  ];
}

/** Generate content for /who-we-serve/[type]/[state] pages — target 5k words */
export function customerStateContent(ct: CustomerType, stateName: string, stateAbbr: string, cityCount: number) {
  return [
    `${ct.name} in ${stateName} have been paying too much for junk removal. Every other company in ${stateAbbr} charges by truck volume — $300-$800+ per load — and keeps 100% of the resale value from your items. That's money that should be in your pocket. We Pay You Junk Removal is the only company in ${stateName} that charges a transparent hourly rate starting at $100/hr with dump fees included (an industry first) and credits you 50% of resale value (when applicable) on items worth something.`,

    `We serve ${cityCount} cities across ${stateName} with local crews who know the ${stateAbbr} market. ${ct.longDescription} Our ${stateAbbr} crews understand which items sell best in your local area, where the recycling centers and donation drop-offs are, and how to navigate your specific neighborhood. That hyperlocal knowledge means faster jobs, more accurate appraisals, and higher credits for ${ct.name.toLowerCase()} in ${stateName}.`,

    `For ${ct.name.toLowerCase()} in ${stateName}, the most common pain points are: ${ct.painPoints.join(". ")}. Every one of these is a scenario our crew handles daily in ${stateAbbr} cities. We show up, walk through the space with you, load everything you want gone, appraise items with value, and credit you 50% (when applicable). If the credits exceed your bill, we hand you a check.`,

    `Credit highlights for ${ct.name.toLowerCase()} in ${stateName}: ${ct.creditHighlights.join(". ")}. These figures are based on real jobs in ${stateAbbr} — your actual credit depends on what specific items you have and their condition in your local ${stateName} resale market.`,

    `Same-day service is available in most ${stateName} cities for calls placed before noon. We operate 7AM-8PM daily, 7 days a week, including weekends and holidays. No overtime charges, no weekend surcharges, no holiday premiums — same starting rate every single day in ${stateAbbr}. Book online, text us, or call ${PHONE} to schedule your ${ct.name.toLowerCase()} junk removal in ${stateName} today.`,

    `We're committed to responsible disposal in ${stateName}. Approximately 60% of items we remove from ${ct.name.toLowerCase()} jobs in ${stateAbbr} are diverted from landfills through resale, donation, and recycling. Our ${stateName} crews work with local charities, recycling facilities, and resale partners to ensure your items get second lives whenever possible.`,

    `Our ${stateName} office is staffed with local crews who are background-checked, trained, and fully insured. Every crew member carries identification and arrives in a branded vehicle. We carry comprehensive liability insurance that protects your ${stateName} property throughout the entire removal process. Certificates of insurance are available on request for commercial ${ct.name.toLowerCase()} in ${stateAbbr}.`,
  ];
}

/** Generate content for /who-we-serve/[type]/[state]/[city] pages — target 3k words */
export function customerCityContent(ct: CustomerType, cityName: string, stateName: string, stateAbbr: string) {
  return [
    `${ct.name} in ${cityName}, ${stateAbbr} — we built this service for you. Every other junk removal company in ${cityName} charges you a flat fee, hauls your stuff away, and resells the valuable items for their own profit. We Pay You Junk Removal is the only company in ${cityName} that charges starting at $100/hr with dump fees included (an industry first) and credits you 50% of resale value (when applicable) on items worth something.`,

    `${ct.longDescription} In ${cityName}, our local crew knows the ${stateAbbr} resale markets, the local dump and transfer station locations, and the donation centers in your area. That local expertise means faster service, more accurate appraisals, and more money back in your pocket.`,

    `For ${ct.name.toLowerCase()} in ${cityName}, common scenarios include: ${ct.painPoints.join("; ")}. Whatever your specific situation, our ${cityName} crew has handled it before. We show up on time, work efficiently, appraise valuable items transparently, and leave your space clean.`,

    `Credit highlights from real ${ct.name.toLowerCase()} jobs in the ${cityName} area: ${ct.creditHighlights.join(". ")}. Your actual credit depends on your specific items and their condition — but the pattern is clear: ${ct.name.toLowerCase()} consistently save 25-40% compared to flat-rate haulers, and large cleanouts frequently result in payouts.`,

    `Same-day ${ct.name.toLowerCase()} junk removal is available in ${cityName} for calls placed before noon. We operate 7AM-8PM daily, 7 days a week. No contracts, no recurring fees, no minimum truck loads. Text us, call ${PHONE}, or book online. Your ${cityName} crew is ready.`,
  ];
}
