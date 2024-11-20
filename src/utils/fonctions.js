/**
 * Calcule la distance entre deux points
 */
function distance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Génère un chemin arrondi avec des points équidistants
 * @param {Object} startPos - Position de départ {x, y}
 * @param {number} numPoints - Nombre de points à générer
 * @param {number} spacing - Distance souhaitée entre les points
 * @param {number} amplitude - Amplitude du mouvement horizontal
 * @param {number} pointsBetweenLevel - Le nombre des points entre chaque level
 * @returns {Array<Object>} Tableau de positions {x, y}
 */
export function generateSmoothPath(startPos, numPoints, spacing, amplitude, pointsBetweenLevel = 6) {
    const points = [];
    const totalHeight = (numPoints - 1) * spacing;

    // Paramètres de contrôle pour la courbe
    const controlPoints = [
        { x: startPos.x, y: startPos.y }, // Point de départ
        { x: startPos.x + amplitude, y: startPos.y - totalHeight * 0.3 }, // Premier point de contrôle
        { x: startPos.x - amplitude, y: startPos.y - totalHeight * 0.7 }, // Deuxième point de contrôle
        { x: startPos.x, y: startPos.y - totalHeight } // Point d'arrivée
    ];

    // Génère beaucoup plus de points temporaires pour avoir une courbe lisse
    const tempPoints = [];
    const steps = 100;

    for (let i = 0; i <= steps; i++) {
        const t = i / steps;

        // Calcul des points de la courbe de Bézier cubique
        const x = Math.pow(1-t, 3) * controlPoints[0].x +
            3 * Math.pow(1-t, 2) * t * controlPoints[1].x +
            3 * (1-t) * Math.pow(t, 2) * controlPoints[2].x +
            Math.pow(t, 3) * controlPoints[3].x;

        const y = Math.pow(1-t, 3) * controlPoints[0].y +
            3 * Math.pow(1-t, 2) * t * controlPoints[1].y +
            3 * (1-t) * Math.pow(t, 2) * controlPoints[2].y +
            Math.pow(t, 3) * controlPoints[3].y;

        tempPoints.push({ x: Math.round(x), y: Math.round(y) });
    }

    // Sélectionne les points équidistants
    points.push(tempPoints[0]);
    let currentPoint = tempPoints[0];
    let currentTempIndex = 0;

    for (let i = 1; i < numPoints; i++) {
        let accumulatedDistance = 0;

        // Cherche le prochain point à la bonne distance
        while (currentTempIndex < tempPoints.length - 1) {
            const nextTempPoint = tempPoints[currentTempIndex + 1];
            const segmentDistance = distance(currentPoint, nextTempPoint);

            if (accumulatedDistance + segmentDistance >= spacing) {
                // Calcule le point exact à la bonne distance
                const remainingDistance = spacing - accumulatedDistance;
                const ratio = remainingDistance / segmentDistance;

                const newX = currentPoint.x + (nextTempPoint.x - currentPoint.x) * ratio;
                const newY = currentPoint.y + (nextTempPoint.y - currentPoint.y) * ratio;

                currentPoint = { x: Math.round(newX), y: Math.round(newY) };
                points.push(currentPoint);
                break;
            }

            accumulatedDistance += segmentDistance;
            currentPoint = nextTempPoint;
            currentTempIndex++;
        }
    }

    return points;
}

export function computeNumberOfPoint(maxLevel, numberOfPointBetweenLevel){
    return maxLevel * numberOfPointBetweenLevel - (numberOfPointBetweenLevel-1);
}

/**
 * Génère les positions des points suivant une trajectoire sinusoïdale
 * @param {Object} startPos - Position de départ {x, y}
 * @param {number} numPoints - Nombre de points à générer
 * @param {number} spacing - Distance verticale entre les points
 * @param {number} amplitude - Amplitude du mouvement horizontal (largeur du zigzag)
 * @param {number} pointsBetweenLevel - Le nombre des points entre chaque level
 * @returns {Object} Objet contenant points et levels; Tableau de positions {x, y}
 */
export function generateSinusoidalPath(startPos, numPoints, spacing, amplitude, pointsBetweenLevel = 10) {
    const points = [];
    const levels = [];
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

        // SI condition rempli, ajouter Level
        if(i%pointsBetweenLevel === 0 ){
            // ajouter le coordonnées des niveaux
            levels.push({
                level: parseInt(i/pointsBetweenLevel) + 1,
                x: Math.round(currentX),
                y: Math.round(currentY)
            })
        }

        // Monter d'une unité de spacing (Y diminue car l'origine est en haut)
        currentY -= spacing;
    }

    return {points, levels};
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
