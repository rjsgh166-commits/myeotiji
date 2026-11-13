import type { GuideCopy } from "./types";
import type { IntlTool } from "../international";

export const GLOBAL_EN: Record<IntlTool, GuideCopy> = {
  fee: {
    title: "How to Calculate Payment Fees and the Price You Need to Charge",
    description: "Work out net proceeds after percentage and fixed fees, then reverse the formula to find the charge needed for a target payout.",
    answer: "Subtract both the percentage fee and the fixed fee from the charge. To receive a particular amount after fees, divide the target plus the fixed fee by one minus the percentage rate.",
    sections: [
      { heading: "Separate the two parts of the fee", paragraphs: [
        "A percentage fee grows with the amount collected; a fixed transaction fee does not. Write the percentage as a decimal before multiplying. For a hypothetical 3% fee, use 0.03. A 0.30 fixed fee means 30 cents in the currency you selected, not another percentage.",
        "Net proceeds = charge × (1 − rate) − fixed fee. Check what amount the provider applies its rate to: shipping, tax, currency conversion and cross-border charges may have separate treatment. This guide describes the arithmetic, not any provider's current tariff.",
      ] },
      { heading: "A worked example: why adding 3% is not enough", paragraphs: [
        "Suppose you collect $100 and the hypothetical fee is 3% plus $0.30. The percentage part is $3; adding the fixed part gives a $3.30 fee and $96.70 net proceeds.",
        "To receive $100 net, solve charge × 0.97 − 0.30 = 100. The required unrounded charge is 100.30 ÷ 0.97, approximately $103.4021. Adding 3% to $100 gives $103, whose net is only $99.61. The difference arises because the provider charges a fee on the increased charge too.",
      ], table: { headers: ["Charge", "Hypothetical fee", "Net"], rows: [["$100.00", "$3.30", "$96.70"], ["$103.00", "$3.39", "$99.61"], ["$103.40", "$3.402 before rounding", "$99.998 before rounding"]] } },
      { heading: "Use the result as a pricing check", paragraphs: [
        "Enter the collected amount for a forward calculation, or select the target-net mode for a reverse calculation. Keep the selected currency consistent with your fixed fee. Currency selection changes formatting; it does not perform an exchange-rate conversion.",
        "The screen rounds the result for display. If a minimum payout must be met exactly, check the next smallest currency increment and your provider's rounding rules. Refunds, minimum fees, tax on fees and whether surcharges are permitted require separate checks.",
      ] },
    ],
    faqs: [
      { question: "Does a 0% fee always mean I receive the entire charge?", answer: "Only if the fixed fee is also zero and no other deduction applies. A 0% percentage fee plus a $0.30 fixed fee still leaves $99.70 from a $100 charge." },
      { question: "Can I compare different payment providers?", answer: "Yes, enter each provider's published rate and fixed fee using the same charge. Compare the result with any additional charges and the terms applying to your account." },
    ],
  },
  discount: {
    title: "How to Calculate Stacked Discounts: Why 20% Plus 10% Is 28%",
    description: "Calculate successive discounts, compare coupon combinations and distinguish the final-price percentage from the amount saved.",
    answer: "Apply the second discount to the already reduced price. A 20% discount followed by 10% leaves 80% × 90% = 72% of the original price, so the total saving is 28%.",
    sections: [
      { heading: "Multiply the price you keep paying", paragraphs: [
        "For each percentage discount, subtract the decimal rate from one. Multiply the original price by the remaining fractions. With two discounts, final price = original × (1 − first rate) × (1 − second rate). Effective discount = 1 − final price ÷ original price.",
        "Adding the rates would treat both discounts as though they applied to the original price. That is a different offer. A store promising a single 30% reduction is giving a larger percentage reduction than successive 20% and 10% reductions, before other terms are considered.",
      ] },
      { heading: "Compare two offers on a $100 item", paragraphs: [
        "After the first 20% reduction the item costs $80. The second 10% reduction removes $8, leaving $72. The total saving is $28. Reversing the order of two pure percentage discounts gives the same mathematical result, because the remaining-price factors multiply.",
        "That order rule does not automatically extend to a fixed-value coupon. A $10 coupon after 20% off a $100 item gives $70. Taking $10 off first and then applying 20% gives $72. Minimum spends, caps and excluded products can change which offer can actually be used.",
      ], table: { headers: ["Offer", "Final price", "Saving"], rows: [["20%, then 10%", "$72", "28%"], ["One 30% discount", "$70", "30%"], ["20%, then a $10 coupon", "$70", "$30"]] } },
      { heading: "Enter the advertised reduction, not the remaining price", paragraphs: [
        "The calculator's fields take discount percentages. A label saying pay 80% of the original price means a 20% discount. Entering 80 would instead calculate an 80% reduction.",
        "The tool models two successive percentage reductions. It does not add sales tax, delivery, cash-back or fixed coupons. Compare checkout totals when those items differ, and allow for the seller's actual rounding at each step.",
      ] },
    ],
    faqs: [
      { question: "Is 50% off followed by 50% off free?", answer: "No. Half the original price remains after the first reduction, and half of that remains after the second. You pay 25% of the original price, a 75% saving." },
      { question: "Why does the saving on my receipt differ slightly?", answer: "A retailer may round each item or each discount separately, or apply discounts to different eligible amounts. This calculator uses the two stated percentages before displaying a rounded result." },
    ],
  },
  days: {
    title: "Days Between Two Dates: Inclusive Counting and Calendar-Day Examples",
    description: "Understand elapsed days versus inclusive date counts, leap days, weekends and why a calendar-day tool is different from a deadline calculator.",
    answer: "For elapsed calendar days, subtract the starting date from the ending date. If the starting day is day 1, add one for a forward date range. January 1 to January 11 is 10 elapsed days or 11 days inclusive.",
    sections: [
      { heading: "Choose the counting convention first", paragraphs: [
        "A stay from Monday to Tuesday spans one night but touches two calendar dates. Both numbers can be correct because they answer different questions. Decide whether you want elapsed days or the number of dates included in a period before comparing results.",
        "For an ascending range the calculator's include-start option adds one day. The same start and end date therefore gives zero elapsed days or one inclusive day. An end date before the start date gives a negative interval; reverse the dates when you want a normal forward period.",
      ] },
      { heading: "Work through a leap-year example", paragraphs: [
        "In 2028, February 28 to March 1 spans two elapsed days because February 29 falls between them. Inclusive counting gives three calendar dates: February 28, February 29 and March 1. In 2027, February 28 to March 1 spans only one elapsed day.",
        "The tool normalizes the entered calendar dates to UTC for subtraction. This prevents a daylight-saving clock change from turning an ordinary calendar-day interval into a fractional day. It is not a calculator for flight durations or exact hours between time-zone-specific timestamps.",
      ], table: { headers: ["Dates", "Elapsed", "Including start"], rows: [["Jan 1 → Jan 11", "10 days", "11 days"], ["Same date", "0 days", "1 day"], ["Feb 28 → Mar 1, 2028", "2 days", "3 days"]] } },
      { heading: "Calendar days do not mean business days", paragraphs: [
        "Saturday, Sunday and public holidays all count as calendar days. For leave planning, use a calculator that knows the relevant country's holidays and substitute workdays. A date difference alone cannot establish how many paid leave days you need.",
        "Contracts and official deadlines can define the first day, end-of-day cutoffs and holiday extensions differently. Check the governing rule when a missed deadline matters. For everyday countdowns and anniversaries, state your counting convention alongside the result.",
      ] },
    ],
    faqs: [
      { question: "Should I include the first day?", answer: "Include it when that date counts as day 1 of the period. Leave it excluded when measuring the elapsed gap between dates. A rule from a contract or authority takes priority over a general calendar convention." },
      { question: "Does 30 days always equal one month?", answer: "No. Calendar months have different lengths. Use actual start and end dates rather than converting every month to 30 days." },
    ],
  },
  "stock-average": {
    title: "How to Calculate Average Share Cost After Buying More Stock",
    description: "Use a weighted average to calculate a new average purchase price, total shares and invested amount without confusing it with a tax-lot election.",
    answer: "Add the amounts spent on the existing and new shares, then divide by the total number of shares. The simple average of two prices only works when the share quantities are equal.",
    sections: [
      { heading: "Weight each purchase by its quantity", paragraphs: [
        "New average purchase price = (existing quantity × existing average + new quantity × new price) ÷ total quantity. Prices and quantities must use the same share unit and currency. Fractional shares can be used when they reflect your actual holdings.",
        "For example, 100 shares bought at $50 and another 100 bought at $40 cost $9,000 in total. Divide by 200 shares to get $45. If the second purchase is only 50 shares at $40, the total becomes $7,000 across 150 shares, giving approximately $46.67, not $45.",
      ] },
      { heading: "A lower average does not remove a loss", paragraphs: [
        "Immediately after buying the additional 100 shares at $40, a 200-share holding worth $40 per share has a market value of $8,000 against the $9,000 spent. The average price has fallen, but an unrealized $1,000 difference remains and more money is exposed to the investment.",
        "A move from $40 to the $45 average would be a 12.5% price increase before fees. That is arithmetic, not a forecast or a reason to buy. Increasing the position changes the amount at risk as well as the average price.",
      ], table: { headers: ["Holding", "Shares", "Amount spent"], rows: [["Existing: $50/share", "100", "$5,000"], ["New: $40/share", "100", "$4,000"], ["Combined average: $45", "200", "$9,000"]] } },
      { heading: "Keep purchase averages separate from tax records", paragraphs: [
        "The calculator models two blocks of purchases and excludes brokerage fees, exchange rates, dividends, sales and corporate actions. Convert records consistently before comparing purchases made in different currencies.",
        "An arithmetic holding average is not a determination of taxable cost basis. Tax-lot rules and permitted methods vary by jurisdiction and asset. Keep the broker's original transaction records rather than treating this result as a tax-reporting instruction.",
      ] },
    ],
    faqs: [
      { question: "Can I use it when buying at a higher price?", answer: "Yes. The same weighted-average formula applies. Buying above your existing average increases it; the size of the change depends on the new quantity." },
      { question: "Why is my broker's average different?", answer: "Fees, currency conversions, rounding, corporate actions or a broker's accounting method may be included in its figure. This tool uses only the price and quantity inputs shown." },
    ],
  },
  compound: {
    title: "Compound Interest With Monthly Contributions: Formula and Assumptions",
    description: "Understand effective annual returns, month-end contributions and the difference between contributed money and hypothetical investment growth.",
    answer: "Convert the effective annual return to a monthly rate, grow the existing balance, then add the month's contribution. Keep contributed money separate from growth so a larger deposit is not mistaken for a better return.",
    sections: [
      { heading: "Convert the annual assumption consistently", paragraphs: [
        "Myeotiji treats the annual return as an effective yearly rate. The monthly rate is (1 + annual rate)^(1/12) − 1. At 5% annually, that monthly rate is about 0.4074%, not exactly 5% ÷ 12. Using a nominal quoted rate divided by 12 would describe a different compounding convention.",
        "For each month, new balance = previous balance × (1 + monthly rate) + contribution. Contributions are added at month-end, so the first deposit earns returns in subsequent months rather than before it is paid in.",
      ] },
      { heading: "Check a one-year example by separating the deposits", paragraphs: [
        "Start with $1,000, contribute $100 at the end of each month and assume a constant 5% effective annual return for one year. The starting $1,000 grows to $1,050; the twelve monthly deposits grow to approximately $1,227.26. The total is approximately $2,277.26.",
        "You supplied $2,200: $1,000 initially plus twelve $100 deposits. The remaining approximately $77.26 is modeled growth. With a 0% return the balance is exactly $2,200. This zero-return comparison is useful when checking whether the inputs make sense.",
      ], table: { headers: ["One-year scenario", "Money supplied", "Estimated balance"], rows: [["0% annual return", "$2,200", "$2,200.00"], ["5% effective annual return", "$2,200", "$2,277.26"]] } },
      { heading: "Use scenarios rather than one promised outcome", paragraphs: [
        "Compare lower, middle and higher assumptions while holding deposits constant. Real investments do not deliver a smooth monthly return, and the order of gains and losses matters when money is added or withdrawn.",
        "The result does not deduct tax, investment charges or inflation. It is neither a deposit quote nor a forecast of a specific investment. If a bank or provider states a nominal rate, a different contribution timing or a different compounding schedule, align those conventions before comparing its illustration with this tool.",
      ] },
    ],
    faqs: [
      { question: "Are monthly contributions made at the start or end of the month?", answer: "At the end of each modeled month. A beginning-of-month schedule gives each contribution an extra month of growth and can produce a different balance." },
      { question: "Does the result include tax or inflation?", answer: "No. The output is a hypothetical balance before those effects. A nominal balance and its future purchasing power are different quantities." },
    ],
  },
  "unit-converter": {
    title: "Metric and Imperial Conversion: Miles, Gallons, Fahrenheit and GB",
    description: "Convert common measurements while checking US versus imperial volume, temperature offsets and decimal versus binary storage units.",
    answer: "Convert through a common base unit and check the unit definition first. A US gallon differs from an imperial gallon, and a decimal gigabyte differs from a gibibyte. Temperature also needs an offset, not just a multiplier.",
    sections: [
      { heading: "Length, mass, area and volume use conversion factors", paragraphs: [
        "For units of the same dimension, convert the source quantity to a base unit and divide by the destination unit's factor. One mile is 1.609344 kilometers, so 5 miles is 8.04672 kilometers. Do not confuse a length factor with an area factor: square units require a squared conversion.",
        "The volume menu explicitly uses US liquid gallons and US cups. A US liquid gallon is 3.785411784 liters; it is not the larger imperial gallon. A recipe's cup may use another convention, so check the recipe or measuring vessel before applying a number.",
      ] },
      { heading: "Temperature and storage are common traps", paragraphs: [
        "For Celsius to Fahrenheit use °F = °C × 9/5 + 32. For the reverse use °C = (°F − 32) × 5/9. That is why 100°F is approximately 37.78°C rather than a result obtained by multiplying 100 by 5/9 alone.",
        "Decimal storage units use powers of 1,000; binary units use powers of 1,024. Here 1 GB is 1,000,000,000 bytes, while 1 GiB is 1,073,741,824 bytes. These are data quantities, not internet connection speeds or file-transfer times.",
      ], table: { headers: ["Input", "Converted value"], rows: [["1 mile", "1.609344 km"], ["1 US liquid gallon", "3.785411784 L"], ["100°F", "37.777…°C"], ["1 GiB", "1,073,741,824 B"]] } },
      { heading: "Keep full precision until the last step", paragraphs: [
        "Choose a category, enter a value and select source and destination units. The calculator displays up to eight decimal places, so a very small quantity may need a smaller destination unit to remain readable.",
        "Rounding a conversion factor before multiplying can magnify an error. For toleranced manufacturing work, scientific reporting or a prescribed industry standard, verify required precision and the exact definition used in that context.",
      ] },
    ],
    faqs: [
      { question: "Can I convert grams directly to milliliters?", answer: "Not without the material's density. Grams measure mass and milliliters measure volume; a conversion between them is not a universal unit factor." },
      { question: "Does the menu's gallon mean a UK imperial gallon?", answer: "No. The menu is labeled US gal and uses the US liquid gallon. Use the definition required by your source material." },
    ],
  },
  age: {
    title: "How to Calculate Age From a Date of Birth: Birthday and Leap-Day Examples",
    description: "Calculate completed years of age, distinguish age from calendar-year differences and understand the local-date and leap-birthday conventions.",
    answer: "Subtract the birth year from the reference year, then subtract one if the birthday has not happened yet that year. Myeotiji uses today's calendar date in your browser for the reference date.",
    sections: [
      { heading: "A year difference is not always a completed age", paragraphs: [
        "Someone born on December 31, 2000 is 25 on December 30, 2026 and turns 26 on December 31. Simply subtracting 2000 from 2026 a day earlier would overstate completed age by one.",
        "Compare the month first and then the day. If the reference month is earlier than the birth month, subtract one year. If the months match but the reference day is earlier, subtract one too. Otherwise keep the year difference.",
      ] },
      { heading: "Understand the date used by the calculator", paragraphs: [
        "Enter the birth date in the age calculator. It uses the current local calendar date from your browser and also reports elapsed calendar days since birth. The reference dates in this guide's table are fixed illustrations; the live tool does not provide a separate historical-reference-date field.",
        "Users in different time zones can see different ages around midnight on a birthday. Day counts use date-only arithmetic, rather than the exact birth time. A future birth date is not a valid completed-age input.",
      ], table: { headers: ["Birth date", "Reference date in example", "Completed age"], rows: [["2000-12-31", "2026-12-30", "25"], ["2000-12-31", "2026-12-31", "26"], ["2000-12-31", "2027-01-01", "26"]] } },
      { heading: "Leap-day and official eligibility rules need care", paragraphs: [
        "For a February 29 birthday, this tool compares month and day directly. In a non-leap year its completed-year count increases on March 1. That is a stated calculator convention, not a ruling about legal age in every jurisdiction.",
        "An admission, benefit, insurance contract or other official process may use an age at a specified date or a special birthday rule. Check that process's definition. An everyday current-age result cannot replace its eligibility assessment.",
      ] },
    ],
    faqs: [
      { question: "Why can the result differ from the year shown in a calendar?", answer: "Calendar-year subtraction ignores whether the birthday has happened. Completed age counts birthdays actually reached under the stated date convention." },
      { question: "Can I use elapsed days divided by 365 instead?", answer: "Not for an exact completed-year age. Leap years and the position of the birthday make that shortcut unreliable around age boundaries." },
    ],
  },
};
