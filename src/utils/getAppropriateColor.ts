export function getAppropriateColor(bgColor = "") {
  // remove o #
  const hex = bgColor.replace("#", "");

  // Pega R, G e B separando os pares de caracteres
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calcula luminância
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Se for claro → preto, senão → branco
  return luminance > 186 ? "#000000" : "#FFFFFF";
}
