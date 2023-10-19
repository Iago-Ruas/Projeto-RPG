const express = require("express");
const pg = require("pg");
const router = express();

const table = require("../controllers/table");
const armor = require("../controllers/armor");
const simpleWeapons = require("../controllers/simpleWeapons");

router.post("/table-create", table.createTable);
router.put("/table-insert", table.insertIntoTable);

router.get("/armor", armor.getArmor);
router.get("/armor-with-disadvantage", armor.getArmorWithDisadvantage);
router.get("/armor-without-disadvantage", armor.getArmorWithoutDisadvantage);
router.get("/armor-ligth", armor.getLightArmor);
router.get("/armor-medium", armor.getMediumArmor);
router.get("/armor-heavy", armor.getHeavyArmor);
router.get("/armor-shield", armor.getShield);

router.get("/weapons", simpleWeapons.getWeapons);
router.get("/weapons-melee", simpleWeapons.getMeleeWeapons);
router.get("/weapons-ranged", simpleWeapons.getRangedWeapons);

module.exports = router;
