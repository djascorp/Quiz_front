
/**
 * Génère les positions des points suivant une trajectoire sinusoïdale
 * @param {Object} startPos - Position de départ {x, y}
 * @param {number} numPoints - Nombre de points à générer
 * @param {number} spacing - Distance verticale entre les points
 * @param {number} amplitude - Amplitude du mouvement horizontal (largeur du zigzag)
 * @returns {Array<Object>} Tableau de positions {x, y}
 */
export function generateSinusoidalPath(startPos, numPoints, spacing, amplitude) {
    const points = [];
    let currentY = startPos.y;

    // Calculer la fréquence pour avoir environ 2 oscillations complètes
    const frequency = (2 * Math.PI) / (numPoints - 1);

    for (let i = 0; i < numPoints; i++) {
        // Calculer la position X en utilisant une fonction sinusoïdale
        // Math.sin produit des valeurs entre -1 et 1, multipliées par l'amplitude
        const offsetX = Math.sin(i * frequency) * amplitude;
        const currentX = startPos.x + offsetX;

        // Ajouter le point courant
        points.push({
            x: Math.round(currentX),
            y: Math.round(currentY)
        });

        // Monter d'une unité de spacing (Y diminue car l'origine est en haut)
        currentY -= spacing;
    }

    return points;
}

// Fonction pour afficher le chemin dans la console (utile pour visualiser)
export function visualizePath(points, width) {
    const output = [];
    const minX = Math.min(...points.map(p => p.x));
    const maxX = Math.max(...points.map(p => p.x));
    const range = maxX - minX;

    points.forEach((point, idx) => {
        let line = ' '.repeat(Math.floor((point.x - minX) * (width / range)));
        line = line + 'o';
        console.log(line + ` (${point.x}, ${point.y})`);
    });
}
