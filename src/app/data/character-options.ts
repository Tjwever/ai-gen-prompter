export interface CharacterOption {
  label: string
  options: string[]
}

export const characterOptions: CharacterOption[] = [
  { label: 'Gender', options: ['Girl', 'Boy', 'No Preference'] },
  { label: 'Top Outfit', options: ['T-shirt', 'Blouse', 'Sweater', 'Jacket'] },
  { label: 'Bottom Outfit', options: ['Jeans', 'Skirt', 'Shorts', 'Pants'] },
  { label: 'Pose', options: ['Standing', 'Sitting', 'Running', 'Jumping'] },
  { label: 'Setting', options: ['City', 'Beach', 'Forest', 'Mountains'] },
]
