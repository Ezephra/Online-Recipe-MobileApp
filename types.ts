import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

export type TabStackParamList = {
    Home: undefined;
    Search: undefined;
    Upload: undefined;
};

export type DrawerStackParamList = {
    Overview: NavigatorScreenParams<TabStackParamList>;
    About: undefined;
    MyCollection: undefined;
};

export type RootStackParamList = {
    Menu: NavigatorScreenParams<DrawerStackParamList>;
    Details: { id: number};
    SearchResult: undefined;
    Camera: undefined;
    Upload: undefined;
};

export type MainNavigationProp = CompositeScreenProps<
    BottomTabScreenProps<TabStackParamList>,
    CompositeScreenProps<
        DrawerScreenProps<DrawerStackParamList>,
        StackScreenProps<RootStackParamList>
    >
>;


export interface Recipes {
    recipes: Recipe[];
}

export interface Recipe {
    vegetarian:               boolean;
    vegan:                    boolean;
    glutenFree:               boolean;
    dairyFree:                boolean;
    veryHealthy:              boolean;
    cheap:                    boolean;
    veryPopular:              boolean;
    sustainable:              boolean;
    weightWatcherSmartPoints: number;
    gaps:                     string;
    lowFodmap:                boolean;
    aggregateLikes:           number;
    spoonacularScore:         number;
    healthScore:              number;
    creditsText:              string;
    license:                  string;
    sourceName:               string;
    pricePerServing:          number;
    extendedIngredients:      ExtendedIngredient[];
    id?:                      number;
    title:                    string;
    readyInMinutes:           number;
    servings:                 number;
    sourceUrl:                string;
    image:                    string;
    imageType:                string;
    summary:                  string;
    cuisines:                 any[];
    dishTypes:                string[];
    diets:                    string[];
    occasions:                any[];
    instructions:             string;
    analyzedInstructions:     AnalyzedInstruction[];
    originalId:               null;
    spoonacularSourceUrl:     string;
}

export interface AnalyzedInstruction {
    name:  string;
    steps: Step[];
}

export interface Step {
    number:      number;
    step:        string;
    ingredients: Ingredient[];
    equipment:   any[];
}

export interface Ingredient {
    id:            number;
    name:          string;
    localizedName: string;
    image:         string;
}

export interface ExtendedIngredient {
    id:              number;
    aisle:           string;
    image:           string;
    consistency:     Consistency;
    name:            string;
    nameClean:       string;
    original:        string;
    originalString:  string;
    originalName:    string;
    amount:          number;
    unit:            string;
    meta:            string[];
    metaInformation: string[];
    measures:        Measures;
}

export enum Consistency {
    Liquid = "liquid",
    Solid = "solid",
}

export interface Measures {
    us:     Metric;
    metric: Metric;
}

export interface Metric {
    amount:    number;
    unitShort: string;
    unitLong:  string;
}

export interface Results {
    results:      Result[];
    offset:       number;
    number:       number;
    totalResults: number;
}

export interface Result {
    id:        number;
    title:     string;
    image:     string;
    imageType: ImageType;
}

export enum ImageType {
    Jpg = "jpg",
}

export interface RecipeInformation {
    id:                       number;
    title:                    string;
    image:                    string;
    imageType:                string;
    servings:                 number;
    readyInMinutes:           number;
    license:                  string;
    sourceName:               string;
    sourceUrl:                string;
    spoonacularSourceUrl:     string;
    aggregateLikes:           number;
    healthScore:              number;
    spoonacularScore:         number;
    pricePerServing:          number;
    analyzedInstructions:     any[];
    cheap:                    boolean;
    creditsText:              string;
    cuisines:                 any[];
    dairyFree:                boolean;
    diets:                    any[];
    gaps:                     string;
    glutenFree:               boolean;
    instructions:             string;
    ketogenic:                boolean;
    lowFodmap:                boolean;
    occasions:                any[];
    sustainable:              boolean;
    vegan:                    boolean;
    vegetarian:               boolean;
    veryHealthy:              boolean;
    veryPopular:              boolean;
    whole30:                  boolean;
    weightWatcherSmartPoints: number;
    dishTypes:                string[];
    extendedIngredients:      ExtendedIngredient[];
    summary:                  string;
    winePairing:              WinePairing;
}

export interface WinePairing {
    pairedWines:    string[];
    pairingText:    string;
    productMatches: ProductMatch[];
}

export interface ProductMatch {
    id:            number;
    title:         string;
    description:   string;
    price:         string;
    imageUrl:      string;
    averageRating: number;
    ratingCount:   number;
    score:         number;
    link:          string;
}
