<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->

<template functional>
    <footer class="" :class="classes">
        <div class="vx-row">
            <div class="vx-col w-full md:w-1/3 lg:w-1/3">
                <p>Established in 2019, BItcasino is one of the premier, leading online Biotcoin casinos. All right reserved.</p>
            </div>
            <div class="vx-col w-full md:w-2/3 lg:w-2/3">
                <div class="vx-row">
                     <div class="vx-col w-full md:w-1/3 lg:w-1/3">
                        <ul>
                            <li><span>Games</span></li>
                            <li><a href="/categories/video-slots" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Slots</a></li>
                            <li><a href="/categories/roulette" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Roulette</a></li>
                            <li><a href="/categories/live-baccarat" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Live Baccarat</a></li>
                            <li><a href="/categories/blackjack" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Blackjack</a></li>
                            <li><a href="/categories/live-dealer" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Live Casino</a></li>
                            <li><a href="https://sportsbet.io/register?ref=bitcasino-footer" target="_blank" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Sportsbook</a></li>
                        </ul>
                    </div>
                     <div class="vx-col w-full md:w-1/3 lg:w-1/3">
                        <ul>
                            <li><span>About</span></li>
                            <li><a href="/blog" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Blog</a></li>
                            <li><a href="/help-center" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Help Centre</a></li>
                            <li><a href="/help-center/help-your-bonuses" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Bonuses</a></li>
                            <li><a href="/help-center/help-your-account/responsible-gaming" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Responsible Gambling</a></li>
                            <li><a href="/help-center/help-terms-and-conditions/bitcasino-self-exclusion-terms-and-conditions" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Self-Exclusion Terms and Conditions</a></li>
                            <li><a href="/vip" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">VIP</a></li>
                        </ul>
                    </div>    
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3">
                        <ul>
                            <li><span>Info</span></li>
                            <li><a href="/help-center/help-terms-and-conditions/bitcasino-terms-and-conditions-of-use-of-services-of-the-company" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Terms &amp; Conditions</a></li>
                            <li><a href="/help-center/help-terms-and-conditions/bitcasino-privacy-policy" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Privacy Policy</a></li>
                            <li><a href="/help-center/help-terms-and-conditions/our-license" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Gaming License</a></li>
                            <li><a href="/help-center/help-terms-and-conditions/bitcasino-bonus-terms-conditions" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Bonus Terms &amp; Conditions</a></li>
                            <li><a href="/help-center/help-terms-and-conditions/bitcasino-affiliate-program-terms-and-conditions" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Affiliate Terms &amp; Conditions</a></li>
                            <li><a href="/affiliate-program" data-gtm-event-element="true" data-gtm-event-category="cms_block_link" data-gtm-event-location="cms_block">Affiliates</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Other Footer -->
        <vs-divider />
        
        <div class="vx-row mb-base">
             <div class="vx-col w-full md:w-1/3 lg:w-1/3">
               <p>Bitcasino.io is an online casino for bitcoin and ethereum players! You can deposit, play and withdraw money with these cryptocurrencies.
                Play the most popular bitcoin slots and table games at Bitcasino.io! More information on Bitcoin can be found here.</p>
            </div>
            <div class="vx-col w-full md:w-1/3 lg:w-1/3">
                <p>Join our bitcoin casino instantly by registering a free account in no more than 15 seconds! For terms and conditions, please see here.</p>
            </div>
            <div class="vx-col w-full md:w-1/3 lg:w-1/3">
                <p>Our list of games features popular video slots such as "Mr. Vegas" as well as traditional games like blackjack and baccarat. We also offer multiple live casino games with several languages and locations, cards are naturally dealt by the most beautiful girls! In total we have more than 1500+ bitcoin casino games… You won’t find same amount of games anywhere else!</p>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    }
}
</script>
