(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{411:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tablevision-code-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablevision-code-documentation"}},[t._v("#")]),t._v(" Tablevision Code Documentation")]),t._v(" "),a("p",[t._v("This code documentation will walk you through the main processing logic, which is our "),a("strong",[t._v("Processer")]),t._v(" component. Please see the "),a("RouterLink",{attrs:{to:"/tablevision/#tablevision-device-environments"}},[t._v("component breakdown")]),t._v(" for more information on the Tablevision components.")],1),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("Processer")]),t._v(" component is deployed on the Cloud on an AWS EC2 instance.")]),t._v(" "),a("h2",{attrs:{id:"tablevision-processer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablevision-processer"}},[t._v("#")]),t._v(" Tablevision Processer")]),t._v(" "),a("h3",{attrs:{id:"table-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-object"}},[t._v("#")]),t._v(" Table object")]),t._v(" "),a("p",[a("code",[t._v("Table")]),t._v(" objects have the following parameters:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    table_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n    session_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n    session_start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n    session_end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n    states "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n    coords "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[a("code",[t._v("coords")]),t._v(" refer to the coordinates provided by the "),a("code",[t._v("tablevision_initialiser")]),t._v(". For example:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.03948170731707307")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.09692911255411243")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4337906504065041")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.09692911255411243")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.03948170731707307")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4648944805194804")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4337906504065041")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4648944805194804")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("Four coordinates that refer to the 4 points of the square when initialising Tablevision in the GUI.")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("In "),a("code",[t._v("Table")]),t._v(" objects, there are the following callable functions:")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("start_session(state)")])]),t._v(" Starts a new patron session.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("end_session()")])]),t._v(" Ends the current running patron session.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("reset_session()")])]),t._v("\nResets a session. Called after "),a("code",[t._v("end_session()")]),t._v(".")]),t._v(" "),a("p",[a("strong",[a("code",[t._v('update_db(session_status="")')])]),t._v("\nUpdates our MongoDB database.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("did_change_state(new_state)")])]),t._v(" Tracks whether the "),a("code",[t._v("new_state")]),t._v(" variable is different from the current state. If it is, change state. If not, "),a("code",[t._v("new_state")]),t._v(" is ignored.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("is_valid_session()")])]),t._v(' If the session has ended, track whether it is a "valid" session i.e. greater than 3 mins. If not, invalidate the session.')]),t._v(" "),a("p",[a("strong",[a("code",[t._v("within_coordinates(x, y)")])]),t._v(" Track if an object predicted is within the coordinates of the "),a("code",[t._v("Table")])]),t._v(" "),a("h3",{attrs:{id:"_1-initialising-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-initialising-tables"}},[t._v("#")]),t._v(" 1. Initialising tables")]),t._v(" "),a("p",[t._v("In "),a("code",[t._v("app.py")]),t._v(", we refer to the following API endpoint to initialise tables, "),a("code",[t._v("initialise()")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# initialise once pi has started")]),t._v("\nTABLES "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/initialise'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# to be able to access the TABLES variable and add objects in")]),t._v("\n\n    data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tables_json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tables_json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" table_number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" tables_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            table_object "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tables_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            table_number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("table_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            TABLES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("table_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" table_object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tables successfully set up"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        traceback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("print_exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unexpected error has occured"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-process-image-frame"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-process-image-frame"}},[t._v("#")]),t._v(" 2. Process image frame")]),t._v(" "),a("p",[t._v("We used the "),a("code",[t._v("process()")]),t._v(" function to receive the images from our node (Rasperry Pi) and call the Google AutoML Vision API to receive results of objects predicted within the frame:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/process'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        image64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image64'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# decode the image back to image")]),t._v("\n        image_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b64decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/ubuntu/images/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%Y%m%d-%H%M%S"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.jpg'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# save it to test.jpg")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/ubuntu/processer/static/image.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# save it to for rendering to image")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("########## Call the Google AutoML API ##########")]),t._v("\n\n        image "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" automl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image_bytes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("image_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        predictions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" makeGoogleRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("########## Ended calling the Google AutoML API ##########")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# process the objects and update if got people or crockeries")]),t._v("\n        location_of_objects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" processPrediction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("predictions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# update table state liao")]),t._v("\n        updateTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location_of_objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-process-prediction-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-process-prediction-results"}},[t._v("#")]),t._v(" 3. Process prediction results")]),t._v(" "),a("p",[t._v("To process our prediction results returned by the Google AutoML Vision object detection API, we used the "),a("code",[t._v("processPrediction(predictions)")]),t._v(" function:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("processPrediction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("predictions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    location_of_objects "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"people"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"crockeries"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" prediction "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" predictions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        formatted_object "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resultFormatter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prediction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# boolean and table number")]),t._v("\n        item_within_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" table_number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" itemWithinTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formatted_object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# basically means if there is object within the table, then i shall update")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# either people or crockeries")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" item_within_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" hasPeople"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formatted_object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" table_number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" location_of_objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"people"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# means this prediction predicted succesfully a people within that table")]),t._v("\n                    location_of_objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"people"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("table_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" hasCrockeries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formatted_object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" table_number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" location_of_objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"crockeries"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    location_of_objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"crockeries"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("table_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" location_of_objects\n")])])]),a("h3",{attrs:{id:"_4-update-table-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-update-table-state"}},[t._v("#")]),t._v(" 4. Update table state")]),t._v(" "),a("p",[t._v("Next, using the data of people and/or crockeries in each table, we will update the table status respectively:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateTable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location_of_objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" TABLES\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" table_number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" TABLES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" table_number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" location_of_objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"people"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# state 2: has people")]),t._v("\n            TABLES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("did_change_state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TABLES[table_number].print_states()")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" table_number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" location_of_objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"crockeries"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" table_number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" location_of_objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"people"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# state 1: has crockeries, no people")]),t._v("\n            TABLES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("did_change_state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TABLES[table_number].print_states()")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# state 0: nothing")]),t._v("\n            TABLES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("did_change_state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TABLES[table_number].print_states()")]),t._v("\n")])])]),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("README")]),t._v(" "),a("p",[t._v("Check out our "),a("a",{attrs:{href:"https://github.com/smu-iot20-g7/tablevision",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Repository"),a("OutboundLink")],1),t._v(" to see our source codes.")])]),t._v(" "),a("p",[a("strong",[t._v("Steps 2-4")]),t._v(" will be in a constant loop to update table state changes so long as the Raspberry Pi node continues to send the data.")])])}),[],!1,null,null,null);s.default=e.exports}}]);