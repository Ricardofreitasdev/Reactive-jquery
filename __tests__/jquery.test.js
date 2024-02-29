import { $ } from "../jquery.js";
import { test, describe } from "node:test";
import assert from "node:assert";
import { JSDOM } from "jsdom";

describe("jquery", () => {
  test("AddClass", async () => {
    const dom = new JSDOM(
      '<!DOCTYPE html><div id="element1"></div><div id="element2"></div>'
    );
    const { document } = dom.window;

    global.document = document;

    const $elements = $("#element1, #element2");

    $elements.addClass("test-class");

    const element1 = document.getElementById("element1");
    const element2 = document.getElementById("element2");

    assert.ok(
      element1.classList.contains("test-class"),
      "A classe não foi adicionada ao elemento 1"
    );
    assert.ok(
      element2.classList.contains("test-class"),
      "A classe não foi adicionada ao elemento 2"
    );
  });

  test("Append", async () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="element"></div>');

    const { document } = dom.window;

    global.document = document;

    const $element = $("#element");

    $element.append("<span>Conteúdo adicionado</span>");

    const addedContent = document.querySelector("#element").innerHTML;
    assert.strictEqual(
      addedContent,
      "<span>Conteúdo adicionado</span>",
      "O conteúdo não foi adicionado corretamente ao elemento"
    );
  });
});
