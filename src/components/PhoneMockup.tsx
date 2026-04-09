"use client";

/**
 * Phone mockup with placeholder app screenshots.
 * Each screen simulates a different view of the "Where is my Paisa" app.
 */

const screens = [
  // Dashboard
  () => (
    <div className="w-full h-full bg-gradient-to-b from-[#6C63FF] to-[#4840BB] flex flex-col text-white">
      <div className="px-5 pt-10 pb-4">
        <p className="text-xs opacity-70">Good Morning 👋</p>
        <p className="text-lg font-semibold mt-1">My Wallet</p>
      </div>
      <div className="mx-4 bg-white/15 backdrop-blur rounded-2xl p-4 mb-4">
        <p className="text-xs opacity-80">Total Balance</p>
        <p className="text-3xl font-bold mt-1">₹ 42,580</p>
        <div className="flex justify-between mt-3">
          <div>
            <p className="text-xs opacity-70">Income</p>
            <p className="text-sm font-semibold text-green-300">+ ₹ 65,000</p>
          </div>
          <div>
            <p className="text-xs opacity-70">Expense</p>
            <p className="text-sm font-semibold text-red-300">- ₹ 22,420</p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-t-3xl px-4 pt-5">
        <p className="text-sm font-semibold text-gray-800 mb-3">Recent Transactions</p>
        {[
          { icon: "🛒", name: "Groceries", amount: "- ₹ 850", color: "text-red-500" },
          { icon: "⛽", name: "Fuel", amount: "- ₹ 2,100", color: "text-red-500" },
          { icon: "💰", name: "Salary", amount: "+ ₹ 65,000", color: "text-green-500" },
          { icon: "🍕", name: "Food", amount: "- ₹ 450", color: "text-red-500" },
          { icon: "🏠", name: "Rent", amount: "- ₹ 15,000", color: "text-red-500" },
          { icon: "📱", name: "Recharge", amount: "- ₹ 599", color: "text-red-500" },
        ].map((tx, i) => (
          <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
            <div className="flex items-center gap-3">
              <span className="text-xl w-9 h-9 bg-gray-50 rounded-xl flex items-center justify-center">{tx.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-800">{tx.name}</p>
                <p className="text-xs text-gray-400">Today</p>
              </div>
            </div>
            <p className={`text-sm font-semibold ${tx.color}`}>{tx.amount}</p>
          </div>
        ))}
      </div>
    </div>
  ),
  // Analytics
  () => (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] px-5 pt-10 pb-6 text-white">
        <p className="text-lg font-semibold">Analytics</p>
        <p className="text-xs opacity-80 mt-1">April 2026</p>
      </div>
      <div className="px-4 -mt-3">
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-4">
          <p className="text-sm font-semibold text-gray-800 mb-3">Spending Overview</p>
          {/* Bar chart placeholder */}
          <div className="flex items-end gap-2 h-28">
            {[40, 65, 45, 80, 55, 70, 35].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-lg"
                  style={{
                    height: `${h}%`,
                    background: i === 3 ? "linear-gradient(180deg, #6C63FF, #8B85FF)" : "#E8E7F0",
                  }}
                />
                <span className="text-[9px] text-gray-400">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-800 mb-3">Top Categories</p>
        {[
          { name: "Food & Dining", amount: "₹ 8,500", pct: 38, color: "#FF6584" },
          { name: "Transportation", amount: "₹ 5,200", pct: 23, color: "#6C63FF" },
          { name: "Shopping", amount: "₹ 4,100", pct: 18, color: "#00D9A6" },
          { name: "Bills & Utilities", amount: "₹ 3,200", pct: 14, color: "#FFB347" },
          { name: "Entertainment", amount: "₹ 1,420", pct: 7, color: "#47B5FF" },
        ].map((cat, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-700 font-medium">{cat.name}</span>
              <span className="text-gray-500">{cat.amount}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${cat.pct}%`, background: cat.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  // Budget
  () => (
    <div className="w-full h-full bg-[#F8F9FE] flex flex-col">
      <div className="bg-gradient-to-r from-[#FF6584] to-[#FF8FA3] px-5 pt-10 pb-6 text-white">
        <p className="text-lg font-semibold">Budgets</p>
        <p className="text-xs opacity-80 mt-1">Stay on track</p>
      </div>
      <div className="px-4 pt-4 flex-1 overflow-auto">
        <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-800">Monthly Budget</span>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">On Track</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">₹ 22,420 <span className="text-sm font-normal text-gray-400">/ ₹ 30,000</span></p>
          <div className="h-3 bg-gray-100 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] rounded-full" style={{ width: "74%" }} />
          </div>
          <p className="text-xs text-gray-400 mt-1">₹ 7,580 remaining</p>
        </div>
        {[
          { emoji: "🍔", name: "Food", spent: 8500, budget: 10000, color: "#FF6584" },
          { emoji: "🚗", name: "Transport", spent: 5200, budget: 6000, color: "#6C63FF" },
          { emoji: "🛍️", name: "Shopping", spent: 4100, budget: 5000, color: "#00D9A6" },
          { emoji: "🎬", name: "Entertainment", spent: 1420, budget: 3000, color: "#FFB347" },
          { emoji: "💡", name: "Bills", spent: 3200, budget: 4000, color: "#47B5FF" },
        ].map((b, i) => (
          <div key={i} className="bg-white rounded-xl p-3 mb-2 shadow-sm flex items-center gap-3">
            <span className="text-xl w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">{b.emoji}</span>
            <div className="flex-1">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-gray-700">{b.name}</span>
                <span className="text-gray-400">₹{b.spent.toLocaleString()} / ₹{b.budget.toLocaleString()}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${(b.spent / b.budget) * 100}%`, background: b.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
];

interface PhoneMockupProps {
  screenIndex?: number;
  className?: string;
}

export default function PhoneMockup({ screenIndex = 0, className = "" }: PhoneMockupProps) {
  const Screen = screens[((screenIndex % screens.length) + screens.length) % screens.length];
  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-mockup-screen">
        <Screen />
      </div>
    </div>
  );
}
