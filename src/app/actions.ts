"use server";

import { 
  getProductRecommendations as getProductRecommendationsFlow,
  type ProductRecommendationsInput,
  type ProductRecommendationsOutput,
} from '@/ai/flows/product-recommendations';

// This is a placeholder list of valid product IDs that the AI can recommend.
// In a real application, this would come from a database.
const MOCK_VALID_PRODUCT_IDS = [
  "claw-hammer", "screwdriver-set", "power-drill", "plywood-sheet", 
  "concrete-mix", "safety-goggles", "tape-measure", "adjustable-wrench",
  "circular-saw", "latex-paint", "work-gloves", "level-tool"
];

export async function getProductRecommendations(
  input: ProductRecommendationsInput
): Promise<ProductRecommendationsOutput> {
  // In a real-world scenario, you might pre-process the input or add logging here.
  const result = await getProductRecommendationsFlow(input);
  
  // Filter the AI's recommendations to ensure they are valid, existing products.
  const validatedProducts = result.recommendedProducts.filter(id => MOCK_VALID_PRODUCT_IDS.includes(id));
  
  // If the AI returns fewer valid products than requested, fill with some popular defaults.
  const defaults = MOCK_VALID_PRODUCT_IDS.filter(id => !validatedProducts.includes(id) && !input.browsingHistory.includes(id));
  
  while (validatedProducts.length < input.numberOfRecommendations && defaults.length > 0) {
    validatedProducts.push(defaults.shift()!);
  }

  return {
    recommendedProducts: validatedProducts.slice(0, input.numberOfRecommendations),
  };
}
