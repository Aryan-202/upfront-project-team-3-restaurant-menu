export default function MenuCard({ item }) {
  return (
    <div className="flex items-center gap-3 py-3.5 group cursor-pointer transition-opacity duration-150 hover:opacity-75">
      <img
        src={item.img}
        alt={item.name}
        className="w-14 h-14 rounded-xl object-cover flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
      </div>
      <span className="text-sm font-bold text-[#1B4332] flex-shrink-0">${item.price}</span>
    </div>
  );
}
