package com.choongang;

import java.util.ArrayList;

public class C_getLastElement {
    public String getLastElement(ArrayList<String> arrayList) {
        // TODO:

       if (!arrayList.isEmpty()) {
           String lastElement = arrayList.get(arrayList.size() - 1);
           return lastElement;
       } else {
           return null;
       }
    }
}
