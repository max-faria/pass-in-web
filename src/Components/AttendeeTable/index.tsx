import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";

export const AttendeeTable = () => {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th
              style={{ width: 48 }}
              className="py-3 px-4 text-sm font-semibold text-left"
            >
              <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 accent-orange-400" name="" id="" />
            </th>
            <th className="py-3 px-4 text-sm font-semibold text-left">
              Código
            </th>
            <th className="py-3 px-4 text-sm font-semibold text-left">
              Participante
            </th>
            <th className="py-3 px-4 text-sm font-semibold text-left">
              Data da Inscrição
            </th>
            <th className="py-3 px-4 text-sm font-semibold text-left">
              Data do Check-in
            </th>
            <th
              style={{ width: 64 }}
              className="py-3 px-4 text-sm font-semibold text-left"
            ></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <tr key={i} className="border border-white/10 hover:bg-white/5">
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 accent-orange-400" name="" id="" />
                </td>
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  12345
                </td>
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">
                      Thiago Almeida
                    </span>
                    <span>thiagoalmeida@gmail.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  7 days ago
                </td>
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  7 days ago
                </td>
                <td className="py-3 px-4 text-sm text-left text-zinc-300">
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal className="size-4" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan={3}
              className="py-3 px-4 text-sm text-left text-zinc-300"
            >
              <span>Mostrando 10 de 228 itens</span>
            </td>
            <td
              colSpan={3}
              className="py-3 px-4 text-sm text-right text-zinc-300"
            >
              <div className="inline-flex items-center gap-8">
                <span>Página 1 de 23</span>
                <div className="flex gap-1.5">
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsLeft className="size-4" />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronRight className="size-4" />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsRight className="size-4" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
