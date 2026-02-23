import { useScript } from "@uidotdev/usehooks";

type UseScriptArgs = Parameters<typeof useScript>;

export default function useNoop(..._args: UseScriptArgs) {
  return "idle";
}
