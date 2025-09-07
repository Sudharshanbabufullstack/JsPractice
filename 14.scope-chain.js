{
    // Block1 - Scope1
    let fruit1 = "Apple";

    console.log("Block1 - scope1:", fruit1);   // ✅ Works (declared in same block)

    // ❌ ERROR: fruit2 not yet declared (it's inside Block2)
    console.log("Block2 - scope1:", fruit2);

    // ❌ ERROR: fruit3 not yet declared (it's inside Block3)
    console.log("Block3 - scope1:", fruit3);

    {
        // Block2 - Scope2
        let fruit2 = "Mango";

        //  Can access fruit1 (outer scope / parent block)
         console.log("Block1 - scope2:", fruit1);

        //  Can access fruit2 (own scope)
         console.log("Block2 - scope2:", fruit2);

        //  ERROR: fruit3 not yet declared (it's inside Block3)
         console.log("Block3 - scope2:", fruit3);

        {
            // Block3 - Scope3
            let fruit3 = "Kiwi";

            //  Can access fruit1 (outer block)
             console.log("Block1 - scope3:", fruit1);

            //  Can access fruit2 (outer block)
             console.log("Block2 - scope3:", fruit2);

            //  Can access fruit3 (own block)
             console.log("Block3 - scope3:", fruit3);
        }
    }
}
