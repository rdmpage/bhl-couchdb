{
   "_id": "_design/search",
   "_rev": "4-a1ea9e473f905b392a46012c91d14080",
   "views": {
   },
   "language": "javascript",
   "indexes": {
       "pages": {
           "analyzer": "standard",
           "index": "function(doc) {\n    if (doc.PageID) {\n        index(\"text\", doc.OcrText, { \"store\":\"yes\"});\n        index(\"ItemID\", String(doc.ItemID), { \"store\":\"yes\"});\n    }\n}"
       }
   }
}