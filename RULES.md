# Knowledge Base Rules

This is an OFFLINE knowledge base for a survival-farming and land-recovery app.
There is no API and no AI at runtime. The screen only reads these JSON files,
matches the survivor's typed words and photo tags to entries, and shows the file
path and entry ID on screen. Every answer can be traced back, for example:
`kb/01_land_conditions.json -> LC-001`.

The user is a survivor (after flood, drought, conflict or disaster) with NO
instruments and NO lab. They only have eyes, hands and household items (vinegar,
baking soda, a jar, a stick, a cloth, a bucket, a spade, water, ash, food scraps).

## HARD RULES (apply to every entry)

1. Never ask for, quote or depend on scientific readings or fixed numbers: no pH
   values, no percentages, no degrees, no kg/ha, no cm/mm, no exact day counts or
   dates, no digits in any text field.
2. Every check must be doable with eyes, hands and household items.
3. Describe amounts in everyday terms: a handful, a bucketful, a pinch, a hand's
   depth, a finger's depth, a pace apart.
4. Describe time in natural terms: first light, after the first heavy rain, when
   the soil crumbles, one moon, a few mornings.
5. Describe acidity and similar properties by simple signs and tests: vinegar
   fizz (fizzes = chalky soil), baking soda fizz (fizzes = sour soil), indicator
   plants (moss, sorrel = sour soil), jar settling test, squeeze test (ribbon,
   crumble, ball that holds), water-soak test (drinks it at once vs sits like a
   puddle), smell and taste cues (earthy, sour, salty, rotten egg).
6. Plain language, short sentences, readable by someone stressed and tired.
7. If unsure about a fact, write "ask a local elder or farmer" instead of
   inventing it.

## FILE SHAPES

### kb/01_land_conditions.json

A JSON object with an `entries` array. IDs run `LC-001`, `LC-002`, and so on.
Each entry has:

- `id`
- `name`
- `keywords[]` (words a survivor might type)
- `photo_tags[]` (chip names such as cracked, muddy, white_crust, pale_sand,
  dark_crumbly, burnt_black, stony, mossy, standing_water, no_water, slope)
- `what_you_see`
- `what_it_usually_means`
- `kb_trace_label` (format: `kb/01_land_conditions.json -> LC-001`)

### kb/02_gap_rules.json

A JSON object with an `entries` array. IDs run `GP-001`, `GP-002`, and so on.
Each entry has:

- `id`
- `linked_land_id` (must exist in file 1)
- `missing_item` (for example water, safe water, organic matter, drainage, shade,
  seed, tool, knowledge, cover, tools to loosen soil)
- `why_it_matters`
- `how_to_spot_it` (eyes and hands only)
- `severity` (only `urgent`, `soon` or `can wait`)
- `kb_trace_label` (format: `kb/02_gap_rules.json -> GP-001`)

Every `LC` id must have at least one gap.

## SELF-CHECK

Run this after writing or editing the files.

1. Both files must be valid JSON.
2. Search both files for any digit inside text values (the digits in IDs like
   `LC-001` are allowed). Rewrite anything found in everyday words.
3. Search for banned words: pH, percent, %, cm, mm, kg, degree, thermometer,
   meter, ruler, scale, kit. Rewrite any found.
4. Confirm every `linked_land_id` in file 2 exists in file 1.
5. Report a short summary only: entry counts and any fixes made.
