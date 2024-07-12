import { QuestManager } from "../src/utilities/managers/QuestManager";

await QuestManager.initQuests();

await QuestManager.isQuestUsed({
  Type: "AthenaDailyQuestDefinition",
  Name: "Quest_S13_Repeatable_Damage_Pistol",
  Class: "UScriptClass'AthenaDailyQuestDefinition'",
  Properties: {
    DisplayName: "Deal damage with Pistols",
    Description: "Deal damage with Pistols",
    SeasonXP: 14000,
    SeasonBattleStars: 0,
    Objectives: [
      {
        BackendName: "Quest_S13_Repeatable_Damage_Pistol",
        ObjectiveState: "None",
        ItemEvent: "EFortQuestObjectiveItemEvent::Max_None",
        ItemReference: "",
        ItemTemplateIdOverride: "",
        Description: "Deal damage with Pistols",
        HudShortDescription: "Deal damage with Pistols",
        Count: 300,
        Stage: -1,
        bHidden: false,
      },
    ],
  },
});
