chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1],  // Remove existing rule with ID 1 if it exists
        addRules: [{
            id: 1,
            priority: 1,
            action: {
                type: "redirect",
                redirect: {
                    transform: {
                        queryTransform: {
                            addOrReplaceParams: [
                                { key: "udm", value: "14" }
                            ]
                        }
                    }
                }
            },
            condition: {
                urlFilter: "https://www.google.com/search*",
                resourceTypes: ["main_frame"]
            }
        }]
    }, () => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            console.log("Rule added successfully");
        }
    });
});