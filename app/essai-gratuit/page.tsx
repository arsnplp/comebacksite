import { permanentRedirect } from "next/navigation";
import { SIGNUP_URL } from "@/lib/links";

/**
 * Les CTA d'essai pointent désormais directement vers la création de compte de l'app.
 * L'ancienne URL est conservée en redirection permanente pour les
 * favoris et liens externes existants.
 */
export default function EssaiGratuitPage() {
  permanentRedirect(SIGNUP_URL);
}
