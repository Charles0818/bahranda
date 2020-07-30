# CODE REFACTORING
*** Implement swiperjs for carousel replacement
*** Change how form inputs are validated
*** Implement custom Select input // omitted
*** Ensure all button spinners appear during ajax call
*** Add redirection query from protectedRoute to getUserProfile action and generator
*** Align account main container at the center for larger screens and make the header component span the full width
*** Check the protectionRoute logic, especially getUserProfile saga effect

# ADDITIONAL FEATURES
*** Implement page/component transition animations and make them minimal
*** Design Single commodity and single deal pages // done
*** Paystack integration //done
*** Login/signup pages should redirect immediately if user is logged in. (use useLayoutEffect hook)
*** Design ErrorBoundary Page for better UX
*** Implement Sort functionality //done
*** Implement a success modal card for purchase commodity
*** Implement Favicon

# FINALLY
*** Resolve all warnings displaying in the console
*** Remove irrelevant console.logs from codebase

# ENDPOINTS
*** Newsletter subscription
*** Team members
    # RESPONSE BODY [{
        id,
        image,
        name,
        jobRole/position
    }]
*** Latest Commodities (10 maximum) for Commodities carousel in homepage
*** Frequently Asked Questions
    # RESPONSE BODY [{
        id,
        question,
        answer
    }]
*** Contact Form
    # REQUEST BODY [{
        name,
        phone,
        email,
        message
    }]
*** Reviews
*** Privacy Policy page content
*** Terms and Condition page content